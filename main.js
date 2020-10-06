let grossIncome = +prompt('Enter your gross income, $: ');
let deductions = +prompt('Enter deductions, $: '); //include student loan interest, moving expenses, paid alimony, tuition and fees as well as contributions to a traditional IRA among others.
//adjusted gross income (AGI)
let AGI = grossIncome - deductions;
//2020 Tax Brackets (Due April 2021)
const maxBracketTax10 = 9875;//$

const minBracketTax12 = 9876;//$
const maxBracketTax12 = 40125;//$

const minBracketTax22 = 40126;//$
const maxBracketTax22 = 85525;//$

const minBracketTax24 = 85526;//$
const maxBracketTax24 = 163300;//$

const minBracketTax32 = 163301;//$
const maxBracketTax32 = 207350;//$

const minBracketTax35 = 207351;//$
const maxBracketTax35 = 518400;//$

const minBracketTax37 = 518401;//$

let taxRate10 = maxBracketTax10 * 0.1;//$, for tax 10%
let taxRate12 = (maxBracketTax12 - minBracketTax12) * 0.12; //$, for tax 12%
let taxRate22 = (maxBracketTax22 - minBracketTax22) * 0.22; //$, for tax 22%
let taxRate24 = (maxBracketTax24 - minBracketTax24) * 0.24; //$, for tax 24%
let taxRate32 = (maxBracketTax32 - minBracketTax32) * 0.32; //$, for tax 32%
let taxRate35 = (maxBracketTax35 - minBracketTax35) * 0.35; //$, for tax 35%
let taxAmount = 0;

switch (true) {
    case AGI > 0 && AGI <= maxBracketTax10:
        taxRate10 = AGI * 0.1;
        console.log('Tax amount: ', taxRate10, '$');
        break;
    case AGI >= minBracketTax12 && AGI <= maxBracketTax12:
        taxRate12 = (AGI - minBracketTax12) * 0.12; //$, for tax 12%
        taxAmount = Math.round(taxRate10 + taxRate12);
        console.log('Tax amount: ', taxAmount, '$');
        break;
    case AGI >= minBracketTax22 && AGI <= maxBracketTax22:
        taxRate22 = (AGI - minBracketTax22) * 0.22; //$, for tax 22%
        taxAmount = Math.round(taxRate10 + taxRate12 + taxRate22);
        console.log('Tax amount: ', taxAmount, '$');
        break;

    case AGI >= minBracketTax24 && AGI <= maxBracketTax24:
        taxRate24 = (AGI - minBracketTax24) * 0.24; //$, for tax 24%
        taxAmount = Math.round(taxRate10 + taxRate12 + taxRate22 + taxRate24);
        console.log('Tax amount: ', taxAmount, '$');
        break;

    case AGI >= minBracketTax32 && AGI <= maxBracketTax32:
        taxRate32 = (AGI - minBracketTax32) * 0.32; //$, for tax 32%
        taxAmount = Math.round(taxRate10 + taxRate12 + taxRate22 + taxRate24 + taxRate32);
        console.log('Tax amount: ', taxAmount, '$');
        break;

    case AGI >= minBracketTax35 && AGI <= maxBracketTax35:
        taxRate35 = (AGI - minBracketTax35) * 0.35; //$, for tax 35%
        taxAmount = Math.round(taxRate10 + taxRate12 + taxRate22 + taxRate24 + taxRate32 + taxRate35);
        console.log('Tax amount: ', taxAmount, '$');
        break;

    case AGI >= minBracketTax37:
        let taxRate37 = (AGI - minBracketTax37) * 0.37; //$, for tax 37%
        taxAmount = Math.round(taxRate10 + taxRate12 + taxRate22 + taxRate24 + taxRate32 + taxRate35 + taxRate37);
        console.log('Tax amount: ', taxAmount, '$');
        break;
    default:
        console.log('Error! To calculate tax, the amount must be greater than zero');
}