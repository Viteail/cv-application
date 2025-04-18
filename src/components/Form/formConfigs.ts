const PERSONAL_FORM = [
  { text: "Full Name", name: "fname", value: "", type: "text" },
  { text: "Email", name: "email", value: "", type: "email" },
  { text: "Phone", name: "phone", value: "", type: "tel" },
  { text: "Adress", name: "adress", value: "", type: "text" },
];

const EDUCATIONAL_FORM = [
  { text: "School", name: "school", value: "", type: "text" },
  { text: "Degree", name: "degree", value: "", type: "text" },
  { text: "Start Date", name: "sdate", value: "", type: "text" },
  { text: "End Date", name: "edate", value: "", type: "text" },
  { text: "Location", name: "location", value: "", type: "text" },
];

const PRACTICAL_FORM = [
  { text: "Company Name", name: "company", value: "", type: "text" },
  { text: "Position Title", name: "position", value: "", type: "text" },
  { text: "Start Date", name: "sdate", value: "", type: "text" },
  { text: "End Date", name: "edate", value: "", type: "text" },
  { text: "Location", name: "location", value: "", type: "text" },
  { text: "Description", name: "desc", value: "", type: "text" },
];

export const FORM_MAP = {
  personal: PERSONAL_FORM,
  educational: EDUCATIONAL_FORM,
  practical: PRACTICAL_FORM,
}
