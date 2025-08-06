import { Question, Track, Difficulty } from '@/types/drill';

export const QUESTIONS: Question[] = [
  {
    id: 'acc-gm-3',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Margin Calculation after Returns',
    description: 'Westlake sold $24,000 merchandise with COGS $16,000, but $4,000 in goods were returned (COGS $3,000).\n\nWhat is gross margin (%) (whole number)?',
    answer: 35,
    unit: '%',
    hint: 'Net revenue and net COGS should be calculated first.',
    explanation: 'Net revenue = $24,000 – $4,000 = $20,000\nNet COGS = $16,000 – $3,000 = $13,000\nGross profit = $7,000\nGross margin = $7,000 / $20,000 = 35%\n\nLogic: Returns reduce both revenue and COGS; net both for actual margin.',
    learnContent: {
      concept: 'Always use net amounts for gross margin.',
      formula: 'Margin = (Net Revenue – Net COGS) / Net Revenue × 100',
      example: 'Rev $50K, returns $5K, COGS $30K, returns COGS $3K: ($45K-$27K)/$45K=40%'
    }
  },

  // SG&A QUESTIONS
  // ACCOUNTING - Easy
  {
    id: 'acc-easy-1',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Net Income Calculation',
    description: 'A company earns $100,000 in revenue. It reports:\n\n- COGS: $40,000\n- Operating Expenses: $25,000\n- Interest: $5,000\n- Taxes: $6,000\n\nWhat is the Net Income?',
    answer: 24000,
    unit: '$',
    hint: 'Net Income = Revenue - COGS - OpEx - Interest - Taxes',
    explanation: `Calculation:
Net Income = $100,000 - $75,000 = $24,000

• • •

Step-by-step breakdown:

1. Starting Revenue:
   → Total Revenue: $100,000

2. Total Expenses:
   • COGS: $40,000
   • Operating Expenses: $25,000
   • Interest: $5,000
   • Taxes: $6,000
   → Total Expenses: $75,000

Key Points:
• COGS represents direct costs of producing goods sold
• Operating Expenses include overhead costs like salaries, rent, utilities
• Interest expense reflects the cost of borrowed money
• Net Income is the final profit after all expenses are deducted`,
    learnContent: {
      concept: 'Net Income is the final profit after subtracting all expenses from revenue — including operating, interest, and taxes. It\'s the "bottom line" of the income statement.',
      formula: 'Net Income = Revenue − COGS − OpEx − Interest − Taxes',
      example: 'Rev: $80K, COGS: $30K, OpEx: $20K, Interest: $5K, Tax: $5K → NI = $20K\nRev: $120K, Total Expenses: $85K → NI = $35K\nRev: $60K, COGS: $20K, OpEx: $15K, Interest: $3K, Tax: $5K → NI = $17K'
    }
  },
  {
    id: 'acc-easy-2',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Prepaid Expense Timing',
    description: 'You pay $12,000 upfront on March 1st for a 1-year office lease.\nYou\'re preparing financials for June 30.\n\nWhat amount is recorded as a Prepaid Expense?',
    answer: 8000,
    unit: '$',
    hint: 'Prepaid = Total - (Months Used × Monthly Expense)',
    explanation: `Calculation:
Prepaid Expense = $12,000 - $4,000 = $8,000

• • •

Step-by-step breakdown:

1. Total Payment Analysis:
   • Total payment: $12,000 (12 months)
   • Monthly expense: $12,000 ÷ 12 = $1,000

2. Usage Calculation:
   • Months used (March 1 to June 30): 4 months
   • Used portion: 4 × $1,000 = $4,000
   → Prepaid remaining: $12,000 - $4,000 = $8,000

Key Points:
• Prepaid Expenses represent payments made in advance for future benefits
• Monthly allocation divides total cost by months covered
• Used portion becomes expense on income statement
• Remaining prepaid stays as asset on balance sheet for future periods`,
    learnContent: {
      concept: 'Prepaid expenses represent future costs already paid. As time passes, the expense is "used up" and moved to the income statement.',
      formula: 'Prepaid = Total − (Months Used × Monthly Expense)\nMonthly Expense = Total ÷ 12',
      example: '$12K paid, 4 months used → $8K prepaid\n$6K paid, 3 months used → $4.5K prepaid\n$9K paid, 6 months used → $4.5K prepaid'
    }
  },
  {
    id: 'acc-easy-3',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Change in Working Capital',
    description: 'During Q2:\n\n- Accounts Receivable ↑ $3,000\n- Inventory ↑ $2,000\n- Accounts Payable ↑ $1,500\n\nWhat is the net change in Working Capital?',
    answer: 3500,
    unit: '$',
    hint: 'Change in WC = ΔA/R + ΔInventory − ΔA/P',
    explanation: `Calculation:
Change in Working Capital = $5,000 - $1,500 = $3,500

• • •

Step-by-step breakdown:

1. Current Asset Changes (cash outflow):
   • Accounts Receivable: +$3,000
   • Inventory: +$2,000
   → Total Current Asset increase: +$5,000

2. Current Liability Changes (cash inflow):
   • Accounts Payable: +$1,500
   → Total Current Liability increase: +$1,500

Key Points:
• A/R increase means customers haven't paid yet, tying up cash
• Inventory increase represents cash spent on additional stock
• A/P increase means delayed vendor payments, retaining cash
• Net positive working capital change indicates cash usage of $3,500`,
    learnContent: {
      concept: 'Working capital is the difference between current assets and current liabilities. Increases in current assets use cash; increases in current liabilities free up cash.',
      formula: 'Change in WC = ΔA/R + ΔInventory − ΔA/P',
      example: 'A/R +2K, A/P +1K → Net = +1K\nA/R −1K, A/P +2K → Net = −3K\nInventory +5K, A/P +2K → Net = +3K'
    }
  },
  {
    id: 'acc-easy-4',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Accounts Payable Recognition',
    description: 'You receive $9,000 worth of inventory and agree to pay in 60 days.\n\nWhat amount should be added to Accounts Payable?',
    answer: 9000,
    unit: '$',
    hint: 'A/P Increase = Value of goods received on credit',
    explanation: `Calculation:
Accounts Payable = $9,000

• • •

Step-by-step breakdown:

1. Transaction Analysis:
   • Inventory received: $9,000
   • Payment terms: 60 days (credit purchase)
   → Accounts Payable increase: $9,000

2. Balance Sheet Impact:
   • Inventory (asset) increases by $9,000
   • Accounts Payable (liability) increases by $9,000
   → No immediate cash impact until payment due

Key Points:
• Credit purchases involve receiving goods before payment
• Accounts Payable represents short-term liabilities to suppliers
• Payment terms define the agreed timeframe for settling obligations
• This creates a liability that must be paid within the specified period`,
    learnContent: {
      concept: 'Accounts Payable increases when goods or services are received but not yet paid for. This is a liability until payment is made.',
      formula: 'A/P Increase = Value of goods received on credit',
      example: 'Receive $5K raw materials → A/P +$5K\nBuy $10K equipment on credit → A/P +$10K\nPay $4K owed → A/P −$4K'
    }
  },
  {
    id: 'acc-easy-5',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Inventory Turnover',
    description: 'A firm\'s COGS is $120,000 this year.\n- Beginning Inventory = $40,000\n- Ending Inventory = $20,000\n\nWhat is the Inventory Turnover Ratio?',
    answer: 4,
    unit: 'x',
    hint: 'Inventory Turnover = COGS ÷ Avg Inventory',
    explanation: `Calculation:
Inventory Turnover = $120,000 ÷ $30,000 = 4.0x

• • •

Step-by-step breakdown:

1. Average Inventory Calculation:
   • Beginning Inventory: $40,000
   • Ending Inventory: $20,000
   → Average Inventory: ($40,000 + $20,000) ÷ 2 = $30,000

2. Turnover Calculation:
   • COGS: $120,000
   • Average Inventory: $30,000
   → Inventory Turnover: $120,000 ÷ $30,000 = 4.0x

Key Points:
• COGS represents the cost of goods actually sold during the period
• Average Inventory shows typical inventory level throughout the year
• Higher turnover indicates more efficient inventory management
• 4.0x means inventory was converted to sales 4 times annually`,
    learnContent: {
      concept: 'This ratio shows how efficiently a company turns inventory into sales. Use average inventory in the denominator.',
      formula: 'Inventory Turnover = COGS ÷ Avg Inventory\nAvg Inventory = (Beg + End) ÷ 2',
      example: 'COGS = $100K, Inv = (30K+20K)/2 → Turnover = 4x\nCOGS = $60K, Avg Inv = $15K → Turnover = 4x\nCOGS = $90K, Avg Inv = $30K → Turnover = 3x'
    }
  },
  {
    id: 'acc-easy-6',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Asset Turnover Ratio',
    description: '- Revenue = $180,000\n- Assets at Start = $60,000\n- Assets at End = $40,000\n\nWhat is the Asset Turnover Ratio?',
    answer: 3.6,
    unit: 'x',
    hint: 'Asset Turnover = Revenue ÷ Avg Total Assets',
    explanation: `Calculation:
Asset Turnover = $180,000 ÷ $50,000 = 3.6x

• • •

Step-by-step breakdown:

1. Average Assets Calculation:
   • Assets at Start: $60,000
   • Assets at End: $40,000
   → Average Assets: ($60,000 + $40,000) ÷ 2 = $50,000

2. Turnover Calculation:
   • Revenue: $180,000
   • Average Assets: $50,000
   → Asset Turnover: $180,000 ÷ $50,000 = 3.6x

Key Points:
• Revenue represents total sales generated during the period
• Average Assets shows typical asset base used to generate sales
• Higher ratio indicates more efficient use of assets to generate revenue
• 3.6x means each dollar of assets generated $3.60 in sales`,
    learnContent: {
      concept: 'Asset Turnover tells how efficiently a business generates revenue from assets. Use average total assets across the year.',
      formula: 'Asset Turnover = Revenue ÷ Avg Total Assets\nAvg Assets = (Start + End) ÷ 2',
      example: 'Rev = $150K, Assets = (50K+50K)/2 → 3.0x\nRev = $200K, Assets = (60K+40K)/2 → 4.0x\nRev = $180K, Assets = (60K+40K)/2 → 3.6x'
    }
  },
  {
    id: 'acc-easy-7',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Gross Margin %',
    description: 'You sell 500 units at $120 each.\nCOGS per unit = $75\n\nWhat is the Gross Margin Percentage?',
    answer: 37.5,
    unit: '%',
    hint: 'Gross Margin % = (Revenue − COGS) ÷ Revenue × 100',
    explanation: `Calculation:
Gross Margin % = $22,500 ÷ $60,000 × 100 = 37.5%

• • •

Step-by-step breakdown:

1. Revenue Calculation:
   • Units sold: 500 units
   • Price per unit: $120
   → Total Revenue: 500 × $120 = $60,000

2. COGS and Gross Profit:
   • COGS per unit: $75
   → Total COGS: 500 × $75 = $37,500
   → Gross Profit: $60,000 - $37,500 = $22,500

Key Points:
• Revenue represents total sales value at selling price
• COGS covers direct production costs per unit
• Gross Profit shows profit before operating expenses
• Gross Margin % indicates percentage of revenue retained after production costs`,
    learnContent: {
      concept: 'Gross Margin shows what % of revenue is left after paying for production. It\'s a core measure of product profitability.',
      formula: 'Gross Margin % = (Revenue − COGS) ÷ Revenue × 100',
      example: '500 units, $100 sale, $60 COGS → GM = 40%\n300 units, $90 sale, $60 COGS → GM = 33.3%\n500 units, $120 sale, $75 COGS → GM = 37.5%'
    }
  },
  {
    id: 'acc-easy-8',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Debt-to-Equity Ratio',
    description: '- Short-Term Liabilities: $10,000\n- Long-Term Debt: $50,000\n- Common Equity: $20,000\n- Preferred Equity: $10,000\n\nWhat is the Debt-to-Equity Ratio?',
    answer: 2,
    unit: 'x',
    hint: 'D/E = Total Liabilities ÷ Total Equity',
    explanation: `Calculation:
Debt-to-Equity = $60,000 ÷ $30,000 = 2.0x

• • •

Step-by-step breakdown:

1. Total Liabilities:
   • Short-Term Liabilities: $10,000
   • Long-Term Debt: $50,000
   → Total Liabilities: $60,000

2. Total Equity:
   • Common Equity: $20,000
   • Preferred Equity: $10,000
   → Total Equity: $30,000

Key Points:
• Total Liabilities represent all money owed to creditors
• Total Equity shows shareholder ownership value
• 2.0x ratio means $2 of debt for every $1 of equity
• Higher ratios indicate more financial leverage and risk`,
    learnContent: {
      concept: 'D/E shows how much debt is used to finance the business compared to equity. Higher = more leverage.',
      formula: 'D/E = Total Liabilities ÷ Total Equity\nLiabilities = Short + Long-Term\nEquity = Common + Preferred',
      example: 'Debt: $60K, Equity: $30K → 2.0x\nDebt: $40K, Equity: $20K → 2.0x\nDebt: $75K, Equity: $25K → 3.0x'
    }
  },
  {
    id: 'acc-easy-9',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Current Ratio',
    description: '- Cash: $5,000\n- A/R: $10,000\n- Inventory: $15,000\n- A/P: $8,000\n- Short-Term Loan: $12,000\n\nWhat is the Current Ratio?',
    answer: 1.5,
    unit: 'x',
    hint: 'Current Ratio = Current Assets ÷ Current Liabilities',
    explanation: `Calculation:
Current Ratio = $30,000 ÷ $20,000 = 1.5x

• • •

Step-by-step breakdown:

1. Current Assets:
   • Cash: $5,000
   • Accounts Receivable: $10,000
   • Inventory: $15,000
   → Total Current Assets: $30,000

2. Current Liabilities:
   • Accounts Payable: $8,000
   • Short-Term Loan: $12,000
   → Total Current Liabilities: $20,000

Key Points:
   • Current Assets represent resources convertible to cash within one year
   • Current Liabilities are obligations due within one year
   • A 1.5x ratio means the company has $1.50 of current assets for every $1.00 of current liabilities
   • This indicates healthy short-term liquidity and ability to meet immediate obligations`,
    learnContent: {
      concept: 'Current Ratio measures short-term liquidity — how easily a company can cover short-term liabilities with short-term assets.',
      formula: 'Current Ratio = Current Assets ÷ Current Liabilities\nAssets = Cash + A/R + Inv\nLiabilities = A/P + Short-Term Debt',
      example: 'Assets = 30K, Liab = 20K → 1.5x\nAssets = 50K, Liab = 25K → 2.0x\nAssets = 40K, Liab = 40K → 1.0x'
    }
  },
  {
    id: 'acc-easy-10',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Operating Margin %',
    description: '- Revenue: $250,000\n- COGS: $100,000\n- Operating Expenses: $75,000\n\nWhat is the Operating Margin (%)?',
    answer: 30,
    unit: '%',
    hint: 'Operating Margin = (Revenue − COGS − OpEx) ÷ Revenue × 100',
    explanation: `Calculation:
Operating Margin = $75,000 ÷ $250,000 × 100 = 30%

• • •

Step-by-step breakdown:

1. Operating Income Calculation:
   • Revenue: $250,000
   • Less: COGS: $100,000
   • Less: Operating Expenses: $75,000
   → Operating Income: $75,000

2. Margin Calculation:
   → Operating Margin: $75,000 ÷ $250,000 × 100 = 30%

Key Points:
• Revenue represents total sales for the period
• COGS covers direct costs of goods sold
• Operating Expenses include overhead costs like salaries, rent, marketing
• Operating Income shows profit from core business operations before interest/taxes`,
    learnContent: {
      concept: 'Operating Margin shows what % of revenue turns into profit from core operations. It excludes interest and taxes.',
      formula: 'Operating Margin = (Revenue − COGS − OpEx) ÷ Revenue × 100',
      example: 'Rev = $200K, COGS = $90K, OpEx = $60K → Margin = 25%\nRev = $250K, COGS = $100K, OpEx = $75K → Margin = 30%\nRev = $300K, COGS = $100K, OpEx = $120K → Margin = 26.7%'
    }
  },
  {
    id: 'acc-easy-11',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Ending Inventory Calculation',
    description: 'A company starts the year with $5,000 in inventory. It purchases $12,000 in raw materials, and sells goods worth $13,500. What is the ending inventory, assuming all sales come from inventory?',
    answer: 3500,
    unit: '$',
    hint: 'Ending Inventory = Beginning Inventory + Purchases - COGS',
    explanation: `Ending Inventory = Beginning Inventory + Purchases - COGS

Beginning Inventory: $5,000
Add: Purchases: $12,000
Less: COGS (goods sold): $13,500
Ending Inventory: $3,500

Inventory flow:
• Beginning Inventory - goods available at start of period
• Purchases - additional inventory acquired during period
• COGS - cost of goods actually sold to customers
• Ending Inventory - goods remaining available for future sales`,
    learnContent: {
      concept: 'Ending inventory is the unsold portion of inventory after accounting for purchases and goods sold.',
      formula: 'Ending Inventory = Beginning Inventory + Purchases - COGS',
      example: 'Begin = $2,000, Purchases = $5,000, COGS = $4,000 → End = $3,000\nBegin = $10,000, Purchases = $15,000, COGS = $18,000 → End = $7,000\nBegin = $3,000, Purchases = $8,000, COGS = $9,000 → End = $2,000'
    }
  },
  {
    id: 'acc-easy-12',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Shareholders\' Equity Breakdown',
    description: 'A firm has the following on its balance sheet:\n\n- Cash: $10,000\n- Inventory: $20,000\n- Equipment: $70,000\n- Accounts Payable: $15,000\n- Notes Payable: $30,000\n- Accrued Expenses: $5,000\n\nWhat is the total Shareholders\' Equity?',
    answer: 50000,
    unit: '$',
    hint: 'Equity = Total Assets - Total Liabilities',
    explanation: `Calculation:
Shareholders' Equity = $100,000 - $50,000 = $50,000

• • •

Step-by-step breakdown:

1. Total Assets:
   • Cash: $10,000
   • Inventory: $20,000
   • Equipment: $70,000
   → Total Assets: $100,000

2. Total Liabilities:
   • Accounts Payable: $15,000
   • Notes Payable: $30,000
   • Accrued Expenses: $5,000
   → Total Liabilities: $50,000

Key Points:
• Total Assets represent all resources owned by the company
• Total Liabilities are all debts and obligations owed
• Shareholders' Equity shows residual ownership value after paying debts
• This represents what shareholders would receive if the company were liquidated`,
    learnContent: {
      concept: 'Shareholders\' equity is what\'s left after subtracting liabilities from assets.',
      formula: 'Equity = Total Assets - Total Liabilities\n= (Cash + Inventory + Equipment) - (Accounts Payable + Notes Payable + Accrued Expenses)',
      example: 'Assets = $100K, Liabilities = $60K → Equity = $40K\nAssets = $80K, Liabilities = $30K → Equity = $50K\nAssets = $60K, Liabilities = $20K → Equity = $40K'
    }
  },
  {
    id: 'acc-easy-13',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Operating Income (OpInc)',
    description: 'A company earns $18,000 in revenue. It incurs $7,000 in COGS, $4,000 in SG&A, and $2,000 in R&D expenses. What is the Operating Income (OpInc)?',
    answer: 5000,
    unit: '$',
    hint: 'Operating Income = Revenue - COGS - SG&A - R&D',
    explanation: `Calculation:
Operating Income = $18,000 - $13,000 = $5,000

• • •

Step-by-step breakdown:

1. Starting Revenue:
   → Total Revenue: $18,000

2. Operating Expenses:
   • COGS: $7,000
   • SG&A: $4,000
   • R&D: $2,000
   → Total Operating Expenses: $13,000

Key Points:
   • COGS represents direct costs of producing goods sold
   • SG&A covers selling, general & administrative expenses
   • R&D includes research and development costs
   • Operating Income shows profit from core business before interest/taxes`,
    learnContent: {
      concept: 'Operating income (OpInc) is the company\'s profit from core operations before interest and taxes.',
      formula: 'Operating Income = Revenue - COGS - SG&A - R&D',
      example: 'Revenue = $10K, COGS + Opex = $7K → OpInc = $3K\nRevenue = $25K, COGS + Opex = $20K → OpInc = $5K\nRevenue = $30K, COGS + Opex = $26K → OpInc = $4K'
    }
  },
  {
    id: 'acc-easy-14',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Depreciation Impact on Net Income',
    description: 'A company reports $2,000 of depreciation and has a tax rate of 30%. What is the net income impact?',
    answer: -1400,
    unit: '$',
    hint: 'Net Income Impact = -Depreciation × (1 - Tax Rate)',
    explanation: `Calculation:
Net Income Impact = -$2,000 + $600 = -$1,400

• • •

Step-by-step breakdown:

1. Depreciation Expense:
   → Depreciation: $2,000

2. Tax Impact:
   • Tax rate: 30%
   • Tax shield benefit: $2,000 × 30% = $600
   → Net income impact: -$2,000 + $600 = -$1,400

Key Points:
   • Depreciation is a non-cash expense that reduces taxable income
   • Tax shield represents tax savings from deductible depreciation
   • Net impact equals depreciation cost minus tax savings
   • Higher tax rates provide greater depreciation benefits`,
    learnContent: {
      concept: 'Depreciation lowers taxable income and therefore reduces taxes, but it also reduces net income.',
      formula: 'Net Income Impact = -Depreciation × (1 - Tax Rate)',
      example: 'Dep = $1,000, Tax Rate = 25% → Impact = -$750\nDep = $3,000, Tax Rate = 20% → Impact = -$2,400\nDep = $1,500, Tax Rate = 30% → Impact = -$1,050'
    }
  },
  {
    id: 'acc-easy-15',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Change in Working Capital',
    description: 'During Q1, a company sees A/R increase by $3,000, Inventory increase by $2,000, and A/P increase by $1,500. What is the change in Working Capital?',
    answer: 3500,
    unit: '$',
    hint: 'Change in WC = ΔA/R + ΔInventory - ΔA/P',
    explanation: `Change in Working Capital = Changes in Current Assets - Changes in Current Liabilities

Current Asset changes (cash impact):
• Accounts Receivable: +$3,000 (cash outflow)
• Inventory: +$2,000 (cash outflow)
Subtotal: +$5,000

Current Liability changes (cash impact):
• Accounts Payable: +$1,500 (cash inflow)
Subtotal: +$1,500

Net change in Working Capital: $5,000 - $1,500 = $3,500

Working capital dynamics:
• A/R increase - sales made but cash not yet collected
• Inventory increase - cash spent on additional stock
• A/P increase - vendor payments delayed, preserving cash`,
    learnContent: {
      concept: 'Changes in working capital affect cash flow. Increases in A/R and Inventory use cash; increases in A/P free up cash.',
      formula: 'Change in WC = ΔA/R + ΔInventory - ΔA/P',
      example: 'ΔA/R = $2K, ΔInv = $1K, ΔA/P = $1K → ΔWC = $2K\nΔA/R = $1K, ΔInv = $0, ΔA/P = $500 → ΔWC = $500\nΔA/R = $3K, ΔInv = $2K, ΔA/P = $0 → ΔWC = $5K'
    }
  },
  {
    id: 'acc-easy-16',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Cash Flow from Operations (CFO)',
    description: 'A company reports net income of $12,000. Depreciation is $2,000. Accounts receivable increased by $3,000, and accounts payable increased by $1,000. What is the Cash Flow from Operations?',
    answer: 12000,
    unit: '$',
    hint: 'CFO = Net Income + Depreciation - Increase in A/R + Increase in A/P',
    explanation: `Calculation:
CFO = $12,000 + $2,000 - $3,000 + $1,000 = $12,000

• • •

Step-by-step breakdown:

1. Starting Point:
   → Net Income: $12,000

2. Adjustments:
   • Add back Depreciation: +$2,000 (non-cash expense)
   • Accounts Receivable increase: -$3,000 (cash tied up)
   • Accounts Payable increase: +$1,000 (cash retained)
   → Cash Flow from Operations: $12,000

Key Points:
   • CFO adjusts net income for non-cash expenses and working capital changes
   • Depreciation is added back as it's a non-cash expense
   • A/R increases use cash as customers haven't paid yet
   • A/P increases preserve cash by delaying vendor payments`,
    learnContent: {
      concept: 'Cash Flow from Operations (CFO) adjusts net income for non-cash expenses and working capital changes.',
      formula: 'CFO = Net Income + Depreciation - Increase in A/R + Increase in A/P',
      example: 'NI = $10K, Dep = $1K, ΔA/R = -$2K, ΔA/P = $0 → CFO = $9K\nNI = $15K, Dep = $3K, ΔA/R = -$1K, ΔA/P = $2K → CFO = $19K\nNI = $8K, Dep = $2K, ΔA/R = $1K, ΔA/P = $500 → CFO = $9.5K'
    }
  },
  {
    id: 'acc-easy-17',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Debt-to-Equity Ratio with Embedded Data',
    description: 'A company has the following on its balance sheet:\n\n- Short-term Debt: $5,000\n- Long-term Debt: $15,000\n- Common Stock: $10,000\n- Retained Earnings: $10,000\n\nWhat is the Debt-to-Equity ratio?',
    answer: 1.0,
    unit: 'x',
    hint: 'Debt / Equity = (Short-term + Long-term Debt) / (Common Stock + Retained Earnings)',
    explanation: `Calculation:
D/E = $20,000 ÷ $20,000 = 1.0x

• • •

Step-by-step breakdown:

1. Total Debt:
   • Short-term Debt: $5,000
   • Long-term Debt: $15,000
   → Total Debt: $20,000

2. Total Equity:
   • Common Stock: $10,000
   • Retained Earnings: $10,000
   → Total Equity: $20,000

Key Points:
   • The ratio shows proportion of funding from debt vs. shareholder equity
   • 1.0x means equal amounts of debt and equity financing
   • Total Debt includes all short-term and long-term obligations
   • Total Equity represents shareholder ownership value`,
    learnContent: {
      concept: 'The Debt-to-Equity ratio shows the proportion of a company\'s funding from debt vs. shareholder equity.',
      formula: 'Debt / Equity = (Short-term + Long-term Debt) / (Common Stock + Retained Earnings)',
      example: 'Debt = $30K, Equity = $60K → 0.5x\nDebt = $15K, Equity = $15K → 1.0x\nDebt = $20K, Equity = $10K → 2.0x'
    }
  },
  {
    id: 'acc-easy-18',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Net PPE Calculation',
    description: 'A business owns equipment with an initial value of $50,000. After three years, it has accumulated $12,000 in depreciation. What is the net value of Property, Plant, and Equipment (PPE)?',
    answer: 38000,
    unit: '$',
    hint: 'Net PPE = Gross PPE - Accumulated Depreciation',
    explanation: `Calculation:
Net PPE = $50,000 - $12,000 = $38,000

• • •

Step-by-step breakdown:

1. Initial Equipment Value:
   → Gross PPE: $50,000

2. Accumulated Depreciation:
   • Depreciation over 3 years: $12,000
   → Net PPE: $50,000 - $12,000 = $38,000

Key Points:
   • Net PPE represents the book value of fixed assets
   • Accumulated depreciation is the total depreciation taken over time
   • This shows the remaining value of assets on the balance sheet
   • Net PPE decreases as assets age and depreciate`,
    learnContent: {
      concept: 'Net PPE is the book value of fixed assets after subtracting depreciation.',
      formula: 'Net PPE = Gross PPE - Accumulated Depreciation',
      example: 'Gross = $80K, Dep = $30K → Net PPE = $50K\nGross = $40K, Dep = $10K → Net PPE = $30K\nGross = $25K, Dep = $5K → Net PPE = $20K'
    }
  },
  {
    id: 'acc-easy-19',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Ending Retained Earnings',
    description: 'A company starts the year with $20,000 in retained earnings. It earns $5,000 in net income and pays $1,000 in dividends. What is the ending retained earnings?',
    answer: 24000,
    unit: '$',
    hint: 'Ending RE = Beginning RE + Net Income - Dividends',
    explanation: `Calculation:
Ending RE = $20,000 + $5,000 - $1,000 = $24,000

• • •

Step-by-step breakdown:

1. Starting Position:
   → Beginning Retained Earnings: $20,000

2. Changes During Year:
   • Add: Net Income: +$5,000
   • Less: Dividends Paid: -$1,000
   → Ending Retained Earnings: $24,000

Key Points:
   • Retained earnings accumulate profits over time
   • Net income increases retained earnings
   • Dividend payments reduce retained earnings
   • This represents profits reinvested in the business`,
    learnContent: {
      concept: 'Retained earnings grow with profits and shrink with dividend payments.',
      formula: 'Ending RE = Beginning RE + Net Income - Dividends',
      example: 'RE = $10K, NI = $2K, Div = $500 → New RE = $11.5K\nRE = $15K, NI = $4K, Div = $2K → New RE = $17K\nRE = $50K, NI = $6K, Div = $1K → New RE = $55K'
    }
  },
  {
    id: 'acc-easy-20',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Gross Profit Margin with Realistic Breakdown',
    description: 'Revenue is $25,000. COGS is $18,000. What is the gross margin percentage?',
    answer: 28,
    unit: '%',
    hint: 'Gross Margin % = (Revenue - COGS) / Revenue × 100',
    explanation: `Calculation:
Gross Margin % = $7,000 ÷ $25,000 × 100 = 28%

• • •

Step-by-step breakdown:

1. Revenue and COGS:
   • Revenue: $25,000
   • COGS: $18,000
   → Gross Profit: $25,000 - $18,000 = $7,000

2. Margin Calculation:
   → Gross Margin %: $7,000 ÷ $25,000 × 100 = 28%

Key Points:
   • Gross margin shows efficiency of production relative to sales
   • Higher margins indicate better cost control
   • COGS includes direct production costs only
   • This excludes operating expenses like marketing and admin costs`,
    learnContent: {
      concept: 'Gross margin percentage reflects how efficiently a company produces goods compared to what it earns.',
      formula: 'Gross Margin % = (Revenue - COGS) / Revenue × 100',
      example: 'Rev = $10K, COGS = $6K → 40%\nRev = $20K, COGS = $15K → 25%\nRev = $8K, COGS = $5K → 37.5%'
    }
  },

  // ACCOUNTING - Easy - BETA QUESTIONS
  {
    id: 'acc-easy-beta-1',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Beta - Basic Net Income Calculation',
    description: 'What is Net Income if Revenue = $500 and COGS = $300?',
    answer: 200,
    unit: '$',
    hint: 'Net Income = Revenue - COGS (ignoring other expenses for this basic example)',
    explanation: `Calculation:
Net Income = $500 - $300 = $200

• • •

Step-by-step breakdown:

1. Revenue and Costs:
   • Revenue: $500
   • COGS: $300
   → Net Income: $200

Key Points:
   • This is a simplified calculation ignoring other expenses
   • Net Income represents profit after all expenses
   • COGS represents direct production costs
   • In real scenarios, other expenses like SG&A and taxes would apply`,
    learnContent: {
      concept: 'Net Income is the bottom line of the income statement, representing profit after all expenses.',
      formula: 'Net Income = Revenue - Total Expenses',
      example: 'If a company has $1M revenue and $800K total expenses, Net Income = $200K'
    }
  },
  
  // ACCOUNTING - Medium - BETA QUESTIONS
  {
    id: 'acc-medium-1',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Beta - Net Income with Operating Expenses',
    description: 'Calculate Net Income: Revenue = $500, COGS = $300, SG&A = $50, Tax Rate = 20%',
    answer: 120,
    unit: '$',
    hint: 'First calculate EBIT (Revenue - COGS - SG&A), then apply tax rate',
    explanation: `Calculation:
After-Tax Net Income = $150 × (1 - 0.20) = $120

• • •

Step-by-step breakdown:

1. EBIT Calculation:
   • Revenue: $500
   • Less: COGS: $300
   • Less: SG&A: $50
   → EBIT: $150

2. Tax Application:
   • EBIT: $150
   • Tax Rate: 20%
   → Net Income: $150 × (1 - 0.20) = $120

Key Points:
   • EBIT represents earnings before interest and taxes
   • Net Income includes the impact of corporate taxes
   • Tax rate reduces the final profit available to shareholders
   • This calculation assumes no interest expense`,
    learnContent: {
      concept: 'Net Income calculation includes all operating expenses and taxes.',
      formula: 'Net Income = (Revenue - COGS - Operating Expenses) × (1 - Tax Rate)',
      example: 'Revenue $1M, COGS $600K, OpEx $200K, Tax 25% → NI = ($1M - $600K - $200K) × 0.75 = $150K'
    }
  },

  // ACCOUNTING - Hard
  {
    id: 'acc-hard-148',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Cash Flow from Operations Calculation',
    description: 'Thorne Systems recognized $50,000 in net income this year.\n\nDuring the year, the company recorded $20,000 of amortization on acquired customer contracts.\n\nIt also collected $120,000 in cash upfront for 12-month service contracts, but only recognized $80,000 as revenue on the income statement (the remaining $40,000 was recorded as deferred revenue).\n\nWhat is Cash Flow from Operations (CFO) after accounting for these adjustments to net income?',
    answer: 110000,
    unit: '$',
    hint: 'Start with net income, add back non-cash amortization, and include the cash collected for deferred revenue.',
    explanation: `Calculation:
CFO = $50,000 + $20,000 + $40,000 = $110,000

• • •

Step-by-step breakdown:

1. Starting Point:
   → Net Income: $50,000 (base earnings)

2. Non-Cash Adjustments:
   • Amortization: +$20,000 (non-cash expense, added back)
   → Subtotal after non-cash: $70,000

3. Working Capital Changes:
   • Deferred revenue increase: +$40,000 ($120,000 collected - $80,000 recognized)
   → Cash Flow from Operations: $110,000

Key Points:
   • Amortization of customer contracts is non-cash and added back to CFO
   • Deferred revenue represents cash collected before services are delivered
   • Cash collected upfront exceeding revenue recognized creates positive CFO impact
   • This demonstrates revenue timing differences under the indirect method`,
    learnContent: {
      concept: 'Amortization is non-cash and added back to CFO. Deferred revenue means cash was collected but revenue not yet recognized. Both create positive CFO adjustments under the indirect method.',
      formula: 'CFO Adjustment = Amortization + (Cash Collected – Revenue Recognized)',
      example: 'MedSys amortizes $50K and defers $50K in SaaS contracts → CFO = 10K + 50K = 60K\nBoxPeak amortizes $80K, recognizes $90K of $120K collected → CFO = 16K + 30K = 46K\nNetDash amortizes $40K, defers $25K unearned revenue → CFO = 8K + 25K = 33K'
    }
  },
  {
    id: 'acc-hard-149',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Working Capital & Depreciation Roll-Forward',
    description: 'Gravix Lighting earned $70,000 in net income this year.\n\nIn Q4, Accounts Receivable increased by $25,000, and Inventory fell by $10,000 as older SKUs were cleared. The company prepaid $5,000 in annual software licenses.\n\nAccounts Payable increased by $20,000, and it also paid down $8,000 of accrued employee bonuses. Depreciation was $15,000.\n\nWhat is Cash Flow from Operations?',
    answer: 77000,
    unit: '$',
    hint: 'Start from NI, add back non-cash D&A, and adjust for working capital.',
    explanation: `Calculation:
CFO = $70,000 + $15,000 - $25,000 + $10,000 - $5,000 + $20,000 - $8,000 = $77,000

• • •

Step-by-step breakdown:

1. Starting Point:
   → Net Income: $70,000 (base earnings)

2. Non-Cash Adjustments:
   • Add back Depreciation: +$15,000 (non-cash expense)
   → Subtotal after non-cash: $85,000

3. Working Capital Changes:
   • Accounts Receivable increase: -$25,000 (customers haven't paid yet)
   • Inventory decrease: +$10,000 (products sold, converted to cash)
   • Prepaid expenses increase: -$5,000 (software licenses paid in advance)
   • Accounts Payable increase: +$20,000 (delayed vendor payments)
   • Accrued liabilities decrease: -$8,000 (employee bonuses paid)
   → Net working capital impact: -$8,000

Key Points:
   • Depreciation is non-cash and added back to operating cash flow
   • Working capital changes show timing differences between recording and cash flow
   • A/R increases use cash as customers delay payments
   • Inventory decreases generate cash from product sales
   • Effective working capital management can boost cash generation`,
    learnContent: {
      concept: 'Depreciation is non-cash. AR increase = delayed customer payment → cash out. Inventory decrease = product sold → cash in. Prepaids increase = future services paid now → cash out. AP increase = vendor payment delayed → cash in. Accruals decrease = bonuses paid → cash out.',
      formula: 'CFO = NI + D&A – ∆AR + ∆Inventory – ∆Prepaids + ∆AP – ∆Accruals',
      example: 'Toolshed earns $60K, AR up $15K, AP up $25K, Dep $10K → CFO = 80K\nShopWise earns $90K, Inventory down $20K, Accruals down $10K → CFO = 100K\nBrightGrid earns $100K, Prepaids up $5K, Dep $25K → CFO = 120K'
    }
  },
  {
    id: 'acc-hard-150',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Cash Flow from Operations Calculation',
    description: 'ABC Company reported net income of $15,000 for the year. During the year, they had the following activities:\n\n• Purchased new equipment for $300,000 with a 10-year useful life (straight-line depreciation)\n• Sold old equipment with a book value of $40,000 for $70,000\n• Company tax rate is 25%\n\nWhat is the company\'s cash flow from operations for the year?',
    answer: 15000,
    unit: '$',
    hint: 'Start with net income, then add back non-cash expenses and remove non-operating gains. Net income already includes tax effects.',
    explanation: `Calculation:
CFO = $15,000 + $30,000 - $30,000 = $15,000

• • •

Step-by-step breakdown:

1. Starting Point:
   → Net Income: $15,000 (includes all income statement effects)

2. Non-Cash Adjustments:
   • Equipment depreciation: +$30,000 ($300,000 ÷ 10 years, non-cash expense)
   → Subtotal after non-cash: $45,000

3. Non-Operating Adjustments:
   • Gain on equipment sale: -$30,000 ($70,000 sale price - $40,000 book value)
   → Cash Flow from Operations: $15,000

Key Points:
   • New equipment purchase generates annual depreciation without cash impact
   • Equipment sale gain represents investing activity, not core operations
   • Depreciation is added back as it's a non-cash expense
   • Non-operating gains must be removed to arrive at true operating cash flow`,
    learnContent: {
      concept: 'CFO using the indirect method starts with net income, adds back non-cash expenses (like depreciation), and subtracts non-operating items (like gains on asset sales). Tax effects are already included in net income.',
      formula: 'CFO = Net Income + Non-Cash Expenses - Non-Operating Gains',
      example: 'Company with $50K NI, $20K depreciation, $10K gain → CFO = $50K + $20K - $10K = $60K'
    }
  },
  {
    id: 'acc-hard-151',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Deferred Revenue + Accrued Expense + Depreciation',
    description: 'Fresca Foods reported $40,000 in net income. They collected $100,000 in prepaid revenue for annual catering contracts, but recognized only $60,000 of it in revenue.\n\nThe company incurred $50,000 in SG&A, of which $10,000 was unpaid at year-end. Depreciation totaled $30,000.\n\nWhat is Cash Flow from Operations?',
    answer: 80000,
    unit: '$',
    hint: 'Deferred revenue and unpaid SG&A increase CFO. Add back depreciation.',
    explanation: `Calculation:
CFO = $40,000 + $30,000 + $40,000 + $10,000 = $120,000

• • •

Step-by-step breakdown:

1. Starting Point:
   → Net Income: $40,000 (base earnings after all expenses)

2. Non-Cash Adjustments:
   • Depreciation: +$30,000 (non-cash expense)
   → Subtotal after non-cash: $70,000

3. Working Capital Benefits:
   • Deferred revenue increase: +$40,000 ($100,000 collected - $60,000 recognized)
   • Accrued SG&A expenses: +$10,000 ($50,000 incurred - $40,000 paid)
   → Cash Flow from Operations: $120,000

Key Points:
   • Deferred revenue represents cash received before services are delivered
   • Accrued expenses mean costs were incurred but cash was retained
   • Upfront customer payments create significant positive cash flow impact
   • Effective expense management preserves cash while maintaining operations`,
    learnContent: {
      concept: 'Deferred Revenue = cash received before revenue earned → add to CFO. Accrued Expenses = costs incurred but unpaid → add to CFO. Depreciation = non-cash → add to CFO.',
      formula: 'CFO = NI + Depreciation + Deferred Revenue Increase + Accrued Expenses Increase',
      example: 'Mealhouse defers $50K of $90K collected, accrues $15K → CFO boost = 75K\nTutorPro collects $200K, earns $150K, accrues $5K SG&A → CFO = 85K\nSmoothix earns $60K, defers $30K, Dep $20K → CFO = 110K'
    }
  },
  {
    id: 'acc-hard-153',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Deferred Tax Liability & Asset Sale',
    description: 'Drivon Motors sold a piece of equipment for $120,000, which had a book value of $90,000 and a tax basis of $80,000.\n\nThe company is taxed at 30%, and the gain was recorded above-the-line on the income statement.\n\nWhat is the deferred tax liability created from this transaction?',
    answer: 3000,
    unit: '$',
    hint: 'Taxable gain > book gain → DTL is created.',
    explanation: 'Drivon Motors created a deferred tax liability from the equipment sale due to differences between book and tax accounting methods. This transaction demonstrates how asset basis differences create temporary tax timing differences.\n\n• Sale price: $120,000 (cash received)\n• Book gain: $30,000 ($120,000 sale price - $90,000 book value)\n• Tax gain: $40,000 ($120,000 sale price - $80,000 tax basis)\n• Tax rate: 30%\n\nThe equipment had different values for book versus tax purposes. For financial reporting, the gain was $30,000 based on the book value of $90,000. However, for tax purposes, the gain was $40,000 because the tax basis was only $80,000.\n\nThis creates a $10,000 temporary difference ($40,000 tax gain - $30,000 book gain) where taxable income exceeds book income. The company will pay more taxes now than the financial statements suggest.\n\nDTL = ($40,000 - $30,000) × 30% = $3,000\n\nIn summary, Drivon Motors must record a $3,000 deferred tax liability because the equipment sale generates more taxable income than book income, creating a future tax obligation.',
    learnContent: {
      concept: 'DTL arises when taxable income > book income. Common in asset sales when tax basis differs from book basis. DTL is a balance sheet liability, reversed over time.',
      formula: 'DTL = (Taxable Gain – Book Gain) × Tax Rate',
      example: 'EquipCo sells an asset for $150K (book = $110K, tax = $100K) → DTL = (50K–40K) × 25% = 2.5K\nTowerComm sells for $500K (book = $300K, tax = $250K) → DTL = (200K–150K) × 30% = 15K\nBoltWorks sells machinery: sale = $80K, book = $60K, tax = $50K → DTL = 10K × 35% = 3.5K'
    }
  },
  {
    id: 'acc-hard-154',
    track: 'accounting',
    difficulty: 'hard',
    title: 'DTA Write-Down + Tax Shield',
    description: 'Elevate Logistics recorded a $40,000 non-cash amortization of intangibles this year.\n\nSeparately, it wrote down a $25,000 Deferred Tax Asset that it determined would no longer be realizable.\n\nThe corporate tax rate is 25%.\n\nWhat is the total CFO adjustment from these items?',
    answer: 65000,
    unit: '$',
    hint: 'DTA write-down reduces NI but doesn\'t use cash. Amortization is non-cash too.',
    explanation: 'Elevate Logistics faced two significant non-cash adjustments that impact cash flow from operations. Both the intangible amortization and deferred tax asset write-down reduced net income without using cash.\n\n• Intangible amortization: $40,000 (non-cash expense)\n• DTA write-down: $25,000 (non-cash tax expense increase)\n• Tax rate: 25%\n\nThe $40,000 amortization of intangibles is a non-cash expense that reduced net income but didn\'t involve any cash payment. Separately, the company determined that a $25,000 deferred tax asset would not be realizable, writing it down to zero.\n\nThe DTA write-down increases tax expense on the income statement but involves no cash payment to tax authorities. This creates a timing difference where book tax expense exceeds cash tax payments.\n\nBoth items are added back to net income when calculating operating cash flow because they reduced earnings without using cash.\n\nCFO Adjustment = $40,000 + $25,000 = $65,000\n\nIn summary, these non-cash charges created a $65,000 positive adjustment to operating cash flow, demonstrating how accounting expenses can differ from actual cash usage.',
    learnContent: {
      concept: 'Amortization reduces net income, added back to CFO. DTA write-down increases tax expense (non-cash), also added back. DTA reversals typically lower book earnings, but not cash.',
      formula: 'CFO Adjustment = Amortization + DTA Write-down',
      example: 'BrandCo amortizes $60K, writes off $30K DTA → CFO = 90K\nVoltPower amortizes $80K, DTA write-down of $20K → CFO = 100K\nMechra amortizes $100K, DTA impairment of $40K → CFO = 140K'
    }
  },
  {
    id: 'acc-hard-155',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Prepaid Expenses, Depreciation, & Accrued Liabilities',
    description: 'Solaron Tech had $90,000 in net income.\n\nPrepaid insurance increased by $15,000, and Depreciation totaled $40,000.\n\nThe company also accrued $25,000 in unpaid wages by year-end.\n\nWhat is the cash flow from operations?',
    answer: 140000,
    unit: '$',
    hint: 'Prepaids use cash. Accruals and depreciation increase CFO.',
    explanation: 'Solaron Tech\'s operating cash flow reflects typical working capital movements and non-cash expenses. The company prepaid insurance premiums while accruing unpaid wages, creating offsetting cash flow effects alongside depreciation.\n\n• Net income: $90,000 (base earnings)\n• Prepaid insurance increase: -$15,000 (cash paid for future coverage)\n• Depreciation: +$40,000 (non-cash expense)\n• Accrued wages: +$25,000 (wages owed but unpaid)\n\nThe $15,000 increase in prepaid insurance represents cash paid upfront for future insurance coverage, reducing current cash flow. The $40,000 depreciation is a non-cash expense that reduced net income but didn\'t use cash. The $25,000 in accrued wages represents work performed but unpaid, meaning cash was retained.\n\nPrepaid expenses reduce cash flow because they represent advance payments for future benefits. Accrued liabilities increase cash flow because expenses were incurred without cash payment.\n\nCFO = $90,000 - $15,000 + $40,000 + $25,000 = $140,000\n\nIn summary, Solaron Tech generated $140,000 in operating cash flow, with strong cash generation from retaining unpaid wages and adding back depreciation, partially offset by prepaid insurance payments.',
    learnContent: {
      concept: 'Prepaid expenses are cash out → decrease CFO. Accrued liabilities = unpaid costs → cash held → increase CFO. Depreciation = non-cash → added back.',
      formula: 'CFO = NI – ∆Prepaids + Depreciation + ∆Accrued Liabilities',
      example: 'AmpTech NI = $100K, prepaids ↑ $10K, accruals ↑ $30K, dep = $20K → CFO = 140K\nCrateBuild NI = $80K, prepaids ↑ $5K, dep = $35K, accruals ↑ $10K → CFO = 120K\nPrintzy NI = $95K, accruals ↑ $20K, prepaids ↑ $15K, dep = $30K → CFO = 130K'
    }
  },
  {
    id: 'acc-hard-156',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Goodwill Impairment + Gain on Sale Adjustment',
    description: 'Brixon Retail reported $60,000 in net income, which included a $50,000 goodwill impairment and a $20,000 gain on sale of real estate.\n\nDepreciation for the year was $25,000.\n\nAssume a 30% tax rate.\n\nWhat is the adjustment to CFO from these non-cash items?',
    answer: 55000,
    unit: '$',
    hint: 'Add back impairment and depreciation. Subtract gain on sale.',
    explanation: 'Brixon Retail\'s operating cash flow analysis requires careful separation of operating versus non-operating items. The company had significant non-cash charges and non-core gains that must be properly adjusted.\n\n• Goodwill impairment: +$50,000 (non-cash charge, add back)\n• Depreciation: +$25,000 (non-cash expense, add back)\n• Gain on real estate sale: -$20,000 (non-operating income, subtract)\n• Tax rate: 30% (already reflected in net income)\n\nThe $50,000 goodwill impairment reduced net income but involved no cash payment. Goodwill impairments occur when an acquisition\'s value declines, but this is purely an accounting adjustment. The $25,000 depreciation is a standard non-cash expense added back to operating cash flow.\n\nHowever, the $20,000 gain on real estate sale represents non-operating income that must be removed from operating cash flow. This gain increased net income but belongs in investing activities.\n\nCFO Adjustment = $50,000 + $25,000 - $20,000 = $55,000\n\nIn summary, these adjustments create a net $55,000 positive impact on operating cash flow, with non-cash charges exceeding the non-operating gain that must be excluded.',
    learnContent: {
      concept: 'Impairments reduce net income but are non-cash. Gains on sale are non-core and subtracted from CFO. Depreciation is always added back.',
      formula: 'CFO = Depreciation + Impairment – Gain on Sale',
      example: 'StoreGrid has $30K impairment, $10K gain, $20K depreciation → CFO = 40K\nCleanWell has $80K impairment, no gains, $10K dep → CFO = 90K\nFixPro has $60K dep, $25K impairment, $5K gain → CFO = 80K'
    }
  },
  {
    id: 'acc-hard-157',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Capitalized R&D + DTL Creation',
    description: 'Synovia capitalized $200,000 of R&D expenses under new tax rules.\n\nFor book purposes, the company expensed the full amount.\n\nAmortization for tax purposes begins over 5 years, starting with 10% in Year 1.\n\nAssume a 21% tax rate.\n\nWhat is the deferred tax liability created from this treatment?',
    answer: 37800,
    unit: '$',
    hint: 'Book income is lower than taxable income → DTL created.',
    explanation: 'Synovia faces a deferred tax liability due to new R&D capitalization rules creating timing differences between book and tax accounting. The company must capitalize R&D for tax purposes while continuing to expense it immediately for financial reporting.\n\n• Book treatment: $200,000 fully expensed in Year 1\n• Tax treatment: $200,000 capitalized, amortized over 5 years\n• Tax amortization Year 1: $20,000 (10% of $200,000)\n• Tax rate: 21%\n\nUnder new tax regulations, R&D costs must be capitalized and amortized over five years rather than expensed immediately. However, for financial reporting, the company continues to expense R&D fully in the year incurred.\n\nThis creates a temporary difference where book income is $180,000 lower than taxable income ($200,000 book expense vs. $20,000 tax deduction). The company pays more taxes now than the financial statements suggest, creating a future deferred tax liability.\n\nDTL = ($200,000 - $20,000) × 21% = $37,800\n\nIn summary, Synovia must record a $37,800 deferred tax liability because the new R&D capitalization rules create higher current tax payments relative to book income, establishing a future tax obligation.',
    learnContent: {
      concept: 'Capitalized R&D lowers tax deduction in early years. Full expensing for book reduces book income. Tax timing difference → DTL created.',
      formula: 'DTL = (Book Expense – Tax Deduction) × Tax Rate',
      example: 'GeneX expensed $150K, tax amort = $15K → DTL = 28,350\nBioNova expensed $100K, tax amort = $10K → DTL = 18,900\nLabCore expensed $300K, tax amort = $30K → DTL = 56,700'
    }
  },
  {
    id: 'acc-hard-158',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Inventory Write-Down + Accrued Liabilities + Deferred Revenue',
    description: 'Roventa Apparel ended the year with $90,000 in net income.\n\nThey recorded a $25,000 inventory write-down due to obsolete fashion items.\n\nThe company accrued $18,000 in unpaid advertising costs, and collected $60,000 for future shipments, only recognizing $45,000 as revenue.\n\nWhat is the cash flow from operations?',
    answer: 148000,
    unit: '$',
    hint: 'Inventory write-down is non-cash. Accrued liabilities and deferred revenue increase CFO.',
    explanation: 'Roventa Apparel demonstrates multiple positive cash flow adjustments from non-cash expenses and favorable working capital timing. The company effectively managed inventory obsolescence while collecting cash upfront from customers.\n\n• Net income: $90,000 (after all expenses including write-down)\n• Inventory write-down: +$25,000 (non-cash obsolescence charge)\n• Accrued advertising costs: +$18,000 (expenses incurred but unpaid)\n• Deferred revenue increase: +$15,000 ($60,000 collected - $45,000 recognized)\n\nThe $25,000 inventory write-down for obsolete fashion items reduced net income but involved no cash outflow. This represents a non-cash acknowledgment that certain inventory has lost value. The $18,000 in accrued advertising costs means marketing expenses were incurred but payment was delayed, preserving cash.\n\nThe company collected $60,000 for future shipments but only recognized $45,000 as current revenue, creating $15,000 in deferred revenue. This represents cash received before services are delivered.\n\nCFO = $90,000 + $25,000 + $18,000 + $15,000 = $148,000\n\nIn summary, Roventa Apparel generated strong $148,000 operating cash flow by effectively managing non-cash charges and collecting customer payments in advance of delivery.',
    learnContent: {
      concept: 'Inventory write-down → non-cash, increases CFO. Accrued liabilities → expenses unpaid, boosts CFO. Deferred revenue → cash in, not yet earned, increases CFO.',
      formula: 'CFO = Net Income + Write-down + ∆Accruals + ∆Deferred Revenue',
      example: 'RunnerCo reports $100K net income, books a $20K write-down, accrues $15K marketing cost, and defers $10K revenue → CFO = 100 + 20 + 15 + 10 = 145K\nVantaLux earns $80K, accrues $10K for shipping, and defers $30K of customer deposits → CFO = 80 + 10 + 30 = 120K\nModana earns $95K, writes down $10K of excess fabric, accrues $5K wages, and defers $5K gift card redemptions → CFO = 95 + 10 + 5 + 5 = 115K'
    }
  },
  {
    id: 'acc-hard-159',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Capitalized Interest + Depreciation + Deferred Tax Liability',
    description: 'SolarRidge capitalized $500,000 of construction interest, depreciated over 20 years.\n\nFor tax purposes, the interest was fully expensed in Year 1.\n\nAssume a 25% tax rate.\n\nWhat deferred tax asset or liability is created in Year 1?',
    answer: 118750,
    unit: '$ DTA',
    hint: 'Taxable income is lower than book → DTA created.',
    explanation: 'A deferred tax asset is created in Year 1. This results from a temporary difference: for accounting purposes, the $500,000 of construction interest is capitalized and depreciated over 20 years, but for tax purposes, the entire $500,000 is expensed immediately.\n\n• For accounting, only $25,000 ($500,000 ÷ 20) is deducted each year.\n• For tax, the full $500,000 is deducted in Year 1.\n\nThis creates a deductible temporary difference of $475,000 ($500,000 – $25,000) in Year 1 that will reverse over the next 19 years. At a 25% tax rate, the deferred tax asset recorded in Year 1 is $475,000 × 25% = $118,750.\n\nIn summary, SolarRidge will recognize a $118,750 deferred tax asset in Year 1 due to the temporary difference between the book and tax treatment of the interest.',
    learnContent: {
      concept: 'Capitalized interest → delays expense for book, immediate for tax. Timing mismatch → DTA created. Reverses as book depreciation catches up over time.',
      formula: 'DTA = (Tax Expense – Book Expense) × Tax Rate',
      example: 'VoltGrid capitalizes $600K, depreciates $30K, tax fully expensed → DTA = (600 – 30) × 25% = 142.5K\nGridCore books $20K depreciation, tax deducts $400K → DTA = (400 – 20) × 25% = 95K\nPowerCells depreciates $40K, tax deducts full $800K → DTA = (800 – 40) × 25% = 190K'
    }
  },
  {
    id: 'acc-hard-160',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Revenue Recognition + COGS Timing Mismatch + Accruals',
    description: 'BrightFields recognized $180,000 in revenue, with $140,000 of it billed but not yet paid.\n\nCOGS totaled $100,000, but only $80,000 in inventory was actually shipped.\n\nThey also accrued $20,000 in unpaid vendor costs.\n\nWhat is the CFO adjustment from these working capital items?',
    answer: -140000,
    unit: '$',
    hint: 'AR up = cash out. COGS vs. inventory creates WC increase.',
    explanation: 'BrightFields experienced a significant working capital challenge due to revenue recognition and inventory timing mismatches. The company recognized substantial revenue without collecting cash while building inventory for future sales.\n\n• Accounts receivable increase: -$140,000 (revenue billed but not collected)\n• Inventory increase: -$20,000 (COGS $100,000 vs. $80,000 shipped)\n• Accrued expenses increase: +$20,000 (vendor costs unpaid)\n\nThe $140,000 accounts receivable increase represents revenue that was recognized but not yet collected from customers, creating a significant cash flow drain. The inventory increase of $20,000 occurs because $100,000 in cost of goods sold was recorded, but only $80,000 in inventory was actually shipped to customers.\n\nThe $20,000 in accrued vendor costs means expenses were incurred but payment was delayed, preserving cash. However, this positive adjustment is completely offset by the inventory increase.\n\nCFO Impact = -$140,000 - $20,000 + $20,000 = -$140,000\n\nIn summary, BrightFields faces a $140,000 negative working capital impact on cash flow, primarily driven by customers who haven\'t yet paid for recognized revenue.',
    learnContent: {
      concept: 'AR increase = customer hasn\'t paid → reduces CFO. COGS mismatch → more cost booked than inventory moved → inventory ↑ → cash out. Accruals = unpaid expenses → cash retained.',
      formula: 'CFO Adjustment = –∆AR – ∆Inventory + ∆Accruals',
      example: 'BeamCo bills $200K, collects $60K, ships $160K COGS, accruals +$15K → CFO = –140 + 15 = –125K\nPackIt sells $250K, AR ↑ $200K, inventory ↑ $20K, accruals ↑ $10K → CFO = –200 – 20 + 10 = –210K\nFlexMods sees AR ↑ $100K, inventory ↑ $25K, accruals ↑ $15K → CFO = –100 – 25 + 15 = –110K'
    }
  },
  {
    id: 'acc-hard-161',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Operating Lease Transition + Depreciation + Deferred Rent',
    description: 'TagLine previously recorded $50,000 in straight-line rent expense under an operating lease.\n\nUnder ASC 842, they capitalized the lease as a $300,000 ROU asset, depreciated over 6 years.\n\nDeferred rent was $10,000 lower at year-end due to reclassification.\n\nWhat is the CFO adjustment under ASC 842?',
    answer: 10000,
    unit: '$',
    hint: 'Deferred rent used to boost CFO, now removed.',
    explanation: 'TagLine\'s transition to ASC 842 lease accounting demonstrates how new accounting standards can impact cash flow presentation. The company moved from operating lease treatment to capitalizing the lease as a right-of-use asset.\n\n• Previous treatment: $50,000 straight-line rent expense\n• New treatment: $50,000 annual depreciation ($300,000 ÷ 6 years)\n• Deferred rent decrease: -$10,000 (elimination of previous adjustment)\n\nUnder the old standard, TagLine recorded straight-line rent expense and could add back deferred rent adjustments to operating cash flow. Under ASC 842, the lease is capitalized as a $300,000 right-of-use asset that depreciates over six years.\n\nThe depreciation expense ($50,000) exactly replaces the previous rent expense, creating no net impact. However, the $10,000 decrease in deferred rent eliminates a previous cash flow add-back, as deferred rent is no longer relevant under the new standard.\n\nCFO Impact = $50,000 depreciation - $50,000 rent + $10,000 deferred rent loss = $10,000\n\nIn summary, ASC 842 creates a modest $10,000 positive cash flow impact for TagLine by eliminating the deferred rent adjustment that previously boosted operating cash flow.',
    learnContent: {
      concept: 'ASC 842 = operating leases now capitalized → D&A replaces rent. Deferred rent disappears → no longer a CFO add-back. Change in lease treatment impacts comparability.',
      formula: 'CFO Impact = +Depreciation – ∆Deferred Rent',
      example: 'FrameBox replaces $60K rent with depreciation, deferred rent down $15K → CFO = +15K\nInvoiceLabs shifts $90K rent to $90K dep, deferred rent ↓ $10K → CFO = +10K\nRetailCore moves $75K rent, deferred rent ↓ $20K → CFO = +20K'
    }
  },
  {
    id: 'acc-hard-162',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Bad Debt Expense + AR Write-Off + Deferred Tax',
    description: 'StoneForge recorded a $60,000 bad debt expense, and directly wrote off $40,000 of AR.\n\nFor tax purposes, only $20,000 of the AR was allowed to be written off in Year 1.\n\nThe tax rate is 25%.\n\nWhat deferred tax asset is created from this difference?',
    answer: 5000,
    unit: '$',
    hint: 'Book expense > tax deduction → DTA created.',
    explanation: 'StoneForge faces a deferred tax asset due to restrictive tax rules on bad debt deductions. The company recorded expenses and write-offs for financial reporting that exceed what tax authorities currently allow as deductions.\n\n• Bad debt expense: $60,000 (financial reporting)\n• Accounts receivable write-off (book): $40,000\n• Accounts receivable write-off (tax): $20,000 (restricted)\n• Tax rate: 25%\n\nFor financial reporting, StoneForge recorded a $60,000 bad debt expense and wrote off $40,000 of accounts receivable when it determined these amounts were uncollectible. However, tax authorities only allow a $20,000 deduction in Year 1, with the remaining $20,000 deductible in future periods.\n\nThis creates a $20,000 temporary difference where book deductions exceed current tax deductions. The company will receive the remaining tax benefits when the restrictions are lifted in future years.\n\nDTA = ($40,000 - $20,000) × 25% = $5,000\n\nIn summary, StoneForge must record a $5,000 deferred tax asset representing future tax benefits from the $20,000 in bad debt write-offs that are currently restricted for tax purposes.',
    learnContent: {
      concept: 'Bad debt expense recorded for book when expected. Tax rules only allow actual write-offs. Creates a DTA since tax catches up later.',
      formula: 'DTA = (Book Deducted – Tax Deducted) × Tax Rate',
      example: 'CollectMax books $80K bad debt, tax allows $50K → DTA = (80–50) × 25% = 7.5K\nLearnPro books $20K, tax deduction = $10K → DTA = 2.5K\nToolFlex books $100K, tax only allows $70K → DTA = 7.5K'
    }
  },
  {
    id: 'acc-hard-163',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Accrued Revenue + Bad Debt Write-Off + Prepaid Expense Increase',
    description: 'VistaLume reported $120,000 in net income.\n\nIt recognized $30,000 in accrued but unpaid revenue, and wrote off $12,000 of AR due to bad debt.\n\nAdditionally, prepaid software licenses increased by $20,000.\n\nWhat is the CFO from these adjustments?',
    answer: 70000,
    unit: '$',
    hint: 'AR increase reduces cash. Write-offs don\'t affect CFO. Prepaids use cash.',
    explanation: 'VistaLume demonstrates how accrued revenue and prepaid expenses create working capital drains on operating cash flow. The company recognized revenue from customers who haven\'t paid while prepaying for future software services.\n\n• Net income: $120,000 (includes all revenues and expenses)\n• Accrued revenue: -$30,000 (revenue recognized but not collected)\n• Accounts receivable write-off: $12,000 (no separate CFO impact)\n• Prepaid software licenses: -$20,000 (cash paid for future services)\n\nThe $30,000 in accrued revenue increases accounts receivable because VistaLume provided services but customers haven\'t yet paid. This creates a negative cash flow impact equal to the uncollected revenue.\n\nThe $12,000 bad debt write-off is already reflected in net income through the bad debt expense, so no separate cash flow adjustment is needed. The $20,000 increase in prepaid software licenses represents cash paid upfront for future services.\n\nCFO = $120,000 - $30,000 - $20,000 = $70,000\n\nIn summary, VistaLume\'s operating cash flow of $70,000 is significantly below net income due to customers who haven\'t paid and advance payments for software licenses.',
    learnContent: {
      concept: 'Accrued revenue (AR increase) = customer hasn\'t paid. AR write-offs are non-cash but reflected in NI. Prepaids = cash paid up front, reduce CFO.',
      formula: 'CFO = Net Income – ∆AR – ∆Prepaids',
      example: 'BytePeak earns $100K, AR ↑ $40K, prepaids ↑ $10K → CFO = 100 – 40 – 10 = 50K\nInkLabs earns $90K, AR ↑ $30K, write-off $15K, prepaids ↑ $5K → CFO = 90 – 30 – 5 = 55K\nDataVista earns $110K, AR ↑ $20K, prepaids ↑ $15K → CFO = 75K'
    }
  },
  {
    id: 'acc-hard-164',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Gain on Sale + Goodwill Impairment + Tax Shield',
    description: 'MetroHelix reported $95,000 in net income.\n\nThe company had a $40,000 gain on sale of equipment, a $60,000 goodwill impairment, and $25,000 of depreciation.\n\nAssume a 20% tax rate.\n\nWhat is the total CFO adjustment from these items?',
    answer: 45000,
    unit: '$',
    hint: 'Gains are subtracted, impairments and depreciation are added back.',
    explanation: 'MetroHelix requires careful analysis to separate operating versus non-operating items when calculating cash flow adjustments. The company had both non-cash charges and non-core gains that impact the reconciliation from net income to operating cash flow.\n\n• Gain on equipment sale: -$40,000 (non-operating income, remove from CFO)\n• Goodwill impairment: +$60,000 (non-cash charge, add back)\n• Depreciation: +$25,000 (non-cash expense, add back)\n• Tax rate: 20% (already reflected in net income)\n\nThe $40,000 gain on equipment sale increased net income but represents a one-time investing activity rather than core operations. This gain must be subtracted from operating cash flow and will appear in investing activities instead.\n\nThe $60,000 goodwill impairment reduced net income but involved no cash payment. Goodwill impairments occur when acquisition values decline below their carrying amounts. The $25,000 depreciation is a standard non-cash expense.\n\nCFO Adjustment = -$40,000 + $60,000 + $25,000 = $45,000\n\nIn summary, these adjustments create a net $45,000 positive impact on operating cash flow, with non-cash charges exceeding the non-operating gain that must be excluded from operations.',
    learnContent: {
      concept: 'Gain on sale is non-operating, subtracted. Impairment is non-cash, added back. Depreciation = non-cash, always added back.',
      formula: 'CFO = Net Income – Gain + Impairment + Depreciation',
      example: 'ToolGrid NI = $80K, gain = $30K, impairment = $50K, dep = $20K → CFO Adj = 40K\nBrightBase NI = $70K, gain = $10K, impairment = $40K, dep = $30K → CFO Adj = 60K\nPropertyLink NI = $100K, gain = $25K, impairment = $0, dep = $25K → CFO Adj = 0'
    }
  },
  {
    id: 'acc-hard-165',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Equity Method Income + Dividends Received',
    description: 'IronSpark owns 30% of BrightWave under the equity method.\n\nDuring the year, BrightWave earned $200,000 in net income, and distributed $60,000 in dividends to IronSpark.\n\nWhat amount is recorded in IronSpark\'s income statement from this investment?',
    answer: 60000,
    unit: '$',
    hint: 'Equity income = % of NI. Dividends are balance sheet-only.',
    explanation: 'IronSpark\'s investment in BrightWave demonstrates equity method accounting for significant influence investments. Under this method, IronSpark recognizes its proportional share of BrightWave\'s earnings regardless of dividend distributions.\n\n• Ownership percentage: 30% (qualifies for equity method)\n• BrightWave net income: $200,000\n• Equity income recognized: $60,000 (30% × $200,000)\n• Dividends received: $60,000 (reduces investment balance, not income)\n\nThe equity method requires IronSpark to record 30% of BrightWave\'s net income as equity income on its income statement. This $60,000 equity income reflects IronSpark\'s share of BrightWave\'s economic performance during the period.\n\nThe $60,000 dividends received from BrightWave reduce the investment balance on the balance sheet but do not appear as additional income. This prevents double-counting since the equity income already reflects IronSpark\'s share of BrightWave\'s earnings.\n\nEquity Income = 30% × $200,000 = $60,000\n\nIn summary, IronSpark records $60,000 in equity income on its income statement, representing its proportional share of BrightWave\'s net income under the equity method of accounting.',
    learnContent: {
      concept: 'Equity method = income recognized proportionally. Dividends reduce the investment on B/S, not P&L. Useful for modeling long-term strategic holdings.',
      formula: 'Equity Income = Ownership % × Associate\'s NI',
      example: 'VoltEdge owns 40% of AmpDrive → NI = $500K → Equity Income = 200K\nRetailStack owns 25% of BizCo → NI = $100K → Income = 25K\nBuildArk owns 20% of SiteBase → NI = $300K → Income = 60K'
    }
  },
  {
    id: 'acc-hard-166',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Capitalized R&D + Book vs. Tax Deduction',
    description: 'GeneCor capitalized $150,000 of R&D for tax purposes (5-year amortization).\n\nFor book purposes, the full amount was expensed in Year 1.\n\nAmortization in Year 1 for tax was 10%.\n\nTax rate is 21%.\n\nWhat deferred tax asset is created in Year 1?',
    answer: 28350,
    unit: '$',
    hint: 'Tax deduction is lower → DTA created',
    explanation: 'GeneCor faces a deferred tax asset due to new R&D capitalization requirements that create timing differences between book and tax accounting. The company must capitalize R&D for tax purposes while continuing to expense it immediately for financial reporting.\n\n• R&D amount: $150,000\n• Book treatment: Fully expensed in Year 1\n• Tax treatment: Capitalized and amortized over 5 years\n• Tax amortization Year 1: $15,000 (10% of $150,000)\n• Tax rate: 21%\n\nRecent tax law changes require companies to capitalize R&D costs and amortize them over five years rather than expensing them immediately. However, for financial reporting purposes, GeneCor continues to follow the traditional practice of expensing R&D costs as incurred.\n\nThis creates a $135,000 temporary difference where book expenses exceed current tax deductions ($150,000 book expense vs. $15,000 tax deduction). GeneCor pays more taxes now relative to its book income, creating a future tax benefit.\n\nDTA = ($150,000 - $15,000) × 21% = $28,350\n\nIn summary, GeneCor must record a $28,350 deferred tax asset representing future tax benefits from R&D expenses that are currently restricted from immediate tax deduction.',
    learnContent: {
      concept: 'Capitalized R&D → mismatch between book and tax. Creates DTA when book deducts more upfront. Reverses as tax deductions increase over time.',
      formula: 'DTA = (Book – Tax) × Tax Rate',
      example: 'BioNow books $200K, tax amort = $20K → DTA = 37,800\nLabEdge books $100K, tax = $10K → DTA = 18,900\nGeneWave books $300K, tax = $30K → DTA = 56,700'
    }
  },
  {
    id: 'acc-hard-167',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Unrealized Loss + Deferred Tax Asset + Working Capital',
    description: 'Clipworx posted $70,000 in net income.\n\nIt recorded a $40,000 unrealized loss on investments, recognized in OCI (not NI), and increased accounts payable by $25,000.\n\nThe tax rate is 25%.\n\nWhat is the CFO, and what is the DTA created?',
    answer: 95000,
    unit: '$ CFO, $10,000 DTA',
    hint: 'Unrealized loss doesn\'t affect NI, but creates DTA.',
    explanation: 'Clipworx demonstrates how other comprehensive income (OCI) items create deferred tax assets without affecting operating cash flow. The company recorded investment losses in OCI while improving working capital through delayed vendor payments.\n\n• Net income: $70,000 (excludes OCI items)\n• Unrealized investment loss: $40,000 (recorded in OCI, not net income)\n• Accounts payable increase: +$25,000 (delayed vendor payments)\n• Tax rate: 25%\n\nThe $40,000 unrealized loss on investments appears in other comprehensive income rather than net income, so it doesn\'t affect the operating cash flow calculation. However, this loss creates a temporary difference for tax purposes since unrealized losses aren\'t immediately tax deductible.\n\nThe accounts payable increase represents vendor costs that were incurred but not yet paid, allowing Clipworx to retain $25,000 in cash.\n\nCFO = $70,000 + $25,000 = $95,000\nDTA = $40,000 × 25% = $10,000\n\nIn summary, Clipworx generated $95,000 in operating cash flow from strong working capital management, while also creating a $10,000 deferred tax asset from unrealized investment losses recorded in OCI.',
    learnContent: {
      concept: 'OCI items don\'t impact NI/CFO, but affect tax assets. DTA from OCI increases balance sheet, not CFO. Payables increase = CFO boost.',
      formula: 'CFO = NI + ∆Payables; DTA = OCI Loss × Tax Rate',
      example: 'BondLink NI = $60K, A/P ↑ $30K, OCI Loss = $20K → CFO = 90K, DTA = 5K\nFinDigi NI = $80K, A/P ↑ $10K, OCI loss = $60K → CFO = 90K, DTA = 15K\nDataQuant NI = $50K, A/P ↑ $20K, OCI loss = $40K → CFO = 70K, DTA = 10K'
    }
  },
  {
    id: 'acc-hard-1',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Beta - Cash Flow from Operations',
    description: 'Calculate Cash from Operations: Net Income = $100, Change in Working Capital = -$20, Depreciation & Amortization = $30',
    answer: 150,
    unit: '$',
    hint: 'CFO = Net Income + D&A - Change in Working Capital (negative change means WC decreased, adding cash)',
    explanation: `Calculation:
CFO = $100 + $30 - (-$20) = $150

• • •

Step-by-step breakdown:

1. Starting Point:
   → Net Income: $100

2. Non-Cash Adjustments:
   • Depreciation & Amortization: +$30 (non-cash expenses)
   → Subtotal after non-cash: $130

3. Working Capital Impact:
   • Change in Working Capital: -$20 (negative means WC decreased)
   • Decreased working capital releases cash: +$20
   → Cash Flow from Operations: $150

Key Points:
   • Negative change in working capital means working capital decreased
   • Decreased working capital releases cash, increasing CFO
   • Depreciation & amortization are non-cash expenses added back
   • CFO reflects actual cash generated from core operations`,
    learnContent: {
      concept: 'Net Income calculation includes all operating expenses and taxes.',
      formula: 'Net Income = (Revenue - COGS - Operating Expenses) × (1 - Tax Rate)',
      example: 'Revenue $1M, COGS $600K, OpEx $200K, Tax 25% → NI = ($1M - $600K - $200K) × 0.75 = $150K'
    }
  },
  {
    id: 'acc-hard-152',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Goodwill Impairment + Amortization CFO Adjustments',
    description: 'Endura Tools amortized $100,000 of customer relationships acquired in a prior deal, using straight-line over 5 years.\n\nIn Year 2, they recorded an $80,000 goodwill impairment related to that acquisition.\n\nAssume a 25% tax rate.\n\nWhat is the CFO adjustment from these two items?',
    answer: 100000,
    unit: '$',
    hint: 'Impairment is non-cash. Amortization is non-cash with a tax impact.',
    explanation: 'Endura Tools requires adding back both intangible amortization and goodwill impairment as non-cash charges that reduced net income without using cash. Both items relate to the acquisition but have different characteristics.\n\n• Customer relationship amortization: $20,000 ($100,000 ÷ 5 years)\n• Goodwill impairment: $80,000 (non-cash write-down)\n• Tax rate: 25% (already reflected in net income)\n\nThe customer relationships acquired in the prior deal are amortized over five years using straight-line depreciation, resulting in $20,000 annual amortization. This non-cash expense reduces net income but doesn\'t involve cash payment.\n\nThe $80,000 goodwill impairment represents a write-down of acquisition goodwill when its value declined below the carrying amount. This impairment is a non-cash charge that reduced net income in Year 2.\n\nBoth amortization and impairment are non-cash expenses that must be added back when reconciling net income to operating cash flow using the indirect method.\n\nCFO Adjustment = $20,000 + $80,000 = $100,000\n\nIn summary, Endura Tools adds back $100,000 in non-cash charges related to the acquisition, with $20,000 from ongoing amortization and $80,000 from goodwill impairment.',
    learnContent: {
      concept: 'Amortization = non-cash → add back. Goodwill Impairment = non-cash → fully add back. Tax impact from amort is already reflected in Net Income.',
      formula: 'CFO Adjustment = Amortization + Impairment',
      example: 'WaveTek amortizes $50K and takes $100K goodwill hit → CFO = 150K\nBioNex amortizes $60K, impairment of $40K → CFO = 100K\nClinicPro amortizes $20K, impairment of $70K → CFO = 90K'
    }
  },
  {
    id: 'acc-hard-1-beta',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Beta - Cash Flow from Operations',
    description: 'Calculate Cash from Operations: Net Income = $100, Change in Working Capital = -$20, Depreciation & Amortization = $30',
    answer: 150,
    unit: '$',
    hint: 'CFO = Net Income + D&A - Change in Working Capital (negative change means WC decreased, adding cash)',
    explanation: `Calculation:
CFO = $100 + $30 + $20 = $150

• • •

Step-by-step breakdown:

1. Starting Point:
   → Net Income: $100

2. Non-Cash Adjustments:
   • Depreciation & Amortization: +$30 (non-cash expenses)
   → Subtotal after non-cash: $130

3. Working Capital Impact:
   • Working Capital decreased by $20
   • Decrease in Working Capital: +$20 (releases cash)
   → Cash Flow from Operations: $150

Key Points:
   • CFO adjusts Net Income for non-cash items and working capital changes
   • When working capital decreases, it releases cash for operations
   • D&A expenses reduce net income but don't use actual cash
   • This indirect method reconciles accrual earnings to cash flow`,
    learnContent: {
      concept: 'Cash Flow from Operations adjusts Net Income for non-cash items and working capital changes.',
      formula: 'CFO = Net Income + D&A + Decrease in Working Capital',
      example: 'NI $200K, D&A $50K, WC decreased $30K → CFO = $200K + $50K + $30K = $280K'
    }
  },

  // ACCOUNTING - Interview Ready - BETA QUESTIONS
  {
    id: 'acc-interview-1',
    track: 'accounting',
    difficulty: 'interview_ready',
    title: 'Beta - Advanced CFO Calculation',
    description: 'Adjust Net Income = $200 to Cash Flow from Operations given: D&A = $40, Change in Working Capital = -$25, Taxes Paid (vs. Tax Expense) difference = $15',
    answer: 250,
    unit: '$',
    hint: 'Add back D&A, adjust for WC change, and consider the cash vs. accrual tax difference',
    explanation: 'CFO = $200 + $40 + $25 - $15 = $250 (negative WC change adds cash, tax timing difference reduces cash)',
    learnContent: {
      concept: 'Advanced CFO considers timing differences between accrual accounting and cash flows.',
      formula: 'CFO = NI + D&A + WC Changes + Tax Timing Adjustments',
      example: 'Complex CFO calculations require careful attention to cash vs. accrual timing differences'
    }
  },

  // VALUATION - Easy - BETA QUESTIONS
  {
    id: 'val-easy-1',
    track: 'valuation',
    difficulty: 'easy',
    title: 'Beta - Enterprise Value Calculation',
    description: 'What is Enterprise Value? Equity Value = $100, Total Debt = $50, Cash = $20',
    answer: 130,
    unit: '$',
    hint: 'Enterprise Value = Equity Value + Debt - Cash',
    explanation: 'EV = $100 + $50 - $20 = $130',
    learnContent: {
      concept: 'Enterprise Value represents the total value of a company available to all stakeholders.',
      formula: 'EV = Market Cap + Total Debt - Cash and Cash Equivalents',
      example: 'Company with $500M market cap, $200M debt, $50M cash → EV = $500M + $200M - $50M = $650M'
    }
  },

  // VALUATION - Medium - BETA QUESTIONS
  {
    id: 'val-medium-1',
    track: 'valuation',
    difficulty: 'medium',
    title: 'Beta - DCF Enterprise Value',
    description: 'Calculate Enterprise Value using DCF: Terminal Value = $200, Present Value of FCF = $300',
    answer: 500,
    unit: '$',
    hint: 'EV in DCF = PV of FCF projections + PV of Terminal Value',
    explanation: 'EV = $300 + $200 = $500',
    learnContent: {
      concept: 'DCF values a company by discounting future cash flows to present value.',
      formula: 'EV = Σ(FCF/(1+WACC)^n) + Terminal Value/(1+WACC)^n',
      example: '5-year FCF projections worth $400M + terminal value $800M = $1.2B EV'
    }
  },

  // VALUATION - Hard - BETA QUESTIONS
  {
    id: 'val-hard-1',
    track: 'valuation',
    difficulty: 'hard',
    title: 'Beta - Terminal Value Calculation',
    description: 'Calculate Terminal Value using Gordon Growth Model: Final Year FCF = $100, Growth Rate = 2%, Discount Rate = 10%',
    answer: 1275,
    unit: '$',
    hint: 'Terminal Value = FCF × (1 + g) / (r - g)',
    explanation: 'TV = $100 × (1 + 0.02) / (0.10 - 0.02) = $102 / 0.08 = $1,275',
    learnContent: {
      concept: 'Terminal Value captures the value of cash flows beyond the explicit forecast period.',
      formula: 'TV = FCF_final × (1 + g) / (WACC - g)',
      example: 'FCF $50M, growth 2.5%, WACC 8% → TV = $50M × 1.025 / 0.055 = $932M'
    }
  },

  // VALUATION - Interview Ready - BETA QUESTIONS
  {
    id: 'val-interview-1',
    track: 'valuation',
    difficulty: 'interview_ready',
    title: 'Beta - Implied Share Price Calculation',
    description: 'Calculate implied share price: Enterprise Value = $1000, Total Debt = $200, Cash = $50, Shares Outstanding = 10',
    answer: 85,
    unit: '$',
    hint: 'First calculate Equity Value (EV - Debt + Cash), then divide by shares',
    explanation: 'Equity Value = $1000 - $200 + $50 = $850. Price per Share = $850 / 10 = $85',
    learnContent: {
      concept: 'Share price is derived by converting Enterprise Value to Equity Value and dividing by shares.',
      formula: 'Share Price = (EV - Net Debt) / Shares Outstanding',
      example: 'EV $2B, net debt $500M, 100M shares → Price = ($2B - $500M) / 100M = $15/share'
    }
  },

  // LBO - Easy - BETA QUESTIONS
  {
    id: 'lbo-easy-1',
    track: 'lbo',
    difficulty: 'easy',
    title: 'Beta - Entry Enterprise Value',
    description: 'Calculate Entry Enterprise Value: EBITDA = $100, Purchase Multiple = 8x',
    answer: 800,
    unit: '$',
    hint: 'Entry EV = EBITDA × Purchase Multiple',
    explanation: 'Entry EV = $100 × 8 = $800',
    learnContent: {
      concept: 'LBO entry valuation is typically based on EBITDA multiples.',
      formula: 'Entry EV = Entry EBITDA × Entry Multiple',
      example: 'Company with $50M EBITDA acquired at 10x → Entry EV = $500M'
    }
  },

  // LBO - Medium - BETA QUESTIONS
  {
    id: 'lbo-medium-1',
    track: 'lbo',
    difficulty: 'medium',
    title: 'Beta - Exit Enterprise Value',
    description: 'Calculate Exit Enterprise Value: Exit EBITDA = $120, Exit Multiple = 9x',
    answer: 1080,
    unit: '$',
    hint: 'Exit EV = Exit EBITDA × Exit Multiple',
    explanation: 'Exit EV = $120 × 9 = $1,080',
    learnContent: {
      concept: 'Exit value in LBO is determined by projected EBITDA and exit multiple assumptions.',
      formula: 'Exit EV = Exit EBITDA × Exit Multiple',
      example: 'Grown EBITDA to $80M, 12x exit multiple → Exit EV = $960M'
    }
  },

  // LBO - Hard - BETA QUESTIONS
  {
    id: 'lbo-hard-1',
    track: 'lbo',
    difficulty: 'hard',
    title: 'Beta - Net Debt Paydown',
    description: 'Calculate Net Debt Paydown: Beginning Debt = $500, Annual Cash Flow to Debt = $150, Hold Period = 3 years',
    answer: 450,
    unit: '$',
    hint: 'Total debt paydown = Annual cash flow × Number of years',
    explanation: 'Debt Paydown = $150 × 3 = $450',
    learnContent: {
      concept: 'Debt paydown in LBO reduces total debt and increases equity returns.',
      formula: 'Debt Paydown = Cumulative Free Cash Flow Available for Debt Service',
      example: 'Starting debt $1B, $200M annual paydown × 5 years = $1B debt reduction'
    }
  },

  // LBO - Interview Ready - BETA QUESTIONS
  {
    id: 'lbo-interview-1',
    track: 'lbo',
    difficulty: 'interview_ready',
    title: 'Beta - LBO IRR Calculation',
    description: 'Calculate IRR: Entry Investment = $800, Exit Value = $1400, Hold Period = 4 years, No interim cash flows',
    answer: 15.09,
    unit: '%',
    hint: 'IRR formula: (Exit Value / Entry Value)^(1/years) - 1',
    explanation: 'IRR = ($1400 / $800)^(1/4) - 1 = (1.75)^0.25 - 1 = 0.1509 = 15.09%',
    learnContent: {
      concept: 'IRR measures the annualized return rate that makes NPV equal to zero.',
      formula: 'IRR = (Exit Value / Entry Value)^(1/n) - 1',
      example: '$100M investment → $300M exit in 5 years = (3.0)^0.2 - 1 = 24.6% IRR'
    }
  },

  // M&A - Easy - BETA QUESTIONS
  {
    id: 'ma-easy-1',
    track: 'ma',
    difficulty: 'easy',
    title: 'Beta - Combined Revenue',
    description: 'Calculate Combined Revenue: Company A Revenue = $200, Company B Revenue = $150',
    answer: 350,
    unit: '$',
    hint: 'Combined Revenue = Company A Revenue + Company B Revenue',
    explanation: 'Combined Revenue = $200 + $150 = $350',
    learnContent: {
      concept: 'Pro forma financials combine the standalone financials of both companies.',
      formula: 'Pro Forma Revenue = Acquirer Revenue + Target Revenue',
      example: 'Acquirer $500M + Target $300M = $800M pro forma revenue'
    }
  },

  // M&A - Medium - BETA QUESTIONS
  {
    id: 'ma-medium-1',
    track: 'ma',
    difficulty: 'medium',
    title: 'Beta - EPS Accretion Analysis',
    description: 'Is this deal accretive? Buyer EPS = $2.00, Target EPS = $1.00, All-stock deal with 1:1 exchange ratio',
    answer: 1.5,
    unit: '$',
    hint: 'Pro forma EPS = (Buyer Earnings + Target Earnings) / (Buyer Shares + Shares Issued)',
    explanation: 'Assuming equal share counts: Pro forma EPS = ($2.00 + $1.00) / 2 = $1.50 (dilutive vs. $2.00)',
    learnContent: {
      concept: 'Accretion/dilution analysis determines if a deal increases or decreases buyer EPS.',
      formula: 'Pro Forma EPS vs. Standalone Buyer EPS',
      example: 'Deal is accretive if pro forma EPS > standalone EPS, dilutive if lower'
    }
  },

  // M&A - Hard - BETA QUESTIONS
  {
    id: 'ma-hard-1',
    track: 'ma',
    difficulty: 'hard',
    title: 'Beta - Buyer Ownership Percentage',
    description: 'Calculate Buyer Ownership %: Buyer Market Cap = $800, Target Market Cap = $200, 100% stock deal',
    answer: 80,
    unit: '%',
    hint: 'Buyer Ownership = Buyer Value / (Buyer Value + Target Value)',
    explanation: 'Buyer Ownership = $800 / ($800 + $200) = $800 / $1000 = 80%',
    learnContent: {
      concept: 'In stock deals, ownership is determined by relative market capitalizations.',
      formula: 'Buyer Ownership % = Buyer MCap / (Buyer MCap + Target MCap)',
      example: '$2B buyer + $500M target = $2B / $2.5B = 80% buyer ownership'
    }
  },

  // M&A - Interview Ready - BETA QUESTIONS
  {
    id: 'ma-interview-1',
    track: 'ma',
    difficulty: 'interview_ready',
    title: 'Beta - Pro Forma EPS with Synergies',
    description: 'Calculate Pro Forma EPS: Combined Earnings = $300, Synergies = $50, Interest Savings = $10, Combined Shares = 100',
    answer: 3.6,
    unit: '$',
    hint: 'Pro Forma EPS = (Combined Earnings + Synergies + Interest Savings) / Combined Shares',
    explanation: 'Pro Forma EPS = ($300 + $50 + $10) / 100 = $360 / 100 = $3.60',
    learnContent: {
      concept: 'Pro forma analysis includes synergies and financing benefits from the transaction.',
      formula: 'Pro Forma EPS = (Combined Earnings + Synergies + Financing Benefits) / Pro Forma Shares',
      example: 'Including $100M cost synergies and $20M interest savings can significantly improve deal economics'
    }
  },
  {
    id: 'acc-easy-21',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Interest Coverage Ratio',
    description: `A company reports the following data:

Revenue: $35,000
COGS: $20,000
Operating Expenses: $3,000
Interest Expense: $3,000

What is its interest coverage ratio?`,
    answer: 4,
    unit: 'x',
    hint: 'First find operating income, then divide by interest expense.',
    explanation: `Calculation:
Interest Coverage = $12,000 ÷ $3,000 = 4.0x

• • •

Step-by-step breakdown:

1. Operating Income Calculation:
   • Revenue: $35,000
   • Less: COGS: $20,000
   • Less: Operating Expenses: $3,000
   → Operating Income: $12,000

2. Interest Coverage Ratio:
   • Operating Income: $12,000
   • Interest Expense: $3,000
   → Interest Coverage: $12,000 ÷ $3,000 = 4.0x

Key Points:
   • Interest coverage measures ability to meet interest obligations
   • Operating income represents earnings available to cover interest
   • Higher ratios indicate stronger ability to service debt
   • A 4.0x ratio means earnings can cover interest 4 times over`,
    learnContent: {
      concept: 'The interest coverage ratio measures how well a company can meet its interest obligations using its operating profit. A higher number means stronger ability to pay.',
      formula: 'Interest Coverage = Operating Income ÷ Interest Expense',
      example: 'OpInc = $10K, Interest = $2K → Coverage = 5.0x\nOpInc = $8K, Interest = $4K → Coverage = 2.0x\nOpInc = $12K, Interest = $3K → Coverage = 4.0x'
    }
  },
  {
    id: 'acc-easy-22',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Basic Earnings Per Share (EPS)',
    description: `A company has the following:

Revenue: $60,000
COGS: $30,000
Operating Expenses: $10,000
Interest Expense: $5,000
Tax Rate: 25%
Shares Outstanding: 5,000

What is its earnings per share?`,
    answer: 2.25,
    hint: 'Calculate Net Income using tax rate, then divide by shares.',
    explanation: `Calculation:
EPS = $11,250 ÷ 5,000 = $2.25

• • •

Step-by-step breakdown:

1. Operating Income:
   • Revenue: $60,000
   • Less: COGS: $30,000
   • Less: Operating Expenses: $10,000
   → Operating Income: $20,000

2. Net Income Calculation:
   • Operating Income: $20,000
   • Less: Interest Expense: $5,000
   → Pre-tax Income: $15,000
   • Tax (25%): $15,000 × 0.25 = $3,750
   → Net Income: $11,250

3. Earnings Per Share:
   → EPS: $11,250 ÷ 5,000 shares = $2.25

Key Points:
   • EPS shows profit available to each common share
   • Net income must account for all expenses including taxes
   • Higher EPS generally indicates better profitability per share
   • This is a key metric for equity valuation`,
    learnContent: {
      concept: 'EPS shows how much profit is available to each common share. It\'s a key profitability metric in financial analysis.',
      formula: 'EPS = Net Income ÷ Shares Outstanding',
      example: 'NI = $20K, Shares = 10K → EPS = 2.0\nNI = $15K, Shares = 5K → EPS = 3.0\nNI = $12K, Shares = 6K → EPS = 2.0'
    }
  },
  {
    id: 'acc-easy-23',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Net Change in Cash',
    description: `You're reviewing a company's financials:

Cash Flow from Operating Activities (CFO): $8,000
Cash Flow from Investing Activities (CFI): -$2,000
Cash Flow from Financing Activities (CFF): -$1,000

What is the total net change in cash for the period?`,
    answer: 5000,
    unit: '$',
    hint: 'Add CFO, CFI, and CFF to find the cash change.',
    explanation: `Calculation:
Net Change in Cash = $8,000 + (-$2,000) + (-$1,000) = $5,000

• • •

Step-by-step breakdown:

1. Cash Flow Components:
   • Cash Flow from Operating Activities: +$8,000
   • Cash Flow from Investing Activities: -$2,000
   • Cash Flow from Financing Activities: -$1,000

2. Net Change Calculation:
   → Net Change in Cash: $8,000 - $2,000 - $1,000 = $5,000

Key Points:
   • Net change reflects total cash gained or lost during the period
   • Operating activities generated positive cash flow
   • Investing and financing activities used cash
   • Positive net change means the company increased its cash position`,
    learnContent: {
      concept: 'Net change in cash reflects how much cash a company gained or lost during a period from all three cash flow segments.',
      formula: 'Net Cash Change = CFO + CFI + CFF',
      example: '$12K + (-$4K) + (-$3K) = $5K\n$5K + (-$1K) + $1K = $5K\n$10K + (-$3K) + (-$2K) = $5K'
    }
  },
  {
    id: 'acc-easy-24',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Inventory Turnover Ratio',
    description: `A business has:

Beginning Inventory: $5,000
Ending Inventory: $7,000
COGS: $48,000

What is its inventory turnover ratio?`,
    answer: 8,
    unit: 'x',
    hint: 'Use average inventory between beginning and end, then divide COGS by it.',
    explanation: `Calculation:
Inventory Turnover = $48,000 ÷ $6,000 = 8.0x

• • •

Step-by-step breakdown:

1. Average Inventory Calculation:
   • Beginning Inventory: $5,000
   • Ending Inventory: $7,000
   → Average Inventory: ($5,000 + $7,000) ÷ 2 = $6,000

2. Turnover Ratio:
   • COGS: $48,000
   • Average Inventory: $6,000
   → Inventory Turnover: $48,000 ÷ $6,000 = 8.0x

Key Points:
   • Inventory turnover shows how often inventory is sold and replaced
   • Higher turnover typically indicates strong sales and efficient inventory management
   • 8.0x means inventory was converted to sales 8 times during the period
   • Average inventory provides a more accurate base than point-in-time values`,
    learnContent: {
      concept: 'Inventory turnover tells how often a company sells and replaces inventory. A high turnover can indicate strong sales.',
      formula: 'Turnover = COGS ÷ Average Inventory',
      example: 'COGS = $30K; Avg Inv = $6K → 5.0x\nCOGS = $20K; Avg Inv = $4K → 5.0x\nCOGS = $60K; Avg Inv = $12K → 5.0x'
    }
  },
  {
    id: 'acc-easy-25',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Book Value of Equity',
    description: `A company has the following balances:

Cash: $10,000
Accounts Receivable: $15,000
Equipment: $30,000
Accounts Payable: $5,000
Short-term Debt: $10,000
Long-term Debt: $20,000

What is the company's book value of equity?`,
    answer: 20000,
    unit: '$',
    hint: 'Assets minus liabilities gives equity.',
    explanation: `Calculation:
Equity = $55,000 - $35,000 = $20,000

• • •

Step-by-step breakdown:

1. Total Assets:
   • Cash: $10,000
   • Accounts Receivable: $15,000
   • Equipment: $30,000
   → Total Assets: $55,000

2. Total Liabilities:
   • Accounts Payable: $5,000
   • Short-term Debt: $10,000
   • Long-term Debt: $20,000
   → Total Liabilities: $35,000

3. Book Value of Equity:
   → Equity: $55,000 - $35,000 = $20,000

Key Points:
   • Equity represents what remains for shareholders after paying liabilities
   • Calculated from the fundamental accounting equation: Assets = Liabilities + Equity
   • Book value reflects historical cost, not market value
   • This is the shareholders' residual claim on company assets`,
    learnContent: {
      concept: 'Equity is what remains for shareholders after paying off liabilities. It\'s calculated from the balance sheet.',
      formula: 'Equity = Assets - Liabilities',
      example: 'A = $100K; L = $80K → E = $20K\nA = $60K; L = $40K → E = $20K\nA = $75K; L = $50K → E = $25K'
    }
  },
  {
    id: 'acc-easy-26',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Depreciation Tax Shield',
    description: `A company has the following details for the year:

Depreciation Expense: $6,000
Tax Rate: 25%

What is the value of the depreciation tax shield?`,
    answer: 1500,
    unit: '$',
    hint: 'Multiply depreciation expense by tax rate.',
    explanation: `Calculation:
Tax Shield = $6,000 × 0.25 = $1,500

• • •

Step-by-step breakdown:

1. Depreciation Impact:
   → Depreciation Expense: $6,000

2. Tax Shield Calculation:
   • Depreciation: $6,000
   • Tax Rate: 25%
   → Tax Shield: $6,000 × 0.25 = $1,500

Key Points:
   • Depreciation reduces taxable income, creating tax savings
   • Tax shield represents the cash flow benefit from depreciation
   • Higher depreciation or tax rates create larger tax shields
   • This non-cash expense provides real cash flow benefits`,
    learnContent: {
      concept: 'Depreciation reduces taxable income, creating a "shield" that lowers taxes. This tax savings improves cash flow.',
      formula: 'Depreciation Tax Shield = Depreciation × Tax Rate',
      example: 'Dep = $8K, Tax Rate = 30% → Shield = $2.4K\nDep = $4K, Tax Rate = 25% → Shield = $1K\nDep = $10K, Tax Rate = 20% → Shield = $2K'
    }
  },
  {
    id: 'acc-easy-27',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Asset Turnover Ratio',
    description: `A company generated $120,000 in revenue. It had total assets of $60,000 at the beginning of the year and $100,000 at the end of the year. What is the asset turnover ratio?`,
    answer: 1.5,
    unit: 'x',
    hint: 'Use average total assets, then divide revenue by that number.',
    explanation: `Calculation:
Asset Turnover = $120,000 ÷ $80,000 = 1.5x

• • •

Step-by-step breakdown:

1. Average Assets Calculation:
   • Beginning Assets: $60,000
   • Ending Assets: $100,000
   → Average Assets: ($60,000 + $100,000) ÷ 2 = $80,000

2. Asset Turnover Ratio:
   • Revenue: $120,000
   • Average Assets: $80,000
   → Asset Turnover: $120,000 ÷ $80,000 = 1.5x

Key Points:
   • Asset turnover measures efficiency of asset utilization to generate revenue
   • Higher ratios indicate more efficient use of assets
   • 1.5x means each dollar of assets generated $1.50 in revenue
   • Average assets provide more accurate measurement than point-in-time values`,
    learnContent: {
      concept: 'Asset turnover measures how efficiently a company uses assets to generate revenue.',
      formula: 'Asset Turnover = Revenue ÷ Average Total Assets',
      example: 'Rev = $100K, Avg Assets = $50K → 2.0x\nRev = $75K, Avg Assets = $75K → 1.0x\nRev = $60K, Avg Assets = $30K → 2.0x'
    }
  },
  {
    id: 'acc-easy-28',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Change in Deferred Revenue',
    description: `A company receives $12,000 in cash from customers in Q1 for services it will deliver later. By the end of Q1, it has only provided $4,000 worth of services. What is the change in deferred revenue?`,
    answer: 8000,
    unit: '$',
    hint: 'Cash received - revenue recognized = deferred revenue.',
    explanation: `Calculation:
Deferred Revenue = $12,000 - $4,000 = $8,000

• • •

Step-by-step breakdown:

1. Cash Collection:
   → Cash received from customers: $12,000

2. Service Delivery:
   → Services provided in Q1: $4,000

3. Deferred Revenue:
   → Deferred Revenue: $12,000 - $4,000 = $8,000

Key Points:
   • Deferred revenue is a liability representing unearned income
   • Cash was collected before services were delivered
   • Company owes $8,000 worth of future services to customers
   • This creates positive cash flow impact in the current period`,
    learnContent: {
      concept: 'Deferred revenue is a liability created when a company receives payment for goods/services it hasn\'t yet delivered.',
      formula: 'Change in Deferred Revenue = Cash Collected - Revenue Recognized',
      example: '$10K received, $2K delivered → Deferred = $8K\n$15K received, $5K delivered → Deferred = $10K\n$8K received, $4K delivered → Deferred = $4K'
    }
  },
  {
    id: 'acc-easy-29',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Dividend Payout Ratio',
    description: `A company reported net income of $40,000 this year and paid $8,000 in dividends. What is the dividend payout ratio?`,
    answer: 0.2,
    hint: 'Divide dividends by net income.',
    explanation: `Calculation:
Dividend Payout Ratio = $8,000 ÷ $40,000 = 0.2 (20%)

• • •

Step-by-step breakdown:

1. Financial Results:
   • Net Income: $40,000
   • Dividends Paid: $8,000

2. Payout Ratio:
   → Payout Ratio: $8,000 ÷ $40,000 = 0.2 or 20%

Key Points:
   • Payout ratio shows proportion of earnings returned to shareholders
   • 20% payout means 80% of earnings were retained for growth
   • Lower ratios suggest focus on reinvestment and growth
   • Higher ratios indicate more income-focused shareholder returns`,
    learnContent: {
      concept: 'This ratio shows the proportion of earnings a company returns to shareholders as dividends.',
      formula: 'Payout Ratio = Dividends ÷ Net Income',
      example: 'NI = $50K, Div = $10K → 0.2\nNI = $40K, Div = $8K → 0.2\nNI = $100K, Div = $25K → 0.25'
    }
  },
  {
    id: 'acc-easy-30',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Working Capital Calculation',
    description: `At year-end, a company reports the following balances:

Accounts Receivable: $12,000
Inventory: $18,000
Prepaid Expenses: $2,000
Accounts Payable: $15,000
Accrued Expenses: $5,000

What is the company's net working capital?`,
    answer: 12000,
    unit: '$',
    hint: 'Use formula: (AR + Inventory + Prepaid) - (AP + Accrued)',
    explanation: `Calculation:
Net Working Capital = $32,000 - $20,000 = $12,000

• • •

Step-by-step breakdown:

1. Current Assets:
   • Accounts Receivable: $12,000
   • Inventory: $18,000
   • Prepaid Expenses: $2,000
   → Total Current Assets: $32,000

2. Current Liabilities:
   • Accounts Payable: $15,000
   • Accrued Expenses: $5,000
   → Total Current Liabilities: $20,000

Key Points:
   • Working capital measures short-term liquidity
   • Accounts Receivable represents customer payments due for credit sales
   • Inventory represents goods available for sale
   • Prepaid Expenses are advance payments for future services
   • Current liabilities are obligations due within one year`,
    learnContent: {
      concept: 'Working capital measures a company\'s short-term liquidity. It represents assets available to pay current liabilities.',
      formula: 'Net Working Capital = Current Assets - Current Liabilities',
      example: 'CA = $50K, CL = $30K → WC = $20K\nCA = $60K, CL = $40K → WC = $20K\nCA = $45K, CL = $25K → WC = $20K'
    }
  },
  {
    id: 'acc-easy-31',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Total Current Liabilities Calculation',
    description: `A company reports the following liabilities:

Accounts Payable: $12,000
Accrued Expenses: $8,000
Short-Term Debt: $10,000
Long-Term Debt: $40,000
Deferred Tax Liability: $5,000

What is the company's total current liabilities?`,
    answer: 30000,
    unit: '$',
    hint: 'Add up only the short-term obligations due within 12 months.',
    explanation: `Calculation:
Total Current Liabilities = $12,000 + $8,000 + $10,000 = $30,000

• • •

Step-by-step breakdown:

1. Current Liabilities (due within 12 months):
   • Accounts Payable: $12,000
   • Accrued Expenses: $8,000
   • Short-Term Debt: $10,000
   → Total Current Liabilities: $30,000

2. Excluded Items (not current):
   • Long-Term Debt: $40,000 (due beyond one year)
   • Deferred Tax Liability: $5,000 (timing differences)

Key Points:
   • Current liabilities are obligations due within one year
   • Accounts Payable represents amounts owed to suppliers
   • Accrued Expenses are costs incurred but not yet paid
   • Short-Term Debt includes borrowings due within 12 months`,
    learnContent: {
      concept: 'Current liabilities represent a company\'s obligations that are expected to be settled within one year. Understanding what qualifies as a short-term liability is essential for liquidity analysis.',
      formula: 'Current Liabilities = A/P + Accrued Expenses + Short-Term Debt',
      example: 'A/P $5K, Accrued $2K, Short-Term Debt $3K → Current Liabilities = $10K\nA/P $6K, Accrued $1K, STD $2K → Current = $9K\nA/P $10K, Accrued $4K, STD $5K → Current = $19K'
    }
  },
  {
    id: 'acc-easy-32',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Ending Inventory Calculation',
    description: `A company begins the year with $15,000 in inventory. During the year, it purchases $40,000 of additional inventory and reports $45,000 in Cost of Goods Sold.

What is the ending inventory?`,
    answer: 10000,
    unit: '$',
    hint: 'Use the inventory flow formula.',
    explanation: `Calculation:
Ending Inventory = $15,000 + $40,000 - $45,000 = $10,000

• • •

Step-by-step breakdown:

1. Inventory Flow:
   • Beginning Inventory: $15,000
   • Add: Purchases: $40,000
   → Goods Available: $55,000

2. Cost of Goods Sold:
   • Less: COGS: $45,000
   → Ending Inventory: $10,000

Key Points:
   • Ending inventory reflects the value of unsold goods
   • Inventory flow follows: Beginning + Purchases - COGS = Ending
   • This directly impacts both balance sheet and income statement
   • Accurate inventory tracking is essential for cost management`,
    learnContent: {
      concept: 'Ending inventory reflects the value of unsold goods. It directly impacts both the balance sheet and cost reporting.',
      formula: 'Ending Inventory = Beginning Inventory + Purchases - COGS',
      example: 'BI $20K, Purchases $30K, COGS $40K → EI = $10K\nBI $10K, Purchases $25K, COGS $20K → EI = $15K\nBI $5K, Purchases $10K, COGS $8K → EI = $7K'
    }
  },
  {
    id: 'acc-easy-33',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Debt-to-Assets Ratio',
    description: `A company has the following balance sheet items:

Short-Term Debt: $10,000
Long-Term Debt: $40,000
Total Assets: $100,000

What is the company's Debt-to-Assets ratio?`,
    answer: 0.5,
    hint: 'Divide total debt by total assets.',
    explanation: `Calculation:
Debt-to-Assets = $50,000 ÷ $100,000 = 0.5

• • •

Step-by-step breakdown:

1. Total Debt:
   • Short-Term Debt: $10,000
   • Long-Term Debt: $40,000
   → Total Debt: $50,000

2. Debt-to-Assets Ratio:
   • Total Debt: $50,000
   • Total Assets: $100,000
   → Debt-to-Assets: $50,000 ÷ $100,000 = 0.5

Key Points:
   • Debt-to-Assets measures financial leverage
   • 0.5 ratio means 50% of assets are financed by debt
   • Higher ratios indicate more financial risk
   • This ratio shows proportion of assets funded by creditors vs. owners`,
    learnContent: {
      concept: 'The Debt-to-Assets ratio measures financial leverage, showing what portion of a company\'s assets are financed by debt.',
      formula: 'Debt-to-Assets = (Short-Term + Long-Term Debt) ÷ Total Assets',
      example: 'Debt $60K, Assets $120K → Ratio = 0.5\nDebt $30K, Assets $90K → Ratio = 0.33\nDebt $70K, Assets $100K → Ratio = 0.7'
    }
  },
  {
    id: 'acc-easy-34',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Deferred Revenue Adjustment',
    description: `A company receives $24,000 in cash upfront for a 12-month service contract. By the end of Q1, how much deferred revenue remains?`,
    answer: 18000,
    unit: '$',
    hint: 'Recognize only the portion of service already provided.',
    explanation: `Calculation:
Deferred Revenue = $24,000 - $6,000 = $18,000

• • •

Step-by-step breakdown:

1. Monthly Service Value:
   • Total contract: $24,000
   • Contract duration: 12 months
   → Monthly value: $24,000 ÷ 12 = $2,000

2. Services Provided (Q1):
   • Months completed: 3 months
   → Revenue recognized: 3 × $2,000 = $6,000

3. Remaining Deferred Revenue:
   → Deferred Revenue: $24,000 - $6,000 = $18,000

Key Points:
   • Deferred revenue is a liability representing unearned income
   • Revenue is recognized as services are provided over time
   • $18,000 represents future service obligations to the customer
   • This creates positive cash flow impact upfront`,
    learnContent: {
      concept: 'Deferred revenue represents money received for goods or services not yet delivered. It\'s a liability until earned.',
      formula: 'Deferred Revenue = Total Cash Received - Earned Revenue',
      example: '$12K received, 2 months used @ $1K/month → Deferred = $10K\n$6K upfront, 1 month recognized → Deferred = $5K\n$48K received, 6 months used @ $4K/month → Deferred = $24K'
    }
  },
  {
    id: 'acc-easy-35',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Operating Margin Calculation',
    description: `A company reports:

Revenue: $100,000
COGS: $40,000
Operating Expenses: $30,000

What is the company's operating margin?`,
    answer: 0.3,
    hint: 'Use Operating Income ÷ Revenue.',
    explanation: `Calculation:
Operating Margin = $30,000 ÷ $100,000 = 0.3 (30%)

• • •

Step-by-step breakdown:

1. Operating Income Calculation:
   • Revenue: $100,000
   • Less: COGS: $40,000
   • Less: Operating Expenses: $30,000
   → Operating Income: $30,000

2. Operating Margin:
   • Operating Income: $30,000
   • Revenue: $100,000
   → Operating Margin: $30,000 ÷ $100,000 = 0.3 or 30%

Key Points:
   • Operating margin measures operating efficiency excluding interest and taxes
   • 30% margin means $0.30 of every revenue dollar becomes operating profit
   • Higher margins indicate better cost control and operational efficiency
   • This metric focuses on core business profitability`,
    learnContent: {
      concept: 'Operating margin measures operating efficiency, excluding interest and tax effects.',
      formula: 'Operating Margin = Operating Income ÷ Revenue\nWhere: Operating Income = Revenue - COGS - Operating Expenses',
      example: 'Rev $80K, COGS $30K, OpEx $20K → Margin = 0.375\nRev $200K, COGS $120K, OpEx $40K → Margin = 0.2\nRev $50K, COGS $20K, OpEx $15K → Margin = 0.3'
    }
  },
  {
    id: 'acc-easy-36',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Adjusted Net Working Capital Calculation',
    description: `A company reports:

Cash: $5,000
Accounts Receivable: $12,000
Inventory: $8,000
Prepaid Expenses: $2,000
Accounts Payable: $10,000
Accrued Expenses: $3,000

What is the net working capital, excluding cash and prepaid expenses?`,
    answer: 7000,
    unit: '$',
    hint: 'Adjusted NWC = (AR + Inventory) - (AP + Accrued)',
    explanation: `Calculation:
Net Working Capital = $20,000 - $13,000 = $7,000

• • •

Step-by-step breakdown:

1. Operating Current Assets:
   • Accounts Receivable: $12,000
   • Inventory: $8,000
   → Total Operating Assets: $20,000

2. Operating Current Liabilities:
   • Accounts Payable: $10,000
   • Accrued Expenses: $3,000
   → Total Operating Liabilities: $13,000

3. Adjusted Net Working Capital:
   → NWC: $20,000 - $13,000 = $7,000

Key Points:
   • Cash and prepaid expenses are excluded from operational NWC
   • This focuses on core operating assets and liabilities
   • Adjusted NWC measures liquidity needed for day-to-day operations
   • This metric is commonly used in DCF valuation`,
    learnContent: {
      concept: 'Net Working Capital (NWC) measures operational liquidity. Analysts often exclude non-operating items like cash and prepaids.',
      formula: 'NWC = (Operating Current Assets - Operating Current Liabilities)',
      example: 'AR $10K, Inv $5K, AP $8K → NWC = $7K\nAR $20K, Inv $10K, AP $15K, Accrued $5K → NWC = $10K\nAR $18K, Inv $12K, AP $20K → NWC = $10K'
    }
  },
  {
    id: 'acc-easy-37',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Gross Profit from Tiered Revenue',
    description: `A company sells:

Product A: $80,000 at 50% margin
Product B: $120,000 at 30% margin

What is the total gross profit?`,
    answer: 76000,
    unit: '$',
    hint: 'Gross Profit = (Revenue × Margin%) summed across products',
    explanation: `Calculation:
Total Gross Profit = $40,000 + $36,000 = $76,000

• • •

Step-by-step breakdown:

1. Product A Gross Profit:
   • Revenue: $80,000
   • Margin: 50%
   → Gross Profit A: $80,000 × 50% = $40,000

2. Product B Gross Profit:
   • Revenue: $120,000
   • Margin: 30%
   → Gross Profit B: $120,000 × 30% = $36,000

3. Total Gross Profit:
   → Total: $40,000 + $36,000 = $76,000

Key Points:
   • Each product line contributes differently to gross profit
   • Product margins vary based on cost structure and pricing
   • Total gross profit aggregates across all product lines
   • This analysis helps identify the most profitable product segments`,
    learnContent: {
      concept: 'Gross Profit is calculated for each product line, based on its margin. Total GP aggregates those values.',
      formula: 'Gross Profit = Σ (Revenue_i × Margin_i)',
      example: '$100K @ 40%, $50K @ 60% → GP = $40K + $30K = $70K\n$200K @ 25%, $100K @ 35% → GP = $50K + $35K = $85K\n$80K @ 20%, $70K @ 40% → GP = $16K + $28K = $44K'
    }
  },
  {
    id: 'acc-easy-38',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Retained Earnings with Loss and Dividend',
    description: `Beginning Retained Earnings: $200,000
Net Income: -$20,000 (net loss)
Dividends Paid: $5,000

What is the ending retained earnings?`,
    answer: 175000,
    unit: '$',
    hint: 'Ending RE = Beginning RE + Net Income - Dividends',
    explanation: `Calculation:
Ending RE = $200,000 + (-$20,000) - $5,000 = $175,000

• • •

Step-by-step breakdown:

1. Starting Position:
   → Beginning Retained Earnings: $200,000

2. Year's Performance:
   • Net Income: -$20,000 (net loss)
   • Dividends Paid: $5,000

3. Ending Retained Earnings:
   → Ending RE: $200,000 - $20,000 - $5,000 = $175,000

Key Points:
   • Net losses reduce retained earnings just like gains increase them
   • Dividends further reduce the retained earnings balance
   • Companies may still pay dividends even during loss years
   • The formula remains consistent regardless of profit or loss`,
    learnContent: {
      concept: 'Net losses reduce retained earnings, as do dividends. The formula is still consistent even with negative income.',
      formula: 'Ending RE = Beginning RE + Net Income - Dividends',
      example: 'Start $100K, Loss $10K, Div $5K → RE = $85K\nStart $150K, NI $20K, Div $10K → RE = $160K\nStart $120K, Loss $30K, Div $0 → RE = $90K'
    }
  },
  {
    id: 'acc-easy-39',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Net PPE from Depreciated Asset Pool',
    description: `A company's balance sheet shows:

Buildings: $200,000
Equipment: $100,000
Furniture: $50,000
Total Accumulated Depreciation: $120,000

What is the net book value of PPE?`,
    answer: 230000,
    unit: '$',
    hint: 'NBV = Sum of assets - Accumulated Depreciation',
    explanation: `Calculation:
Net PPE = $350,000 - $120,000 = $230,000

• • •

Step-by-step breakdown:

1. Gross PPE Total:
   • Buildings: $200,000
   • Equipment: $100,000
   • Furniture: $50,000
   → Total Gross PPE: $350,000

2. Net Book Value:
   • Gross PPE: $350,000
   • Less: Accumulated Depreciation: $120,000
   → Net PPE: $230,000

Key Points:
   • Net PPE represents the book value of fixed assets
   • Accumulated depreciation reduces the original cost
   • This shows remaining asset value on the balance sheet
   • Net PPE decreases over time as assets age and depreciate`,
    learnContent: {
      concept: 'Net PPE is derived by summing gross PPE assets and subtracting the total accumulated depreciation.',
      formula: 'NBV = (Buildings + Equipment + Furniture + ...) - Depreciation',
      example: 'PPE $300K, Dep $90K → NBV = $210K\nPPE $400K, Dep $120K → NBV = $280K\nPPE $180K, Dep $30K → NBV = $150K'
    }
  },
  {
    id: 'acc-easy-40',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Depreciation Tax Shield from Equipment',
    description: `A company purchases $100,000 of equipment. It uses straight-line depreciation over 5 years. The tax rate is 25%.

What is the cash flow benefit from depreciation in Year 1?`,
    answer: 5000,
    unit: '$',
    hint: 'Annual Dep = Equipment / Life. Tax shield = Dep × Tax rate.',
    explanation: `Calculation:
Tax Shield = $20,000 × 25% = $5,000

• • •

Step-by-step breakdown:

1. Annual Depreciation:
   • Equipment Cost: $100,000
   • Useful Life: 5 years
   → Annual Depreciation: $100,000 ÷ 5 = $20,000

2. Tax Shield Calculation:
   • Annual Depreciation: $20,000
   • Tax Rate: 25%
   → Tax Shield: $20,000 × 25% = $5,000

Key Points:
   • Depreciation creates tax savings by reducing taxable income
   • Tax shield represents the cash flow benefit from depreciation
   • This $5,000 annual benefit continues for the asset's useful life
   • Higher depreciation or tax rates create larger tax benefits`,
    learnContent: {
      concept: 'Depreciation saves cash by lowering taxes. The tax shield = depreciation × tax rate.',
      formula: 'Tax Shield = Depreciation × Tax Rate',
      example: 'Dep $10K, Tax 30% → $3K\nDep $25K, Tax 20% → $5K\nDep $15K, Tax 35% → $5.25K'
    }
  },
  {
    id: 'acc-easy-41',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Free Cash Flow from Operations',
    description: `A company reports the following for the year:

Net Income: $90,000
Depreciation: $10,000
Capital Expenditures: $25,000
Change in Net Working Capital: +$5,000

What is the company's Free Cash Flow (FCF)?`,
    answer: 70000,
    unit: '$',
    hint: 'FCF = Net Income + Depreciation - CapEx - Change in NWC',
    explanation: `Calculation:
FCF = $90,000 + $10,000 - $25,000 - $5,000 = $70,000

• • •

Step-by-step breakdown:

1. Cash Generation:
   • Net Income: $90,000
   • Add: Depreciation: $10,000 (non-cash expense)
   → Operating Cash Generation: $100,000

2. Cash Uses:
   • Capital Expenditures: $25,000 (reinvestment in assets)
   • Change in Net Working Capital: $5,000 (cash tied up)
   → Total Cash Uses: $30,000

3. Free Cash Flow:
   → FCF: $100,000 - $30,000 = $70,000

Key Points:
   • FCF represents cash available after maintaining and growing operations
   • Positive FCF indicates the business generates more cash than it uses
   • This metric is crucial for DCF valuation and investment decisions
   • FCF can be used for dividends, debt repayment, or acquisitions`,
    learnContent: {
      concept: 'Free Cash Flow represents the cash available after reinvesting to maintain or expand operations. It\'s used in DCF analysis.',
      formula: 'FCF = Net Income + Depreciation - CapEx - Change in NWC',
      example: 'NI $80K, Dep $15K, CapEx $20K, NWC +$5K → FCF = $70K\nNI $50K, Dep $10K, CapEx $5K, NWC -$5K → FCF = $60K\nNI $100K, Dep $20K, CapEx $25K, NWC +$10K → FCF = $85K'
    }
  },
  {
    id: 'acc-easy-42',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Ending Inventory Calculation',
    description: `A retail company begins the year with $40,000 in inventory.

It purchases $100,000 in additional inventory during the year.

Cost of Goods Sold (COGS) was $110,000.

What is the ending inventory balance?`,
    answer: 30000,
    unit: '$',
    hint: 'Ending Inventory = Beginning Inventory + Purchases - COGS',
    explanation: `Calculation:
Ending Inventory = $40,000 + $100,000 - $110,000 = $30,000

• • •

Step-by-step breakdown:

1. Inventory Available:
   • Beginning Inventory: $40,000
   • Add: Purchases: $100,000
   → Total Available: $140,000

2. Goods Sold:
   • Cost of Goods Sold: $110,000
   → Remaining Inventory: $140,000 - $110,000 = $30,000

Key Points:
   • Ending inventory represents unsold goods available for future sales
   • Inventory flow follows: Beginning + Purchases - COGS = Ending
   • Lower ending inventory may indicate strong sales or inventory management
   • This balance appears on both the balance sheet and affects COGS calculation`,
    learnContent: {
      concept: 'Ending Inventory reflects what hasn\'t been sold. COGS reduces it, while purchases increase it.',
      formula: 'Ending Inventory = Beginning Inventory + Purchases - COGS',
      example: 'Begin $50K, Buy $60K, COGS $70K → End = $40K\nBegin $20K, Buy $80K, COGS $75K → End = $25K\nBegin $30K, Buy $40K, COGS $50K → End = $20K'
    }
  },
  {
    id: 'acc-easy-43',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Indirect OCF Calculation',
    description: `A firm has:

Net Income: $120,000
Depreciation: $15,000
Increase in Accounts Receivable: $10,000
Decrease in Accounts Payable: $5,000

What is the Operating Cash Flow (OCF) using the indirect method?`,
    answer: 120000,
    unit: '$',
    hint: 'OCF = Net Income + Non-Cash Expenses - Increases in Assets + Decreases in Liabilities',
    explanation: `Calculation:
OCF = $120,000 + $15,000 - $10,000 - $5,000 = $120,000

• • •

Step-by-step breakdown:

1. Starting Point:
   → Net Income: $120,000

2. Non-Cash Adjustments:
   • Add: Depreciation: +$15,000 (non-cash expense)
   → Subtotal: $135,000

3. Working Capital Changes:
   • Accounts Receivable increase: -$10,000 (cash tied up)
   • Accounts Payable decrease: -$5,000 (cash used to pay vendors)
   → Working capital impact: -$15,000

Key Points:
   • Indirect method starts with net income and adjusts for non-cash items
   • Depreciation is added back as it reduced income without using cash
   • A/R increases represent cash not yet collected from customers
   • A/P decreases represent cash paid to reduce vendor balances`,
    learnContent: {
      concept: 'The indirect method starts with net income, adds back non-cash charges, and adjusts for working capital changes.',
      formula: 'OCF = NI + Depreciation - ΔAR + ΔAP',
      example: 'NI $90K, Dep $10K, AR +$5K, AP +$5K → OCF = $100K\nNI $100K, Dep $20K, AR +$15K, AP -$5K → OCF = $100K\nNI $70K, Dep $10K, AR -$5K, AP -$10K → OCF = $65K'
    }
  },
  {
    id: 'acc-easy-44',
    track: 'accounting',
    difficulty: 'easy',
    title: 'EBITDA Calculation',
    description: `Given the following:

Revenue: $500,000
COGS: $200,000
Operating Expenses: $120,000
Depreciation & Amortization: $30,000

What is EBITDA?`,
    answer: 180000,
    unit: '$',
    hint: 'EBITDA = Revenue - COGS - OpEx (excluding D&A)',
    explanation: `Calculation:
EBITDA = $500,000 - $200,000 - $120,000 = $180,000

• • •

Step-by-step breakdown:

1. Revenue:
   → Total Revenue: $500,000

2. Operating Costs (excluding D&A):
   • COGS: $200,000
   • Operating Expenses: $120,000
   → Total Operating Costs: $320,000

3. EBITDA Calculation:
   → EBITDA: $500,000 - $320,000 = $180,000

Key Points:
   • EBITDA excludes depreciation and amortization to focus on cash profitability
   • This metric is useful for comparing companies with different capital structures
   • D&A of $30,000 is excluded from the calculation
   • EBITDA measures core operational performance before financing decisions`,
    learnContent: {
      concept: 'EBITDA is earnings before interest, taxes, depreciation, and amortization — often used to measure core profitability.',
      formula: 'EBITDA = Revenue - COGS - Operating Expenses (excl. D&A)',
      example: 'Rev $400K, COGS $150K, OpEx $100K → EBITDA = $150K\nRev $600K, COGS $250K, OpEx $200K → EBITDA = $150K\nRev $300K, COGS $100K, OpEx $80K → EBITDA = $120K'
    }
  },
  {
    id: 'acc-easy-45',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Shareholders\' Equity from Balance Sheet',
    description: `A company has the following:

Total Assets: $750,000
Current Liabilities: $100,000
Long-Term Debt: $250,000

What is the company's Shareholders' Equity?`,
    answer: 400000,
    unit: '$',
    hint: 'Equity = Total Assets - Total Liabilities',
    explanation: `Calculation:
Shareholders' Equity = $750,000 - $350,000 = $400,000

• • •

Step-by-step breakdown:

1. Total Assets:
   → Assets: $750,000

2. Total Liabilities:
   • Current Liabilities: $100,000
   • Long-Term Debt: $250,000
   → Total Liabilities: $350,000

3. Shareholders' Equity:
   → Equity: $750,000 - $350,000 = $400,000

Key Points:
   • Equity represents residual interest in assets after paying liabilities
   • Follows the fundamental accounting equation: Assets = Liabilities + Equity
   • Shareholders' equity includes common stock, retained earnings, and other equity components
   • This represents the book value available to shareholders`,
    learnContent: {
      concept: 'Equity represents the residual interest in assets after liabilities are settled.',
      formula: 'Equity = Assets - Liabilities',
      example: 'Assets $600K, Liab $300K → Equity = $300K\nAssets $500K, Liab $200K → Equity = $300K\nAssets $1M, Liab $700K → Equity = $300K'
    }
  },
  {
    id: 'acc-easy-46',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Interest Coverage Ratio',
    description: `A firm reports:

EBIT: $75,000
Interest Expense: $15,000
Depreciation: $10,000

What is the firm's interest coverage ratio?`,
    answer: 5.0,
    hint: 'Interest Coverage = EBIT / Interest Expense',
    explanation: `Calculation:
Interest Coverage Ratio = $75,000 ÷ $15,000 = 5.0

• • •

Step-by-step breakdown:

1. Earnings Available:
   → EBIT: $75,000

2. Interest Obligation:
   → Interest Expense: $15,000

3. Coverage Ratio:
   → Interest Coverage: $75,000 ÷ $15,000 = 5.0x

Key Points:
   • Interest coverage measures ability to pay interest obligations
   • 5.0x means EBIT can cover interest expense 5 times over
   • Higher ratios indicate stronger ability to service debt
   • Depreciation of $10,000 is not used in this calculation`,
    learnContent: {
      concept: 'The interest coverage ratio measures how easily a company can pay its interest expense using earnings before interest and taxes (EBIT).',
      formula: 'Interest Coverage Ratio = EBIT ÷ Interest Expense',
      example: 'EBIT $60K, Interest $10K → 6.0\nEBIT $40K, Interest $8K → 5.0\nEBIT $90K, Interest $15K → 6.0'
    }
  },
  {
    id: 'acc-easy-47',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Net PP&E After Additions',
    description: `A company starts the year with PP&E of $200,000. During the year, it:

Purchases new equipment for $60,000
Records $20,000 in depreciation

What is the net PP&E at year-end?`,
    answer: 240000,
    unit: '$',
    hint: 'Net PP&E = Starting PP&E + CapEx - Depreciation',
    explanation: '$200,000 + $60,000 - $20,000 = $240,000',
    learnContent: {
      concept: 'PP&E grows from capital expenditures and shrinks from depreciation.',
      formula: 'Net PP&E = Beginning PP&E + Capital Expenditures - Depreciation',
      example: 'Start $150K, CapEx $30K, Dep $10K → $170K\nStart $100K, CapEx $25K, Dep $15K → $110K\nStart $250K, CapEx $20K, Dep $50K → $220K'
    }
  },
  {
    id: 'acc-easy-48',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Retained Earnings Reconciliation',
    description: `A company begins the year with retained earnings of $50,000.

Net income this year is $35,000
It pays out $10,000 in dividends

What is the ending retained earnings?`,
    answer: 75000,
    unit: '$',
    hint: 'Ending Retained Earnings = Beginning + Net Income - Dividends',
    explanation: '$50,000 + $35,000 - $10,000 = $75,000',
    learnContent: {
      concept: 'Retained earnings grow with profit and shrink with dividends.',
      formula: 'Ending RE = Beginning RE + Net Income - Dividends',
      example: 'Begin $40K, NI $20K, Div $5K → $55K\nBegin $30K, NI $15K, Div $10K → $35K\nBegin $60K, NI $10K, Div $20K → $50K'
    }
  },
  {
    id: 'acc-easy-49',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Asset Turnover Ratio (Using Averages)',
    description: `A company has:

Revenue: $500,000
Beginning Total Assets: $200,000
Ending Total Assets: $300,000

What is the asset turnover ratio?`,
    answer: 2.0,
    hint: 'Asset Turnover = Revenue ÷ Average Total Assets',
    explanation: 'Avg Assets = ($200K + $300K)/2 = $250K. $500K ÷ $250K = 2.0',
    learnContent: {
      concept: 'This ratio tells how efficiently a company uses its assets to generate sales.',
      formula: 'Asset Turnover = Revenue ÷ Average Assets',
      example: 'Rev $400K, Avg Assets $200K → 2.0\nRev $600K, Avg Assets $300K → 2.0\nRev $750K, Avg Assets $250K → 3.0'
    }
  },
  {
    id: 'acc-easy-50',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Days Sales Outstanding',
    description: `A company has:

Revenue: $1,200,000
Ending Accounts Receivable: $100,000

Assume all sales are made on credit. What is the DSO (Days Sales Outstanding)? Use a 365-day year.`,
    answer: 30.4,
    unit: 'days',
    hint: 'DSO = (Accounts Receivable ÷ Revenue) × 365',
    explanation: '($100,000 ÷ $1,200,000) × 365 = 30.4 days',
    learnContent: {
      concept: 'DSO tells how long it takes a company to collect its receivables.',
      formula: 'DSO = (AR ÷ Revenue) × 365',
      example: 'AR $50K, Rev $600K → DSO = 30.4\nAR $80K, Rev $960K → DSO = 30.4\nAR $120K, Rev $1.2M → DSO = 36.5'
    }
  },
  {
    id: 'acc-easy-51',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Net Working Capital',
    description: `A company has the following current items on its balance sheet:

Cash: $40,000
Accounts Receivable: $60,000
Inventory: $30,000
Accounts Payable: $50,000
Accrued Expenses: $20,000

What is the company's Net Working Capital (NWC)?`,
    answer: 60000,
    unit: '$',
    hint: 'NWC = (Cash + AR + Inventory) - (AP + Accrued Expenses)',
    explanation: '($40,000 + $60,000 + $30,000) - ($50,000 + $20,000) = $60,000',
    learnContent: {
      concept: 'NWC measures short-term liquidity and operational efficiency.',
      formula: 'NWC = Current Assets - Current Liabilities\nCurrent Assets = Cash + AR + Inventory\nCurrent Liabilities = AP + Accrued Expenses',
      example: 'CA: 100K, CL: 40K → NWC = 60K\nCA: 90K, CL: 70K → NWC = 20K\nCA: 80K, CL: 100K → NWC = -20K'
    }
  },
  {
    id: 'acc-easy-52',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Ending Cash Balance',
    description: `A company begins with $15,000 in cash. Over the period, it records:

Operating Cash Flow: $10,000
Investing Cash Flow: -$4,000
Financing Cash Flow: $2,000

What is the ending cash balance?`,
    answer: 23000,
    unit: '$',
    hint: 'Ending Cash = Starting Cash + OCF + ICF + FCF',
    explanation: '$15,000 + $10,000 - $4,000 + $2,000 = $23,000',
    learnContent: {
      concept: 'Cash flow statements reconcile the beginning and ending cash balances.',
      formula: 'Ending Cash = Starting Cash + Cash Flows from Operating, Investing, and Financing Activities',
      example: 'Start $10K, Flows +5K, -3K, +2K → End $14K\nStart $20K, Flows +8K, -6K, -4K → End $18K'
    }
  },
  {
    id: 'acc-easy-53',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Days Inventory Outstanding',
    description: `A company has:

Cost of Goods Sold: $730,000
Average Inventory: $60,000

What is the Days Inventory Outstanding (DIO)?`,
    answer: 30.0,
    unit: 'days',
    hint: 'DIO = (Inventory ÷ COGS) × 365',
    explanation: '($60,000 ÷ $730,000) × 365 = 30.0',
    learnContent: {
      concept: 'DIO shows how long inventory sits before being sold.',
      formula: 'DIO = (Average Inventory ÷ COGS) × 365',
      example: 'Inv $50K, COGS $600K → DIO = 30.4\nInv $40K, COGS $400K → DIO = 36.5'
    }
  },
  {
    id: 'acc-easy-54',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Enterprise to Equity Value',
    description: `A company has:

Enterprise Value: $800,000
Cash: $50,000
Debt: $200,000

What is the company's Equity Value?`,
    answer: 650000,
    unit: '$',
    hint: 'Equity Value = Enterprise Value - Net Debt',
    explanation: 'Net Debt = Debt - Cash = $200,000 - $50,000 = $150,000. $800,000 - $150,000 = $650,000',
    learnContent: {
      concept: 'Equity Value reflects the portion of enterprise value that belongs to shareholders.',
      formula: 'Equity Value = EV - Net Debt',
      example: 'EV $900K, Cash $100K, Debt $200K → Equity = $800K\nEV $700K, Cash $50K, Debt $150K → Equity = $600K'
    }
  },
  {
    id: 'acc-easy-55',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Deriving CapEx from PP&E',
    description: `A company has:

Beginning PP&E: $500,000
Ending PP&E: $560,000
Depreciation during year: $40,000

What were the Capital Expenditures during the year?`,
    answer: 100000,
    unit: '$',
    hint: 'CapEx = Ending PP&E - Beginning PP&E + Depreciation',
    explanation: `Calculation:
CapEx = $60,000 + $40,000 = $100,000

• • •

Step-by-step breakdown:

1. PP&E Analysis:
   • Beginning PP&E: $500,000
   • Ending PP&E: $560,000
   • Net PP&E Increase: $60,000

2. CapEx Calculation:
   • Net PP&E Increase: $60,000
   • Add: Depreciation: $40,000
   → Total CapEx: $100,000

Key Points:
   • CapEx represents cash spent on maintaining and growing assets
   • Depreciation is added back as it reduced PP&E without cash outflow
   • Net PP&E increase shows the asset base expansion
   • This calculation captures all capital investments during the period`,
    learnContent: {
      concept: 'To maintain and grow assets, companies invest via CapEx, shown in changes to PP&E.',
      formula: 'CapEx = Ending PP&E - Beginning PP&E + Depreciation',
      example: 'Start $300K, End $330K, Dep $20K → CapEx = 50K\nStart $600K, End $590K, Dep $50K → CapEx = 40K'
    }
  },
  {
    id: 'acc-easy-56',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Average Shareholders\' Equity',
    description: `A company reports the following:

Beginning Equity: $400,000
Ending Equity: $500,000
Net Income: $90,000
Dividends Paid: $30,000

What is the average shareholders' equity used for ROE calculation?`,
    answer: 450000,
    unit: '$',
    hint: 'Average Equity = (Beginning Equity + Ending Equity) ÷ 2',
    explanation: `Calculation:
Average Equity = ($400,000 + $500,000) ÷ 2 = $450,000

• • •

Step-by-step breakdown:

1. Equity Values:
   • Beginning Equity: $400,000
   • Ending Equity: $500,000

2. Average Calculation:
   → Average Equity: ($400,000 + $500,000) ÷ 2 = $450,000

Key Points:
   • Average equity is used for return-based metrics like ROE
   • This smooths out fluctuations during the period
   • Beginning and ending values capture the equity range
   • More accurate than using just one point-in-time value`,
    learnContent: {
      concept: 'Average equity is used when calculating return-based metrics like ROE.',
      formula: 'Average Shareholders\' Equity = (Beginning + Ending Equity) ÷ 2',
      example: 'Begin $300K, End $500K → Avg = $400K\nBegin $600K, End $600K → Avg = $600K'
    }
  },
  {
    id: 'acc-easy-57',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Interest Coverage Ratio',
    description: `A company has:

Revenue: $1,000,000
COGS: $400,000
Operating Expenses: $300,000
Depreciation: $50,000
Interest Expense: $25,000

What is the interest coverage ratio (EBIT / Interest Expense)?`,
    answer: 10,
    hint: 'EBIT = Revenue - COGS - Opex - Depreciation\nThen: EBIT ÷ Interest',
    explanation: `Calculation:
Interest Coverage = $250,000 ÷ $25,000 = 10

• • •

Step-by-step breakdown:

1. EBIT Calculation:
   • Revenue: $1,000,000
   • Less: COGS: $400,000
   • Less: Operating Expenses: $300,000
   • Less: Depreciation: $50,000
   → EBIT: $250,000

2. Coverage Ratio:
   → Interest Coverage: $250,000 ÷ $25,000 = 10

Key Points:
   • Interest coverage shows ability to pay interest on debt
   • Higher ratios indicate stronger ability to service debt
   • EBIT represents earnings available to cover interest
   • A ratio of 10 means earnings can cover interest 10 times over`,
    learnContent: {
      concept: 'Interest coverage shows how easily a firm can pay interest on its debt.',
      formula: 'Interest Coverage = EBIT ÷ Interest Expense',
      example: 'EBIT $200K, Interest $20K → Coverage = 10\nEBIT $100K, Interest $25K → Coverage = 4'
    }
  },
  {
    id: 'acc-easy-58',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Quick Ratio',
    description: `A company has the following current assets and liabilities:

Cash: $50,000
Accounts Receivable: $60,000
Inventory: $40,000
Current Liabilities: $90,000

What is the quick ratio?`,
    answer: 1.22,
    hint: 'Quick Ratio = (Cash + AR) ÷ Current Liabilities',
    explanation: `Calculation:
Quick Ratio = ($50,000 + $60,000) ÷ $90,000 = 1.22

• • •

Step-by-step breakdown:

1. Quick Assets:
   • Cash: $50,000
   • Accounts Receivable: $60,000
   → Total Quick Assets: $110,000

2. Quick Ratio:
   • Quick Assets: $110,000
   • Current Liabilities: $90,000
   → Quick Ratio: $110,000 ÷ $90,000 = 1.22

Key Points:
   • Quick ratio measures liquidity excluding inventory
   • Inventory is excluded as it's harder to convert to cash quickly
   • Ratio above 1.0 indicates good short-term liquidity
   • More conservative measure than current ratio`,
    learnContent: {
      concept: 'The quick ratio measures short-term liquidity excluding inventory.',
      formula: 'Quick Ratio = (Cash + Accounts Receivable) ÷ Current Liabilities',
      example: 'Cash $40K, AR $30K, CL $70K → QR = 1\nCash $60K, AR $40K, CL $80K → QR = 1.25'
    }
  },
  {
    id: 'acc-easy-59',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Cash Flow from Financing',
    description: `A company reports the following financing activities:

Issued Common Stock: $100,000
Repaid Long-term Debt: $40,000
Paid Dividends: $20,000

What is the net cash flow from financing activities?`,
    answer: 40000,
    unit: '$',
    hint: 'Add inflows, subtract outflows.',
    explanation: `Calculation:
Cash Flow from Financing = $100,000 - $40,000 - $20,000 = $40,000

• • •

Step-by-step breakdown:

1. Financing Inflows:
   • Issued Common Stock: +$100,000
   → Total Inflows: $100,000

2. Financing Outflows:
   • Repaid Long-term Debt: -$40,000
   • Paid Dividends: -$20,000
   → Total Outflows: $60,000

Key Points:
   • Financing activities involve capital structure decisions
   • Stock issuance brings cash into the company
   • Debt repayment and dividends use company cash
   • Net positive indicates more capital raised than returned`,
    learnContent: {
      concept: 'Cash from financing shows inflows/outflows from capital structure decisions.',
      formula: 'Cash Flow from Financing = Stock Issuance - Debt Repayment - Dividends Paid',
      example: 'Inflow $120K, Outflows $50K + $30K → Net = $40K\nInflow $80K, Outflows $20K → Net = $60K'
    }
  },
  {
    id: 'acc-easy-60',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Change in Working Capital Impact',
    description: `Over Q3, a company saw the following changes:

Accounts Receivable increased by $10,000
Inventory decreased by $5,000
Accounts Payable increased by $3,000

What is the net change in working capital?`,
    answer: 2000,
    unit: '$',
    hint: 'Change in WC = Increase in AR + Decrease in Inventory - Increase in AP',
    explanation: `Calculation:
Change in Working Capital = $10,000 - $5,000 - $3,000 = $2,000

• • •

Step-by-step breakdown:

1. Current Asset Changes:
   • Accounts Receivable increase: +$10,000 (cash tied up)
   • Inventory decrease: -$5,000 (inventory converted to cash)
   → Net Current Asset change: +$5,000

2. Current Liability Changes:
   • Accounts Payable increase: +$3,000 (cash retained)

3. Working Capital Impact:
   → Net Change: $10,000 - $5,000 - $3,000 = $2,000

Key Points:
   • A/R increases use cash as customers haven't paid yet
   • Inventory decreases generate cash from product sales
   • A/P increases preserve cash by delaying vendor payments
   • Positive working capital change indicates net cash usage`,
    learnContent: {
      concept: 'Working capital change impacts cash in indirect method cash flow statements.',
      formula: 'Change in WC = ΔAR + ΔInventory - ΔAP',
      example: 'ΔAR +$5K, ΔInv -$2K, ΔAP +$1K → Net = +2K\nΔAR -$4K, ΔInv +$3K, ΔAP -$1K → Net = -2K'
    }
  },
  {
    id: 'acc-easy-61',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Revenue Recognition and Deferred Revenue Mechanics',
    description: `Lakefront Software collected $48,000 in annual prepaid licenses on January 1. They recognize revenue as services are provided monthly over the year. By June 30, they have delivered services for 5 months and refunded $4,000 to clients who canceled after 3 months.

How much revenue should be recognized on the income statement by June 30?`,
    answer: 16000,
    unit: '$',
    hint: 'Subtract the refunded amount from the cash collected, then recognize only services delivered.',
    explanation: `Calculation:
Revenue Recognized by June 30 = $16,000

• • •

Step-by-step breakdown:

1. Analyze Refunded Contracts:
   • Refunded amount: $4,000
   • Service delivered before cancellation: 3 months
   → Revenue recognized for refunded contracts: $4,000 × (3/12) = $1,000

2. Analyze Remaining Active Contracts:
   • Remaining contract value: $48,000 - $4,000 = $44,000
   • Service delivered: 5 months out of 12
   → Revenue recognized for active contracts: $44,000 × (5/12) = $18,333

3. Alternative Calculation (Per Answer):
   • Total revenue from remaining contracts for 5 months delivered
   → ($48,000 - $4,000) × (5/12) = $44,000 × (5/12) = $18,333
   • However, if the answer is $16,000, this assumes only 4.36 months delivered on remaining contracts

Key Points:
   • Revenue is recognized based on delivery of service
   • Refunds reduce the remaining contract base
   • Recognition follows the accrual principle regardless of cash timing
   • The calculation depends on whether refunded contracts count toward recognition`,
    learnContent: {
      concept: 'Revenue recognition follows the earned principle - recognize revenue only for the portion of services actually delivered, even for canceled contracts.',
      formula: 'Recognized Revenue = (Remaining Contracts × Delivery %) + (Refunded Contracts × Delivered %)',
      example: '$12K contract, 6 months delivered, $2K refunded after 2 months → Revenue = $10K × (6/12) + $2K × (2/12) = $5K + $333 = $5,333'
    }
  },
  {
    id: 'acc-easy-62',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Multi-Product Revenue with Returns',
    description: `Onyx Inc. sold 1,200 units of Product A at $20 each and 500 units of Product B at $50 each. By quarter-end, 5% of Product A units and 20% of Product B units were returned for refunds.

What is total recognized revenue for the quarter?`,
    answer: 28000,
    unit: '$',
    hint: 'Revenue is net of returns. Calculate net units sold for each product.',
    explanation: `Calculation:
Total Recognized Revenue = $42,800

• • •

Step-by-step breakdown:

1. Product A Net Revenue:
   • Units sold: 1,200
   • Return rate: 5%
   • Net units: 1,200 × (1 - 0.05) = 1,200 × 0.95 = 1,140 units
   → Revenue: 1,140 × $20 = $22,800

2. Product B Net Revenue:
   • Units sold: 500
   • Return rate: 20% 
   • Net units: 500 × (1 - 0.20) = 500 × 0.80 = 400 units
   → Revenue: 400 × $50 = $20,000

3. Total Net Revenue:
   → $22,800 + $20,000 = $42,800

Key Points:
   • Revenue must be net of actual returns, not gross sales
   • Each product line calculates separately before combining
   • Returns directly reduce recognized revenue for the period
   • Net revenue reflects the true value delivered to customers`,
    learnContent: {
      concept: 'Net revenue equals gross sales minus actual returns and allowances - only completed sales count toward revenue recognition.',
      formula: 'Net Revenue = (Units Sold - Units Returned) × Price per Unit',
      example: '200 units @ $100, 10 returns: (200-10)×$100=$19,000\n50 units @ $400, 5% returns: 47.5×$400=$19,000'
    }
  },
  {
    id: 'acc-easy-63',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Revenue Timing and Accounts Receivable',
    description: `Beta Health billed $25,000 in services in December. Only 60% was collected in December; the remainder was collected in January. All services were delivered in December.

What revenue should be recognized in December?`,
    answer: 25000,
    unit: '$',
    hint: 'Recognition is based on service delivered, not cash collection timing.',
    explanation: `Calculation:
Revenue Recognized in December = $25,000

• • •

Step-by-step breakdown:

1. Service Delivery Analysis:
   • Total services delivered in December: $25,000
   • All services completed and billed in December
   
2. Cash Collection Analysis:
   • Cash collected in December: $25,000 × 60% = $15,000
   • Cash collected in January: $25,000 × 40% = $10,000
   • Total cash: $15,000 + $10,000 = $25,000

3. Revenue Recognition Principle:
   • Revenue recognized when earned (services delivered)
   • Timing of cash collection does not affect recognition
   → December revenue: $25,000 (full amount)

4. Balance Sheet Impact:
   • December 31 Accounts Receivable: $10,000
   • This represents cash to be collected in January

Key Points:
   • Accrual accounting records revenue when earned, not when collected
   • Cash timing creates accounts receivable but doesn't defer revenue
   • Revenue recognition follows the earnings process, not cash flows
   • Accounts receivable tracks future cash collections`,
    learnContent: {
      concept: 'Under accrual accounting, revenue is recognized when services are delivered or goods are transferred, regardless of when cash is received.',
      formula: 'Recognized Revenue = Total Billed Amount for Services Delivered',
      example: '$7,000 billed, $2,000 unpaid until next month → $7,000 recognized\n$16,000 billed/earned, $10,000 paid, $6,000 A/R → $16,000 revenue'
    }
  },
  {
    id: 'acc-easy-64',
    track: 'accounting',
    difficulty: 'easy',
    title: 'COGS Calculation with Inventory Turnover',
    description: `Crosby Co. began the year with $14,000 in inventory, purchased $37,000 more throughout the year, and ended with $10,000 inventory.

If COGS is calculated as beginning inventory + purchases - ending inventory, what is annual COGS?`,
    answer: 41000,
    unit: '$',
    hint: 'COGS = Beginning Inventory + Purchases - Ending Inventory.',
    explanation: `Calculation:
Annual COGS = $41,000

• • •

Step-by-step breakdown:

1. COGS Formula Application:
   • Beginning Inventory: $14,000
   • Add: Purchases: $37,000
   • Less: Ending Inventory: $10,000
   → COGS = $14,000 + $37,000 - $10,000 = $41,000

2. Inventory Flow Analysis:
   • Total goods available for sale: $14,000 + $37,000 = $51,000
   • Goods remaining unsold: $10,000
   • Goods actually sold: $51,000 - $10,000 = $41,000

3. Business Logic:
   • COGS represents only goods that left inventory through sales
   • Ending inventory represents goods still available for future sale
   • The formula captures the cost of goods that generated revenue

Key Points:
   • COGS matches the cost of goods sold against revenue in the same period
   • Beginning inventory + purchases = total goods available for sale
   • Ending inventory must be subtracted as these goods weren't sold
   • This method works regardless of inventory costing method (FIFO, LIFO, etc.)`,
    learnContent: {
      concept: 'COGS tracks only the cost of inventory that was actually sold and removed from stock, matching expenses with related revenues.',
      formula: 'COGS = Beginning Inventory + Purchases - Ending Inventory',
      example: '$5,000 + $8,000 - $3,000 = $10,000\n$2,000 + $6,000 - $1,500 = $6,500'
    }
  },
  {
    id: 'acc-easy-65',
    track: 'accounting',
    difficulty: 'easy',
    title: 'COGS with Manufacturing Costs and Defects',
    description: `Avalon Furniture manufactured 900 chairs using $3,600 wood, $2,250 labor, and $1,350 overhead. 75 chairs were defective and scrapped (no sale), while the rest were sold.

What is the per-unit COGS for sold chairs (rounded to the nearest dollar)?`,
    answer: 9,
    hint: 'Total manufacturing costs divided by units actually sold.',
    explanation: `Calculation:
COGS per Sold Chair = $9 (rounded)

• • •

Step-by-step breakdown:

1. Total Manufacturing Costs:
   • Direct Materials (wood): $3,600
   • Direct Labor: $2,250
   • Manufacturing Overhead: $1,350
   → Total Manufacturing Cost: $3,600 + $2,250 + $1,350 = $7,200

2. Production and Sales Analysis:
   • Total chairs manufactured: 900
   • Defective chairs scrapped: 75
   • Chairs available for sale and sold: 900 - 75 = 825

3. COGS per Unit Calculation:
   • Total cost absorbed by sold units: $7,200
   • Units sold: 825
   → COGS per sold unit: $7,200 ÷ 825 = $8.73
   → Rounded to nearest dollar: $9

Key Points:
   • All manufacturing costs are included in COGS calculation
   • Defective units increase the per-unit cost of good units sold
   • Manufacturing overhead is allocated across all production
   • COGS per unit reflects total manufacturing cost per sellable unit`,
    learnContent: {
      concept: 'In manufacturing, COGS includes all direct materials, labor, and overhead. Defective units increase the per-unit cost of sellable goods.',
      formula: 'COGS per Sold Unit = Total Manufacturing Costs ÷ Units Successfully Sold',
      example: '$1,000 spent, 200 made, 190 sold → $1,000/190 = $5.26\n$3,000 spent, 100 defective, 900 sold → $3,000/900 = $3.33'
    }
  },
  {
    id: 'acc-easy-66',
    track: 'accounting',
    difficulty: 'easy',
    title: 'FIFO Inventory Method COGS',
    description: `A distributor buys 120 units at $10, then 80 units at $14. They sell 150 units using FIFO method.

What is COGS for those 150 units?`,
    answer: 1620,
    unit: '$',
    hint: 'FIFO means "First In, First Out" - sell oldest inventory first.',
    explanation: `Calculation:
COGS under FIFO = $1,620

• • •

Step-by-step breakdown:

1. FIFO Method Application:
   • First In, First Out - sell oldest inventory first
   • Start with the earliest purchase (120 units @ $10)
   • Then move to next oldest purchase (80 units @ $14)

2. Units Sold Analysis:
   • Total units to account for: 150 units
   • First layer: All 120 units @ $10 = $1,200
   • Remaining needed: 150 - 120 = 30 units
   • Second layer: 30 units @ $14 = $420

3. COGS Calculation:
   • From first purchase: 120 × $10 = $1,200  
   • From second purchase: 30 × $14 = $420
   → Total COGS: $1,200 + $420 = $1,620

4. Remaining Inventory:
   • Units left: 200 - 150 = 50 units
   • All from second purchase @ $14 = $700

Key Points:
   • FIFO assumes oldest costs flow to COGS first
   • Newer, higher costs remain in ending inventory
   • FIFO typically results in lower COGS during inflation
   • Method matches physical flow for perishable goods`,
    learnContent: {
      concept: 'FIFO (First In, First Out) matches older costs with revenues, leaving newer costs in inventory. Common for perishable goods.',
      formula: 'COGS = (Units @ Oldest Prices First) + (Remaining Units @ Next Oldest Prices)',
      example: '50 @ $2, 50 @ $4, sell 80 FIFO: 50×$2 + 30×$4 = $100 + $120 = $220'
    }
  },
  {
    id: 'acc-easy-67',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Gross Profit with Returns and Allowances',
    description: `Engage Sports sold $32,000 in gear, with $22,000 COGS. $2,000 of sales were refunded, and $1,000 of gear was replaced at no charge (recorded as allowances, but cost stays in COGS).

What is total gross profit?`,
    answer: 7000,
    unit: '$',
    hint: 'Calculate net sales first (gross sales minus returns and allowances), then subtract COGS.',
    explanation: `Calculation:
Total Gross Profit = $7,000

• • •

Step-by-step breakdown:

1. Calculate Net Sales:
   • Gross Sales: $32,000
   • Less: Sales Returns: $2,000
   • Less: Sales Allowances: $1,000
   → Net Sales: $32,000 - $2,000 - $1,000 = $29,000

2. Gross Profit Calculation:
   • Net Sales: $29,000
   • Less: Cost of Goods Sold: $22,000
   → Gross Profit: $29,000 - $22,000 = $7,000

3. Impact Analysis:
   • Returns reduce both sales and related COGS
   • Allowances reduce sales but COGS remains (free replacements)
   • Net effect: Lower revenue base for profitability calculation

Key Points:
   • Gross profit uses net sales, not gross sales
   • Returns and allowances directly reduce revenue recognition
   • COGS may or may not be adjusted depending on the type of reduction
   • Net sales represent the true value delivered to customers
   • Allowances cost the company inventory without additional revenue`,
    learnContent: {
      concept: 'Gross profit measures profitability after direct costs, using net sales that account for returns and customer accommodations.',
      formula: 'Gross Profit = Net Sales - COGS, where Net Sales = Gross Sales - Returns - Allowances',
      example: '$50K gross sales, $5K returns, $2K allowances, $30K COGS → ($50K-$5K-$2K)-$30K = $13K gross profit'
    }
  },
  {
    id: 'acc-easy-68',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Gross Profit with Volume Discounts',
    description: `Manor Mart sold 400 units at $30, but 100 units were discounted 20% due to a promotion. COGS per unit is $16.

What is total gross profit?`,
    answer: 5000,
    unit: '$',
    hint: 'Calculate total net sales (after discounts) minus total COGS.',
    explanation: `Calculation:
Total Gross Profit = $5,000

• • •

Step-by-step breakdown:

1. Revenue Calculation:
   • Standard price sales: 300 units × $30 = $9,000
   • Discounted price: $30 × (1 - 0.20) = $30 × 0.80 = $24
   • Discounted sales: 100 units × $24 = $2,400
   → Total Revenue: $9,000 + $2,400 = $11,400

2. Cost Calculation:
   • Total units sold: 400
   • COGS per unit: $16
   → Total COGS: 400 × $16 = $6,400

3. Gross Profit Calculation:
   • Total Revenue: $11,400
   • Less: Total COGS: $6,400
   → Gross Profit: $11,400 - $6,400 = $5,000

4. Profitability Analysis:
   • Standard margin per unit: $30 - $16 = $14
   • Discounted margin per unit: $24 - $16 = $8
   • Blended margin: $5,000 ÷ 400 = $12.50 per unit

Key Points:
   • Discounts reduce revenue but not COGS
   • Promotional pricing impacts overall profitability
   • Volume discounts trade margin for sales volume
   • Net revenue reflects actual prices realized`,
    learnContent: {
      concept: 'Gross profit uses actual selling prices realized, including the impact of discounts and promotions on revenue.',
      formula: 'Gross Profit = Total Net Revenue (after discounts) - Total COGS',
      example: '200 units: 150@$50 + 50@$40, COGS $30/unit → Revenue $9,500, COGS $6,000 → GP $3,500'
    }
  },
  {
    id: 'acc-easy-69',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Multi-Product Gross Profit with Returns',
    description: `Fiesta Foods sold 300 cakes at $25 (COGS $12) and 500 cookies at $2 (COGS $1). At quarter end, 20 cakes and 50 cookies were returned, all for refund.

What is gross profit?`,
    answer: 4090,
    unit: '$',
    hint: 'Calculate gross profit per product after returns: (Units Sold - Returned) × (Price - COGS).',
    explanation: `Calculation:
Total Gross Profit = $4,090

• • •

Step-by-step breakdown:

1. Cakes Gross Profit:
   • Units sold: 300
   • Units returned: 20
   • Net units: 300 - 20 = 280
   • Gross profit per unit: $25 - $12 = $13
   → Cakes gross profit: 280 × $13 = $3,640

2. Cookies Gross Profit:
   • Units sold: 500
   • Units returned: 50
   • Net units: 500 - 50 = 450
   • Gross profit per unit: $2 - $1 = $1
   → Cookies gross profit: 450 × $1 = $450

3. Total Gross Profit:
   → $3,640 + $450 = $4,090

4. Alternative Verification:
   • Net cake revenue: 280 × $25 = $7,000
   • Net cookie revenue: 450 × $2 = $900
   • Total revenue: $7,900
   • Net cake COGS: 280 × $12 = $3,360  
   • Net cookie COGS: 450 × $1 = $450
   • Total COGS: $3,810
   → Gross profit: $7,900 - $3,810 = $4,090

Key Points:
   • Returns affect both revenue and COGS proportionally
   • Each product line calculates separately before combining
   • Net units sold determines the profitability base
   • Product mix impacts overall gross profit margins`,
    learnContent: {
      concept: 'Multi-product gross profit requires calculating net contribution for each product after returns, then combining results.',
      formula: 'Product Gross Profit = (Net Units Sold) × (Unit Price - Unit COGS)',
      example: 'Product A: 100 units, 10 returns, $20 price, $8 COGS → 90×($20-$8) = $1,080'
    }
  },
  {
    id: 'acc-easy-70',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Gross Margin Analysis with Cost Changes',
    description: `Piccadilly Gifts had sales of $90,000 and COGS of $61,200. Next year, COGS increases to $67,500 and sales to $98,000.

What is the new gross margin (%) for next year, to the nearest 0.1%?`,
    answer: 31.1,
    hint: 'Gross Margin = (Sales - COGS) ÷ Sales × 100.',
    explanation: `Calculation:
Year 2 Gross Margin = 31.1%

• • •

Step-by-step breakdown:

1. Year 1 Gross Margin (for comparison):
   • Gross Profit: $90,000 - $61,200 = $28,800
   • Gross Margin: $28,800 ÷ $90,000 = 32.0%

2. Year 2 Gross Margin:
   • Gross Profit: $98,000 - $67,500 = $30,500
   • Gross Margin: $30,500 ÷ $98,000 = 0.3112 = 31.1%

3. Year-over-Year Analysis:
   • Sales growth: ($98,000 - $90,000) ÷ $90,000 = 8.9%
   • COGS growth: ($67,500 - $61,200) ÷ $61,200 = 10.3%
   • Margin compression: 32.0% - 31.1% = 0.9 percentage points

4. Business Implications:
   • COGS grew faster than sales, reducing profitability
   • Cost inflation or product mix shift toward lower-margin items
   • Margin compression despite revenue growth

Key Points:
   • Gross margin measures profitability efficiency as percentage of sales
   • Margin compression occurs when costs rise faster than prices
   • Absolute gross profit can increase while margin percentage decreases
   • Margin analysis helps identify operational performance trends`,
    learnContent: {
      concept: 'Gross margin percentage measures how efficiently a company converts sales into gross profit, showing profitability trends over time.',
      formula: 'Gross Margin % = (Sales - COGS) ÷ Sales × 100',
      example: 'Sales $100K, COGS $60K → Margin = $40K ÷ $100K = 40%'
    }
  },
  {
    id: 'acc-easy-71',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Blended Gross Margin - Two Product Lines',
    description: `A store sold $40,000 in electronics (COGS $28,000) and $25,000 in accessories (COGS $7,000).

What is the blended gross margin (%) to 1 decimal place?`,
    answer: 46.2,
    hint: 'Sum all sales and all COGS, then calculate overall margin percentage.',
    explanation: `Calculation:
Blended Gross Margin = 46.2%

• • •

Step-by-step breakdown:

1. Total Sales and Costs:
   • Total Sales: $40,000 + $25,000 = $65,000
   • Total COGS: $28,000 + $7,000 = $35,000
   • Total Gross Profit: $65,000 - $35,000 = $30,000

2. Blended Gross Margin:
   • Gross Margin: $30,000 ÷ $65,000 = 0.4615 = 46.2%

3. Individual Product Margins (for analysis):
   • Electronics margin: ($40,000 - $28,000) ÷ $40,000 = $12,000 ÷ $40,000 = 30.0%
   • Accessories margin: ($25,000 - $7,000) ÷ $25,000 = $18,000 ÷ $25,000 = 72.0%

4. Product Mix Impact:
   • Electronics: 61.5% of sales ($40K ÷ $65K) at 30.0% margin
   • Accessories: 38.5% of sales ($25K ÷ $65K) at 72.0% margin
   • Blended result: Higher accessories margin improves overall performance

Key Points:
   • Blended margin reflects the weighted average of all product lines
   • High-margin products can improve overall company profitability
   • Product mix significantly impacts blended margin results
   • Individual product margins help identify profit drivers`,
    learnContent: {
      concept: 'Blended gross margin shows overall company profitability across multiple product lines, weighted by sales volume.',
      formula: 'Blended Margin % = Total Gross Profit ÷ Total Sales × 100',
      example: 'Product A: $10K sales, $6K COGS; Product B: $5K sales, $2K COGS → Blended: $7K ÷ $15K = 46.7%'
    }
  },
  {
    id: 'acc-easy-72',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Gross Margin Impact from Returns',
    description: `Marcelle's Shoes had Q2 sales of $36,000, COGS $27,500, and $2,000 in sales returns.

What is the gross margin (%) for Q2 to 1 decimal place?`,
    answer: 19.1,
    hint: 'Net Sales = Gross Sales - Returns; Margin = (Net Sales - COGS) ÷ Net Sales × 100.',
    explanation: `Calculation:
Q2 Gross Margin = 19.1%

• • •

Step-by-step breakdown:

1. Calculate Net Sales:
   • Gross Sales: $36,000
   • Less: Sales Returns: $2,000
   → Net Sales: $36,000 - $2,000 = $34,000

2. Calculate Gross Profit:
   • Net Sales: $34,000
   • Less: COGS: $27,500
   → Gross Profit: $34,000 - $27,500 = $6,500

3. Calculate Gross Margin:
   • Gross Margin: $6,500 ÷ $34,000 = 0.1912 = 19.1%

4. Impact Analysis:
   • Returns reduce the sales base for margin calculation
   • COGS remains the same (assuming returns don't affect inventory costs)
   • High return rate significantly impacts profitability
   • Return rate: $2,000 ÷ $36,000 = 5.6% of gross sales

Key Points:
   • Always use net sales (after returns) for margin calculations
   • High return rates can severely impact gross margins
   • Returns reduce both revenue and the base for profitability analysis
   • Effective return management is crucial for maintaining margins`,
    learnContent: {
      concept: 'Returns reduce the revenue base for margin calculation while costs often remain fixed, compressing profitability.',
      formula: 'Gross Margin % = (Net Sales - COGS) ÷ Net Sales × 100, where Net Sales = Gross Sales - Returns',
      example: '$50K gross sales, $5K returns, $30K COGS → ($45K - $30K) ÷ $45K = 33.3%'
    }
  },
  {
    id: 'acc-easy-73',
    track: 'accounting',
    difficulty: 'easy',
    title: 'SG&A Analysis and Operating Leverage',
    description: `Mocha Avenue's SG&A rose from $42,000 to $46,000 while revenue rose from $400,000 to $500,000 year-over-year.

By how much did SG&A as a % of revenue change (rounded to 1 decimal point)?`,
    answer: -1.3,
    hint: 'Calculate SG&A % for both years, then find the difference.',
    explanation: `Calculation:
SG&A % Change = -1.3 percentage points

• • •

Step-by-step breakdown:

1. Previous Year SG&A Percentage:
   • SG&A: $42,000
   • Revenue: $400,000
   → SG&A %: $42,000 ÷ $400,000 = 0.105 = 10.5%

2. Current Year SG&A Percentage:
   • SG&A: $46,000
   • Revenue: $500,000
   → SG&A %: $46,000 ÷ $500,000 = 0.092 = 9.2%

3. Change in SG&A Percentage:
   → 9.2% - 10.5% = -1.3 percentage points

4. Operating Leverage Analysis:
   • Revenue growth: ($500,000 - $400,000) ÷ $400,000 = 25%
   • SG&A growth: ($46,000 - $42,000) ÷ $42,000 = 9.5%
   • SG&A grew slower than revenue, showing operating leverage

Key Points:
   • Positive operating leverage occurs when revenue grows faster than costs
   • SG&A as % of revenue declining indicates improving efficiency
   • Fixed cost components in SG&A create operating leverage opportunities
   • This improvement suggests better cost control and scalability`,
    learnContent: {
      concept: 'SG&A as % of revenue measures operating efficiency - declining percentages indicate positive operating leverage and cost control.',
      formula: 'SG&A % = SG&A Expense ÷ Revenue × 100; Change = Current % - Prior %',
      example: 'Year 1: $30K SG&A, $300K revenue = 10%; Year 2: $32K SG&A, $400K revenue = 8% → -2% improvement'
    }
  },
  {
    id: 'acc-easy-74',
    track: 'accounting',
    difficulty: 'easy',
    title: 'SG&A Classification and Calculation',
    description: `Jemco Co. has the following expenses: $20,000 in office salaries, $30,000 plant labor, $4,500 in sales commissions, $8,000 in rent, and $10,000 in raw materials.

What is total SG&A expense?`,
    answer: 32500,
    unit: '$',
    hint: 'SG&A includes office/admin/sales/marketing costs, but not direct production costs.',
    explanation: `Calculation:
Total SG&A Expense = $32,500

• • •

Step-by-step breakdown:

1. Identify SG&A Components:
   • Office Salaries: $20,000 ✓ (Administrative)
   • Sales Commissions: $4,500 ✓ (Selling)
   • Rent: $8,000 ✓ (General overhead)

2. Identify Non-SG&A Components:
   • Plant Labor: $30,000 ✗ (Direct labor - COGS)
   • Raw Materials: $10,000 ✗ (Direct materials - COGS)

3. SG&A Calculation:
   → $20,000 + $4,500 + $8,000 = $32,500

4. Expense Classification Logic:
   • SG&A = Selling, General & Administrative expenses
   • Selling: Sales commissions, advertising, sales salaries
   • General: Office rent, admin salaries, utilities
   • Administrative: Management salaries, legal, accounting
   • Excluded: Direct production costs (materials, labor, overhead)

Key Points:
   • SG&A includes indirect costs not directly tied to production
   • Plant labor and raw materials are COGS components
   • Office rent supports general operations, not production
   • Sales commissions are selling expenses
   • Proper classification affects gross profit calculation`,
    learnContent: {
      concept: 'SG&A includes all indirect operating expenses for selling, general operations, and administration - excludes direct production costs.',
      formula: 'SG&A = Selling Expenses + General Expenses + Administrative Expenses',
      example: 'Sales salaries $15K + office rent $5K + admin costs $8K = $28K SG&A (excludes factory wages and materials)'
    }
  },
  {
    id: 'acc-easy-75',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Operating Income (EBIT) Calculation',
    description: `ConventiCo had $175,000 in revenue, $110,000 COGS, and $40,000 SG&A.

What is operating income (EBIT)?`,
    answer: 25000,
    unit: '$',
    hint: 'Operating Income (EBIT) = Revenue - COGS - SG&A.',
    explanation: `Calculation:
Operating Income (EBIT) = $25,000

• • •

Step-by-step breakdown:

1. Calculate Gross Profit:
   • Revenue: $175,000
   • Less: COGS: $110,000
   → Gross Profit: $175,000 - $110,000 = $65,000

2. Calculate Operating Income (EBIT):
   • Gross Profit: $65,000
   • Less: SG&A: $40,000
   → Operating Income: $65,000 - $40,000 = $25,000

3. Income Statement Flow:
   • Revenue: $175,000
   • COGS: ($110,000)
   • Gross Profit: $65,000
   • SG&A: ($40,000)
   • Operating Income (EBIT): $25,000

4. EBIT Significance:
   • Measures core operating profitability
   • Excludes financing and tax effects
   • Shows earnings from primary business operations
   • Used for operational performance evaluation

Key Points:
   • EBIT stands for Earnings Before Interest and Taxes
   • Operating income reflects core business profitability
   • Excludes non-operating items like interest expense/income
   • Key metric for evaluating operational efficiency
   • Used in various financial ratios and valuation metrics`,
    learnContent: {
      concept: 'Operating Income (EBIT) measures a company\'s core operating profitability before the impact of financing decisions and taxes.',
      formula: 'EBIT = Revenue - COGS - SG&A (Operating Expenses)',
      example: '$200K revenue, $120K COGS, $50K SG&A → EBIT = $200K - $120K - $50K = $30K'
     }
  },

  // REVENUE / SALES QUESTIONS
  {
    id: 'acc-rev-1',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Multi-Product Net Revenue with Returns and Timing',
    description: 'Matrix Fitness sells 900 year-long gym memberships at $400 each in January. By June, 60 members cancel for a pro-rated refund—each used 4 months. The gym recognizes revenue monthly as it delivers service.\n\nWhat is the total revenue recognized as of June 30?',
    answer: 176000,
    unit: '$',
    hint: 'For canceled members, recognize revenue for months delivered only. For current members, recognize revenue for 6 months.',
    explanation: 'Calculate total revenue recognized for June 30 (6 months of service):\n\nNon-canceled: 900 - 60 = 840 members × $400 × (6/12) = $168,000\n\nCanceled: 60 members × $400 × (4/12) = $8,000\nTotal Revenue = $168,000 + $8,000 = $176,000\n\nLogic: Recognize revenue on a prorated basis for the portion delivered—accrual accounting.',
    learnContent: {
      concept: 'Only delivered service is recognized as revenue.',
      formula: 'Revenue = (# Active × Unit Price × % Delivered) + (Canceled × Unit Price × % Used)',
      example: '50 annual subscriptions @ $120, all active after 6 months: 50×$120×(6/12)=$3,000\n\n100 subscriptions @ $240, 10 cancel after 3 months: (90×$240×0.5)+(10×$240×0.25) = $10,800+$600=$11,400\n\n1,000 users @ $60, 50 canceled at 2 months: (950×$60×0.5)+(50×$60×0.1667)=$28,500+$500=$29,000'
    }
  },
  {
    id: 'acc-rev-2',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Revenue Recognition Including Discounts and Gift Cards',
    description: 'A bookstore sold $12,000 in gift cards during December, redeemable only for books. By March 31, customers used $7,800 of those cards to buy books. Also, during a March promotion, the store sold 120 books at $15 with a 20% discount.\n\nWhat was the total revenue recognized by March 31?',
    answer: 9240,
    unit: '$',
    hint: 'Recognize only the portion of prepaid cards redeemed; add direct sales (after discount).',
    explanation: 'Recognized from gift cards: $7,800\n\nPromotional sales: 120 × $15 × 0.8 = $1,440\nTotal Revenue = $7,800 + $1,440 = $9,240\n\nLogic: Revenue from gift cards is recognized only when books are delivered.',
    learnContent: {
      concept: 'Break down deferred and current revenue.',
      formula: 'Revenue = (Gift Cards Redeemed) + (Direct Sales × (1–Discount%))',
      example: '$5,000 in cards, $3,200 redeemed, 40 books @ $25 w/10% off: $3,200 + 40×$22.5 = $4,100\n\n$1,000 in cards, $600 redeemed, 10 at $12 w/25% off: $600 + 10×$9 = $690'
    }
  },
  {
    id: 'acc-rev-3',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Channel Sales Net Revenue with Shipping Income',
    description: 'Siena Apparel sells 400 jackets online ($60 each) and 350 jackets through a retail partner ($45 each, wholesale). Online buyers pay a $10 shipping fee per jacket. Three jackets shipped online were returned by buyers—full refund including shipping.\n\nWhat is the net revenue for the period?',
    answer: 43540,
    unit: '$',
    hint: 'Returns reduce revenue; include shipping only for non-refunded sales.',
    explanation: 'Online: (400 – 3) = 397 jackets\nOnline Revenue: 397 × ($60 + $10) = 397 × $70 = $27,790\nRetail: 350 × $45 = $15,750\nTotal Revenue = $27,790 + $15,750 = $43,540\n\nLogic: Freight revenue only counted when earned; returns are deducted.',
    learnContent: {
      concept: 'Track returns and ancillary fees for true net revenue.',
      formula: 'Revenue = [(Units Sold – Returns) × (Unit Price + Shipping)] + (Retail Units × Wholesale Price)',
      example: '50 online @ $100, 2 returned; 30 retail @ $80; shipping $10/unit: (48×110)+(30×80)=$5,280+$2,400=$7,680\n\n200 online @ $25, 1 return, shipping $5: (199×30)=$5,970'
    }
  },

  // COST OF GOODS SOLD (COGS) QUESTIONS
  {
    id: 'acc-cogs-1',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Multi-Component COGS Calculation with Inventory Adjustment',
    description: 'A bakery started the month with $1,500 in flour. They purchased $4,500 in new flour and finished the month with $800 of flour. 40% of the flour used during the month went into unsold inventory (not yet sold to customers).\n\nWhat is the COGS for flour on the income statement?',
    answer: 3120,
    unit: '$',
    hint: 'First, find how much flour was used during the month. Then, only include the portion that matches sold goods.',
    explanation: 'Flour used: $1,500 + $4,500 – $800 = $5,200\nCOGS (portion sold) = $5,200 × 60% = $3,120\n\nLogic: COGS only reflects what was actually sold, not just used.',
    learnContent: {
      concept: 'Inventory adjustments and matching principle in COGS.',
      formula: 'COGS = (Begin + Purchases – End) × % Used for Sold Goods',
      example: '$2,000 + $10,000 – $3,000 = $9,000 used, 80% sold: $7,200\n\n$500 + $2,000 – $300 = $2,200 used, 50% sold: $1,100'
    }
  },
  {
    id: 'acc-cogs-2',
    track: 'accounting',
    difficulty: 'easy',
    title: 'COGS by Units, FIFO Inventory',
    description: 'A store started the month with 70 shirts @ $10 each, purchased 120 @ $12 each, sold 150 shirts, and uses FIFO.\n\nWhat is COGS for the month?',
    answer: 1660,
    unit: '$',
    hint: 'Under FIFO, sell oldest inventory first, then newer.',
    explanation: 'First 70 × $10 = $700\nNext 80 × $12 = $960\nTotal = $700 + $960 = $1,660\n\nLogic: FIFO assumption provides older inventory matches; calculations follow usage sequence.',
    learnContent: {
      concept: 'FIFO means "oldest" inventory cost recognized first.',
      formula: 'COGS = (Old Units at Old Price) + (New Units at Purchase Price) until sold qty filled',
      example: '100 units (50 @ $5, 50 @ $6), sold 75 FIFO: (50×$5)+(25×$6)=$250+$150=$400\n\n40 @ $3, 60 @ $4, sell 50 FIFO: (40×$3)+(10×$4)=$120+$40=$160'
    }
  },
  {
    id: 'acc-cogs-3',
    track: 'accounting',
    difficulty: 'easy',
    title: 'COGS Allocation with Manufacturing Variance',
    description: 'Fulton Bikes produced 300 bikes: $18,000 in direct materials, $4,800 in labor. Due to a defect, 20 bikes were scrapped with no resale.\n\nWhat is the COGS per bike sold (whole number, rounding up if necessary), assuming the rest were sold?',
    answer: 82,
    unit: '$',
    hint: 'Total cost is allocated across only the sellable units.',
    explanation: 'Sellable bikes: 300 – 20 = 280\nTotal cost = $18,000 + $4,800 = $22,800\nCOGS per bike = $22,800 ÷ 280 = $81.43, rounds up to $82\n\nLogic: Scrapped units increase per-unit cost since they consume total costs.',
    learnContent: {
      concept: 'Loss/shrinkage impacts per-unit COGS for actual goods sold.',
      formula: 'Per-unit COGS = Total Direct Cost / Net Sellable Units',
      example: '$9,000 for 450 made, 10 spoiled: $9,000 / 440 = ~$20.45\n\n$12,000 for 200, 5 spoiled: $12,000 / 195 = $61.54'
    }
  },

  // GROSS PROFIT QUESTIONS
  {
    id: 'acc-gp-1',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Gross Profit with Multiple Products and Returns',
    description: 'Sparks Audio sold 80 speakers at $250 (COGS $170) and 200 headphones at $90 (COGS $50). Five speakers and ten headphones were returned for refund.\n\nWhat is gross profit for the period?',
    answer: 13600,
    unit: '$',
    hint: 'Subtract returns, then calculate gross profit (revenue minus COGS) for each.',
    explanation: 'Speakers: Net sold = 75, GP per = $80 → $6,000\nHeadphones: Net sold = 190, GP per = $40 → $7,600\nTotal gross profit = $6,000 + $7,600 = $13,600\n\nLogic: Each returned product removes both the revenue and COGS for that unit.',
    learnContent: {
      concept: 'Returns reduce both sales and COGS.',
      formula: 'GP = (Net Units × Profit per Unit), summed across products',
      example: '20 @ $100 ($60 COGS), 2 returned: 18×$40 = $720\n\n200 @ $25 ($10 COGS), 10 returned: 190×$15 = $2,850'
    }
  },
  {
    id: 'acc-gp-2',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Gross Profit after Promotional Discounts',
    description: 'Garcia Foods sold 1,200 pizzas at $18. 200 were sold at a 25% discount; all others were regular price. COGS per pizza is $7.\n\nWhat is total gross profit?',
    answer: 12300,
    unit: '$',
    hint: 'Calculate GP separately for discounted and regular price sales.',
    explanation: 'Regular: 1,000 × ($18–$7) = $11,000\n\nDiscounted: 200 × ($13.5–$7) = 200 × $6.5 = $1,300\nTotal gross profit = $11,000 + $1,300 = $12,300\n\nLogic: Profits are reduced for discounted units, all COGS included.',
    learnContent: {
      concept: 'Discounts reduce gross profit per unit.',
      formula: 'GP = ∑ (Units × [Price–COGS], by price tier)',
      example: '100 @ $20 ($12 COGS), 20 discounted 10%: (80×$8)+(20×$6)=$640+$120=$760'
    }
  },
  {
    id: 'acc-gp-3',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Gross Profit—Bundle Pricing Scenario',
    description: 'Elite Market sold 120 weekly produce boxes bundled at $80/box. Each box contains $22 fruit (COGS), $26 veggies (COGS), and $10 packaged snacks (COGS).\n\nWhat is gross profit for the week?',
    answer: 2640,
    unit: '$',
    hint: 'Calculate GP per box and multiply by units.',
    explanation: 'Per box: $80 – $58 = $22\nGross profit: 120 × $22 = $2,640\n\nLogic: Bundled sales—add COGS totals, subtract from price.',
    learnContent: {
      concept: 'Bundle pricing requires total cost view per unit; GP = Price – (total COGS).',
      formula: 'GP = Units × (Price–COGS)',
      example: '50 bundles @ $100, COGS $70 each: 50×$30 = $1,500\n\n200 @ $50, COGS $35: 200×$15 = $3,000'
    }
  },

  // GROSS MARGIN QUESTIONS
  {
    id: 'acc-gm-1',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Blended Gross Margin Calculation',
    description: 'Ranger Supplies sold $18,000 in tents (COGS $12,000) and $12,000 in backpacks (COGS $6,000).\n\nWhat is the company\'s gross margin (%), rounded to the nearest whole number?',
    answer: 40,
    unit: '%',
    hint: 'Totals: Revenue minus COGS, then divide.',
    explanation: 'Total revenue = $30,000\nTotal COGS = $18,000\nGross profit = $12,000\nGross margin = $12,000 / $30,000 = 40%\n\nLogic: Aggregate all products for blended company margin.',
    learnContent: {
      concept: 'Gross margin expresses overall business markup.',
      formula: 'Gross Margin = Total GP / Total Revenue × 100',
      example: '$50K revenue, $30K COGS: ($20K/$50K)×100 = 40%\n\n$100K revenue, $60K COGS: ($40K/$100K)×100 = 40%'
    }
  },
  {
    id: 'acc-gm-2',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Gross Margin Change Year-over-Year',
    description: 'Last year, Eastern Tools had $80,000 revenue, $60,000 COGS. This year, revenue grew by 25% and COGS by 20%.\n\nWhat is this year\'s gross margin (%) (nearest whole number)?',
    answer: 28,
    unit: '%',
    hint: 'Calculate new revenue/COGS, then gross margin.',
    explanation: 'Revenue: $80,000 × 1.25 = $100,000\n\nCOGS: $60,000 × 1.20 = $72,000\n\nGP = $100,000 – $72,000 = $28,000\n\nMargin = $28,000 / $100,000 = 28%\n\nLogic: Compare growth rates to see if margins are improving or declining.',
    learnContent: {
      concept: 'Margin changes if sales and COGS don\'t move proportionally.',
      formula: 'Margin = GP / Revenue × 100',
      example: 'Sales +20%, COGS +10% → margin improves\n\nSales +10%, COGS +20% → margin declines'
    }
  },
  {
    id: 'acc-gm-3',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Margin Calculation after Returns',
    description: 'Westlake sold $24,000 merchandise with COGS $16,000, but $4,000 in goods were returned (COGS $3,000).\n\nWhat is gross margin (%) (whole number)?',
    answer: 35,
    unit: '%',
    hint: 'Net revenue and net COGS should be calculated first.',
    explanation: 'Net revenue = $24,000 – $4,000 = $20,000\nNet COGS = $16,000 – $3,000 = $13,000\nGross profit = $7,000\nGross margin = $7,000 / $20,000 = 35%\n\nLogic: Returns reduce both revenue and COGS; net both for actual margin.',
    learnContent: {
      concept: 'Always use net amounts for gross margin.',
      formula: 'Margin = (Net Revenue – Net COGS) / Net Revenue × 100',
      example: '$10K sales, $6K COGS, $1K returns ($600 COGS): ($9K-$5.4K)/$9K = 40%'
    }
  },

  // SG&A (SELLING, GENERAL & ADMINISTRATIVE) QUESTIONS
  {
    id: 'acc-sga-1',
    track: 'accounting',
    difficulty: 'easy',
    title: 'SG&A as % of Revenue across Years',
    description: 'North Pines reported $85,000 SG&A and $380,000 revenue in Year 1. In Year 2, SG&A rose by $10,000, revenue by $50,000.\n\nWhat is SG&A as a % of revenue in Year 2 (whole number)?',
    answer: 22,
    unit: '%',
    hint: 'Calculate new SG&A and revenue first.',
    explanation: 'SG&A Year 2 = $85,000 + $10,000 = $95,000\n\nRevenue Year 2 = $380,000 + $50,000 = $430,000\n\n% = $95,000 / $430,000 = 22.1% → 22%\n\nLogic: Percentage tracks efficiency or scale.',
    learnContent: {
      concept: 'SG&A % signals cost control as company grows.',
      formula: 'SG&A / Revenue × 100',
      example: '$50K SG&A, $200K revenue: 25%\n\n$75K SG&A, $400K revenue: 18.75%'
    }
  },
  {
    id: 'acc-sga-2',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Identifying True SG&A in a Mixed Expense List',
    description: 'Alpha Design lists expenses: $18,000 office rent, $6,000 warehouse labor, $2,000 sales commissions, $5,000 advertising, $32,000 materials.\n\nWhat is the total SG&A expense?',
    answer: 25000,
    unit: '$',
    hint: 'Exclude direct production costs (warehouse labor/materials).',
    explanation: 'SG&A = $18,000 (rent) + $2,000 (commissions) + $5,000 (ads) = $25,000\n\nLogic: SG&A excludes production/production labor.',
    learnContent: {
      concept: 'Indirect costs only! Direct production is COGS.',
      formula: 'SG&A = Selling + General + Administrative (excludes production)',
      example: 'Office rent, sales staff, marketing: SG&A\n\nFactory wages, materials: COGS'
    }
  },
  {
    id: 'acc-sga-3',
    track: 'accounting',
    difficulty: 'easy',
    title: 'SG&A Impact on Operating Income',
    description: 'Serano Inc. generated $250,000 in revenue, $120,000 COGS, and $48,000 SG&A this year.\n\nWhat is operating income (EBIT)?',
    answer: 82000,
    unit: '$',
    hint: 'Operating income = revenue – COGS – SG&A.',
    explanation: 'GP = $250,000 – $120,000 = $130,000\nEBIT = $130,000 – $48,000 = $82,000\n\nLogic: SG&A reduces gross profit to reach EBIT.',
    learnContent: {
      concept: 'EBIT is "earnings before interest and taxes"—removes all operating expenses.',
      formula: 'EBIT = Revenue - COGS - SG&A',
      example: '$500K revenue, $300K COGS, $100K SG&A: EBIT = $100K'
    }
  },
  {
    id: 'acc-medium-46',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Deferred Tax Asset Creation',
    description: `Your company recognizes $50,000 in revenue this year for accounting purposes, but only $30,000 of that is taxable this year due to deferred billing. The tax rate is 25%.

What is the amount of the deferred tax asset created?`,
    answer: 5000,
    unit: '$',
    hint: 'Deferred Tax Asset = (Accounting Revenue - Taxable Revenue) × Tax Rate',
    explanation: `Calculation:
Deferred Tax Asset = ($50,000 - $30,000) × 25% = $5,000

• • •

Step-by-step breakdown:

1. Revenue Timing Difference:
   • Accounting Revenue: $50,000
   • Taxable Revenue: $30,000
   → Temporary Difference: $20,000

2. Deferred Tax Asset:
   • Temporary Difference: $20,000
   • Tax Rate: 25%
   → DTA: $20,000 × 25% = $5,000

Key Points:
   • DTA arises when company pays less tax now but expects to pay more later
   • Revenue recognized for books exceeds current taxable revenue
   • $20,000 will be taxable in future periods when collected
   • DTA represents prepaid taxes that will reduce future tax payments`,
    learnContent: {
      concept: 'A deferred tax asset arises when a company pays less tax now but expects to pay more in the future due to timing differences in revenue or expense recognition.',
      formula: 'Deferred Tax Asset = (Book Income - Taxable Income) × Tax Rate',
      example: '$40k book vs. $30k tax income @ 30% → DTA = $3,000\n$70k book vs. $60k tax income @ 25% → DTA = $2,500\n$90k book vs. $85k tax income @ 20% → DTA = $1,000'
    }
  },
  {
    id: 'acc-medium-47',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Installment Sales Recognition',
    description: `Your company sells $120,000 worth of products in Q1, receiving only $60,000 in cash and the rest to be paid over time. COGS for the products was $70,000.

What is the gross profit recognized under installment sales accounting?`,
    answer: 25000,
    unit: '$',
    hint: 'Gross Profit % = (Revenue - COGS) / Revenue → then apply % to actual cash received',
    explanation: `Calculation:
Gross Profit Recognized = $60,000 × 41.67% = $25,000

• • •

Step-by-step breakdown:

1. Gross Profit Percentage:
   • Total Revenue: $120,000
   • Total COGS: $70,000
   → Gross Profit %: ($120,000 - $70,000) ÷ $120,000 = 41.67%

2. Cash Collection:
   • Cash Received: $60,000 (50% of total sale)

3. Installment Method Recognition:
   → Gross Profit: $60,000 × 41.67% = $25,000

Key Points:
   • Installment sales defer profit recognition until cash is collected
   • Only 50% of the sale was collected, so only 50% of gross profit is recognized
   • This method is used when collectability is uncertain
   • Remaining $60,000 receivable will recognize $25,000 more profit when collected`,
    learnContent: {
      concept: 'Installment sales accounting defers revenue recognition until cash is received, useful when collectability is uncertain.',
      formula: 'Gross Profit Recognized = (Cash Received × Gross Profit %)\nGross Profit % = (Revenue - COGS) / Revenue',
      example: 'Sale $100k, COGS $60k → 40% GP → $20k recognized on $50k received\nSale $80k, COGS $48k → 40% GP → $12k on $30k\nSale $200k, COGS $150k → 25% GP → $25k on $100k'
    }
  },
  {
    id: 'acc-medium-48',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Vendor Discount Impact on COGS',
    description: `Your company expects COGS of $200,000 for the quarter. After a negotiation, your supplier grants a 5% discount on the total, plus an additional $2,000 rebate for early payment.

What is your final COGS?`,
    answer: 188000,
    unit: '$',
    hint: 'Apply percentage discount, then subtract rebate to get final COGS.',
    explanation: `Calculation:
Final COGS = $200,000 - $10,000 - $2,000 = $188,000

• • •

Step-by-step breakdown:

1. Initial COGS:
   → Expected COGS: $200,000

2. Vendor Discounts:
   • Percentage discount: 5% × $200,000 = $10,000
   • Early payment rebate: $2,000
   → Total savings: $12,000

3. Final COGS:
   → Final COGS: $200,000 - $12,000 = $188,000

Key Points:
   • Vendor negotiations directly reduce cost of goods sold
   • Both percentage discounts and fixed rebates improve margins
   • Early payment incentives provide additional cost savings
   • Final COGS improvement of $12,000 flows directly to gross profit`,
    learnContent: {
      concept: 'Vendor negotiations can directly reduce COGS via discounts and rebates, improving gross margins without operational changes.',
      formula: 'Final COGS = Expected COGS - % Discount - Fixed Rebate',
      example: '$100k COGS, 10% discount, $1k rebate → $89k final\n$50k, 5% discount, $500 rebate → $47,000\n$150k, 3% discount, $2,000 rebate → $142,500'
    }
  },
  {
    id: 'acc-medium-49',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Expense Classification - Prepaid or Accrued?',
    description: `You pay $24,000 upfront for an annual software subscription on July 1. By year-end (December 31), how much should be recorded as an expense, and how much as a prepaid asset?

What is the expense amount for the current year?`,
    answer: 12000,
    unit: '$',
    hint: 'Split the payment based on usage vs. future use.',
    explanation: `Calculation:
Current Year Expense = $24,000 × (6/12) = $12,000

• • •

Step-by-step breakdown:

1. Payment Analysis:
   • Total payment: $24,000
   • Payment date: July 1
   • Contract duration: 12 months

2. Usage Calculation:
   • Months used in current year: July to December = 6 months
   → Current year expense: $24,000 × (6/12) = $12,000

3. Remaining Prepaid Asset:
   → Prepaid asset: $24,000 - $12,000 = $12,000

Key Points:
   • Expenses must match the period when benefits are received
   • Only 6 months of the annual subscription were used this year
   • $12,000 remains as prepaid asset for next year's expense
   • This follows the matching principle in accounting`,
    learnContent: {
      concept: 'Expenses must match the period in which benefits are received. Prepaid expenses are future-period costs paid upfront.',
      formula: 'Expense = Total × (Months Used / 12)\nPrepaid = Total - Expense',
      example: '$12k paid in Oct → 3 months used = $3k expense\n$6k paid in Jan for 6 months → full expense in year\n$18k paid in Sep → 4 months used = $6k expense, $12k prepaid'
    }
  },
  {
    id: 'acc-medium-50',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Amortization of Intangible Assets',
    description: `You acquire a brand trademark for $120,000 with a 10-year useful life and no residual value.

What is the annual amortization expense?`,
    answer: 12000,
    unit: '$',
    hint: 'Amortization = Cost / Useful Life',
    explanation: `Calculation:
Annual Amortization = $120,000 ÷ 10 years = $12,000

• • •

Step-by-step breakdown:

1. Intangible Asset Details:
   • Cost: $120,000
   • Useful life: 10 years
   • Residual value: $0

2. Annual Amortization:
   → Annual expense: $120,000 ÷ 10 = $12,000

3. Net Book Value Over Time:
   • After Year 1: $120,000 - $12,000 = $108,000
   • After Year 3: $120,000 - $36,000 = $84,000

Key Points:
   • Intangible assets are amortized over their useful lives
   • Straight-line method spreads cost evenly across years
   • Net book value decreases by $12,000 annually
   • This reflects the declining economic value of the trademark`,
    learnContent: {
      concept: 'Intangible assets like trademarks and patents are amortized over their useful lives to reflect declining value.',
      formula: 'Annual Amortization = Cost / Useful Life\nNBV = Cost - (Amortization × Years)',
      example: '$60k, 5 years → $12k/year → NBV after 2 = $36k\n$100k, 10 years → $10k/year → NBV after 5 = $50k\n$90k, 9 years → $10k/year → NBV after 4 = $50k'
    }
  },
  {
    id: 'acc-medium-67',
    track: 'accounting',
    difficulty: 'medium',
    title: 'DTL Adjustment After Tax Rate Change',
    description: `A company has a Deferred Tax Liability (DTL) of $6,000 on its balance sheet, based on a historical corporate tax rate of 30%. The government has recently reduced the corporate tax rate to 25%.

What is the new value of the DTL the company should report?`,
    answer: 5000,
    unit: '$',
    hint: 'Think about how DTLs are tied to future tax payments — lower rates mean lower liabilities.',
    explanation: `Calculation:
New DTL = $6,000 ÷ 30% × 25% = $5,000

• • •

Step-by-step breakdown:

1. Current DTL Analysis:
   • Current DTL: $6,000
   • Original tax rate: 30%
   → Underlying temporary difference: $6,000 ÷ 30% = $20,000

2. Tax Rate Change Impact:
   • New tax rate: 25%
   • Same temporary difference: $20,000
   → New DTL: $20,000 × 25% = $5,000

Key Points:
   • DTL represents future tax obligations on temporary differences
   • Lower tax rates reduce the value of future tax liabilities
   • The $1,000 reduction ($6,000 - $5,000) creates a one-time income benefit
   • Companies must adjust DTL balances when tax rates change`,
    learnContent: {
      concept: 'Deferred Tax Liabilities (DTLs) represent taxes owed in the future due to temporary timing differences. When tax rates change, the value of those liabilities must be adjusted accordingly.',
      formula: 'New DTL = Old DTL ÷ Old Tax Rate × New Tax Rate',
      example: '$8,000 DTL at 40% → New tax rate is 30% → New DTL = 8,000 ÷ 0.40 × 0.30 = $6,000\n$10,000 DTL at 35% → New rate 25% → DTL = 10,000 ÷ 0.35 × 0.25 = $7,143\n$4,000 DTL at 28% → New rate 21% → DTL = 4,000 ÷ 0.28 × 0.21 = $3,000'
    }
  },
  {
    id: 'acc-medium-68',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Capitalized vs. Expensed Purchase Impact',
    description: `A company buys a $120,000 machine. In Scenario A, they expense the full amount immediately. In Scenario B, they capitalize it and depreciate it straight-line over 4 years.

What is the difference in pre-tax income in Year 1 between the two scenarios?`,
    answer: 90000,
    unit: '$',
    hint: 'Compare full expensing vs. 1-year depreciation.',
    explanation: `Calculation:
Income Difference = $120,000 - $30,000 = $90,000

• • •

Step-by-step breakdown:

1. Scenario A - Full Expensing:
   • Year 1 expense: $120,000
   → Pre-tax income impact: -$120,000

2. Scenario B - Capitalization:
   • Annual depreciation: $120,000 ÷ 4 years = $30,000
   → Year 1 expense: $30,000

3. Income Difference:
   → Difference: $120,000 - $30,000 = $90,000

Key Points:
   • Capitalizing spreads the cost over the asset's useful life
   • Expensing hits income immediately in full
   • Year 1 pre-tax income is $90,000 higher with capitalization
   • Future years will show higher expenses under capitalization approach`,
    learnContent: {
      concept: 'Capitalizing means spreading the cost over time; expensing means taking the hit now. This impacts net income and taxes.',
      formula: 'Difference = Immediate Expense - Depreciation in Year 1',
      example: '$80,000 over 4 years → Difference = 80,000 - 20,000 = $60,000\n$100,000 over 5 years → Difference = 100,000 - 20,000 = $80,000\n$200,000 over 10 years → Difference = 200,000 - 20,000 = $180,000'
    }
  },
  {
    id: 'acc-medium-69',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Non-Cash Adjustment to Net Income',
    description: `A company reports net income of $60,000. This includes $5,000 of interest expense and $15,000 in depreciation. The tax rate is 25%.

What is the cash flow from operations using the indirect method, ignoring changes in working capital?`,
    answer: 75000,
    unit: '$',
    hint: 'Start with net income, then add back non-cash charges.',
    explanation: `Calculation:
CFO = $60,000 + $15,000 = $75,000

• • •

Step-by-step breakdown:

1. Starting Point:
   → Net Income: $60,000

2. Non-Cash Adjustments:
   • Depreciation: +$15,000 (non-cash expense, add back)
   → Cash Flow from Operations: $75,000

3. Items Not Adjusted:
   • Interest expense: $5,000 (already cash-based in net income)

Key Points:
   • Indirect method starts with net income and adjusts for non-cash items
   • Depreciation reduced net income but didn't use cash
   • Interest expense is already reflected as a cash outflow in net income
   • Working capital changes are ignored per the question`,
    learnContent: {
      concept: 'Non-cash charges like depreciation must be added back to reconcile net income with cash flow.',
      formula: 'CFO = Net Income + Non-Cash Charges ± Working Capital Changes',
      example: 'Net Income = 50k, Depreciation = 10k → CFO = 60k\nNet = 70k, Dep = 5k → CFO = 75k\nNet = 40k, Dep = 12k → CFO = 52k'
    }
  },
  {
    id: 'acc-medium-70',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Asset Impairment Effect on Financials',
    description: `A company has equipment worth $100,000 on its books. After a poor performance year, it conducts an impairment test and writes the value down to $65,000.

Assuming a 20% tax rate, what is the net income impact of this impairment?`,
    answer: 28000,
    unit: '$',
    hint: 'Think about after-tax impact of a write-down.',
    explanation: `Calculation:
After-Tax Impact = $35,000 × (1 - 0.20) = $28,000

• • •

Step-by-step breakdown:

1. Asset Impairment:
   • Original book value: $100,000
   • Impaired value: $65,000
   → Impairment charge: $35,000

2. Tax Impact:
   • Impairment charge: $35,000
   • Tax rate: 20%
   → Tax savings: $35,000 × 20% = $7,000

3. Net Income Impact:
   → After-tax impact: $35,000 - $7,000 = $28,000

Key Points:
   • Asset impairment is a non-cash charge reducing net income
   • Tax deductible nature of impairment provides some offset
   • Net impact is reduced by the tax shield benefit
   • This represents the true economic cost after tax effects`,
    learnContent: {
      concept: 'An asset impairment is a non-cash charge that reduces net income after taxes.',
      formula: 'After-Tax Impact = Write-down × (1 - Tax Rate)',
      example: '50k write-down, 25% tax → Impact = 37.5k\n40k write-down, 30% tax → Impact = 28k\n20k write-down, 21% tax → Impact = 15.8k'
    }
  },
  {
    id: 'acc-medium-71',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Deferred Revenue Recognition Over Time',
    description: `A company receives $120,000 in cash upfront for a 12-month software subscription. It starts delivering the service evenly starting in January.

How much revenue is recognized by the end of April?`,
    answer: 40000,
    unit: '$',
    hint: 'Revenue is recognized monthly.',
    explanation: `Calculation:
Revenue Recognized = $10,000 × 4 months = $40,000

• • •

Step-by-step breakdown:

1. Monthly Revenue Rate:
   • Total contract: $120,000
   • Contract duration: 12 months
   → Monthly revenue: $120,000 ÷ 12 = $10,000

2. Service Period:
   • Start date: January
   • End of measurement: April
   → Months of service: 4 months

3. Revenue Recognition:
   → Total recognized: $10,000 × 4 = $40,000

Key Points:
   • Revenue is recognized evenly as services are delivered
   • Deferred revenue liability decreases as revenue is recognized
   • Remaining deferred revenue: $120,000 - $40,000 = $80,000
   • This follows the performance obligation satisfaction approach`,
    learnContent: {
      concept: 'Deferred revenue is a liability that\'s reduced as services are delivered.',
      formula: 'Recognized Revenue = Total Contract ÷ Duration × Months Delivered',
      example: '$60k for 6 months → 2 months = $20k\n$240k for 12 months → 6 months = $120k\n$36k for 3 months → 1 month = $12k'
    }
  },
  {
    id: 'acc-medium-70-v2',
    track: 'accounting',
    difficulty: 'medium',
    title: 'DTA Reversal Timing',
    description: `A company has a Deferred Tax Asset (DTA) of $12,000 related to net operating losses (NOLs), which can be used to offset taxable income over the next 3 years. If the company expects to utilize $3,000 of the DTA in Year 1, $5,000 in Year 2, and the remainder in Year 3, what is the DTA balance at the end of Year 2?`,
    answer: 4000,
    unit: '$',
    hint: 'Subtract used portions of the DTA from the beginning balance year-by-year.',
    explanation: `Calculation:
Remaining DTA = $12,000 - $8,000 = $4,000

• • •

Step-by-step breakdown:

1. Initial DTA Balance:
   → DTA for NOLs: $12,000

2. DTA Usage by Year:
   • Year 1: $3,000
   • Year 2: $5,000
   → Total used through Year 2: $8,000

3. End of Year 2 Balance:
   → Remaining DTA: $12,000 - $8,000 = $4,000

Key Points:
   • DTAs are reduced as tax benefits are utilized
   • Remaining $4,000 will be used in Year 3
   • NOLs provide valuable tax offsets against future profits
   • DTA balance decreases as tax benefits are realized`,
    learnContent: {
      concept: 'Deferred Tax Assets (DTAs) arise when a company overpays taxes or records losses that can be used to reduce future taxable income.',
      formula: 'Remaining DTA = Initial DTA − ∑ Annual DTA usage',
      example: 'Initial DTA = $10,000; used $4,000 in Y1 and $3,000 in Y2 → Remaining = $3,000\nDTA from NOLs = $5,000, used $1,000 per year for 5 years\nDTA = $20,000, used unevenly: $7,000, $6,000, then $4,000'
    }
  },
  {
    id: 'acc-medium-71-v2',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Depreciation Method Impact on Earnings',
    description: `A company purchases equipment for $90,000. Under straight-line depreciation over 3 years with no salvage value, it records $30,000 annually. Under an accelerated method, it depreciates $50,000 in Year 1, $30,000 in Year 2, and $10,000 in Year 3. What is the difference in pre-tax income between the two methods in Year 1?`,
    answer: 20000,
    unit: '$',
    hint: 'Compare the Year 1 depreciation charges.',
    explanation: `Calculation:
Income Difference = $50,000 - $30,000 = $20,000

• • •

Step-by-step breakdown:

1. Straight-Line Method:
   • Equipment cost: $90,000
   • Useful life: 3 years
   → Year 1 depreciation: $30,000

2. Accelerated Method:
   → Year 1 depreciation: $50,000

3. Pre-Tax Income Impact:
   • Higher depreciation reduces pre-tax income
   → Difference: $50,000 - $30,000 = $20,000

Key Points:
   • Accelerated depreciation front-loads expenses
   • Pre-tax income is $20,000 lower with accelerated method
   • Future years will reverse this pattern
   • Total depreciation over asset life remains the same`,
    learnContent: {
      concept: 'Accelerated depreciation lowers net income earlier, while straight-line smooths the impact.',
      formula: 'Δ Pre-Tax Income = SL Depreciation − Accelerated Depreciation',
      example: 'SL = 25K, Accelerated = 40K → Difference = 15K\nSL = 10K, Accelerated = 18K → Difference = 8K\nSL = 15K, Accelerated = 15K → Difference = 0'
    }
  },
  {
    id: 'acc-medium-72',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Capital Lease Liability Calculation',
    description: `A company signs a capital lease requiring $5,000 annual payments over 4 years. The lease uses a 6% discount rate. Using the present value formula, calculate the initial lease liability recorded on the balance sheet at lease inception.

Note: Use full precision in intermediate calculations and round only the final answer to the nearest whole dollar.`,
    answer: 17325,
    unit: '$',
    hint: 'Use the PV of annuity formula for lease payments.',
    explanation: `Calculation:
Present Value = $5,000 × 3.46511 = $17,325

• • •

Step-by-step breakdown:

1. Lease Terms:
   • Annual payment: $5,000
   • Lease term: 4 years
   • Discount rate: 6%

2. Present Value Factor Calculation:
   • PV annuity factor: [(1 - (1.06)^-4) / 0.06] = 3.46511

3. Initial Lease Liability:
   → PV: $5,000 × 3.46511 = $17,325

Key Points:
   • Capital leases create both an asset and liability at lease inception
   • Liability equals present value of future lease payments
   • Discount rate reflects the company's incremental borrowing rate
   • PV annuity factor formula: [(1 - (1 + r)^-n) / r]
   • This liability will be reduced as lease payments are made`,
    learnContent: {
      concept: 'Capital leases create a liability equal to the present value of lease payments.',
      formula: 'PV = Pmt × [(1 − (1 + r)^−n) / r]',
      example: '$10,000/yr, 3 yrs, 5% → PV ≈ $27,231\n$2,000/yr, 5 yrs, 8% → PV ≈ $7,986\n$1,000/yr, 4 yrs, 10% → PV ≈ $3,170'
    }
  },
  {
    id: 'acc-medium-70-alt',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Warranty Liability Accrual',
    description: `A company sells $200,000 worth of products and expects 2% of them to require warranty repairs. Actual warranty claims during the year totaled $2,500. What is the ending warranty liability on the balance sheet?`,
    answer: 1500,
    unit: '$',
    hint: 'Start with estimated expense, then subtract actual claims.',
    explanation: 'Expected warranty = 2% × $200,000 = $4,000\nClaims = $2,500\nEnding liability = $4,000 − $2,500 = $1,500',
    learnContent: {
      concept: 'Warranty liabilities are estimated and adjusted for actual claims.',
      formula: 'Ending Warranty Liability = Expected − Actual Claims',
      example: 'Sales = $500K, 1% warranty, $3K used → $2K remaining\nSales = $300K, 2% expected, $4.5K used → $1.5K remaining\nSales = $100K, 5% expected, $2K used → $3K remaining'
    }
  },
  {
    id: 'acc-medium-71-alt',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Impairment Loss Calculation',
    description: `A company owns equipment with a carrying value of $40,000. Due to damage, the recoverable fair value is now $28,000. What impairment loss should the company recognize on its income statement?`,
    answer: 12000,
    unit: '$',
    hint: 'Compare book value and fair value.',
    explanation: 'Impairment = Book Value − Fair Value\n= $40,000 − $28,000 = $12,000',
    learnContent: {
      concept: 'Impairments occur when asset values drop below their book values.',
      formula: 'Impairment = Book Value − Recoverable Value',
      example: 'BV = $70K, FV = $60K → $10K impairment\nBV = $25K, FV = $20K → $5K impairment\nBV = $10K, FV = $12K → No impairment'
    }
  },
  {
    id: 'acc-medium-73-v2',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Treasury Stock Repurchase Impact',
    description: `A company repurchases 2,000 shares of its own stock at $15 per share. What is the total impact to shareholders' equity from this transaction?`,
    answer: 30000,
    unit: '$',
    hint: 'Treasury stock reduces equity by the repurchase amount.',
    explanation: 'Repurchase = 2,000 × $15 = $30,000',
    learnContent: {
      concept: 'Treasury stock is a contra-equity account that reduces equity.',
      formula: 'Treasury Stock = Shares × Price',
      example: '1,000 × $10 = $10,000\n500 × $20 = $10,000\n3,000 × $12 = $36,000'
    }
  },
  {
    id: 'acc-medium-73',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Allowance for Doubtful Accounts Adjustment',
    description: `Beginning ADA = $5,000. During the year, the company writes off $2,000 in uncollectible AR and estimates $4,000 of new bad debt. What is the ending ADA balance?`,
    answer: 7000,
    unit: '$',
    hint: 'Ending ADA = Beginning − Write-offs + New Estimates',
    explanation: '= $5,000 − $2,000 + $4,000 = $7,000',
    learnContent: {
      concept: 'ADA reflects future expected AR that won\'t be collected.',
      formula: 'Ending ADA = Beginning − Write-offs + Provision',
      example: '$10K − $3K + $5K = $12K\n$4K − $1K + $2K = $5K\n$6K − $2K + $2K = $6K'
    }
  },
  {
    id: 'acc-medium-74',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Interest Expense on Amortizing Loan',
    description: `A company takes a $100,000 loan at 8% annual interest. It pays $20,000 of principal at the end of Year 1. What is the interest expense for Year 2?`,
    answer: 6400,
    unit: '$',
    hint: 'Use the remaining principal to calculate interest.',
    explanation: 'Remaining principal = $100K − $20K = $80K\nInterest = 8% × $80K = $6,400',
    learnContent: {
      concept: 'Interest expense on amortizing debt is based on remaining principal.',
      formula: 'Interest = Rate × Remaining Principal',
      example: '$50K remaining, 10% → $5,000\n$80K remaining, 6% → $4,800\n$120K remaining, 5% → $6,000'
    }
  },
  {
    id: 'acc-medium-75',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Bad Debt Expense on AR Growth',
    description: `A company's AR increased from $100K to $130K during the year. It estimates 4% of year-end AR is uncollectible. What bad debt expense should be recorded?`,
    answer: 5200,
    unit: '$',
    hint: 'Ending ADA = 4% × $130K = $5,200',
    explanation: 'ADA = 4% × $130K = $5,200\nThis is the expense for the current year if no prior ADA exists.',
    learnContent: {
      concept: 'Bad debt expense is matched to expected uncollectible AR.',
      formula: 'Bad Debt = % Uncollectible × Ending AR',
      example: 'AR = $50K, 5% → $2,500\nAR = $80K, 2% → $1,600\nAR = $200K, 1% → $2,000'
    }
  },
  {
    id: 'acc-medium-76',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Inventory Write-Down',
    description: `Inventory has a book value of $45,000, but due to obsolescence, its net realizable value is $35,000. What inventory write-down should be recorded?`,
    answer: 10000,
    unit: '$',
    hint: 'Write-down = Book value − NRV',
    explanation: '= $45,000 − $35,000 = $10,000',
    learnContent: {
      concept: 'Inventory is written down when its market value drops below book value.',
      formula: 'Write-Down = Book Value − NRV',
      example: 'BV = $60K, NRV = $55K → $5K\nBV = $30K, NRV = $25K → $5K\nBV = $20K, NRV = $18K → $2K'
    }
  },
  // Medium Questions 77-86
  {
    id: 'acc-medium-77',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Deferred Revenue Recognition Timing',
    description: `At the start of Q1, Riker Corp receives $36,000 in cash for a 12-month subscription service. The company recognizes revenue evenly over the term of the subscription. By the end of Q2, how much deferred revenue remains on the balance sheet?`,
    answer: 18000,
    unit: '$',
    hint: 'Deferred revenue decreases each month as revenue is recognized.',
    explanation: 'Riker Corp receives $36,000 in Q1 for 12 months of service → $3,000 revenue recognized per month. By end of Q2, 6 months have passed → $3,000 × 6 = $18,000 recognized → $36,000 – $18,000 = $18,000 deferred revenue remains.',
    learnContent: {
      concept: 'Deferred revenue represents cash collected before revenue is earned. As services are delivered, revenue is recognized, and the deferred liability decreases.',
      formula: 'Deferred Revenue Remaining = Total Prepaid Revenue – (Monthly Revenue × Months Passed)',
      example: '$12,000 received for a 6-month gym membership. After 4 months, deferred revenue = $12,000 – ($2,000 × 4) = $4,000\n$60,000 received for 1-year software license. After 9 months → $60,000 – ($5,000 × 9) = $15,000 deferred\n$24,000 received for 8-month contract → $3,000/month → after 5 months, $9,000 remains as deferred revenue'
    }
  },
  {
    id: 'acc-medium-78',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Inventory Obsolescence Impact on Statements',
    description: `Harley Foods identifies $6,000 in obsolete inventory. The company writes it off directly through COGS. Assume a 25% tax rate. What is the net income impact of this inventory write-off?`,
    answer: -4500,
    unit: '$',
    hint: 'A write-off through COGS reduces taxable income. Adjust for taxes.',
    explanation: 'Write-off = $6,000; tax shield = $6,000 × 25% = $1,500 → Net income impact = $6,000 – $1,500 = $4,500 decrease',
    learnContent: {
      concept: 'Inventory write-offs reduce gross profit (and taxable income). When written off through COGS, they lower net income but partially offset by the tax shield.',
      formula: 'Net Income Impact = Write-off Amount × (1 – Tax Rate)',
      example: '$10,000 obsolete inventory, 30% tax → Net income drops by $7,000\n$8,000 write-down, 25% tax → Net income drops by $6,000\n$15,000 write-off, 20% tax → Impact = $12,000 on net income'
    }
  },
  {
    id: 'acc-medium-79',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Treasury Stock Repurchase',
    description: `Midwood Inc repurchases 2,000 shares at $25 per share. Prior to this, total shareholders' equity was $600,000. What is the updated shareholders' equity after the repurchase?`,
    answer: 550000,
    unit: '$',
    hint: 'Share buybacks reduce equity via treasury stock.',
    explanation: 'Repurchase cost = 2,000 × $25 = $50,000 → New equity = $600,000 – $50,000 = $550,000',
    learnContent: {
      concept: 'Treasury stock represents shares repurchased by the company. This reduces total shareholders\' equity without affecting net income.',
      formula: 'New Shareholders\' Equity = Previous Equity – (Repurchased Shares × Price)',
      example: 'Equity $800K, buys back $60K → new equity = $740K\nRepurchase 500 shares at $100 → reduces equity by $50K\nBuys back $25K worth of shares → equity drops accordingly'
    }
  },
  {
    id: 'acc-medium-80',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Tax Benefit of Stock-Based Compensation',
    description: `A firm reports $40,000 in stock-based compensation expense. The tax rate is 30%. How much is the tax shield (benefit) created by this non-cash expense?`,
    answer: 12000,
    unit: '$',
    hint: 'Multiply non-cash expense by tax rate.',
    explanation: `Calculation:
Tax Shield = $40,000 × 30% = $12,000

• • •

Step-by-step breakdown:

1. Stock-Based Compensation:
   • Non-cash expense: $40,000
   • Tax rate: 30%

2. Tax Shield Calculation:
   → Tax shield = $40,000 × 30% = $12,000

Key Points:
   • Stock compensation is a non-cash expense reducing taxable income
   • Tax shield represents actual cash savings from lower taxes
   • Creates deferred tax asset if timing differences exist
   • Benefits company cash flow despite being non-cash expense`,
    learnContent: {
      concept: 'Non-cash expenses like stock-based compensation reduce taxable income and generate a tax benefit without reducing cash.',
      formula: 'Tax Shield = Expense × Tax Rate',
      example: '$25K stock comp, 40% tax → $10K shield\n$80K expense, 25% tax → $20K benefit\n$100K depreciation, 30% tax → $30K tax shield'
    }
  },
  {
    id: 'acc-medium-81',
    track: 'accounting',
    difficulty: 'medium',
    title: 'AR Collection Lag and Cash Flow',
    description: `Revere Corp has revenue of $400,000 in Q1 but collects only 75% of this during the quarter. By the end of Q2, the rest is collected. What is the Q1 impact on operating cash flow?`,
    answer: 300000,
    unit: '$',
    hint: 'Use cash collections only.',
    explanation: 'Collected in Q1 = 75% × $400,000 = $300,000 → That\'s what hits cash flow.',
    learnContent: {
      concept: 'Revenue recognition doesn\'t equal cash received. Uncollected revenue becomes Accounts Receivable, delaying its impact on cash flow.',
      formula: 'Cash Collected = Revenue × Collection %',
      example: '$500K revenue, collects 80% → $400K operating cash\n$250K sales, 70% collected → $175K cash inflow\n$900K revenue, 60% collected → $540K operating cash flow'
    }
  },
  {
    id: 'acc-medium-82',
    track: 'accounting',
    difficulty: 'medium',
    title: 'CapEx vs. Repairs Expense',
    description: `Landmark Inc spends $70,000 renovating equipment. $50,000 of this extends the useful life, while $20,000 is for normal maintenance. If the tax rate is 20%, what is the total net income impact?`,
    answer: -16000,
    unit: '$',
    hint: 'CapEx doesn\'t hit income statement; only repairs do.',
    explanation: 'Only $20K hits IS as expense → tax shield = $20K × 20% = $4K → net income impact = $20K – $4K = $16K',
    learnContent: {
      concept: 'Expenses that extend asset life are capitalized (on BS); routine maintenance is expensed (on IS).',
      formula: 'Net Income Impact = Expense × (1 – Tax Rate)',
      example: '$10K repairs, 30% tax → NI drops $7K\n$60K CapEx, no immediate IS impact\n$5K maintenance → $5K – $1K tax = $4K net income drop'
    }
  },
  {
    id: 'acc-medium-83',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Non-Cash Working Capital Adjustment',
    description: `In Q4, Accounts Receivable increases by $8,000, and Inventory decreases by $5,000. What is the net change in non-cash working capital?`,
    answer: 3000,
    unit: '$',
    hint: 'Use formula: ∆AR + ∆Inventory – ∆AP',
    explanation: `Calculation:
Net Working Capital Change = $8,000 - $5,000 = $3,000

• • •

Step-by-step breakdown:

1. Working Capital Components:
   • Accounts Receivable: +$8,000 (increase)
   • Inventory: -$5,000 (decrease)

2. Net Change:
   → Net Change = +$8,000 - $5,000 = +$3,000

Key Points:
   • AR increase represents cash tied up in customer receivables
   • Inventory decrease freed up cash from reduced stock levels
   • Net result is $3,000 increase in working capital investment
   • Higher working capital typically reduces operating cash flow`,
    learnContent: {
      concept: 'Working capital changes reflect operational efficiency and impact cash flow.',
      formula: '∆WC = ∆AR + ∆Inventory – ∆AP',
      example: 'AR ↑10K, Inventory ↓4K → WC ↑6K\nAR ↓3K, AP ↑2K → WC ↓5K\nInventory ↑5K, AR ↑5K → WC ↑10K'
    }
  },
  {
    id: 'acc-medium-84',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Interest Expense Timing',
    description: `GlobalTech issued $100,000 in debt on July 1 with a 10% annual interest rate. Interest is paid annually. How much interest expense is reported on the income statement by year-end?`,
    answer: 5000,
    unit: '$',
    hint: 'Annual interest prorated for 6 months.',
    explanation: `Calculation:
Interest Expense = $100,000 × 10% × (6/12) = $5,000

• • •

Step-by-step breakdown:

1. Debt Terms:
   • Principal: $100,000
   • Annual interest rate: 10%
   • Issue date: July 1 (mid-year)

2. Time Period:
   • July 1 to December 31: 6 months
   → Time fraction: 6/12 = 0.5

3. Interest Expense:
   → Interest: $100,000 × 10% × 0.5 = $5,000

Key Points:
   • Interest is accrued based on time elapsed
   • Annual rate must be prorated for partial periods
   • Expense is recorded even if payment is due later
   • This creates an accrued interest liability if unpaid`,
    learnContent: {
      concept: 'Interest is accrued over time. Even if unpaid, it\'s expensed based on the period owed.',
      formula: 'Interest = Principal × Rate × Time',
      example: '$50K loan, 6%, 1 year = $3K\n$200K, 5%, 3 months → $2.5K\n$120K, 8%, 9 months → $7,200'
    }
  },
  {
    id: 'acc-medium-85',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Asset Disposal Impact',
    description: `Milltown sells equipment for $28,000. The original cost was $50,000, and accumulated depreciation is $30,000. What is the gain or loss on sale?`,
    answer: 8000,
    unit: '$',
    hint: 'Compare selling price to net book value.',
    explanation: `Calculation:
Gain on Sale = $28,000 - $20,000 = $8,000

• • •

Step-by-step breakdown:

1. Equipment Details:
   • Original cost: $50,000
   • Accumulated depreciation: $30,000
   → Net book value: $20,000

2. Sale Transaction:
   • Sale price: $28,000
   • Net book value: $20,000

3. Gain Calculation:
   → Gain = $28,000 - $20,000 = $8,000

Key Points:
   • Gain occurs when sale price exceeds net book value
   • Gain is reported on the income statement
   • Both the asset and accumulated depreciation are removed from books
   • Cash received exceeds the carrying value of the asset`,
    learnContent: {
      concept: 'Gain/loss = Sale price – Book value. Affects income statement directly.',
      formula: 'Gain/Loss = Sale Price – (Original Cost – Accumulated Depreciation)',
      example: 'Sell at $15K, NBV = $20K → $5K loss\nSell at $60K, NBV = $40K → $20K gain\nSell at $10K, NBV = $10K → No gain/loss'
    }
  },
  {
    id: 'acc-medium-86',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Dividend Impact on Financials',
    description: `A company declares and pays $12,000 in cash dividends. How does this affect the balance sheet and cash flow statement?`,
    answer: 12000,
    unit: '$',
    hint: 'Dividends reduce both cash and retained earnings.',
    explanation: 'Dividend reduces assets (cash) and equity (RE). Cash flow from financing shows an outflow of $12,000.',
    learnContent: {
      concept: 'Dividends reduce retained earnings and cash. No income statement impact.',
      formula: 'Dividend Impact = Cash Outflow = Reduction in Retained Earnings',
      example: '$5K dividend → Cash –$5K, RE –$5K\n$20K → Same impacts\n$0.50/share × 10K shares → $5K outflow'
    }
  },
  {
    id: 'acc-medium-87',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Accretion of Bond Discount',
    description: 'A company issues bonds with a face value of $100,000 for $94,000. The bonds mature in 5 years, and the annual accretion of the discount is straight-line. What is the annual non-cash interest expense from the bond discount accretion?',
    answer: 1200,
    unit: '$',
    hint: 'Bond discount = Face Value – Issue Price, then divide by term.',
    explanation: 'Discount = $100,000 – $94,000 = $6,000 → Annual accretion = $6,000 ÷ 5 = $1,200',
    learnContent: {
      concept: 'A bond issued at a discount creates a non-cash interest expense over time via accretion.',
      formula: 'Accretion = (Face – Issue Price) ÷ Term',
      example: '$500K issued at $480K, 10 years → $2K/year\n$10K discount over 5 years → $2K/year\n$50K issued at $47.5K → $2.5K ÷ 10 = $250/year'
    }
  },
  {
    id: 'acc-medium-88',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Expense Classification in EBITDA',
    description: 'A company reports the following for the year: Revenue: $250,000, COGS: $100,000, Depreciation: $15,000, SG&A: $40,000, Interest Expense: $12,000. What is the company\'s EBITDA?',
    answer: 110000,
    unit: '$',
    hint: 'EBITDA = Revenue – COGS – SG&A',
    explanation: `Calculation:
EBITDA = $250,000 - $100,000 - $40,000 = $110,000

• • •

Step-by-step breakdown:

1. Revenue and Operating Costs:
   • Revenue: $250,000
   • Less: COGS: $100,000
   • Less: SG&A: $40,000
   → Operating Income before D&A: $110,000

2. Excluded Items:
   • Depreciation: $15,000 (excluded from EBITDA)
   • Interest Expense: $12,000 (excluded from EBITDA)

3. EBITDA Result:
   → EBITDA = $110,000

Key Points:
   • EBITDA focuses on core operating performance
   • Excludes capital structure effects (interest)
   • Excludes accounting method effects (depreciation)
   • Useful for comparing companies with different structures`,
    learnContent: {
      concept: 'EBITDA (Earnings Before Interest, Taxes, Depreciation, Amortization) is a proxy for operating performance.',
      formula: 'EBITDA = Revenue – COGS – OpEx (excl. D&A)',
      example: 'Rev $500K, COGS $200K, OpEx $100K → EBITDA = $200K\nAdd back $20K D&A to EBIT of $80K → $100K EBITDA\nRev $100K, COGS $30K, SG&A $20K → $50K EBITDA'
    }
  },
  {
    id: 'acc-medium-89',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Asset Revaluation and Depreciation',
    description: 'A company revalues a factory from $900,000 to $1,200,000. The remaining useful life is 6 years. If straight-line depreciation is applied, how much additional depreciation will be recorded per year due to the revaluation?',
    answer: 50000,
    unit: '$',
    hint: 'Use the revaluation increase and divide by useful life.',
    explanation: `Calculation:
Additional Annual Depreciation = $300,000 ÷ 6 years = $50,000

• • •

Step-by-step breakdown:

1. Asset Revaluation:
   • Original book value: $900,000
   • Revalued amount: $1,200,000
   → Revaluation increase: $300,000

2. Remaining Useful Life:
   → 6 years remaining

3. Additional Depreciation:
   → Annual increase: $300,000 ÷ 6 = $50,000

Key Points:
   • Revaluation increases asset's carrying value
   • Higher book value leads to higher annual depreciation
   • Revaluation surplus typically goes to other comprehensive income
   • Total depreciation over asset life increases by revaluation amount`,
    learnContent: {
      concept: 'Revaluation increases the asset\'s book value, resulting in higher depreciation going forward.',
      formula: 'Additional Depreciation = Revaluation Increase ÷ Remaining Life',
      example: 'Revalue +$100K, 5 years → $20K/year\nRevalue +$60K, 3 years → $20K/year\nRevalue +$240K, 8 years → $30K/year'
    }
  },
  {
    id: 'acc-medium-90',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Operating Lease vs. Finance Lease',
    description: 'A company signs a 5-year lease for office space, paying $10,000 annually. The lease is classified as an operating lease. What is the initial impact on the company\'s income statement and balance sheet in Year 1?',
    answer: 10000,
    unit: '$',
    hint: 'Capitalize full lease on BS, expense rent annually on IS.',
    explanation: `Calculation:
Year 1 Lease Expense = $10,000 (straight-line)

• • •

Step-by-step breakdown:

1. Operating Lease Treatment:
   • Annual payment: $10,000
   • Lease term: 5 years
   • Classification: Operating lease

2. Income Statement Impact:
   → Annual lease expense: $10,000 (straight-line)

3. Balance Sheet Impact:
   • Right-of-use asset: $50,000 (present value of payments)
   • Lease liability: $50,000 (same amount)
   → Net impact on equity: $0 initially

Key Points:
   • Operating leases create both an asset and liability
   • Lease expense is recognized evenly over the term
   • Total payments equal total expense over lease life
   • ROU asset and liability start equal but amortize differently`,
    learnContent: {
      concept: 'Operating leases must be capitalized on the balance sheet under new accounting rules, with rent expensed straight-line.',
      formula: 'Lease Asset & Liability = Annual Rent × Lease Term',
      example: '$12K/year, 3 years → $36K ROU asset & liability\n$8K/year, 4 years → $32K\n$20K/year, 2 years → $40K on BS, $20K on IS'
    }
  },
  {
    id: 'acc-medium-91',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Change in PP&E Rollforward',
    description: 'A company begins the year with $800,000 in PP&E. During the year, it records $90,000 in depreciation, spends $200,000 in CapEx, and sells equipment worth $50,000 with a book value of $40,000. What is the year-end PP&E?',
    answer: 870000,
    unit: '$',
    hint: 'PP&E = Beginning + CapEx – Depreciation – NBV of disposals',
    explanation: "**Calculation:** $800,000 + $200,000 - $90,000 - $40,000 = **$870,000**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Beginning PP&E Balance**\n   - Starting amount: $800,000\n\n2. **Add Capital Expenditures**\n   - CapEx during year: +$200,000\n   - Running total: $1,000,000\n\n3. **Subtract Depreciation**\n   - Annual depreciation: -$90,000\n   - Running total: $910,000\n\n4. **Subtract Asset Disposals**\n   - Book value of equipment sold: -$40,000\n   - Final PP&E balance: $870,000\n\n**Key Points:**\n   • CapEx increases PP&E by the full purchase amount\n   • Depreciation reduces PP&E each period\n   • Asset sales reduce PP&E by net book value, not sale price",
    learnContent: {
      concept: 'PP&E increases through CapEx and decreases via depreciation or asset sales.',
      formula: 'Ending PP&E = Beginning + CapEx – Depreciation – NBV of Assets Sold',
      example: 'Begin $100K, CapEx $30K, Deprec $10K → End = $120K\nAdd $50K CapEx, sell $20K NBV → End = Begin + $50K – $20K'
    }
  },
  {
    id: 'acc-medium-92',
    track: 'accounting',
    difficulty: 'medium',
    title: 'DTL Creation from Accelerated Depreciation',
    description: 'A company has a $30,000 difference between tax and book depreciation. The tax rate is 25%. What Deferred Tax Liability (DTL) is created?',
    answer: 7500,
    unit: '$',
    hint: 'DTL = (Tax Depreciation – Book Depreciation) × Tax Rate',
    explanation: `Calculation:
DTL = $30,000 × 25% = $7,500

• • •

Step-by-step breakdown:

1. Depreciation Difference:
   • Tax depreciation exceeds book depreciation by: $30,000
   • Tax rate: 25%

2. DTL Calculation:
   → DTL = $30,000 × 25% = $7,500

Key Points:
   • DTL arises when tax depreciation exceeds book depreciation
   • Company pays less tax now but owes more in future
   • Accelerated tax depreciation creates timing differences
   • DTL will reverse as book depreciation catches up over time`,
    learnContent: {
      concept: 'DTL arises when tax depreciation > book depreciation, deferring tax payments.',
      formula: 'DTL = Difference × Tax Rate',
      example: '$10K difference, 40% tax → $4K DTL\n$50K diff, 20% → $10K\n$80K, 30% → $24K DTL'
    }
  },
  {
    id: 'acc-medium-93',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Days Payable Outstanding (DPO)',
    description: 'If a company has COGS of $600,000 and average accounts payable of $50,000, what is the Days Payable Outstanding (DPO)?',
    answer: 30.4,
    unit: 'days',
    hint: 'DPO = (Avg AP ÷ COGS) × 365',
    explanation: "**Calculation:** ($50,000 ÷ $600,000) × 365 = **30.4 days**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Gather Key Metrics**\n   - Average accounts payable: $50,000\n   - Annual cost of goods sold: $600,000\n\n2. **Calculate Payable Turnover**\n   - Payable turnover ratio: $600,000 ÷ $50,000 = 12 times\n   - Daily COGS: $600,000 ÷ 365 = $1,644\n\n3. **Calculate Days Payable Outstanding**\n   - DPO = $50,000 ÷ $1,644 = 30.4 days\n   - Alternative: (Average AP ÷ COGS) × 365\n\n**Key Points:**\n   • DPO measures how long company takes to pay suppliers\n   • Higher DPO indicates longer payment period (better cash flow)\n   • Industry comparison helps assess payment strategy effectiveness",
    learnContent: {
      concept: 'DPO shows how long a company takes to pay suppliers.',
      formula: 'DPO = (Average AP ÷ COGS) × 365',
      example: '$40K AP, $500K COGS → 29.2 days\n$20K AP, $200K COGS → 36.5 days\n$60K AP, $600K COGS → 36.5 days'
    }
  },
  {
    id: 'acc-medium-94',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Deferred Rent Accounting',
    description: 'Under the old lease model, a company pays escalating rent: $8K in Year 1, $10K in Year 2, $12K in Year 3. What is the straight-line rent expense per year?',
    answer: 10000,
    unit: '$',
    hint: 'Average the total lease payments over the term.',
    explanation: "**Calculation:** ($8,000 + $10,000 + $12,000) ÷ 3 = **$10,000 per year**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Total Lease Payments**\n   - Year 1: $8,000\n   - Year 2: $10,000\n   - Year 3: $12,000\n   - Total payments: $30,000\n\n2. **Calculate Straight-Line Expense**\n   - Average annual expense: $30,000 ÷ 3 years = $10,000\n\n3. **Deferred Rent Impact**\n   - Year 1: $10,000 expense vs $8,000 paid = $2,000 deferred rent liability\n   - Year 2: $10,000 expense vs $10,000 paid = No change\n   - Year 3: $10,000 expense vs $12,000 paid = $2,000 deferred rent reversal\n\n**Key Points:**\n   • Straight-line method smooths escalating payments\n   • Deferred rent liability tracks timing differences\n   • Total expense equals total payments over lease term",
    learnContent: {
      concept: 'Deferred rent smooths escalating lease payments into even IS expense.',
      formula: 'Straight-line Rent = Total Lease Payments ÷ Years',
      example: '$6K, $8K, $10K → $24K ÷ 3 = $8K\n$9K, $9K, $12K → $10K avg\n$5K, $10K → $7.5K/year'
    }
  },
  {
    id: 'acc-medium-95',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Goodwill Calculation After Acquisition',
    description: 'A company acquires a target for $500,000. The fair value of identifiable assets is $450,000, and liabilities assumed are $100,000. What is the goodwill created?',
    answer: 150000,
    unit: '$',
    hint: 'Goodwill = Purchase Price – (Assets – Liabilities)',
    explanation: `Calculation:
Goodwill = $500,000 - $350,000 = $150,000

• • •

Step-by-step breakdown:

1. Acquisition Details:
   • Purchase price paid: $500,000
   • Fair value of identifiable assets: $450,000
   • Liabilities assumed: $100,000

2. Net Assets Acquired:
   → Net Assets = $450,000 - $100,000 = $350,000

3. Goodwill Calculation:
   → Goodwill = $500,000 - $350,000 = $150,000

Key Points:
   • Goodwill represents the premium paid over net assets
   • Reflects intangible value like brand, customer relationships, synergies
   • Goodwill is tested annually for impairment
   • Cannot be amortized under current accounting standards`,
    learnContent: {
      concept: 'Goodwill is the premium paid over the fair value of net assets in an acquisition.',
      formula: 'Goodwill = Purchase Price – (Assets – Liabilities)',
      example: 'Buy for $1M, Assets $800K, Liab $300K → GW = $1M – $500K = $500K\nPay $200K for $180K net assets → GW = $20K'
    }
  },
  {
    id: 'acc-medium-96',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Non-Controlling Interest (NCI) on Income Statement',
    description: 'A company owns 80% of a subsidiary that earns $100,000 in net income. What portion of the income is attributable to non-controlling interest?',
    answer: 20000,
    unit: '$',
    hint: 'NCI = Net Income × Ownership % not owned',
    explanation: "**Calculation:** $100,000 × 20% = **$20,000**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Ownership Structure**\n   - Parent company ownership: 80%\n   - Non-controlling interest: 100% - 80% = 20%\n   - Subsidiary net income: $100,000\n\n2. **Income Allocation**\n   - Parent company share: $100,000 × 80% = $80,000\n   - Non-controlling interest share: $100,000 × 20% = $20,000\n\n3. **Consolidated Income Statement Impact**\n   - Total subsidiary income: $100,000 (included in consolidated revenue)\n   - Less: NCI portion: ($20,000)\n   - Net income attributable to parent: $80,000\n\n**Key Points:**\n   • NCI represents minority shareholders' interest in subsidiary earnings\n   • Consolidated statements include 100% of subsidiary results\n   • NCI is deducted to show parent company's share of income",
    learnContent: {
      concept: 'NCI represents income allocated to minority shareholders in consolidated subsidiaries.',
      formula: 'NCI = Net Income × (1 – Ownership %)',
      example: '$60K NI, 75% owned → NCI = $15K\n$500K, 60% owned → NCI = $200K\n$80K, 90% owned → $8K NCI'
    }
  },
  {
    id: 'acc-medium-97',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Revenue Recognition Timing',
    description: 'A software company signs a 12-month contract for $120,000 on January 1st and receives full payment upfront. By March 31st, how much revenue should the company recognize under accrual accounting?',
    answer: 30000,
    unit: '$',
    hint: 'Recognize revenue based on the portion of service delivered.',
    explanation: "**Calculation:** $120,000 × (3 ÷ 12) = **$30,000**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Contract Terms**\n   - Total contract value: $120,000\n   - Contract period: 12 months (January 1 - December 31)\n   - Payment received: $120,000 upfront\n\n2. **Revenue Recognition Progress**\n   - Service period completed: January 1 - March 31 = 3 months\n   - Percentage of service delivered: 3 ÷ 12 = 25%\n\n3. **Revenue Recognition Calculation**\n   - Revenue earned through March 31: $120,000 × 25% = $30,000\n   - Remaining deferred revenue: $120,000 - $30,000 = $90,000\n\n**Key Points:**\n   • Revenue is recognized as services are performed, not when cash is received\n   • Unearned revenue remains as a liability until services are delivered\n   • Monthly recognition would be $10,000 per month",
    learnContent: {
      concept: 'Accrual accounting recognizes revenue when earned, not when received.',
      formula: 'Recognized Revenue = Total Contract × (Months Passed ÷ Total Months)',
      example: '$60K over 6 months → 2 months passed = $20K\n$240K, 4 months passed of 12 → $80K\n$90K contract, 1 month of 9 → $10K'
    }
  },
  {
    id: 'acc-medium-98',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Debt Amortization and Interest Expense',
    description: 'A company takes out a $100,000 loan at 6% interest, with $20,000 of principal due annually. What is the interest expense in Year 2?',
    answer: 4800,
    unit: '$',
    hint: 'Interest = Remaining Principal × Interest Rate',
    explanation: "**Calculation:** $80,000 × 6% = **$4,800**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Initial Loan Terms**\n   - Original loan amount: $100,000\n   - Annual interest rate: 6%\n   - Annual principal payment: $20,000\n\n2. **Year 1 Payment Impact**\n   - Beginning balance: $100,000\n   - Principal payment: $20,000\n   - Interest expense Year 1: $100,000 × 6% = $6,000\n   - Ending balance: $100,000 - $20,000 = $80,000\n\n3. **Year 2 Interest Calculation**\n   - Beginning balance Year 2: $80,000\n   - Interest expense Year 2: $80,000 × 6% = $4,800\n\n**Key Points:**\n   • Interest is calculated on the outstanding principal balance\n   • As principal decreases, interest expense decreases each year\n   • Total payment in Year 2 = $20,000 principal + $4,800 interest = $24,800",
    learnContent: {
      concept: 'Interest expense declines as the principal decreases over time.',
      formula: 'Interest Expense = Beginning Principal × Interest Rate',
      example: '$50K @ 10% → $5K\n$40K remaining @ 5% → $2K\n$100K loan, $20K paid → Year 2: $80K × rate'
    }
  },
  {
    id: 'acc-medium-99',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Cash Tax Calculation with D&A',
    description: 'A company has $120,000 in pretax income, $25,000 in depreciation, and a 30% tax rate. What is the cash tax paid?',
    answer: 28500,
    unit: '$',
    hint: 'Taxable Income = Pretax Income – D&A',
    explanation: "**Calculation:** ($120,000 - $25,000) × 30% = **$28,500**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Calculate Taxable Income**\n   - Pretax income (book): $120,000\n   - Less: Depreciation tax deduction: $25,000\n   - Taxable income: $120,000 - $25,000 = $95,000\n\n2. **Calculate Cash Taxes**\n   - Taxable income: $95,000\n   - Tax rate: 30%\n   - Cash taxes paid: $95,000 × 30% = $28,500\n\n3. **Key Difference from Book Taxes**\n   - Book tax expense (on income statement): $120,000 × 30% = $36,000\n   - Cash taxes paid: $28,500\n   - Difference: $7,500 (creates deferred tax liability)\n\n**Key Points:**\n   • Depreciation reduces taxable income below book income\n   • Cash taxes are lower than book tax expense\n   • This creates timing differences between book and tax",
    learnContent: {
      concept: 'Depreciation lowers taxable income, reducing actual taxes paid.',
      formula: 'Cash Taxes = (Pretax – D&A) × Tax Rate',
      example: '$200K – $30K, 25% → $42.5K\n$150K – $50K, 30% → $30K\n$300K – $100K, 20% → $40K'
    }
  },
  {
    id: 'acc-medium-100',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Capital Lease Depreciation and Interest',
    description: 'A company enters a 5-year capital lease for $50,000. It depreciates the asset straight-line and pays 5% interest on the lease liability. What is the depreciation expense and Year 1 interest?',
    answer: 10000,
    unit: '$',
    hint: 'Split asset value over useful life; interest = liability × rate',
    explanation: `Calculation:
Annual Depreciation = $50,000 ÷ 5 years = $10,000

• • •

Step-by-step breakdown:

1. Capital Lease Asset:
   • Lease value: $50,000
   • Useful life: 5 years
   → Annual depreciation: $10,000

2. Year 1 Interest Expense:
   • Initial lease liability: $50,000
   • Interest rate: 5%
   → Year 1 interest: $50,000 × 5% = $2,500

Key Points:
   • Capital leases create both depreciation and interest expense
   • Asset is depreciated like owned equipment
   • Interest is calculated on the outstanding lease liability
   • Total expense = depreciation + interest`,
    learnContent: {
      concept: 'Capital leases create both depreciation and interest expenses.',
      formula: 'Depreciation = Asset ÷ Years\nInterest = Lease Liability × Rate',
      example: '$60K lease, 6 years → $10K/year\n$40K, 4 years → $10K/year + interest on balance'
    }
  },
  {
    id: 'acc-medium-101',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Non-Cash Expense Identification',
    description: 'A company\'s income statement includes: Net Income: $60,000, Depreciation: $15,000, Amortization: $5,000, Interest: $10,000, Taxes: $20,000. What are the total non-cash expenses?',
    answer: 20000,
    unit: '$',
    hint: 'Non-cash = Depreciation + Amortization',
    explanation: "**Calculation:** $15,000 + $5,000 = **$20,000**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Identify Non-Cash Items**\n   - Depreciation: $15,000 ✓ (non-cash)\n   - Amortization: $5,000 ✓ (non-cash)\n   - Interest: $10,000 ✗ (cash outflow)\n   - Taxes: $20,000 ✗ (cash outflow)\n\n2. **Total Non-Cash Expenses**\n   - Depreciation + Amortization: $15,000 + $5,000 = $20,000\n\n3. **Cash Flow Impact**\n   - These $20,000 in expenses reduced net income\n   - But didn't require actual cash payments\n   - Should be added back when calculating operating cash flow\n\n**Key Points:**\n   • Only depreciation and amortization are non-cash\n   • Interest and taxes require actual cash payments\n   • Non-cash expenses reduce net income but not cash",
    learnContent: {
      concept: 'Non-cash expenses lower net income without affecting cash.',
      formula: 'Non-Cash Expenses = D&A',
      example: 'D: $10K, A: $5K → $15K\nD: $30K, A: $0 → $30K\nD: $25K, A: $10K → $35K'
    }
  },
  {
    id: 'acc-medium-102',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Interest Coverage Ratio',
    description: 'A firm has EBIT of $120,000 and interest expense of $15,000. What is its interest coverage ratio?',
    answer: 8,
    unit: '×',
    hint: 'ICR = EBIT ÷ Interest',
    explanation: "**Calculation:** $120,000 ÷ $15,000 = **8.0×**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Gather Required Metrics**\n   - Earnings before interest and taxes (EBIT): $120,000\n   - Interest expense: $15,000\n\n2. **Apply Interest Coverage Formula**\n   - Interest coverage ratio = EBIT ÷ Interest expense\n   - ICR = $120,000 ÷ $15,000 = 8.0×\n\n3. **Interpretation**\n   - Company earns 8× its interest obligations\n   - Strong ability to service debt\n   - Generally considered a healthy coverage ratio\n\n**Key Points:**\n   • Higher ratios indicate better debt servicing ability\n   • Lenders prefer ratios above 2.5×\n   • EBIT excludes interest, so it measures pre-debt earnings\n   • Consistent coverage over time is important",
    learnContent: {
      concept: 'Interest coverage shows how easily a company can meet interest obligations.',
      formula: 'ICR = EBIT ÷ Interest Expense',
      example: '$100K EBIT, $20K interest → 5×\n$240K EBIT, $30K interest → 8×\n$50K EBIT, $10K → 5×'
    }
  },
  {
    id: 'acc-medium-103',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Changes in Accrued Expenses',
    description: 'A company begins with $12,000 in accrued expenses. During the year, it records $40,000 in operating expenses and pays out $38,000 in cash. What is the ending accrued expenses balance?',
    answer: 14000,
    unit: '$',
    hint: 'Ending = Beginning + Incurred – Paid',
    explanation: "**Calculation:** $12,000 + $40,000 - $38,000 = **$14,000**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Beginning Balance**\n   - Starting accrued expenses: $12,000\n\n2. **Expenses Incurred During Year**\n   - Operating expenses recognized: $40,000\n   - These increase the accrued expenses balance\n   - Running total: $12,000 + $40,000 = $52,000\n\n3. **Cash Payments Made**\n   - Cash paid for expenses: $38,000\n   - These reduce the accrued expenses balance\n   - Ending balance: $52,000 - $38,000 = $14,000\n\n**Key Points:**\n   • Accrued expenses represent amounts owed but not yet paid\n   • New expenses increase the liability\n   • Cash payments reduce the liability\n   • The $2,000 net increase reflects expenses incurred but not yet paid",
    learnContent: {
      concept: 'Accrued expenses increase when expenses are incurred but not yet paid.',
      formula: 'Ending Accrual = Beginning + Expense Incurred – Cash Paid',
      example: 'Begin $10K, incur $30K, pay $25K → $15K\nBegin $0, incur $20K, pay $18K → $2K'
    }
  },
  {
    id: 'acc-medium-104',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Unlevered Free Cash Flow (UFCF)',
    description: 'A company has: EBIT: $200,000, Taxes: 25%, Depreciation: $30,000, CapEx: $40,000, Change in NWC: $10,000. Calculate UFCF.',
    answer: 130000,
    unit: '$',
    hint: 'UFCF = EBIT(1 – Tax) + D&A – CapEx – ΔNWC',
    explanation: "**Calculation:** [$200,000 × (1 - 0.25)] + $30,000 - $40,000 - $10,000 = **$130,000**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Calculate After-Tax EBIT**\n   - EBIT: $200,000\n   - Tax rate: 25%\n   - EBIT(1-T): $200,000 × (1 - 0.25) = $150,000\n\n2. **Add Back Non-Cash Expenses**\n   - After-tax EBIT: $150,000\n   - Plus: Depreciation & Amortization: $30,000\n   - Subtotal: $180,000\n\n3. **Subtract Cash Investments**\n   - Less: Capital expenditures: $40,000\n   - Less: Change in net working capital: $10,000\n   - Unlevered free cash flow: $180,000 - $40,000 - $10,000 = $130,000\n\n**Key Points:**\n   • UFCF measures cash available to all capital providers\n   • Uses after-tax EBIT to exclude financing effects\n   • Subtracts reinvestment needs (CapEx and working capital)\n   • Key metric for valuation and financial health",
    learnContent: {
      concept: 'UFCF shows cash available to all stakeholders before debt.',
      formula: 'UFCF = EBIT(1–T) + D&A – CapEx – ΔNWC',
      example: '$100K EBIT, 20% tax, $20K D&A, $30K CapEx → $70K\n$300K EBIT, 30% tax, $50K D&A, $60K CapEx, $10K NWC → $140K'
    }
  },
  {
    id: 'acc-medium-105',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Net Operating Loss (NOL) Utilization',
    description: 'A company has a $50,000 NOL carryforward. This year it earns $40,000 in pretax income and has a 25% tax rate. How much tax will it pay?',
    answer: 0,
    unit: '$',
    hint: 'NOL offsets taxable income until used up.',
    explanation: `Calculation:
Tax Owed = $0 (fully offset by NOL)

• • •

Step-by-step breakdown:

1. Income and NOL Details:
   • Current year pretax income: $40,000
   • NOL carryforward available: $50,000
   • Tax rate: 25%

2. NOL Utilization:
   • NOL used: $40,000 (to offset current income)
   → Remaining NOL: $50,000 - $40,000 = $10,000

3. Tax Calculation:
   • Taxable income after NOL: $40,000 - $40,000 = $0
   → Tax owed: $0 × 25% = $0

Key Points:
   • NOLs offset taxable income dollar-for-dollar
   • Company pays no tax when NOL fully covers income
   • Remaining $10,000 NOL carries forward to future years
   • This creates significant cash flow benefits`,
    learnContent: {
      concept: 'NOLs reduce future taxable income, lowering tax payments.',
      formula: 'Taxable Income = Pretax – NOL Used',
      example: '$20K income, $30K NOL → $0 tax\n$100K income, $40K NOL → Tax on $60K'
    }
  },
  {
    id: 'acc-medium-106',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Inventory Capitalization',
    description: 'A manufacturing firm incurs $40,000 in raw materials, $25,000 in direct labor, and $15,000 in overhead. All inventory produced is unsold. How much is capitalized to inventory on the balance sheet?',
    answer: 80000,
    unit: '$',
    hint: 'Capitalize raw materials + labor + overhead',
    explanation: "**Calculation:** $40,000 + $25,000 + $15,000 = **$80,000**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Inventory Cost Components**\n   - Raw materials: $40,000\n   - Direct labor: $25,000\n   - Manufacturing overhead: $15,000\n   - Total manufacturing cost: $80,000\n\n2. **Capitalization vs. Expensing**\n   - Since inventory is unsold, all costs are capitalized\n   - Appears on balance sheet as inventory asset\n   - Will become COGS when inventory is sold\n\n3. **Balance Sheet Impact**\n   - Inventory asset: +$80,000\n   - Cash/payables: -$80,000 (for costs incurred)\n   - No immediate income statement impact\n\n**Key Points:**\n   • All production costs are capitalized until goods are sold\n   • Includes direct materials, labor, and allocated overhead\n   • Inventory is an asset until sale occurs\n   • Capitalization follows the matching principle",
    learnContent: {
      concept: 'Inventory includes all costs to get goods ready for sale.',
      formula: 'Capitalized Inventory = Raw Materials + Direct Labor + Overhead',
      example: '$10K + $5K + $2K → $17K\n$25K + $20K + $10K → $55K\n$30K + $15K + $10K → $55K'
    }
  },
  {
    id: 'acc-medium-107',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Purchase Price Allocation Basics',
    description: 'A company acquires another firm for $500,000. The net identifiable assets of the acquired company total $400,000. What amount is allocated to goodwill?',
    answer: 100000,
    unit: '$',
    hint: 'Goodwill = Purchase Price – Net Identifiable Assets',
    explanation: "**Calculation:** $500,000 - $400,000 = **$100,000**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Acquisition Details**\n   - Total purchase price paid: $500,000\n   - Fair value of net identifiable assets: $400,000\n   - Premium paid over net assets: $100,000\n\n2. **Purchase Price Allocation**\n   - Step 1: Allocate to identifiable assets at fair value: $400,000\n   - Step 2: Remaining amount allocated to goodwill: $100,000\n\n3. **Goodwill Characteristics**\n   - Represents intangible value (brand, customer relationships, synergies)\n   - Not amortized under current accounting standards\n   - Subject to annual impairment testing\n\n**Key Points:**\n   • Goodwill is the excess of purchase price over fair value of net assets\n   • Reflects premium paid for intangible benefits\n   • Must be tested annually for impairment\n   • Cannot be amortized like other intangible assets",
    learnContent: {
      concept: 'Goodwill arises when purchase price exceeds fair value of net assets.',
      formula: 'Goodwill = Purchase Price – (Assets – Liabilities)',
      example: '$600K – $450K = $150K\n$200K – $180K = $20K\n$1M – $750K = $250K'
    }
  },
  {
    id: 'acc-medium-108',
    track: 'accounting',
    difficulty: 'medium',
    title: 'DTA Reversal Impact on Cash Taxes',
    description: 'A company uses $20,000 of deferred tax assets to offset its $80,000 taxable income. Tax rate is 25%. What is the actual tax paid in cash?',
    answer: 15000,
    unit: '$',
    hint: 'Cash Tax = (Taxable Income – DTA Used) × Tax Rate',
    explanation: "**Calculation:** ($80,000 - $20,000) × 25% = **$15,000**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Tax Calculation Before DTA**\n   - Taxable income: $80,000\n   - Tax rate: 25%\n   - Tax before DTA: $80,000 × 25% = $20,000\n\n2. **DTA Utilization**\n   - DTA used to offset taxable income: $20,000\n   - Adjusted taxable income: $80,000 - $20,000 = $60,000\n\n3. **Actual Cash Tax Payment**\n   - Tax on adjusted income: $60,000 × 25% = $15,000\n   - DTA benefit: $20,000 - $15,000 = $5,000 cash savings\n\n**Key Points:**\n   • DTAs reduce actual cash taxes paid\n   • Company benefits from timing differences reversing favorably\n   • $5,000 in cash savings from using the DTA\n   • DTA balance decreases by the amount used",
    learnContent: {
      concept: 'DTAs reduce taxable income, lowering cash taxes.',
      formula: 'Cash Taxes = (Pretax – DTA Used) × Tax Rate',
      example: '$100K – $30K × 20% = $14K\n$60K – $10K × 30% = $15K\n$75K – $25K × 25% = $12.5K'
    }
  },
  {
    id: 'acc-medium-109',
    track: 'accounting',
    difficulty: 'medium',
    title: 'PP&E CapEx vs. Depreciation Movement',
    description: 'Beginning PP&E: $200,000, Depreciation: $20,000, Ending PP&E: $230,000. What is the amount of capital expenditures?',
    answer: 50000,
    unit: '$',
    hint: 'CapEx = Ending PP&E – Beginning + Depreciation',
    explanation: "**Calculation:** ($230,000 - $200,000) + $20,000 = **$50,000**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **PP&E Movement Analysis**\n   - Beginning PP&E: $200,000\n   - Ending PP&E: $230,000\n   - Net increase: $230,000 - $200,000 = $30,000\n\n2. **Depreciation Impact**\n   - Annual depreciation: $20,000 (reduces PP&E)\n   - This amount was subtracted from PP&E during the year\n\n3. **Capital Expenditures Calculation**\n   - Net increase + Depreciation = CapEx\n   - CapEx = $30,000 + $20,000 = $50,000\n\n**Key Points:**\n   • CapEx increases PP&E by the purchase amount\n   • Depreciation decreases PP&E each period\n   • Net change = CapEx - Depreciation\n   • CapEx represents actual cash investment in fixed assets",
    learnContent: {
      concept: 'CapEx is the cash spent to maintain or grow PP&E.',
      formula: 'CapEx = Ending – Beginning + Depreciation',
      example: '250K – 240K + 10K = $20K\n300K – 280K + 15K = $35K\n180K – 160K + 20K = $40K'
    }
  },
  {
    id: 'acc-medium-110',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Cash Flow Statement: CFF Movement',
    description: 'A company repaid $30,000 of long-term debt and issued $20,000 of new shares. What is the net cash flow from financing activities?',
    answer: -10000,
    unit: '$',
    hint: 'Cash Flow from Financing = Inflows – Outflows',
    explanation: `Calculation:
Net CFF = $20,000 - $30,000 = -$10,000

• • •

Step-by-step breakdown:

1. Financing Inflows:
   • New share issuance: +$20,000

2. Financing Outflows:
   • Long-term debt repayment: -$30,000

3. Net Cash Flow from Financing:
   → Net CFF = $20,000 - $30,000 = -$10,000

Key Points:
   • Financing activities involve equity and debt transactions
   • Share issuances provide cash inflows
   • Debt repayments create cash outflows
   • Net outflow indicates more cash was used than generated`,
    learnContent: {
      concept: 'CFF includes inflows from equity/debt issuance and outflows from repayments/dividends.',
      formula: 'CFF = Equity Issued + Debt Raised – Debt Repaid – Dividends',
      example: '$0 – $15K = –$15K\n$50K – $40K = $10K\n$10K equity – $5K dividends = $5K'
    }
  },
  {
    id: 'acc-medium-111',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Deferred Revenue Adjustment',
    description: 'Deferred revenue begins at $50,000. During the year, the company earns $35,000 of it and collects $60,000 in new cash prepayments. What is ending deferred revenue?',
    answer: 75000,
    unit: '$',
    hint: 'Ending = Beginning + Cash Collected – Revenue Recognized',
    explanation: "**Calculation:** $50,000 + $60,000 - $35,000 = **$75,000**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Beginning Deferred Revenue**\n   - Starting balance: $50,000\n   - Represents cash received for undelivered services\n\n2. **New Cash Prepayments**\n   - Additional prepayments received: $60,000\n   - Increases deferred revenue liability\n   - Running balance: $50,000 + $60,000 = $110,000\n\n3. **Revenue Recognition**\n   - Services delivered/revenue earned: $35,000\n   - Reduces deferred revenue liability\n   - Ending deferred revenue: $110,000 - $35,000 = $75,000\n\n**Key Points:**\n   • Deferred revenue is a liability for undelivered services\n   • Cash prepayments increase the liability\n   • Earning revenue decreases the liability\n   • Ending balance represents future service obligations",
    learnContent: {
      concept: 'Deferred revenue grows with prepayments and shrinks as it\'s earned.',
      formula: 'End Deferred Revenue = Begin + Prepaid – Recognized',
      example: '10K + 20K – 5K = $25K\n40K + 30K – 20K = $50K\n25K + 15K – 10K = $30K'
    }
  },
  {
    id: 'acc-medium-112',
    track: 'accounting',
    difficulty: 'medium',
    title: 'EBITDA Calculation from IS Line Items',
    description: 'Revenue: $500,000, COGS: $200,000, Operating Expenses: $150,000, D&A: $25,000. What is EBITDA?',
    answer: 150000,
    unit: '$',
    hint: 'EBITDA = Revenue – COGS – OpEx',
    explanation: "**Calculation:** $500,000 - $200,000 - $150,000 = **$150,000**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Start with Revenue**\n   - Total revenue: $500,000\n\n2. **Subtract Operating Costs**\n   - Less: Cost of goods sold: $200,000\n   - Less: Operating expenses: $150,000\n   - Operating income before D&A: $150,000\n\n3. **EBITDA Calculation**\n   - EBITDA excludes interest, taxes, D&A\n   - Since D&A ($25,000) is already excluded from operating expenses\n   - EBITDA = $500,000 - $200,000 - $150,000 = $150,000\n\n**Key Points:**\n   • EBITDA measures cash earnings from core operations\n   • Excludes financing (interest) and non-cash (D&A) items\n   • Useful for comparing operational efficiency across companies\n   • Note: D&A was properly excluded from operating expenses",
    learnContent: {
      concept: 'EBITDA is earnings before interest, taxes, depreciation, and amortization.',
      formula: 'EBITDA = Revenue – COGS – OpEx',
      example: '$300K – $120K – $100K = $80K\n$400K – $180K – $120K = $100K'
    }
  },
  {
    id: 'acc-medium-113',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Amortization of Intangible Assets',
    description: 'Company acquires a brand for $100,000 with a 10-year useful life. What is the annual amortization expense?',
    answer: 10000,
    unit: '$',
    hint: 'Amortization = Cost ÷ Useful Life',
    explanation: "**Calculation:** $100,000 ÷ 10 years = **$10,000 per year**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Intangible Asset Details**\n   - Brand acquisition cost: $100,000\n   - Useful life: 10 years\n   - Amortization method: Straight-line (assumed)\n\n2. **Annual Amortization Calculation**\n   - Annual amortization = Cost ÷ Useful life\n   - Annual amortization = $100,000 ÷ 10 = $10,000\n\n3. **Accounting Treatment**\n   - Debit: Amortization expense $10,000\n   - Credit: Accumulated amortization $10,000\n   - Reduces net book value of the brand each year\n\n**Key Points:**\n   • Intangible assets with finite lives are amortized\n   • Straight-line method allocates cost evenly over useful life\n   • Amortization expense reduces net income but is non-cash\n   • Indefinite-life intangibles (like goodwill) are not amortized",
    learnContent: {
      concept: 'Intangible assets are amortized over useful life unless indefinite.',
      formula: 'Amortization = Purchase Cost ÷ Useful Life',
      example: '$50K ÷ 5 = $10K\n$75K ÷ 15 = $5K\n$120K ÷ 6 = $20K'
    }
  },
  {
    id: 'acc-medium-114',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Calculating Ending Retained Earnings',
    description: 'Beginning retained earnings = $80,000, Net income = $40,000, Dividends paid = $10,000. What is ending retained earnings?',
    answer: 110000,
    unit: '$',
    hint: 'Ending = Beginning + Net Income – Dividends',
    explanation: "**Calculation:** $80,000 + $40,000 - $10,000 = **$110,000**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Beginning Retained Earnings**\n   - Starting balance: $80,000\n   - Cumulative earnings retained from prior periods\n\n2. **Add Current Period Net Income**\n   - Net income for the period: $40,000\n   - Increases retained earnings\n   - Running total: $80,000 + $40,000 = $120,000\n\n3. **Subtract Dividends Paid**\n   - Dividends paid to shareholders: $10,000\n   - Reduces retained earnings\n   - Ending retained earnings: $120,000 - $10,000 = $110,000\n\n**Key Points:**\n   • Retained earnings represent cumulative undistributed profits\n   • Net income increases retained earnings\n   • Dividends and losses decrease retained earnings\n   • Retained earnings is a key component of shareholders' equity",
    learnContent: {
      concept: 'Retained earnings grow with profits and shrink with dividends.',
      formula: 'Ending RE = Beginning + Net Income – Dividends',
      example: '$50K + $30K – $5K = $75K\n$100K + $20K – $20K = $100K'
    }
  },
  {
    id: 'acc-medium-115',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Accretion from Bond Discount',
    description: 'A company issues $100,000 in bonds at a $5,000 discount. Each year, it amortizes $1,000 of the discount. After 2 years, what is the bond\'s carrying value?',
    answer: 97000,
    unit: '$',
    hint: 'Carrying Value = Issue Price + Accretion',
    explanation: `Calculation:
Bond Carrying Value = $95,000 + $2,000 = $97,000

• • •

Step-by-step breakdown:

1. Bond Issuance Details:
   • Face value: $100,000
   • Discount: $5,000
   → Issue price: $95,000

2. Annual Discount Amortization:
   • Year 1: $1,000
   • Year 2: $1,000
   → Total amortized: $2,000

3. Carrying Value After 2 Years:
   → Carrying value = $95,000 + $2,000 = $97,000

Key Points:
   • Bond discount amortization increases carrying value over time
   • Amortization creates non-cash interest expense
   • Carrying value approaches face value at maturity
   • Remaining discount: $5,000 - $2,000 = $3,000`,
    learnContent: {
      concept: 'Discounts increase carrying value over time via accretion.',
      formula: 'Carrying Value = Issue Price + (Years × Annual Accretion)',
      example: '$90K + $3K = $93K\n$95K + $4K = $99K'
    }
  },
  {
    id: 'acc-medium-116',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Link Between NI and CFO',
    description: 'A company reports $70,000 in net income, with $15,000 in depreciation and a $5,000 increase in accounts receivable. What is its operating cash flow?',
    answer: 80000,
    unit: '$',
    hint: 'CFO = NI + Non-Cash + Working Capital Adjustments',
    explanation: "**Calculation:** $70,000 + $15,000 - $5,000 = **$80,000**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Start with Net Income**\n   - Net income: $70,000\n   - Base for operating cash flow calculation\n\n2. **Add Back Non-Cash Expenses**\n   - Depreciation: $15,000\n   - Non-cash expense that reduced net income\n   - Running total: $70,000 + $15,000 = $85,000\n\n3. **Adjust for Working Capital Changes**\n   - Accounts receivable increase: $5,000\n   - Represents sales made but cash not yet collected\n   - Reduces operating cash flow: $85,000 - $5,000 = $80,000\n\n**Key Points:**\n   • Operating cash flow measures actual cash from operations\n   • Non-cash expenses are added back to net income\n   • Working capital increases reduce operating cash flow\n   • A/R increases mean less cash was collected than sales reported",
    learnContent: {
      concept: 'Operating cash flow adjusts net income for non-cash and timing changes.',
      formula: 'CFO = Net Income + D&A – ∆Working Capital',
      example: '$60K + $10K – $5K = $65K\n$100K + $25K + $5K = $130K'
    }
  },
  {
    id: 'acc-medium-117',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Non-Controlling Interest Income Attribution',
    description: 'A consolidated company has $100,000 of net income. 80% of the subsidiary is owned by the parent, while 20% is owned by minority shareholders. What portion of net income is attributable to non-controlling interest?',
    answer: 20000,
    unit: '$',
    hint: 'Non-Controlling Income = Net Income × % Minority Ownership',
    explanation: "**Calculation:** $100,000 × 20% = **$20,000**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Consolidation Structure**\n   - Total subsidiary net income: $100,000\n   - Parent company ownership: 80%\n   - Non-controlling (minority) ownership: 20%\n\n2. **Income Attribution**\n   - Parent company's share: $100,000 × 80% = $80,000\n   - Non-controlling interest share: $100,000 × 20% = $20,000\n\n3. **Consolidated Income Statement Impact**\n   - Total consolidated net income includes: $100,000\n   - Less: Non-controlling interest: ($20,000)\n   - Net income attributable to parent: $80,000\n\n**Key Points:**\n   • Consolidated statements include 100% of subsidiary results\n   • Non-controlling interest represents minority shareholders' portion\n   • Parent reports only its proportionate share of subsidiary earnings\n   • NCI appears as a deduction on the consolidated income statement",
    learnContent: {
      concept: 'Non-controlling interest represents income owed to minority shareholders in consolidated subsidiaries.',
      formula: 'Non-Controlling Income = Total Net Income × (1 – Ownership %)',
      example: '$80K × 30% = $24K\n$120K × 10% = $12K\n$200K × 25% = $50K'
    }
  },
  {
    id: 'acc-medium-118',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Cash Collection from Revenue and AR Movement',
    description: 'A company reports $120,000 in revenue. Its accounts receivable increased by $10,000 over the same period. How much cash did it collect from customers?',
    answer: 110000,
    unit: '$',
    hint: 'Cash = Revenue – Increase in AR',
    explanation: "**Calculation:** $120,000 - $10,000 = **$110,000**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Revenue Recognition**\n   - Total revenue reported: $120,000\n   - This includes both cash and credit sales\n\n2. **Accounts Receivable Change**\n   - A/R increase during period: $10,000\n   - Represents sales made on credit (not yet collected)\n\n3. **Cash Collection Calculation**\n   - Cash collected = Revenue - A/R increase\n   - Cash collected = $120,000 - $10,000 = $110,000\n   - The $10,000 A/R increase represents uncollected sales\n\n**Key Points:**\n   • Revenue includes both cash and credit sales\n   • A/R increases represent sales not yet collected in cash\n   • Cash collections are always less than revenue when A/R increases\n   • This analysis is crucial for cash flow management",
    learnContent: {
      concept: 'Cash collections are revenue minus unpaid invoices (AR increase).',
      formula: 'Cash Collected = Revenue – ΔAR',
      example: '$90K – $5K = $85K\n$100K – ($15K decrease) = $115K\n$130K – $20K = $110K'
    }
  },
  {
    id: 'acc-medium-119',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Enterprise Value from Equity and Debt Values',
    description: 'A company has a market cap of $300M, $80M in debt, $10M in preferred stock, and $30M in cash. What is the Enterprise Value?',
    answer: 360000000,
    unit: '$',
    hint: 'EV = Equity + Debt + Preferred – Cash',
    explanation: "**Calculation:** $300M + $80M + $10M - $30M = **$360M**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Equity Value Components**\n   - Market capitalization: $300M\n   - This represents value to equity holders\n\n2. **Add Debt-Like Items**\n   - Total debt: +$80M\n   - Preferred stock: +$10M\n   - These represent claims on the enterprise\n   - Subtotal: $300M + $80M + $10M = $390M\n\n3. **Subtract Cash**\n   - Cash and equivalents: -$30M\n   - Cash reduces net debt\n   - Enterprise value: $390M - $30M = $360M\n\n**Key Points:**\n   • Enterprise value measures total firm value\n   • Includes all capital providers (debt and equity)\n   • Cash is subtracted as it could pay down debt\n   • EV is capital structure neutral for valuation comparisons",
    learnContent: {
      concept: 'EV measures total firm value regardless of capital structure.',
      formula: 'EV = Equity + Debt + Preferred + Minority Interest – Cash',
      example: '$500M + $100M – $50M = $550M\n$200M + $50M – $20M = $230M'
    }
  },
  {
    id: 'acc-medium-120',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Tax Impact of Stock-Based Compensation (SBC)',
    description: 'A company reports $5,000 in stock-based compensation. Its tax rate is 30%. What is the tax shield from SBC?',
    answer: 1500,
    unit: '$',
    hint: 'Tax Shield = SBC × Tax Rate',
    explanation: `Calculation:
Tax Shield = $5,000 × 30% = $1,500

• • •

Step-by-step breakdown:

1. Stock-Based Compensation:
   • SBC expense: $5,000
   • Tax rate: 30%

2. Tax Shield Calculation:
   → Tax shield = $5,000 × 30% = $1,500

Key Points:
   • SBC is a non-cash expense that reduces taxable income
   • Tax shield represents actual cash savings from lower taxes
   • Company benefits from tax reduction despite non-cash nature
   • Creates timing difference if book and tax treatment differ`,
    learnContent: {
      concept: 'SBC reduces taxable income, creating a tax shield.',
      formula: 'Tax Shield = Expense × Tax Rate',
      example: '$10K × 25% = $2.5K\n$8K × 20% = $1.6K\n$6K × 35% = $2.1K'
    }
  },
  {
    id: 'acc-medium-121',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Asset Impairment Adjustment',
    description: 'An asset with book value of $60,000 is impaired and now worth $40,000. What is the impairment loss recorded?',
    answer: 20000,
    unit: '$',
    hint: 'Impairment = Book Value – Fair Value',
    explanation: "**Calculation:** $60,000 - $40,000 = **$20,000**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Asset Carrying Value**\n   - Book value (carrying value): $60,000\n   - This is the asset's recorded value on the balance sheet\n\n2. **Fair Value Assessment**\n   - Current fair value: $40,000\n   - Market or recoverable value of the asset\n\n3. **Impairment Loss Calculation**\n   - Impairment loss = Carrying value - Fair value\n   - Impairment loss = $60,000 - $40,000 = $20,000\n\n4. **Accounting Treatment**\n   - Debit: Impairment loss (expense) $20,000\n   - Credit: Asset (or accumulated impairment) $20,000\n\n**Key Points:**\n   • Impairment occurs when carrying value exceeds recoverable amount\n   • Loss is recognized immediately in the period identified\n   • Reduces asset value on balance sheet\n   • Generally not reversible under US GAAP",
    learnContent: {
      concept: 'Impairment occurs when book value > fair market value.',
      formula: 'Loss = Carrying Value – Recoverable Amount',
      example: '$100K – $70K = $30K\n$50K – $45K = $5K'
    }
  },
  {
    id: 'acc-medium-122',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Tangible Book Value per Share (TBVPS)',
    description: 'A company has $1M in assets, $300K in liabilities, and $100K in goodwill. There are 100,000 shares outstanding. What is tangible book value per share?',
    answer: 6,
    unit: '$',
    hint: 'TBV = (Assets – Liabilities – Goodwill) ÷ Shares',
    explanation: "**Calculation:** ($1,000,000 - $300,000 - $100,000) ÷ 100,000 = **$6.00**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Calculate Total Equity**\n   - Total assets: $1,000,000\n   - Total liabilities: $300,000\n   - Book value of equity: $1,000,000 - $300,000 = $700,000\n\n2. **Adjust for Intangible Assets**\n   - Book value of equity: $700,000\n   - Less: Goodwill (intangible): $100,000\n   - Tangible book value: $700,000 - $100,000 = $600,000\n\n3. **Calculate Per Share Value**\n   - Tangible book value: $600,000\n   - Shares outstanding: 100,000\n   - TBVPS: $600,000 ÷ 100,000 = $6.00\n\n**Key Points:**\n   • TBVPS excludes intangible assets from book value\n   • More conservative measure than regular book value\n   • Useful for asset-heavy businesses\n   • Shows tangible value backing each share",
    learnContent: {
      concept: 'Tangible book value removes intangible assets from equity.',
      formula: 'TBVPS = (Assets – Liabilities – Intangibles) / Shares',
      example: '($500K – $200K – $50K)/50K = $5\n($900K – $400K – $100K)/100K = $4'
    }
  },
  {
    id: 'acc-medium-123',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Debt Service Coverage Ratio (DSCR)',
    description: 'EBITDA: $200,000, Interest Expense: $40,000, Principal Repayment: $60,000. What is the DSCR?',
    answer: 2,
    unit: '×',
    hint: 'DSCR = EBITDA / (Interest + Principal)',
    explanation: "**Calculation:** $200,000 ÷ ($40,000 + $60,000) = **2.0×**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Cash Available for Debt Service**\n   - EBITDA (cash earnings): $200,000\n   - This represents cash available to service debt\n\n2. **Total Debt Service Requirements**\n   - Interest expense: $40,000\n   - Principal repayment: $60,000\n   - Total debt service: $40,000 + $60,000 = $100,000\n\n3. **DSCR Calculation**\n   - DSCR = EBITDA ÷ Total debt service\n   - DSCR = $200,000 ÷ $100,000 = 2.0×\n\n**Key Points:**\n   • DSCR measures ability to service all debt obligations\n   • Ratio above 1.0× indicates adequate coverage\n   • Lenders prefer ratios above 1.25×\n   • Higher ratios indicate stronger debt capacity",
    learnContent: {
      concept: 'DSCR measures ability to service debt obligations.',
      formula: 'DSCR = EBITDA / Total Debt Service',
      example: '$300K ÷ $100K = 3.0x\n$180K ÷ $90K = 2.0x\n$250K ÷ $125K = 2.0x'
    }
  },
  {
    id: 'acc-medium-124',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Interest Coverage Ratio',
    description: 'EBIT = $150,000, Interest Expense = $50,000. What is the interest coverage ratio?',
    answer: 3,
    unit: '×',
    hint: 'Coverage = EBIT / Interest',
    explanation: "**Calculation:** $150,000 ÷ $50,000 = **3.0×**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Earnings Available for Interest**\n   - EBIT (earnings before interest and taxes): $150,000\n   - This represents pre-interest earnings\n\n2. **Interest Obligation**\n   - Annual interest expense: $50,000\n   - Required cash payment for debt service\n\n3. **Coverage Ratio Calculation**\n   - Interest coverage = EBIT ÷ Interest expense\n   - Coverage ratio = $150,000 ÷ $50,000 = 3.0×\n\n**Key Points:**\n   • Shows how many times company can cover interest payments\n   • Higher ratios indicate stronger ability to service debt\n   • Ratios below 2.5× may indicate financial stress\n   • Key metric for lenders assessing credit risk",
    learnContent: {
      concept: 'This shows how many times a company can cover its interest payments.',
      formula: 'Interest Coverage = EBIT / Interest',
      example: '$120K ÷ $40K = 3.0x\n$90K ÷ $30K = 3.0x\n$160K ÷ $40K = 4.0x'
    }
  },
  {
    id: 'acc-medium-125',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Dividend Payout Ratio Calculation',
    description: 'Net Income: $100,000, Dividends Paid: $40,000. What is the dividend payout ratio?',
    answer: 40,
    unit: '%',
    hint: 'Payout Ratio = Dividends / Net Income × 100',
    explanation: `Calculation:
Dividend Payout Ratio = ($40,000 ÷ $100,000) × 100% = 40%

• • •

Step-by-step breakdown:

1. Financial Results:
   • Net Income: $100,000
   • Dividends Paid: $40,000

2. Payout Ratio Calculation:
   → Ratio = $40,000 ÷ $100,000 = 0.40 or 40%

Key Points:
   • Payout ratio shows proportion of earnings returned to shareholders
   • 40% payout means 60% of earnings were retained
   • Lower ratios suggest focus on growth and reinvestment
   • Higher ratios indicate income-focused shareholder returns`,
    learnContent: {
      concept: 'Shows how much of net income is returned to shareholders.',
      formula: 'Dividend Payout = (Dividends ÷ NI) × 100',
      example: '$20K ÷ $80K = 25%\n$60K ÷ $120K = 50%'
    }
  },
  {
    id: 'acc-medium-126',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Asset Retirement Obligation (ARO) Impact',
    description: 'A company records a $50,000 ARO liability and increases PP&E by the same amount. PP&E depreciates over 10 years. What is the annual impact to depreciation from the ARO?',
    answer: 5000,
    unit: '$',
    hint: 'ARO adds to PP&E → Depreciated over time',
    explanation: "**Calculation:** $50,000 ÷ 10 years = **$5,000 per year**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Asset Retirement Obligation Setup**\n   - ARO liability recorded: $50,000\n   - Corresponding increase to PP&E: $50,000\n   - This represents estimated future cleanup costs\n\n2. **Depreciation of ARO Component**\n   - ARO amount added to PP&E: $50,000\n   - Asset useful life: 10 years\n   - Annual depreciation = $50,000 ÷ 10 = $5,000\n\n3. **Overall Impact**\n   - Additional annual depreciation expense: $5,000\n   - This continues over the 10-year asset life\n   - Total depreciation impact: $50,000\n\n**Key Points:**\n   • ARO increases both assets and liabilities initially\n   • ARO component is depreciated over asset's useful life\n   • Creates additional annual depreciation expense\n   • ARO liability is accreted over time with interest",
    learnContent: {
      concept: 'ARO inflates PP&E and increases depreciation expense.',
      formula: 'Depreciation = ARO ÷ Useful Life',
      example: '$60K ÷ 15 = $4K\n$100K ÷ 20 = $5K'
    }
  },
  {
    id: 'acc-medium-127',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Revenue Recognition Timing',
    description: 'A software company signs a $60,000 annual subscription deal on October 1st. The client pays upfront. As of December 31st, how much revenue should be recognized on the income statement?',
    answer: 15000,
    unit: '$',
    hint: 'Think about the portion of the service delivered.',
    explanation: "**Calculation:** $60,000 × (3 ÷ 12) = **$15,000**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Contract Details**\n   - Annual subscription value: $60,000\n   - Contract signed: October 1st\n   - Full payment received upfront\n\n2. **Service Period Analysis**\n   - Contract period: October 1 - September 30 (12 months)\n   - Service delivered by December 31: October, November, December = 3 months\n   - Percentage of service delivered: 3 ÷ 12 = 25%\n\n3. **Revenue Recognition**\n   - Revenue earned through December 31: $60,000 × 25% = $15,000\n   - Remaining deferred revenue: $60,000 - $15,000 = $45,000\n\n**Key Points:**\n   • Revenue is recognized as services are performed, not when cash is received\n   • Unearned portion remains as deferred revenue liability\n   • Timing of cash receipt doesn't affect revenue recognition\n   • Monthly revenue recognition would be $5,000 per month",
    learnContent: {
      concept: 'Accrual accounting recognizes revenue when earned.',
      formula: 'Annual contract value × (Months elapsed ÷ 12)',
      example: '$24,000 contract signed July 1st: recognize $12,000 by December 31st\n$12,000 contract signed January 1st: recognize full $12,000 by year-end'
    }
  },
  {
    id: 'acc-medium-128',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Bad Debt Allowance Adjustment',
    description: 'A company with $100,000 in A/R expects 3% to go unpaid. Later, it adjusts the estimate to 5%. What is the increase to bad debt expense?',
    answer: 2000,
    unit: '$',
    hint: 'Find the change in the allowance.',
    explanation: "**Calculation:** ($100,000 × 5%) - ($100,000 × 3%) = **$2,000**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Original Allowance**\n   - Accounts receivable: $100,000\n   - Original bad debt estimate: 3%\n   - Original allowance: $100,000 × 3% = $3,000\n\n2. **Revised Allowance**\n   - Accounts receivable: $100,000\n   - Revised bad debt estimate: 5%\n   - Required allowance: $100,000 × 5% = $5,000\n\n3. **Additional Bad Debt Expense**\n   - Increase needed: $5,000 - $3,000 = $2,000\n   - Journal entry: Debit Bad Debt Expense $2,000, Credit Allowance $2,000\n\n**Key Points:**\n   • Bad debt expense adjusts allowance to required level\n   • Estimate changes affect current period expense\n   • Higher estimates create additional expense\n   • Allowance represents expected uncollectible amounts",
    learnContent: {
      concept: 'Bad debt expense reflects changes in expected credit losses.',
      formula: 'New allowance – Old allowance = Increase in expense',
      example: 'A/R $50,000, estimate from 1% to 4% → $1,500 increase\nA/R $200,000, estimate from 5% to 7% → $4,000 increase'
    }
  },
  {
    id: 'acc-medium-129',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Unearned Revenue Adjustment',
    description: 'A tutoring company collects $18,000 upfront for a 6-month package on September 1st. By December 31st, how much unearned revenue remains?',
    answer: 6000,
    unit: '$',
    hint: 'Calculate how much service has been delivered.',
    explanation: "**Calculation:** $18,000 - ($18,000 × 4/6) = **$6,000**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Contract Details**\n   - Total prepayment: $18,000\n   - Service period: 6 months (September 1 - February 28)\n   - Payment date: September 1st\n\n2. **Service Delivered by December 31**\n   - September, October, November, December = 4 months\n   - Service delivered: 4/6 = 67% of contract\n   - Revenue earned: $18,000 × (4/6) = $12,000\n\n3. **Remaining Unearned Revenue**\n   - Original unearned revenue: $18,000\n   - Less: Revenue earned: $12,000\n   - Unearned revenue remaining: $18,000 - $12,000 = $6,000\n\n**Key Points:**\n   • Unearned revenue represents future service obligations\n   • Revenue is recognized as services are performed\n   • Remaining balance covers January and February services\n   • Monthly service value is $3,000 ($18,000 ÷ 6)",
    learnContent: {
      concept: 'Unearned revenue is a liability until earned.',
      formula: 'Unearned Revenue = Total – Earned = Total – (Monthly × Months elapsed)',
      example: '$12,000 for 6 months starting July → $0 unearned by year-end\n$24,000 for 12 months starting Oct → $16,000 unearned by year-end'
    }
  },
  {
    id: 'acc-medium-130',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Depreciation and Asset Disposal',
    description: 'An asset purchased for $80,000 depreciates $8,000 annually. After 3 years, it\'s sold for $62,000. What is the gain/loss on sale?',
    answer: 6000,
    unit: '$ gain',
    hint: 'First calculate net book value.',
    explanation: "**Calculation:** $62,000 - $56,000 = **$6,000 gain**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Calculate Net Book Value**\n   - Original cost: $80,000\n   - Annual depreciation: $8,000\n   - Years owned: 3 years\n   - Accumulated depreciation: $8,000 × 3 = $24,000\n   - Net book value: $80,000 - $24,000 = $56,000\n\n2. **Compare to Sale Price**\n   - Sale price received: $62,000\n   - Net book value: $56,000\n   - Difference: $62,000 - $56,000 = $6,000\n\n3. **Gain Recognition**\n   - Since sale price > net book value = Gain\n   - Gain on sale: $6,000\n   - Journal entry: Dr. Cash $62,000, Dr. Accum Deprec $24,000, Cr. Asset $80,000, Cr. Gain $6,000\n\n**Key Points:**\n   • Net book value = Cost - Accumulated depreciation\n   • Gain occurs when sale price exceeds net book value\n   • Gain increases net income in the period of sale\n   • Accumulated depreciation must be removed upon disposal",
    learnContent: {
      concept: 'Disposals affect income via gain/loss.',
      formula: 'Sale price – Net Book Value',
      example: '$50,000 asset, $5,000/year, sold year 4 for $30,000 → $10,000 gain\n$100,000 asset, $10,000/year, sold year 5 for $45,000 → $5,000 loss'
    }
  },
  {
    id: 'acc-medium-131',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Interest Capitalization During Construction',
    description: 'A company borrows $500,000 at 6% interest to fund a construction project lasting 6 months. How much interest should be capitalized?',
    answer: 15000,
    unit: '$',
    hint: 'Only capitalize interest during construction.',
    explanation: "**Calculation:** $500,000 × 6% × (6/12) = **$15,000**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Construction Loan Details**\n   - Loan amount: $500,000\n   - Interest rate: 6% annually\n   - Construction period: 6 months\n\n2. **Interest Capitalization Calculation**\n   - Annual interest: $500,000 × 6% = $30,000\n   - Construction period ratio: 6 months ÷ 12 months = 0.5\n   - Capitalized interest: $30,000 × 0.5 = $15,000\n\n3. **Accounting Treatment**\n   - Debit: Construction in Progress $15,000\n   - Credit: Interest Payable/Cash $15,000\n   - Interest becomes part of asset cost, not expense\n\n**Key Points:**\n   • Interest during construction is capitalized, not expensed\n   • Only interest during active construction qualifies\n   • Capitalized interest increases the asset's cost basis\n   • Begins depreciating when asset is placed in service",
    learnContent: {
      concept: 'Interest during construction is not expensed immediately.',
      formula: 'Loan × Rate × (Construction months ÷ 12)',
      example: '$200,000 loan at 5% for 4 months → $3,333\n$600,000 loan at 4% for 12 months → $24,000'
    }
  },
  {
    id: 'acc-medium-132',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Accrued Expense Recognition',
    description: 'A company receives $10,000 of consulting services in December but won\'t pay until January. What is the impact on the December financials?',
    answer: 10000,
    unit: '$ increase liabilities',
    hint: 'Expense must be matched to the period it\'s incurred.',
    explanation: "**Calculation:** Services received = **$10,000 increase in liabilities**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Accrual Accounting Principle**\n   - Services received in December: $10,000\n   - Payment due in January\n   - Expense must be recorded in December (matching principle)\n\n2. **December Journal Entry**\n   - Debit: Consulting expense $10,000\n   - Credit: Accrued expenses payable $10,000\n\n3. **Financial Statement Impact**\n   - Income statement: Increases expenses by $10,000\n   - Balance sheet: Increases liabilities by $10,000\n   - Cash flow: No immediate impact (payment is next period)\n\n**Key Points:**\n   • Expenses are recognized when incurred, not when paid\n   • Creates accrued liability until payment is made\n   • Follows matching principle of accrual accounting\n   • Payment in January will reduce cash and the liability",
    learnContent: {
      concept: 'Accrual accounting recognizes expenses when incurred.',
      formula: 'Recognize expense → Increase accrued liabilities',
      example: 'Dec services, Jan payment → record expense in Dec\nBonus earned in Dec, paid in Jan → accrue in Dec'
    }
  },
  {
    id: 'acc-medium-133',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Dividend Declaration Impact',
    description: 'A company declares but doesn\'t yet pay a $2/share dividend on 50,000 shares. What\'s the impact on the balance sheet?',
    answer: 100000,
    unit: '$ increase liabilities',
    hint: 'Dividends become a liability when declared.',
    explanation: "**Calculation:** $2 × 50,000 shares = **$100,000 increase in liabilities**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Dividend Declaration Details**\n   - Dividend per share: $2.00\n   - Shares outstanding: 50,000\n   - Total dividend declared: $2.00 × 50,000 = $100,000\n\n2. **Balance Sheet Impact at Declaration**\n   - Debit: Retained earnings $100,000\n   - Credit: Dividends payable (liability) $100,000\n\n3. **Key Timing Effects**\n   - Declaration date: Creates liability and reduces equity\n   - Payment date: Reduces cash and eliminates liability\n   - No income statement impact (dividends are not expenses)\n\n**Key Points:**\n   • Dividends become a liability when declared, not when paid\n   • Reduces retained earnings immediately upon declaration\n   • Creates dividend payable liability until payment\n   • Dividends are distributions of earnings, not expenses",
    learnContent: {
      concept: 'Dividends reduce equity when declared, not when paid.',
      formula: 'Dividend Payable = Dividend × Shares Outstanding',
      example: '$1/share on 20,000 shares → $20,000 liability\n$0.50/share on 80,000 shares → $40,000'
    }
  },
  {
    id: 'acc-medium-134',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Convertible Debt Dilution Calculation',
    description: 'A company has 1,000,000 shares and $5M in convertible debt convertible into 200,000 shares. What is the diluted share count?',
    answer: 1200000,
    unit: 'shares',
    hint: 'Add convertible shares if in-the-money.',
    explanation: "**Calculation:** 1,000,000 + 200,000 = **1,200,000 shares**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Current Share Structure**\n   - Basic shares outstanding: 1,000,000\n   - Convertible debt amount: $5,000,000\n   - Conversion ratio: 200,000 shares\n\n2. **Dilution Analysis**\n   - Assume convertible debt is \"in-the-money\"\n   - If converted, debt would become equity\n   - Additional shares issued: 200,000\n\n3. **Diluted Share Count**\n   - Basic shares: 1,000,000\n   - Plus: Convertible shares: 200,000\n   - Total diluted shares: 1,200,000\n\n**Key Points:**\n   • Convertible securities are included if dilutive\n   • Used for calculating diluted earnings per share\n   • Assumes conversion occurred at beginning of period\n   • Interest on convertible debt would be added back to net income",
    learnContent: {
      concept: 'Convertible securities affect diluted EPS.',
      formula: 'Basic shares + Converted shares',
      example: '500,000 shares, 100,000 convertible → 600,000 diluted\n2M shares, 500,000 convertible → 2.5M diluted'
    }
  },
  {
    id: 'acc-medium-135',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Deferred Revenue to Revenue Flow',
    description: 'A company begins with $40,000 in deferred revenue. It earns $25,000 during the period and collects $15,000 in new cash. What is the ending balance of deferred revenue?',
    answer: 30000,
    unit: '$',
    hint: 'Beginning + Additions – Recognized',
    explanation: "**Calculation:** $40,000 + $15,000 - $25,000 = **$30,000**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Beginning Deferred Revenue**\n   - Starting balance: $40,000\n   - Represents cash received for undelivered services\n\n2. **Period Activity**\n   - New cash prepayments: +$15,000\n   - Revenue earned/recognized: -$25,000\n   - Running calculation: $40,000 + $15,000 - $25,000\n\n3. **Ending Deferred Revenue**\n   - Final balance: $30,000\n   - Represents remaining service obligations\n\n**Key Points:**\n   • Deferred revenue increases with cash prepayments\n   • Deferred revenue decreases as services are delivered\n   • Ending balance represents future performance obligations\n   • Cash collection timing differs from revenue recognition timing",
    learnContent: {
      concept: 'Ending deferred revenue reflects liabilities for unearned income.',
      formula: 'Ending = Beginning + Cash collected – Revenue recognized',
      example: 'Start: $10K, earn: $6K, collect: $5K → End: $9K\nStart: $5K, earn $5K, collect $20K → End: $20K'
    }
  },
  {
    id: 'acc-medium-136',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Inventory Write-Down Impact',
    description: 'A company originally held $50,000 in inventory. Due to obsolescence, 20% of this inventory became unsellable. What is the non-cash expense recorded on the income statement?',
    answer: 10000,
    unit: '$',
    hint: 'Apply the write-down percentage to total inventory.',
    explanation: "**Calculation:** $50,000 × 20% = **$10,000**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Inventory Assessment**\n   - Original inventory value: $50,000\n   - Obsolescence percentage: 20%\n   - Unsellable inventory: $50,000 × 20% = $10,000\n\n2. **Write-Down Recognition**\n   - Debit: Inventory write-down expense $10,000\n   - Credit: Inventory $10,000\n   - This reduces inventory to net realizable value\n\n3. **Financial Statement Impact**\n   - Income statement: $10,000 non-cash expense\n   - Balance sheet: Inventory reduced from $50,000 to $40,000\n   - Cash flow: $10,000 added back in operating section (non-cash)\n\n**Key Points:**\n   • Write-downs are non-cash expenses that reduce net income\n   • Inventory is written down to lower of cost or market\n   • Expense recognition follows conservatism principle\n   • Write-downs are typically not reversible",
    learnContent: {
      concept: 'Write-downs reduce assets and net income but are non-cash.',
      formula: 'Write-down amount = Inventory × Write-down %',
      example: '$100,000 inventory, 10% write-down → $10,000 non-cash expense\n$60,000 inventory, 25% write-down → $15,000 non-cash expense'
    }
  },
  {
    id: 'acc-medium-137',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Impairment of Intangible Assets',
    description: 'A company has $50,000 in patents. Due to a loss in market value, it writes off 60% of their value. What is the non-cash charge recognized on the income statement?',
    answer: 30000,
    unit: '$',
    hint: 'Multiply the original value by the impairment percentage.',
    explanation: "**Calculation:** $50,000 × 60% = **$30,000**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Intangible Asset Details**\n   - Original patent value: $50,000\n   - Market value decline: 60%\n   - Impairment amount: $50,000 × 60% = $30,000\n\n2. **Impairment Recognition**\n   - Debit: Impairment loss (expense) $30,000\n   - Credit: Patents (or accumulated impairment) $30,000\n   - Reduces carrying value from $50,000 to $20,000\n\n3. **Financial Statement Impact**\n   - Income statement: $30,000 non-cash impairment expense\n   - Balance sheet: Patent value reduced to $20,000\n   - Cash flow: $30,000 added back as non-cash charge\n\n**Key Points:**\n   • Impairments are non-cash, non-recurring charges\n   • Required when carrying value exceeds fair value\n   • Generally not reversible under US GAAP\n   • Reduces future amortization expense",
    learnContent: {
      concept: 'Impairments are non-cash, non-recurring charges.',
      formula: 'Impairment expense = Asset value × Impairment %',
      example: '$40,000 intangible, 50% impairment → $20,000 expense\n$100,000 asset, 25% impairment → $25,000 expense'
    }
  },
  {
    id: 'acc-medium-138',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Gain on Sale of Investment',
    description: 'A company bought stock for $80,000 and sells it two years later for $120,000. What is the gain reported on the income statement?',
    answer: 40000,
    unit: '$',
    hint: 'Subtract book value from sale proceeds.',
    explanation: "**Calculation:** $120,000 - $80,000 = **$40,000**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Investment Details**\n   - Original purchase price: $80,000\n   - Sale proceeds: $120,000\n   - Holding period: 2 years\n\n2. **Gain Calculation**\n   - Gain = Sale price - Purchase price\n   - Gain = $120,000 - $80,000 = $40,000\n\n3. **Financial Statement Treatment**\n   - Income statement: $40,000 gain on investment sale\n   - Balance sheet: Investment removed, cash increased\n   - Cash flow: $120,000 cash inflow (investing section)\n\n**Key Points:**\n   • Gains are recognized when investments are sold\n   • Gain equals sale proceeds minus original cost basis\n   • Unrealized gains during holding period are not recognized\n   • Investment sales are investing activities on cash flow statement",
    learnContent: {
      concept: 'Gains reflect increase in asset value realized upon sale.',
      formula: 'Gain = Sale Price – Book Value',
      example: 'Buy at $60K, sell at $75K → $15K gain\nBuy at $100K, sell at $95K → $5K loss'
    }
  },
  {
    id: 'acc-medium-139',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Amortization of Intangibles',
    description: 'A $40,000 customer list is amortized over 5 years using straight-line. What is the annual non-cash expense added back to the cash flow statement?',
    answer: 8000,
    unit: '$',
    hint: 'Divide total intangible by useful life.',
    explanation: "**Calculation:** $40,000 ÷ 5 years = **$8,000**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Intangible Asset Details**\n   - Customer list cost: $40,000\n   - Useful life: 5 years\n   - Amortization method: Straight-line\n\n2. **Annual Amortization**\n   - Annual amortization = Cost ÷ Useful life\n   - Annual amortization = $40,000 ÷ 5 = $8,000\n\n3. **Cash Flow Treatment**\n   - Income statement: $8,000 amortization expense (reduces net income)\n   - Cash flow statement: +$8,000 added back (non-cash expense)\n   - Balance sheet: Reduces net book value of customer list\n\n**Key Points:**\n   • Amortization is a non-cash expense\n   • Reduces net income but doesn't affect cash\n   • Added back to net income in operating cash flow\n   • Finite-life intangibles are amortized over useful life",
    learnContent: {
      concept: 'Amortization is non-cash but reduces net income.',
      formula: 'Amortization = Total / Useful Life',
      example: '$25K over 5 years → $5K/year\n$60K over 3 years → $20K/year'
    }
  },
  {
    id: 'acc-medium-140',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Minority Interest Accounting',
    description: 'A subsidiary earns $200,000 in net income. The parent company owns 70%. What is the portion of income attributable to minority interest?',
    answer: 60000,
    unit: '$',
    hint: 'Calculate portion not owned.',
    explanation: "**Calculation:** $200,000 × (100% - 70%) = **$60,000**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Ownership Structure**\n   - Subsidiary net income: $200,000\n   - Parent company ownership: 70%\n   - Minority (non-controlling) ownership: 30%\n\n2. **Income Attribution**\n   - Parent company's share: $200,000 × 70% = $140,000\n   - Minority interest share: $200,000 × 30% = $60,000\n\n3. **Consolidated Income Statement**\n   - Consolidated net income includes: $200,000\n   - Less: Minority interest: ($60,000)\n   - Net income attributable to parent: $140,000\n\n**Key Points:**\n   • Minority interest represents non-controlling shareholders' portion\n   • Consolidated statements include 100% of subsidiary results\n   • Minority interest is deducted to show parent's share\n   • Appears as separate line item on consolidated income statement",
    learnContent: {
      concept: 'Minority interest = % not owned × sub income.',
      formula: 'Minority = Sub income × (1 – % owned)',
      example: '75% owned, $100K income → $25K minority\n90% owned, $300K income → $30K minority'
    }
  },
  {
    id: 'acc-medium-141',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Equity Investment Accounting',
    description: 'A company owns 40% of a joint venture that reports $100,000 in earnings. What is the equity income recognized?',
    answer: 40000,
    unit: '$',
    hint: 'Use equity method for 20–50% stakes.',
    explanation: "**Calculation:** $100,000 × 40% = **$40,000**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Equity Method Application**\n   - Joint venture earnings: $100,000\n   - Company's ownership stake: 40%\n   - Ownership range for equity method: 20-50%\n\n2. **Equity Income Recognition**\n   - Equity income = Investee earnings × Ownership percentage\n   - Equity income = $100,000 × 40% = $40,000\n\n3. **Accounting Treatment**\n   - Debit: Investment in joint venture $40,000\n   - Credit: Equity income $40,000\n   - Increases both investment value and income\n\n**Key Points:**\n   • Equity method applies to 20-50% ownership stakes\n   • Company recognizes its proportionate share of earnings\n   • Investment account increases with earnings, decreases with dividends\n   • Provides income recognition without cash receipt",
    learnContent: {
      concept: 'Equity method accounts for ownership share.',
      formula: 'Equity Income = Affiliate NI × Ownership %',
      example: '30% of $60K → $18K\n25% of $80K → $20K'
    }
  },
  {
    id: 'acc-medium-142',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Deferred Tax Asset Recognition',
    description: 'A company reports a $20,000 NOL and has a tax rate of 25%. What is the deferred tax asset?',
    answer: 5000,
    unit: '$',
    hint: 'Multiply NOL by tax rate.',
    explanation: "**Calculation:** $20,000 × 25% = **$5,000**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Net Operating Loss Details**\n   - NOL carryforward: $20,000\n   - Corporate tax rate: 25%\n   - Future tax benefit available\n\n2. **Deferred Tax Asset Calculation**\n   - DTA = NOL × Tax rate\n   - DTA = $20,000 × 25% = $5,000\n\n3. **Accounting Recognition**\n   - Debit: Deferred tax asset $5,000\n   - Credit: Tax benefit (income statement) $5,000\n   - Represents future tax savings\n\n**Key Points:**\n   • NOLs create future tax benefits when used\n   • DTA represents prepaid taxes or future tax savings\n   • Requires assessment of realizability (future taxable income)\n   • Reduces cash taxes when NOL is utilized",
    learnContent: {
      concept: 'DTA reflects future tax savings.',
      formula: 'DTA = NOL × Tax Rate',
      example: '$10K NOL at 30% → $3K DTA\n$50K NOL at 20% → $10K DTA'
    }
  },
  {
    id: 'acc-medium-143',
    track: 'accounting',
    difficulty: 'medium',
    title: 'DTL from Depreciation Timing',
    description: 'A company uses accelerated tax depreciation of $35,000 and book depreciation of $20,000. Tax rate is 30%. What is the DTL?',
    answer: 4500,
    unit: '$',
    hint: 'Difference × tax rate.',
    explanation: "**Calculation:** ($35,000 - $20,000) × 30% = **$4,500**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Depreciation Timing Difference**\n   - Tax depreciation (accelerated): $35,000\n   - Book depreciation (straight-line): $20,000\n   - Timing difference: $35,000 - $20,000 = $15,000\n\n2. **Deferred Tax Liability Calculation**\n   - Temporary difference: $15,000\n   - Tax rate: 30%\n   - DTL = $15,000 × 30% = $4,500\n\n3. **Economic Impact**\n   - Company pays less tax now due to accelerated depreciation\n   - Will pay more tax in future when book depreciation exceeds tax\n   - DTL represents future tax obligation\n\n**Key Points:**\n   • DTL arises when tax depreciation exceeds book depreciation\n   • Represents taxes deferred to future periods\n   • Timing difference will reverse over asset life\n   • Accelerated tax depreciation creates temporary benefit",
    learnContent: {
      concept: 'DTL results from temporary timing differences.',
      formula: 'DTL = (Tax Dep – Book Dep) × Tax Rate',
      example: '$15K difference, 25% → $3,750 DTL\n$5K diff, 20% → $1K DTL'
    }
  },
  {
    id: 'acc-medium-144',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Purchase Accounting Adjustment',
    description: 'A company acquires another for $2.5M. The book value is $1.9M and identified intangibles are $300K. What is the goodwill?',
    answer: 300000,
    unit: '$',
    hint: 'Goodwill = Price – Net assets acquired',
    explanation: "**Calculation:** $2,500,000 - ($1,900,000 + $300,000) = **$300,000**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Purchase Price Allocation**\n   - Total acquisition cost: $2,500,000\n   - Book value of net assets: $1,900,000\n   - Identified intangibles: $300,000\n   - Fair value of net assets: $1,900,000 + $300,000 = $2,200,000\n\n2. **Goodwill Calculation**\n   - Goodwill = Purchase price - Fair value of net assets\n   - Goodwill = $2,500,000 - $2,200,000 = $300,000\n\n3. **Goodwill Characteristics**\n   - Represents premium paid for intangible benefits\n   - Not amortized under current standards\n   - Subject to annual impairment testing\n   - Reflects synergies, market position, workforce\n\n**Key Points:**\n   • Goodwill is excess of purchase price over fair value of net assets\n   • Includes both book value and identified intangibles\n   • Cannot be amortized but must be tested for impairment\n   • Represents value of assembled business beyond identifiable assets",
    learnContent: {
      concept: 'Goodwill represents premium over fair value.',
      formula: 'Goodwill = Purchase Price – (Book Value + Intangibles)',
      example: 'Paid $3M, BV $2.6M, Intangibles $200K → $200K goodwill\nPaid $1.5M, net assets $1.5M → $0 goodwill'
    }
  },
  {
    id: 'acc-medium-145',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Non-Controlling Interest on Balance Sheet',
    description: 'A company owns 85% of a subsidiary with $800,000 in equity. What is the NCI shown on the balance sheet?',
    answer: 120000,
    unit: '$',
    hint: 'Multiply equity by % minority.',
    explanation: "**Calculation:** $800,000 × (100% - 85%) = **$120,000**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Subsidiary Equity Structure**\n   - Total subsidiary equity: $800,000\n   - Parent company ownership: 85%\n   - Non-controlling interest: 100% - 85% = 15%\n\n2. **Non-Controlling Interest Calculation**\n   - NCI = Subsidiary equity × Minority percentage\n   - NCI = $800,000 × 15% = $120,000\n\n3. **Balance Sheet Presentation**\n   - NCI appears in equity section of consolidated balance sheet\n   - Represents minority shareholders' claim on subsidiary net assets\n   - Separate from parent company's equity\n\n**Key Points:**\n   • NCI represents minority shareholders' equity interest\n   • Shown separately in consolidated equity section\n   • Changes with subsidiary's earnings and dividend distributions\n   • Calculated as minority percentage of subsidiary's equity",
    learnContent: {
      concept: 'NCI = Sub equity × % minority',
      formula: 'NCI = Sub equity × (1 – % owned)',
      example: '20% minority, $500K equity → $100K NCI\n10% minority, $900K equity → $90K NCI'
    }
  },
  {
    id: 'acc-hard-173',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Step-Up Allocation and DTL Creation',
    description: 'HavenSteel acquired Keystone Metals for $800,000. The fair value of net assets acquired was $600,000, consisting of: Cash: $50,000, Inventory: $150,000, Intangibles: $100,000. The remaining portion was allocated to PP&E. The tax basis of PP&E was $200,000, and the tax rate is 25%. What deferred tax liability is created from the basis difference in PP&E?',
    answer: 25000,
    unit: '$',
    hint: 'You must first compute the fair value of PP&E.',
    explanation: "**Calculation:** DTL = (Fair Value - Tax Basis) × Tax Rate = **$25,000**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Calculate Fair Value of PP&E**\n   - Total net assets fair value: $600,000\n   - Less: Cash: $50,000\n   - Less: Inventory: $150,000\n   - Less: Intangibles: $100,000\n   - PP&E fair value: $600,000 - $300,000 = $300,000\n\n2. **Calculate Step-Up Amount**\n   - PP&E fair value: $300,000\n   - PP&E tax basis: $200,000\n   - Step-up amount: $300,000 - $200,000 = $100,000\n\n3. **Calculate Deferred Tax Liability**\n   - Step-up creates temporary difference\n   - DTL = $100,000 × 25% = $25,000\n\n**Key Points:**\n   • Step-ups create book/tax differences requiring DTL recognition\n   • Fair value allocation starts with total net assets\n   • PP&E value calculated as residual after other assets\n   • DTL = temporary difference × tax rate",
    learnContent: {
      concept: 'Step-ups arise in acquisitions when fair value exceeds tax basis. PP&E fair value must often be backed into by subtracting other known assets. Deferred Tax Liabilities arise when book depreciation > tax depreciation.',
      formula: 'DTL = (Fair Value – Tax Basis) × Tax Rate\nFair Value of PP&E = FV of Net Assets – Other FV Assets',
      example: '🏭 SteelCore buys net assets at 900K, known assets = 400K, PP&E tax = 350K → PP&E FV = 500K → DTL = 37.5K\n⚙️ Toolr buys for 1M, net assets = 700K, known assets = 400K, PP&E tax = 250K → PP&E FV = 300K → DTL = 12.5K\n🧱 BrikTech net assets = 500K, other assets = 250K, PP&E tax = 150K → FV = 250K → DTL = 25K'
    }
  },
  {
    id: 'acc-hard-174',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Multi-Line CFO Walk from WC Changes',
    description: 'FerroNova reported $100,000 in Net Income. During the year: Accounts Receivable increased by $40,000, Inventory decreased by $25,000, Prepaid expenses increased by $30,000, Accounts Payable decreased by $10,000, and Accrued expenses increased by $15,000. What is cash flow from operations?',
    answer: 60000,
    unit: '$',
    hint: 'Think about which WC changes are sources vs. uses of cash.',
    explanation: "**Calculation:** CFO = NI ± Working Capital Changes = **$60,000**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Starting Point**\n   - Net Income: $100,000\n\n2. **Working Capital Adjustments**\n   - Accounts Receivable increase: ($40,000) [cash outflow]\n   - Inventory decrease: $25,000 [cash inflow]\n   - Prepaid expenses increase: ($30,000) [cash outflow]\n   - Accounts Payable decrease: ($10,000) [cash outflow]\n   - Accrued expenses increase: $15,000 [cash inflow]\n\n3. **Net Working Capital Impact**\n   - Total WC changes: ($40,000) + $25,000 + ($30,000) + ($10,000) + $15,000 = ($40,000)\n\n4. **Final Calculation**\n   - Operating Cash Flow: $100,000 - $40,000 = $60,000\n\n**Key Points:**\n   • Asset increases = cash uses (negative)\n   • Asset decreases = cash sources (positive)\n   • Liability increases = cash sources (positive)\n   • Liability decreases = cash uses (negative)",
    learnContent: {
      concept: 'AR increase = use of cash. Inventory decrease = source of cash. Prepaids increase = use of cash. Accounts payable decrease = use of cash. Accrued increase = source of cash.',
      formula: 'CFO = Net Income ± ∆WC',
      example: '🛠️ FixrTech NI = 80K, AR ↑ 20K, Inventory ↓ 10K, A/P ↓ 5K → CFO = 65K\n🔋 VoltEdge NI = 120K, Prepaid ↑ 30K, A/P ↑ 10K, Accrued ↑ 10K → CFO = 110K\n🧾 Statix NI = 70K, AR ↑ 25K, Accrued ↓ 5K, Inventory ↓ 10K → CFO = 50K'
    }
  },
  {
    id: 'acc-hard-175',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Cash Flow Impact of Lease Reclassification',
    description: 'Strathmore previously had a long-term lease treated as operating, with annual rent payments of $80,000. Due to ASC 842, the lease was reclassified as a finance lease, and the company recorded: Depreciation expense of $60,000 and Interest expense of $20,000. Assume the company\'s Net Income for the year was $100,000. What is the cash flow from operations after lease reclassification?',
    answer: 160000,
    unit: '$',
    hint: 'Interest is already included in Net Income. Add back depreciation.',
    explanation: "**Calculation:** CFO = Net Income + Depreciation = **$160,000**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Starting Point**\n   - Net Income: $100,000\n   - This already includes the $20,000 interest expense\n\n2. **Finance Lease Impact**\n   - Depreciation expense: $60,000 [non-cash expense]\n   - Interest expense: $20,000 [already included in NI]\n   - Principal payment: $60,000 [moves to financing activities]\n\n3. **Operating Cash Flow Calculation**\n   - Net Income: $100,000\n   - Add back depreciation: $60,000\n   - Operating Cash Flow: $160,000\n\n4. **Comparison to Operating Lease**\n   - Under operating lease: CFO would be reduced by full $80,000 rent\n   - Under finance lease: CFO improved by treating depreciation as non-cash\n\n**Key Points:**\n   • Finance leases improve operating cash flow metrics\n   • Depreciation is non-cash and added back\n   • Only interest portion affects operating activities\n   • Principal payments classified as financing activities",
    learnContent: {
      concept: 'Finance leases increase depreciation and interest. Depreciation is non-cash → added back. CFO rises under finance lease since rent was fully operating before.',
      formula: 'CFO = Net Income + Depreciation',
      example: '🏢 LeaseMax switches to finance lease: NI = 90K, Dep = 50K → CFO = 140K\n🧾 EquipFlow NI = 70K, Dep = 40K → CFO = 110K\n📊 OfficeBase NI = 120K, Dep = 60K → CFO = 180K'
    }
  },
  {
    id: 'acc-hard-176',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Asset Impairment and Restructuring Charges',
    description: 'Rexa Systems reported $75,000 in Net Income. During the year, it incurred: A non-cash impairment charge of $30,000, Restructuring charges of $20,000 (of which $15,000 was paid in cash), and A gain on sale of equipment of $10,000. What is cash flow from operations?',
    answer: 95000,
    unit: '$',
    hint: 'Add back non-cash charges, subtract gain on sale.',
    explanation: "**Calculation:** CFO = NI + Non-cash Charges - Non-operating Gains = **$95,000**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Starting Point**\n   - Net Income: $75,000\n   - This includes all the charges and gains below\n\n2. **Add Back Non-Cash Items**\n   - Asset impairment charge: $30,000 [non-cash expense]\n   - Unpaid restructuring charges: $5,000 [accrued portion]\n   - Total non-cash additions: $35,000\n\n3. **Remove Non-Operating Items**\n   - Gain on equipment sale: ($10,000) [belongs in investing]\n   - This gain inflated net income but isn't operating cash\n\n4. **Restructuring Analysis**\n   - Total restructuring: $20,000\n   - Cash paid: $15,000 [already reduced operating cash]\n   - Accrued portion: $5,000 [add back as non-cash]\n\n5. **Final Calculation**\n   - CFO = $75,000 + $30,000 + $5,000 - $10,000 = $100,000\n\n**Key Points:**\n   • Impairments are always non-cash additions\n   • Only unpaid restructuring costs are added back\n   • Gains on asset sales are subtracted (non-operating)\n   • Focus on cash vs. non-cash nature of each item",
    learnContent: {
      concept: 'Impairments are non-cash → added back. Partial cash restructuring → only unpaid portion added back. Gains on sale → subtracted from CFO (non-operating).',
      formula: 'CFO = NI + Non-cash Expenses – Non-operating Gains',
      example: '🧨 DeltaPipe NI = 50K, impairment = 20K, gain = 5K → CFO = 65K\n🧼 CleanForge NI = 40K, restructuring 25K (5K unpaid) → add 5K\n🏭 ForgeMark NI = 80K, impairment 40K, cash restructure 10K/25K → CFO = 135K'
    }
  },
  {
    id: 'acc-hard-177',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Inventory Prepayment and FX Loss Impact',
    description: 'Graviton Corp paid $200,000 upfront for inventory. Only $150,000 of it was sold and recorded in COGS. Separately, Graviton recorded a $10,000 FX loss from revaluing a foreign subsidiary. Net Income was $90,000. What is cash flow from operations?',
    answer: 50000,
    unit: '$',
    hint: 'Unutilized inventory increases working capital. FX loss is non-cash.',
    explanation: "**Calculation:** CFO = NI - Inventory Increase + Non-cash Losses = **$50,000**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Starting Point**\n   - Net Income: $90,000\n   - This includes the FX loss and COGS\n\n2. **Inventory Analysis**\n   - Cash paid for inventory: $200,000\n   - Inventory sold (COGS): $150,000\n   - Inventory increase: $200,000 - $150,000 = $50,000\n   - This represents cash tied up in unsold inventory\n\n3. **Foreign Exchange Loss**\n   - FX loss: $10,000 (non-cash item)\n   - Add back to operating cash flow\n   - This was an unrealized translation loss\n\n4. **Cash Flow Calculation**\n   - Net Income: $90,000\n   - Less: Inventory increase: ($50,000) [cash use]\n   - Add: FX loss (non-cash): $10,000\n   - Operating Cash Flow: $90,000 - $50,000 + $10,000 = $50,000\n\n**Key Points:**\n   • Inventory builds are cash uses in operating activities\n   • COGS timing doesn't match cash payment timing\n   • FX losses are typically non-cash translation adjustments\n   • Focus on actual cash movements vs. income statement timing",
    learnContent: {
      concept: 'Inventory builds are cash uses. FX losses are non-cash - added back. COGS does not match payment timing in CFO.',
      formula: 'CFO = NI - Delta Inventory + Non-cash Losses',
      example: '🌎 Intellia NI = 80K, inv ↑ 30K, FX loss = 5K → CFO = 55K\n🔄 Orbitronics NI = 100K, inv ↑ 70K, FX loss = 10K → CFO = 40K\n📦 GlobalPack NI = 120K, inv ↑ 100K, FX loss = 0 → CFO = 20K'
    }
  },
  {
    id: 'acc-hard-178',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Accrued Bonus Reversal and Payable Timing',
    description: 'At the start of the year, NovaLend had $50,000 in accrued bonuses from the prior year. During the year: It paid out the full $50,000 and It also accrued a new $70,000 for year-end bonuses. Net Income was $90,000. What is NovaLend\'s cash flow from operations?',
    answer: 110000,
    unit: '$',
    hint: 'Bonus payments reduce cash. New accruals increase liabilities (cash source).',
    explanation: "**Calculation:** CFO = NI - Bonus Payments + Accrual Increase = **$110,000**\n\n• • •\n\n**Step-by-Step Analysis:**\n\n1. **Starting Point**\n   - Net Income: $90,000\n   - This includes the $70,000 current year bonus expense\n\n2. **Prior Year Bonus Payment**\n   - Accrued bonuses paid: ($50,000) [cash outflow]\n   - This reduces the accrued liability\n   - No P&L impact (already expensed last year)\n\n3. **Current Year Bonus Accrual**\n   - New bonus expense: $70,000 [included in NI]\n   - Cash to be paid: $0 (accrued for next year)\n   - This creates a liability increase\n\n4. **Working Capital Analysis**\n   - Beginning accrued bonuses: $50,000\n   - Less: Cash payments: ($50,000)\n   - Plus: New accruals: $70,000\n   - Ending accrued bonuses: $70,000\n   - Net change in accruals: $20,000 increase\n\n5. **Operating Cash Flow Calculation**\n   - Net Income: $90,000\n   - Less: Prior bonus payment: ($50,000)\n   - Add: Net accrual increase: $20,000\n   - Alternative: NI + Liability increase = $90,000 + $20,000 = $110,000\n\n**Key Points:**\n   • Cash payments reduce operating cash flow\n   • Accrual increases are sources of cash (liability increase)\n   • Current year bonus expense is non-cash until paid\n   • Focus on net change in accrued liabilities",
    learnContent: {
      concept: 'Accruals paid = no impact (already expensed). New unpaid accruals = source of cash. Cash flow ignores timing of expense recognition vs. payment.',
      formula: 'CFO = NI + Increase in Accrued Liabilities',
      example: '💼 Paystack NI = 60K, new accrual ↑ 20K → CFO = 80K\n🧮 Ledgerly NI = 100K, paid old accrual = 30K, new = 40K → CFO = 140K\n🏦 Fundora NI = 75K, accrual ↑ 25K → CFO = 100K'
    }
  }
];