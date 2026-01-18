import XLSX from "xlsx"

// whole excel
const workbook=XLSX.readFile("./testdata/SamplePlaywright.xlsx")

// read complete sheet
const worksheet=workbook.Sheets["Sample"]

// if we dont use headers then we get array of Objects if we include headers then it return array of array
const data=XLSX.utils.sheet_to_json(worksheet,{header:1})

//const data=XLSX.utils.sheet_to_json(worksheet)

console.log(data);

console.log(data[0][2]);



