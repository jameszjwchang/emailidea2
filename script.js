const state = {
  filter: "all",
  draft: null,
  exampleTaskIndex: 0,
  emails: [
    {
      id: 1,
      from: "payroll@company.com",
      subject: "Updated salary adjustment details",
      preview: "Please review and acknowledge your compensation update by Friday.",
      importance: "high",
      category: "Finance",
      spam: false,
    },
    {
      id: 2,
      from: "promo@superdeals.io",
      subject: "Last chance! 90% OFF tools",
      preview: "Act now. Limited-time promo for random subscriptions.",
      importance: "low",
      category: "Promotions",
      spam: true,
    },
    {
      id: 3,
      from: "client@northstar.co",
      subject: "Need proposal revision before 3 PM",
      preview: "Could you send the updated timeline and pricing breakdown today?",
      importance: "high",
      category: "Client",
      spam: false,
    },
    {
      id: 4,
      from: "calendar@events.app",
      subject: "Meeting reminder: Product sync",
      preview: "Tomorrow at 10:30 AM with design and engineering.",
      importance: "medium",
      category: "Calendar",
      spam: false,
    },
    {
      id: 5,
      from: "support@saasvendor.com",
      subject: "Ticket #18290 resolved",
      preview: "We fixed the account login issue and closed the request.",
      importance: "medium",
      category: "Support",
      spam: false,
    },
    {
      id: 6,
      from: "ceo@company.com",
      subject: "Q1 strategic priorities",
      preview: "Please align your project roadmap with the attached company priorities.",
      importance: "high",
      category: "Leadership",
      spam: false,
    },
    {
      id: 7,
      from: "billing@cloudhost.com",
      subject: "Invoice #44718 due in 2 days",
      preview: "Your hosting invoice is ready. Payment method ending in 1452 will be charged.",
      importance: "high",
      category: "Finance",
      spam: false,
    },
    {
      id: 8,
      from: "newsletter@designweekly.co",
      subject: "Top 10 UI trends this month",
      preview: "A quick curated roundup of design patterns and accessibility updates.",
      importance: "low",
      category: "Newsletter",
      spam: false,
    },
    {
      id: 9,
      from: "security@workspace.io",
      subject: "New login from unknown device",
      preview: "We detected a new sign-in from Chicago, IL at 4:12 AM.",
      importance: "high",
      category: "Security",
      spam: false,
    },
    {
      id: 10,
      from: "events@saasconnect.com",
      subject: "Webinar invite: AI workflow automation",
      preview: "Reserve your seat for next Thursday's live demo session.",
      importance: "medium",
      category: "Events",
      spam: false,
    },
    {
      id: 11,
      from: "updates@projectboard.app",
      subject: "9 tasks moved to 'Needs Review'",
      preview: "Your team completed new tasks. Review and approve by EOD.",
      importance: "medium",
      category: "Projects",
      spam: false,
    },
    {
      id: 12,
      from: "randomgiftcards@promo-bazaar.biz",
      subject: "Claim your $500 gift card now",
      preview: "No purchase required. Click link to verify account and claim instantly.",
      importance: "low",
      category: "Promotions",
      spam: true,
    },
    {
      id: 13,
      from: "recruiting@talentflow.com",
      subject: "Candidate interview feedback needed",
      preview: "Please submit scorecards for the final-round candidate by tomorrow.",
      importance: "medium",
      category: "HR",
      spam: false,
    },
    {
      id: 14,
      from: "legal@company.com",
      subject: "Contract redlines ready for review",
      preview: "Attached are the latest revisions from the vendor legal team.",
      importance: "high",
      category: "Legal",
      spam: false,
    },
    {
      id: 15,
      from: "travel@company.com",
      subject: "Flight itinerary confirmation",
      preview: "Your trip to New York has been booked for March 12-14.",
      importance: "medium",
      category: "Travel",
      spam: false,
    },
    {
      id: 16,
      from: "no-reply@socialblaster.net",
      subject: "Boost followers overnight",
      preview: "Automated growth package activated unless cancelled in 1 hour.",
      importance: "low",
      category: "Promotions",
      spam: true,
    },
    {
      id: 17,
      from: "ops@northstar.co",
      subject: "Weekly operations report",
      preview: "Attached KPI sheet includes open risks and mitigation owners.",
      importance: "medium",
      category: "Client",
      spam: false,
    },
    {
      id: 18,
      from: "it-helpdesk@company.com",
      subject: "Password reset policy update",
      preview: "Starting Monday, all passwords must meet new complexity requirements.",
      importance: "medium",
      category: "IT",
      spam: false,
    },
    {
      id: 19,
      from: "procurement@company.com",
      subject: "Vendor renewal decision required",
      preview: "Please approve or decline the annual renewal before next Tuesday.",
      importance: "high",
      category: "Procurement",
      spam: false,
    },
    {
      id: 20,
      from: "community@opensource.org",
      subject: "Issue triage volunteer request",
      preview: "Can you review newly opened issues tagged as 'good first issue'?",
      importance: "low",
      category: "Community",
      spam: false,
    },
    {
      id: 21,
      from: "alerts@analyticspro.io",
      subject: "Traffic anomaly detected (+38%)",
      preview: "Unusual traffic pattern on pricing page over the last 6 hours.",
      importance: "high",
      category: "Analytics",
      spam: false,
    },
    {
      id: 22,
      from: "customer.success@atlascrm.com",
      subject: "Renewal at risk: Blue Pine Logistics",
      preview: "Account health dropped to red. Suggested intervention plan attached.",
      importance: "high",
      category: "Customer Success",
      spam: false,
    },
    {
      id: 23,
      from: "noreply@couponplanet.xyz",
      subject: "You were selected for premium rewards",
      preview: "Urgent confirmation required to avoid losing your access benefits.",
      importance: "low",
      category: "Promotions",
      spam: true,
    },
    {
      id: 24,
      from: "marketing@company.com",
      subject: "Launch campaign brief",
      preview: "Please review messaging options A/B and approve by Wednesday noon.",
      importance: "medium",
      category: "Marketing",
      spam: false,
    },
    {
      id: 25,
      from: "compliance@company.com",
      subject: "Action required: policy attestation",
      preview: "Complete your annual compliance attestation in the employee portal.",
      importance: "high",
      category: "Compliance",
      spam: false,
    },
  ],
};

const demoTasks = [
  "Send onboarding email to 100 people using subject 'Welcome to Acme' and auto-sort finance-related messages as high priority.",
  "Draft a reply to client@northstar.co confirming we can deliver the revised proposal by 3 PM.",
  "Summarize my inbox and tell me the top 3 urgent emails I should answer first.",
  "Find all suspected spam and move them to a spam folder.",
  "Create a follow-up email for unpaid invoice reminders to 12 customers.",
  "Schedule a meeting reply: accept tomorrow's product sync and request an updated agenda.",
  "Draft a polite decline email for the webinar invite and ask for recording.",
  "Prepare a weekly digest grouped by Finance, Client, and Security categories.",
];

const emailList = document.getElementById("emailList");
const filterButtons = document.querySelectorAll("[data-filter]");
const chatLog = document.getElementById("chatLog");
const chatForm = document.getElementById("chatForm");
const taskInput = document.getElementById("taskInput");
const exampleTaskBtn = document.getElementById("exampleTaskBtn");
const upgradeBtn = document.getElementById("upgradeBtn");

const draftTo = document.getElementById("draftTo");
const draftSubject = document.getElementById("draftSubject");
const draftType = document.getElementById("draftType");
const draftBody = document.getElementById("draftBody");
const simulateSendBtn = document.getElementById("simulateSendBtn");
const clearDraftBtn = document.getElementById("clearDraftBtn");

function createBadge(text, className = "") {
  const badge = document.createElement("span");
  badge.className = `badge ${className}`.trim();
  badge.textContent = text;
  return badge;
}

function renderEmails() {
  emailList.innerHTML = "";

  const visible = state.emails.filter((email) => {
    if (state.filter === "all") return true;
    if (state.filter === "high") return email.importance === "high";
    if (state.filter === "spam") return email.spam;
    return true;
  });

  visible.forEach((email) => {
    const item = document.createElement("li");
    item.className = "email-item";

    item.innerHTML = `
      <div class="row">
        <strong>${email.subject}</strong>
        <span>${email.from}</span>
      </div>
      <p>${email.preview}</p>
    `;

    const badges = document.createElement("div");
    badges.className = "badges";

    badges.appendChild(createBadge(email.category));

    if (email.importance === "high") {
      badges.appendChild(createBadge("High Priority", "high"));
    }

    if (email.spam) {
      badges.appendChild(createBadge("Spam", "spam"));
    }

    item.appendChild(badges);
    emailList.appendChild(item);
  });
}

function appendMessage(text, sender = "bot") {
  const message = document.createElement("div");
  message.className = `message ${sender}`;
  message.textContent = text;
  chatLog.appendChild(message);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function setDraft(draft) {
  state.draft = draft;
  draftTo.textContent = draft.to;
  draftSubject.textContent = draft.subject;
  draftType.textContent = draft.type;
  draftBody.textContent = draft.body;
  simulateSendBtn.disabled = false;
  clearDraftBtn.disabled = false;
}

function clearDraft() {
  state.draft = null;
  draftTo.textContent = "—";
  draftSubject.textContent = "—";
  draftType.textContent = "—";
  draftBody.textContent = "No draft yet. Run a chat task to generate one.";
  simulateSendBtn.disabled = true;
  clearDraftBtn.disabled = true;
}

function runFakeTask(task) {
  const lower = task.toLowerCase();
  const spamCount = state.emails.filter((email) => email.spam).length;
  const highCount = state.emails.filter((email) => email.importance === "high").length;

  if (
    lower.includes("summary") ||
    lower.includes("summarize") ||
    lower.includes("digest") ||
    lower.includes("top 3")
  ) {
    const topUrgent = state.emails
      .filter((email) => email.importance === "high" && !email.spam)
      .slice(0, 3)
      .map((email, index) => `${index + 1}. ${email.subject} (${email.from})`)
      .join("\n");

    appendMessage(
      `Inbox summary (simulated):\n- Total emails: ${state.emails.length}\n- High priority: ${highCount}\n- Spam flagged: ${spamCount}\n\nTop urgent threads:\n${topUrgent}`
    );
    return;
  }

  if (lower.includes("send") && (lower.includes("100") || lower.includes("bulk"))) {
    const sizeMatch = task.match(/\b(\d{2,4})\b/);
    const recipientCount = sizeMatch ? sizeMatch[1] : "100";

    setDraft({
      to: `${recipientCount} recipients (imported list)`,
      subject: "Announcement from Your Team",
      type: "Bulk send",
      body:
        "Hi everyone,\n\nThis is a simulated bulk message generated by Robot Secretary.\n\n- Personalized placeholders inserted\n- Delivery window optimized\n- Follow-up reminder queued\n\nBest,\nYour Team",
    });

    appendMessage(
      `Task complete (simulated): Prepared bulk email job for ${recipientCount} recipients, grouped by relevance and queued for send confirmation.`
    );
    return;
  }

  if (lower.includes("spam") || lower.includes("junk") || lower.includes("unsubscribe")) {
    appendMessage(
      `Done: ${spamCount} email(s) are flagged as spam. Simulated actions: moved to spam folder, muted 3 promo senders, and prepared unsubscribe confirmations.`
    );
    return;
  }

  if (lower.includes("follow-up") || (lower.includes("invoice") && lower.includes("reminder"))) {
    setDraft({
      to: "12 customers with unpaid invoices",
      subject: "Friendly reminder: invoice payment due",
      type: "Follow-up campaign draft",
      body:
        "Hi there,\n\nJust a quick reminder that your invoice is currently due. If payment has already been sent, please ignore this message. If you need anything from our side, we are happy to help.\n\nThank you,\nBilling Team",
    });

    appendMessage(
      "Follow-up sequence prepared (simulated): generated reminder draft with personalized due dates and a 3-day resend rule."
    );
    return;
  }

  if (lower.includes("meeting") || lower.includes("schedule") || lower.includes("calendar")) {
    setDraft({
      to: "calendar@events.app",
      subject: "Re: Meeting reminder: Product sync",
      type: "Calendar response draft",
      body:
        "Hi team,\n\nConfirmed for tomorrow's product sync at 10:30 AM. Could you please share the updated agenda before the meeting?\n\nThanks,\nAlex",
    });

    appendMessage(
      "Scheduling task complete (simulated): meeting accepted, prep reminder set, and agenda request drafted."
    );
    return;
  }

  if (lower.includes("decline") || lower.includes("recording") || lower.includes("webinar")) {
    setDraft({
      to: "events@saasconnect.com",
      subject: "Re: Webinar invite: AI workflow automation",
      type: "Polite decline draft",
      body:
        "Hi,\n\nThanks for the invitation. I won't be able to attend the live session, but I'd appreciate a recording if one is available after the webinar.\n\nBest,\nAlex",
    });

    appendMessage(
      "Draft ready: polite decline generated and recording request included."
    );
    return;
  }

  if (lower.includes("reply") || lower.includes("draft") || lower.includes("respond")) {
    setDraft({
      to: "client@northstar.co",
      subject: "Re: Need proposal revision before 3 PM",
      type: "Auto-reply draft",
      body:
        "Hi Northstar team,\n\nThanks for the note — we can deliver the revised proposal before 3 PM today. I will include the updated timeline and pricing breakdown in the next email.\n\nBest regards,\nAlex",
    });

    appendMessage(
      "Draft created: professional response with timeline confirmation. Click Simulate Send to demonstrate the action."
    );
    return;
  }

  appendMessage(
    "Task understood. Simulated steps: categorized inbox by priority, grouped by category, highlighted urgent threads, and prepared assistant recommendations."
  );
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    button.classList.add("active");
    state.filter = button.dataset.filter;
    renderEmails();
  });
});

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const task = taskInput.value.trim();

  if (!task) {
    appendMessage("Please type a task first.");
    return;
  }

  appendMessage(task, "user");
  runFakeTask(task);
  taskInput.value = "";
});

exampleTaskBtn.addEventListener("click", () => {
  taskInput.value = demoTasks[state.exampleTaskIndex];
  state.exampleTaskIndex = (state.exampleTaskIndex + 1) % demoTasks.length;
  taskInput.focus();
});

simulateSendBtn.addEventListener("click", () => {
  if (!state.draft) return;

  appendMessage(
    `Simulated send complete for: ${state.draft.subject} → ${state.draft.to}`
  );
});

clearDraftBtn.addEventListener("click", () => {
  clearDraft();
  appendMessage("Draft cleared.");
});

upgradeBtn.addEventListener("click", () => {
  appendMessage(
    "Subscription panel (demo): Pro plan active. This assistant works as an extension on top of your existing email account."
  );
});

appendMessage(
  "Welcome! I can triage inbox messages, summarize priorities, draft replies, schedule meeting responses, generate follow-ups, and simulate bulk sends. Type a task to see how the MVP works."
);
renderEmails();
