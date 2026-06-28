import type { APIRoute, GetStaticPaths } from "astro";

import { calendarOptions } from "../../../data/events";

const padDate = (value: string) => value.replaceAll("-", "");
const padTime = (value: string) => value.replace(":", "") + "00";
const escapeIcs = (value: string) =>
  value
    .replaceAll("\\", "\\\\")
    .replaceAll("\n", "\\n")
    .replaceAll(",", "\\,")
    .replaceAll(";", "\\;");
const foldIcsLine = (value: string) => {
  const lines: string[] = [];
  let current = "";
  for (const character of value) {
    const next = `${current}${character}`;
    if (new TextEncoder().encode(next).length > 75) {
      lines.push(current);
      current = ` ${character}`;
    } else {
      current = next;
    }
  }
  lines.push(current);
  return lines.join("\r\n");
};

export const getStaticPaths = (() =>
  calendarOptions
    .filter((option) => option.calendar)
    .map((option) => ({
      params: { id: option.id },
      props: { option },
    }))) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) => {
  const option = props.option as (typeof calendarOptions)[number];
  if (!option.calendar) return new Response("Not found", { status: 404 });

  const { date, startTime, endTime, location } = option.calendar;
  const stamp = `${padDate(option.verifiedAt)}T120000Z`;
  const body = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Maui Field Guide//Calendar Shortlist//EN",
    "CALSCALE:GREGORIAN",
    "X-WR-TIMEZONE:Pacific/Honolulu",
    "BEGIN:VTIMEZONE",
    "TZID:Pacific/Honolulu",
    "BEGIN:STANDARD",
    "DTSTART:19700101T000000",
    "TZOFFSETFROM:-1000",
    "TZOFFSETTO:-1000",
    "TZNAME:HST",
    "END:STANDARD",
    "END:VTIMEZONE",
    "BEGIN:VEVENT",
    `UID:${option.id}@maui-field-guide`,
    `DTSTAMP:${stamp}`,
    `DTSTART;TZID=Pacific/Honolulu:${padDate(date)}T${padTime(startTime)}`,
    `DTEND;TZID=Pacific/Honolulu:${padDate(date)}T${padTime(endTime)}`,
    `SUMMARY:${escapeIcs(option.title)}`,
    `LOCATION:${escapeIcs(location)}`,
    `DESCRIPTION:${escapeIcs(`${option.summary}\n\n${option.reservation}\n\nTime basis: ${option.calendar.basis}\n\nVerify: ${option.sourceUrl}`)}`,
    `URL:${option.sourceUrl}`,
    "END:VEVENT",
    "END:VCALENDAR",
    "",
  ]
    .map(foldIcsLine)
    .join("\r\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `attachment; filename="${option.id}.ics"`,
    },
  });
};
