# PRD: CSV export for the Reporting tab

## Problem
Finance pulls month-end numbers by screenshotting the dashboard — three analysts, ~2 hours each per month. They've asked for CSV export twice since January.

## Goal
A "Download CSV" button on the Reporting tab. Target: 50% of month-end pulls happen via export within two cycles.

## Non-Goals
- No Excel/.xlsx formatting in v1 — CSV only. Adds a library dependency we don't want yet.
- No scheduled/emailed exports. Separate project; depends on the notifications service.

## Requirements
- Button exports the currently filtered table (respecting date + team filters) as UTF-8 CSV.
- Export of 50k rows completes in under 5 seconds at p95.

## Success metric
Month-end manual screenshotting drops from ~6 analyst-hours to under 1, measured by a March vs. May time survey.
