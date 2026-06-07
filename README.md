# SupplyWatch — CPG Risk Intelligence Dashboard

A real-time supply chain risk monitoring tool built for Channel Partners Group (CPG) operations teams. SupplyWatch pulls live enforcement and recall data directly from the FDA database, classifies risk by severity, and generates AI-powered risk briefs to support faster, more informed operational decisions.

---

## Overview

Supply chain disruptions — drug recalls, sterility failures, labeling errors — move fast. SupplyWatch gives CPG operations teams a single view to monitor active FDA enforcement actions, assess channel partner exposure, and determine what action to take and when.

---

## Screenshots

### Recall Search & Event List
![Recall Search](screenshots/search.png)

### Event Detail — Recall Information
![Event Detail](screenshots/event-info.png)

### CPG Exposure Analysis
![CPG Exposure](screenshots/cpg-exposure.png)

### AI Risk Brief
![AI Analysis](screenshots/ai-analysis.png)

---

## What It Does

**Live FDA Recall Search**
Search any drug name, manufacturer, or product category and instantly pull active recall and enforcement records directly from the FDA database — updated in real time.

**Risk Classification**
Every recall event is automatically classified by FDA severity class — Class I (critical), Class II (moderate), or Class III (minor) — with counts and filters so teams can triage by urgency.

**CPG Exposure Simulator**
For each recall event, SupplyWatch estimates exposure across distribution segments — national network, hospital and acute care partners, retail pharmacy, and specialty channels — based on product category and distribution pattern.

**AI Risk Brief**
Each recall event includes an AI-generated risk brief covering urgency level, root cause, channel partner impact, recommended action, and response timeline — giving operations teams a plain-English starting point for triage without manual research.

---

## Data Source

All recall and enforcement data is sourced live from the **openFDA API** — a public database maintained by the U.S. Food and Drug Administration. No data is hardcoded or simulated.

---

## Built With

- openFDA Enforcement API
- Groq AI (Llama 3.1)
- Vercel
