import XLSX from "xlsx"

// whole excel
const workbook=XLSX.readFile("./testdata/SamplePlaywright.xlsx")

// read complete sheet
const worksheet=workbook.Sheets["Sample"]

// load the cell
const cell=worksheet["A3"]

// get the value
console.log(cell);
