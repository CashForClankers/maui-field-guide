import type { APIRoute, GetStaticPaths } from "astro";

import { calendarOptions } from "../../../../data/events";
import type { TripDate } from "../../../../data/types";
import { escapeIcs, renderIcs } from "../../../../lib/ics";

const padDate = (value: string) => value.replaceAll("-", "");
const nextDate = (value: TripDate) => {
  const date = new Date(`${value}T12:00:00Z`);
  date.setUTCDate(date.getUTCDate() + 1);
  return date.toISOString().slice(0, 10);
};

export const getStaticPaths = (() =>
  calendarOptions.flatMap((option) =>
    option.dates.map((date) => ({
      params: { id: option.id, date },
      props: { option, date },
    })),
  )) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) => {
  const option = props.option as (typeof calendarOptions)[number];
  const date = props.date as TripDate;
  const body = renderIcs([
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Maui Field Guide//Flexible Calendar Reminder//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${option.id}-${date}@maui-field-guide`,
    `DTSTAMP:${padDate(option.verifiedAt)}T120000Z`,
    `DTSTART;VALUE=DATE:${padDate(date)}`,
    `DTEND;VALUE=DATE:${padDate(nextDate(date))}`,
    `SUMMARY:${escapeIcs(`Consider: ${option.title}`)}`,
    `LOCATION:${escapeIcs(option.mapUrl)}`,
    `DESCRIPTION:${escapeIcs(`${option.summary}\n\nRecommended window: ${option.timeLabel}\nTime needed: ${option.duration}\nCost: ${option.cost}\nReservation: ${option.reservation}\n\nThis is an all-day planning reminder. Choose the final time after checking the source.\n\nVerify: ${option.sourceUrl}`)}`,
    `URL:${option.sourceUrl}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ]);

  return new Response(body, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `attachment; filename="${option.id}-${date}.ics"`,
    },
  });
};
