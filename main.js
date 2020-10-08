const button = document.getElementById('taxButton');
button.addEventListener('click', function () {
    const grossIncome = document.getElementById('inputTax').value;
    const deductions = 12400; //$, the standard deduction for 2021 
    let AGI = grossIncome - deductions;//$, adjusted gross income (AGI)
    const result = taxСalculator(grossIncome, AGI);
    document.getElementById('outputTax').value = result;
});

//2020 Tax Brackets (Due April 2021)
const maxBracketTax10 = 9875.99;//$

const minBracketTax12 = 9876;//$
const maxBracketTax12 = 40125.99;//$

const minBracketTax22 = 40126;//$
const maxBracketTax22 = 85525.99;//$

const minBracketTax24 = 85526;//$
const maxBracketTax24 = 163300.99;//$

const minBracketTax32 = 163301;//$
const maxBracketTax32 = 207350.99;//$

const minBracketTax35 = 207351;//$
const maxBracketTax35 = 518400.99;//$

const minBracketTax37 = 518401;//$

let taxRate10 = maxBracketTax10 * 0.1;//$, for tax 10%
let taxRate12 = (maxBracketTax12 - minBracketTax12) * 0.12; //$, for tax 12%
let taxRate22 = (maxBracketTax22 - minBracketTax22) * 0.22; //$, for tax 22%
let taxRate24 = (maxBracketTax24 - minBracketTax24) * 0.24; //$, for tax 24%
let taxRate32 = (maxBracketTax32 - minBracketTax32) * 0.32; //$, for tax 32%
let taxRate35 = (maxBracketTax35 - minBracketTax35) * 0.35; //$, for tax 35%
let taxAmount = 0;

function rounded(number) {
    return +number.toFixed(2);
}
function taxСalculator(grossIncome, AGI) {
    switch (true) {
        case AGI <= 0 && grossIncome > 0:
            return ('You do not need to pay tax because your income does not exceed the standard deduction of $ 12,400 for 2021');
        case AGI > 0 && AGI <= maxBracketTax10:
            taxRate10 = AGI * 0.1;
            taxAmount = taxRate10;
            return `Tax amount: ${rounded(taxAmount)}$`;
        case AGI >= minBracketTax12 && AGI <= maxBracketTax12:
            taxRate12 = (AGI - minBracketTax12) * 0.12; //$, for tax 12%
            taxAmount = taxRate10 + taxRate12;
            return `Tax amount: ${rounded(taxAmount)}$`;
        case AGI >= minBracketTax22 && AGI <= maxBracketTax22:
            taxRate22 = (AGI - minBracketTax22) * 0.22; //$, for tax 22%
            taxAmount = taxRate10 + taxRate12 + taxRate22;
            return `Tax amount: ${rounded(taxAmount)}$`;
        case AGI >= minBracketTax24 && AGI <= maxBracketTax24:
            taxRate24 = (AGI - minBracketTax24) * 0.24; //$, for tax 24%
            taxAmount = taxRate10 + taxRate12 + taxRate22 + taxRate24;
            return `Tax amount: ${rounded(taxAmount)}$`;
        case AGI >= minBracketTax32 && AGI <= maxBracketTax32:
            taxRate32 = (AGI - minBracketTax32) * 0.32; //$, for tax 32%
            taxAmount = taxRate10 + taxRate12 + taxRate22 + taxRate24 + taxRate32;
            return `Tax amount: ${rounded(taxAmount)}$`;
        case AGI >= minBracketTax35 && AGI <= maxBracketTax35:
            taxRate35 = (AGI - minBracketTax35) * 0.35; //$, for tax 35%
            taxAmount = taxRate10 + taxRate12 + taxRate22 + taxRate24 + taxRate32 + taxRate35;
            return `Tax amount: ${rounded(taxAmount)}$`;
        case AGI >= minBracketTax37:
            let taxRate37 = (AGI - minBracketTax37) * 0.37; //$, for tax 37%
            taxAmount = taxRate10 + taxRate12 + taxRate22 + taxRate24 + taxRate32 + taxRate35 + taxRate37;
            return `Tax amount: ${rounded(taxAmount)}$`;
        default:
            return ('Error! To calculate tax, you must enter an amount greater than 0 and do not use the $ sign. For example, 12700 or 12700.59');
    }
}
