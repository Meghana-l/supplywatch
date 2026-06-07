# SupplyWatch — CPG Risk Intelligence Dashboard

A real-time supply chain risk monitoring tool built for Channel Partners Group (CPG) operations teams. SupplyWatch pulls live enforcement and recall data directly from the FDA database, classifies risk by severity, and generates AI-powered risk briefs to support faster, more informed operational decisions.

Live - https://supplywatch-woad.vercel.app/


---

When a drug recall hits, CPG operations teams need to move fast — identify the product, assess which channel partners are exposed, and decide what action to take. SupplyWatch was built to replace that manual triage process with a single, live intelligence dashboard.

---

## Features

### 🔍 Live FDA Recall Search
<img width="1069" height="523" alt="image" src="https://github.com/user-attachments/assets/9aafe838-a536-4d76-acfc-bc3273bf1d60" />

Type any drug name, manufacturer, or product category and instantly surface active recall and enforcement records pulled directly from the FDA database. Every search returns real, up-to-date data — not cached, not simulated.

<img width="1656" height="525" alt="image" src="https://github.com/user-attachments/assets/4b5c4b3b-4cc9-42ff-be30-fbd4c5d3c654" />


### 🚨 Severity Classification & Triage
Every recall event is automatically tagged by FDA class — Class I (critical risk to health), Class II (moderate), or Class III (minor). The sidebar keeps a running count by class so teams can filter and prioritize without reading through every record.

### 📋 Full Event Detail
Click any recall to see the complete enforcement record — recalling firm, report date, lot numbers, distribution pattern, product quantity, recall status, and the FDA's stated reason for recall. Everything a CPG analyst needs in one place.

<img width="1660" height="833" alt="image" src="https://github.com/user-attachments/assets/bdb4fe95-1ce8-4f61-884c-96cf0834fc71" />


### 📊 CPG Channel Exposure Simulator
For each recall event, SupplyWatch estimates exposure across four distribution segments — national network, hospital and acute care partners, retail pharmacy, and specialty channels. Exposure is calculated based on product category, distribution pattern, and recall classification, giving operations teams a first-pass signal on which partner segments to prioritize.

### 🤖 AI Risk Brief
Every recall includes an AI-generated risk brief that cuts through the regulatory language and tells the CPG team what actually matters — urgency level, likely root cause, channel partner impact, a concrete recommended action, and a suggested response timeline. Built for operations teams, not compliance teams.

<img width="381" height="791" alt="image" src="https://github.com/user-attachments/assets/28ab522f-51d4-49ff-82a8-f4df8113277a" />


---

## Data Source

All recall and enforcement data is sourced live from the **openFDA API**, a public database maintained by the U.S. Food and Drug Administration.

---
## Tech Stack

- **openFDA Enforcement API** — live recall and enforcement data, no authentication required
- **Groq API** (Llama 3.1 8B Instant) — AI risk brief generation
- **Vercel** — serverless deployment and API proxy
- **HTML / CSS / JavaScript** — single-file front end
