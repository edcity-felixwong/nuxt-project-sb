export default {
  /** paper.status.submission */
  status: {
    attempted: "Attempted",
    finished: "Finished",
    inProgress: "In progress",
    notAttempted: "Not attempted",
    not_attempted: "Not attempted",
    pending: "Pending",
    ready: "Ready",
    upcoming: "Upcoming",
    not_submitted: "Not submitted",
    submitted: "Submitted",
    all: "All statuses",
    fieldName: "Status",
    unlimited: "Unlimited",
  },
  year: {
    fieldName: "Year",
    all: "All years",
  },
  /** Marking directly linked to paper.feedbackStatus,
   * But some alias is kept, which is early idea.
   */
  marking: {
    manualMarking: "Manual marking",
    automatedMarking: "Automated marking",
    marked: "Marked",

    pending: "Manual marking",
    none: "Automated marking",
    required: "Marked",

    submission: "Submission",
  },
  action: {
    accept: "Accept",
    attempt: "Attempt",
    edit: "Edit",
    preview: "Preview",
    reject: "Reject",
    report: "Report",
    retry: "Retry",
    share: "Share",
    review: "Review",
    publish: "Publish",
    recall: "Recall",
    shareReport: "Share report",
    sharePaper: "Share paper",
  },
  subject: {
    chinese: "中文科",
    english: "English Language",
    cmath: "數學科",
    emath: "Mathematics",
  },
  packageId: {
    13: "@:paper.subject.chinese",
    14: "@:paper.subject.english",
    15: "@:paper.subject.cmath",
    16: "@:paper.subject.emath",
  },
  /** Follow the API */
  tab: {
    empty: "My Papers",
    shared: "Shared Papers",
    bca2022: "Assessment Material 2022",
    bca2021: "Assessment Material 2021",
    nsp2020: "STAR Network School Programme",
  },
};
