export interface ExpenseItem {
  srNo: string | number;
  item: string;
  calculation?: string;
  totalPkr: number;
}

export interface ProjectFinancials {
  reportName: string;
  period: string;
  currency: string;
  totalBudgetOrExpense: number;
  items: ExpenseItem[];
}

/**
 * Verified financial statements exactly preserved from field reports.
 */
export const financialRecords: ProjectFinancials[] = [
  {
    reportName: "Saheli First Responder Project Financial Breakdown",
    period: "November – January",
    currency: "PKR",
    totalBudgetOrExpense: 54070,
    items: [
      { srNo: "01", item: "Stationery for trainings and Saheli circles", totalPkr: 10480 },
      { srNo: "02", item: "Transport for volunteer (2-days capacity building)", totalPkr: 4000 },
      { srNo: "03", item: "Refreshment", totalPkr: 3000 },
      { srNo: "04", item: "Acrylic paints 6 piece (350 each)", calculation: "6 * 350", totalPkr: 2100 },
      { srNo: "05", item: "Brush set + 5 canvas", calculation: "380 + 600", totalPkr: 980 },
      { srNo: "06", item: "MHM and Go Bag workshop Refreshment", totalPkr: 8000 },
      { srNo: "07", item: "Transport", totalPkr: 2000 },
      { srNo: "08", item: "Milk pack + Heating K2 + Easy load + steel pins", totalPkr: 2280 },
      { srNo: "09", item: "Team meetings refreshments", totalPkr: 5000 },
      { srNo: "10", item: "Visit to Saheli circle Saith and Mandik", totalPkr: 1500 },
      { srNo: "11", item: "Visit to Saheli circle Heldi", totalPkr: 1000 },
      { srNo: "12", item: "1 Can K2 (Heating oil)", totalPkr: 4000 },
      { srNo: "13", item: "Stationery for Saheli circle Heldi", totalPkr: 3500 },
      { srNo: "14", item: "2 bottles of Color yellow and green (1 kg + 500g)", totalPkr: 2000 },
      { srNo: "15", item: "Siachen Public School 4 days refreshment + 1 day transport", totalPkr: 3500 },
      { srNo: "16", item: "2 litre K2", totalPkr: 370 },
    ],
  },
  {
    reportName: "KOH-E-ZAN Educational Reforms Campaign Expenses",
    period: "22 July – 10 August",
    currency: "PKR",
    totalBudgetOrExpense: 37119,
    items: [
      { srNo: "1", item: "Travel (7 days LT capacity Building training)", calculation: "1500 * 7", totalPkr: 10500 },
      { srNo: "2", item: "Travel (3 Days life skills workshop for volunteers)", calculation: "1500 * 3", totalPkr: 4500 },
      { srNo: "3", item: "Stationery (Note pad + pen LT members)", calculation: "1700 + 300", totalPkr: 2000 },
      { srNo: "4", item: "Stationery For training + Saheli circles", totalPkr: 3500 },
      { srNo: "5", item: "Basket (for Saheli circles)", calculation: "83 * 6", totalPkr: 500 },
      { srNo: "6", item: "Stationery (File + color paper for Saheli circles)", calculation: "300 + 240", totalPkr: 540 },
      { srNo: "7", item: "Refreshments (For LT and volunteer during trainings)", calculation: "770 + 1450", totalPkr: 3830 },
      { srNo: "8", item: "Foamic sheet + flag + balloons for 14 August", calculation: "550 + 400", totalPkr: 950 },
      { srNo: "9", item: "Sticky notes", totalPkr: 150 },
      { srNo: "10", item: "Travel (Car rent Khaplu to Goma)", calculation: "1000 * 2", totalPkr: 2000 },
      { srNo: "11", item: "Refreshments PTM", totalPkr: 2650 },
      { srNo: "12", item: "Travel (Goma to Saith and Mandik)", calculation: "2000 + 3000", totalPkr: 5000 },
      { srNo: "13", item: "Monthly call and internet package", totalPkr: 999 },
    ],
  },
];
