import { Question, Track, Difficulty } from '@/types/drill';

export const QUESTIONS: Question[] = [
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
    explanation: `Operating Income = Revenue - Operating Expenses

Revenue: $18,000
Less: COGS: $7,000
Less: SG&A: $4,000
Less: R&D: $2,000
Operating Income: $5,000

Operating expense categories:
• COGS - direct costs of producing goods sold
• SG&A - selling, general & administrative expenses  
• R&D - research and development costs
• Operating Income - profit from core business before interest/taxes`,
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
    explanation: `Net Income Impact = -Depreciation × (1 - Tax Rate)

Depreciation expense: $2,000
Tax rate: 30%
Tax shield benefit: $2,000 × 30% = $600
Net income impact: -$2,000 + $600 = -$1,400

Tax impact analysis:
• Depreciation - non-cash expense reducing taxable income
• Tax shield - tax savings from deductible depreciation
• Net impact - depreciation cost minus tax savings
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
    explanation: 'CFO = $12,000 + $2,000 - $3,000 + $1,000 = $12,000',
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
    explanation: 'Total Debt = $5,000 + $15,000 = $20,000. Total Equity = $10,000 + $10,000 = $20,000. D/E = $20,000 ÷ $20,000 = 1.0x',
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
    explanation: 'Net PPE = $50,000 - $12,000 = $38,000',
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
    explanation: 'Ending RE = $20,000 + $5,000 - $1,000 = $24,000',
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
    explanation: 'Gross Margin % = ($25,000 - $18,000) ÷ $25,000 × 100 = $7,000 ÷ $25,000 × 100 = 28%',
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
    explanation: 'Net Income = $500 - $300 = $200',
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
    explanation: 'EBIT = $500 - $300 - $50 = $150. After Tax = $150 × (1 - 0.20) = $120',
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
    explanation: 'Thorne Systems generated positive cash flow from operations despite complex revenue timing differences. The company collected $120,000 in cash upfront for service contracts but only recognized $80,000 as revenue under accounting standards, creating a $40,000 deferred revenue increase.\n\n• Net income: $50,000 (starting point)\n• Amortization: $20,000 (non-cash expense, added back)\n• Deferred revenue increase: $40,000 (cash collected exceeding revenue recognized)\n\nThe amortization of customer contracts is a non-cash expense that reduced net income but didn\'t impact actual cash flows. The deferred revenue represents cash collected upfront that hasn\'t been earned yet, creating a positive cash flow impact.\n\nCFO = $50,000 + $20,000 + $40,000 = $110,000\n\nIn summary, Thorne Systems generated $110,000 in operating cash flow by collecting cash upfront for future services while adding back non-cash amortization expenses.',
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
    explanation: 'Gravix Lighting\'s cash flow from operations reflects multiple working capital changes and non-cash adjustments. The company faced typical business challenges including increased receivables from slower customer payments and various operational timing differences.\n\n• Net income: $70,000 (base earnings)\n• Accounts receivable increase: -$25,000 (customers haven\'t paid yet)\n• Inventory decrease: +$10,000 (products sold, converted to cash)\n• Prepaid expenses increase: -$5,000 (software licenses paid in advance)\n• Accounts payable increase: +$20,000 (delayed vendor payments)\n• Accrued liabilities decrease: -$8,000 (employee bonuses paid)\n• Depreciation: +$15,000 (non-cash expense)\n\nThe depreciation expense reduced net income but involved no actual cash outflow. Working capital changes show the timing differences between when transactions are recorded versus when cash changes hands.\n\nCFO = $70,000 + $15,000 - $25,000 + $10,000 - $5,000 + $20,000 - $8,000 = $77,000\n\nIn summary, despite earning $70,000 in net income, Gravix Lighting generated $77,000 in operating cash flow through effective working capital management.',
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
    explanation: 'ABC Company\'s cash flow from operations demonstrates how asset transactions and depreciation affect operating cash flows. The company made significant capital investments while also divesting older equipment, creating both cash and non-cash impacts.\n\n• Net income: $15,000 (includes all income statement effects)\n• Equipment depreciation: +$30,000 ($300,000 ÷ 10 years, non-cash expense)\n• Gain on equipment sale: -$30,000 ($70,000 sale price - $40,000 book value, non-operating item)\n\nThe new equipment purchase generates annual depreciation that reduces net income but doesn\'t use operating cash. The equipment sale created a $30,000 gain that increased net income, but this gain represents an investing activity rather than core operations.\n\nUnder the indirect method, we add back non-cash expenses like depreciation and remove non-operating gains to arrive at true operating cash flow.\n\nCFO = $15,000 + $30,000 - $30,000 = $15,000\n\nIn summary, ABC Company\'s operating cash flow equals its net income at $15,000, as the depreciation add-back is exactly offset by removing the non-operating equipment sale gain.',
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
    explanation: 'Fresca Foods demonstrates how revenue timing differences and expense accruals impact cash flow from operations. The company collected significant cash upfront for annual catering contracts while managing unpaid operational expenses.\n\n• Net income: $40,000 (base earnings after all expenses)\n• Deferred revenue increase: +$40,000 ($100,000 collected - $60,000 recognized)\n• Accrued SG&A expenses: +$10,000 ($50,000 incurred - $40,000 paid)\n• Depreciation: +$30,000 (non-cash expense)\n\nThe company collected $100,000 in cash for annual catering contracts but only recognized $60,000 as revenue this period, creating a $40,000 deferred revenue liability. This represents cash received before services are delivered. The $10,000 in unpaid SG&A costs means expenses were incurred but cash was retained.\n\nAll these items create positive adjustments to operating cash flow because they represent cash benefits not reflected in net income.\n\nCFO = $40,000 + $30,000 + $40,000 + $10,000 = $120,000\n\nIn summary, Fresca Foods generated $120,000 in operating cash flow, significantly exceeding net income due to upfront customer payments and effective expense management.',
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
    explanation: 'CFO = Net Income + Depreciation & Amortization - Change in Working Capital\nCFO = $100 + $30 - (-$20) = $150\n\nNegative change in working capital means working capital decreased.\nDecreased working capital releases cash, increasing CFO.\nDepreciation & amortization are non-cash expenses added back.',
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
    explanation: 'CFO = $100 + $30 - (-$20) = $100 + $30 + $20 = $150',
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
    explanation: 'Operating Income = Revenue - COGS - Operating Expenses = $35,000 - $20,000 - $3,000 = $12,000. Interest Coverage = Operating Income ÷ Interest Expense = $12,000 ÷ $3,000 = 4.0x',
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
    explanation: 'OpInc = $60K - $30K - $10K = $20K. Pre-tax = $20K - $5K = $15K. Net Income = $15K × (1 - 0.25) = $11.25K. EPS = $11,250 ÷ 5,000 = 2.25',
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
    explanation: 'Net Cash = $8,000 - $2,000 - $1,000 = $5,000',
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
    explanation: 'Average Inventory = ($5,000 + $7,000) ÷ 2 = $6,000. Turnover = $48,000 ÷ $6,000 = 8.0x',
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
    explanation: 'Total Assets = $10K + $15K + $30K = $55K. Total Liabilities = $5K + $10K + $20K = $35K. Equity = $55K - $35K = $20K',
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
    explanation: 'Tax Shield = $6,000 × 0.25 = $1,500',
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
    explanation: 'Avg Assets = ($60K + $100K) ÷ 2 = $80K. Turnover = $120K ÷ $80K = 1.5x',
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
    explanation: 'Deferred Revenue = $12K - $4K = $8K',
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
    explanation: 'Payout = $8K ÷ $40K = 0.2 or 20%',
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
    explanation: `Net Working Capital = Current Assets - Current Liabilities

Current Assets: $12,000 + $18,000 + $2,000 = $32,000
Current Liabilities: $15,000 + $5,000 = $20,000
Net Working Capital: $32,000 - $20,000 = $12,000

Key components:
• Accounts Receivable - customer payments due for credit sales
• Inventory - goods available for sale  
• Prepaid Expenses - advance payments for future services
• Accounts Payable - amounts owed to suppliers
• Accrued Expenses - incurred costs not yet paid`,
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
    explanation: `Total Current Liabilities = short-term obligations due within 12 months

Current Liabilities: $12,000 + $8,000 + $10,000 = $30,000
Excluded: Long-Term Debt ($40,000) and Deferred Tax Liability ($5,000)

Key components:
• Accounts Payable - amounts owed to suppliers for goods/services
• Accrued Expenses - incurred costs not yet paid (wages, utilities, interest)
• Short-Term Debt - borrowings due within 12 months
• Long-Term Debt - excluded as due beyond one year
• Deferred Tax Liability - excluded as timing differences reverse over multiple periods`,
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
    explanation: 'Ending Inventory = Beginning Inventory + Purchases - COGS = $15,000 + $40,000 - $45,000 = $10,000',
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
    explanation: 'Debt = Short-Term + Long-Term = $10,000 + $40,000 = $50,000. Debt-to-Assets = $50,000 ÷ $100,000 = 0.5',
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
    explanation: '$24,000 ÷ 12 months = $2,000/month. By end of Q1 (3 months): $2,000 × 3 = $6,000 recognized. Deferred = $24,000 - $6,000 = $18,000',
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
    explanation: 'Operating Income = $100,000 - $40,000 - $30,000 = $30,000. Operating Margin = $30,000 ÷ $100,000 = 0.3',
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
    explanation: 'Assets (AR + Inventory) = $12,000 + $8,000 = $20,000. Liabilities (AP + Accrued) = $10,000 + $3,000 = $13,000. NWC = $20,000 - $13,000 = $7,000',
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
    explanation: 'GP A = $80K × 50% = $40K. GP B = $120K × 30% = $36K. Total = $76K',
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
    explanation: '$200,000 - $20,000 - $5,000 = $175,000',
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
    explanation: 'Total Gross PPE = $200K + $100K + $50K = $350K. NBV = $350K - $120K = $230K',
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
    explanation: 'Dep = $100,000 ÷ 5 = $20,000. Tax shield = $20,000 × 25% = $5,000',
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
    explanation: '$90,000 + $10,000 - $25,000 - $5,000 = $70,000',
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
    explanation: '$40,000 + $100,000 - $110,000 = $30,000',
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
    explanation: '$120,000 + $15,000 - $10,000 - $5,000 = $120,000',
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
    explanation: '$500,000 - $200,000 - $120,000 = $180,000',
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
    explanation: 'Liabilities = $100,000 + $250,000 = $350,000. Equity = $750,000 - $350,000 = $400,000',
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
    explanation: '$75,000 ÷ $15,000 = 5.0',
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
    explanation: '$560,000 - $500,000 + $40,000 = $100,000',
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
    explanation: '($400,000 + $500,000) ÷ 2 = $450,000',
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
    explanation: 'EBIT = $1,000,000 - $400,000 - $300,000 - $50,000 = $250,000. $250,000 ÷ $25,000 = 10',
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
    explanation: '($50,000 + $60,000) ÷ $90,000 = 1.22',
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
    explanation: '$100,000 - $40,000 - $20,000 = $40,000',
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
    explanation: '$10,000 (↑AR) - $5,000 (↓Inventory) - $3,000 (↑AP) = $2,000',
    learnContent: {
      concept: 'Working capital change impacts cash in indirect method cash flow statements.',
      formula: 'Change in WC = ΔAR + ΔInventory - ΔAP',
      example: 'ΔAR +$5K, ΔInv -$2K, ΔAP +$1K → Net = +2K\nΔAR -$4K, ΔInv +$3K, ΔAP -$1K → Net = -2K'
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
    explanation: 'Since you recognize more revenue for accounting than for tax purposes, the company pays less in taxes now and will pay more in the future — creating a deferred tax asset. ($50,000 - $30,000) × 25% = $5,000',
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
    explanation: 'Installment sales recognize revenue and profit as cash is received. Gross Profit % = ($120,000 - $70,000) / $120,000 = 41.67%. Gross Profit Recognized = $60,000 × 41.67% = $25,000',
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
    explanation: 'A 5% discount on $200,000 = $10,000. Adding the $2,000 rebate brings your total savings to $12,000. Final COGS = $200,000 - $10,000 - $2,000 = $188,000',
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
    explanation: 'Only 6 months of service is consumed this year (July-December). Expense = $24,000 × (6/12) = $12,000. The remaining $12,000 is a prepaid asset.',
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
    explanation: 'Annual amortization = $120,000 / 10 years = $12,000. After 3 years, cumulative amortization would be $36,000, leaving a net book value of $84,000.',
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
    explanation: 'DTL is reduced when tax rates drop. You multiply the underlying temporary difference by the new tax rate.',
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
    explanation: 'Expensing the full $120,000 hits income immediately, while depreciation spreads cost. Year 1 difference = $120,000 - $30,000 = $90,000.',
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
    explanation: 'Cash Flow from Ops = Net Income + Depreciation = 60,000 + 15,000 = 75,000',
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
    explanation: 'Impairment = $100,000 - $65,000 = $35,000. After-tax impact = $35,000 × (1 - 0.20) = $28,000',
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
    explanation: '$120,000 ÷ 12 = $10,000 per month. $10,000 × 4 months = $40,000',
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
    explanation: 'Year 1 usage = $3,000\nYear 2 usage = $5,000\nTotal used = $8,000\nRemaining DTA = $12,000 − $8,000 = $4,000',
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
    explanation: 'Straight-line depreciation in Y1 = $30,000\nAccelerated depreciation in Y1 = $50,000\nHigher depreciation = Lower pre-tax income\nDifference = $50,000 − $30,000 = $20,000',
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
    description: `A company signs a capital lease requiring $5,000 annual payments over 4 years. The lease uses a 6% discount rate. Using the present value formula, calculate the initial lease liability recorded on the balance sheet at lease inception.`,
    answer: 17237,
    unit: '$',
    hint: 'Use the PV of annuity formula for lease payments.',
    explanation: 'PV = Pmt × [(1 − (1 + r)^−n) / r]\n= 5,000 × [(1 − (1.06)^−4) / 0.06] ≈ $17,237',
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
    explanation: 'Stock comp = $40K; tax shield = $40K × 30% = $12,000',
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
    explanation: 'Net Change = +8,000 (AR up) –5,000 (Inventory down) → net = +$3,000 increase',
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
    explanation: 'Interest = $100,000 × 10% × 6/12 = $5,000',
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
    explanation: 'Net book value = $50K – $30K = $20K → Gain = $28K – $20K = $8K',
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
    explanation: 'EBITDA = $250K – $100K – $40K = $110K → Excludes depreciation and interest',
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
    explanation: '$1.2M – $900K = $300K → $300K ÷ 6 = $50K additional annual depreciation',
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
    explanation: 'Expense = $10K annually (straight-line). Asset and liability = $10K × 5 = $50K each.',
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
    explanation: 'PP&E = $800K + $200K – $90K – $40K = $870K',
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
    explanation: 'DTL = $30K × 25% = $7,500',
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
    explanation: 'DPO = ($50K ÷ $600K) × 365 ≈ 30.4 days',
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
    explanation: 'Total = $8K + $10K + $12K = $30K → $30K ÷ 3 = $10K/year',
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
    explanation: 'Net Assets = $450K – $100K = $350K → Goodwill = $500K – $350K = $150K',
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
    explanation: 'NCI = $100K × 20% = $20,000',
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
    explanation: '3 months out of 12 = 25% → $120,000 × 25% = $30,000',
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
    explanation: 'After Year 1 payment: $100K – $20K = $80K → Year 2 Interest = $80K × 6% = $4,800',
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
    explanation: 'Taxable Income = $120K – $25K = $95K → $95K × 30% = $28,500',
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
    explanation: 'Depreciation = $50K ÷ 5 = $10K\nInterest = $50K × 5% = $2,500',
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
    explanation: 'Only depreciation and amortization are non-cash → $15K + $5K = $20K',
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
    explanation: '$120K ÷ $15K = 8×',
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
    explanation: '$12K + $40K – $38K = $14K',
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
    explanation: 'EBIT(1 – 0.25) = $150K → +$30K – $40K – $10K = $130K',
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
    explanation: '$40K income fully offset → no taxable income → $0 tax',
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
    explanation: '$40K + $25K + $15K = $80K',
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
    explanation: '$500K – $400K = $100K goodwill',
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
    explanation: '$80K – $20K = $60K → $60K × 25% = $15K',
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
    explanation: '$230K – $200K + $20K = $50K',
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
    explanation: '$20K – $30K = –$10K',
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
    explanation: '$50K + $60K – $35K = $75K',
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
    explanation: '$500K – $200K – $150K = $150K (D&A excluded from OpEx)',
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
    explanation: '$100K ÷ 10 = $10K/year',
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
    explanation: '$80K + $40K – $10K = $110K',
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
    explanation: '$95K + $2K = $97K',
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
    explanation: '$70K + $15K – $5K = $80K',
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
    explanation: '$100,000 × 20% = $20,000',
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
    explanation: 'If AR increases, some sales were not collected in cash. $120K – $10K = $110K',
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
    explanation: '$300M + $80M + $10M – $30M = $360M',
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
    explanation: '$5,000 × 30% = $1,500',
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
    explanation: '$60K – $40K = $20K',
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
    explanation: '($1M – $300K – $100K) ÷ 100K = $6',
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
    explanation: '$200K ÷ ($40K + $60K) = 2.0x',
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
    explanation: '$150K ÷ $50K = 3.0x',
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
    explanation: '$40K ÷ $100K = 40%',
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
    explanation: '$50,000 ÷ 10 = $5,000 per year',
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
    explanation: 'Revenue is recognized based on time elapsed, not when cash is received. Only 3 months of service were delivered by year-end.',
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
    explanation: 'The original allowance was 3% of A/R, now it is 5%. The difference affects bad debt expense.',
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
    explanation: 'Unearned revenue decreases as services are performed.',
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
    explanation: 'Net book value = cost – accumulated depreciation. Compare to sale price.',
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
    explanation: 'Capitalized interest becomes part of the asset\'s cost.',
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
    explanation: 'Record as an accrued liability.',
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
    explanation: 'Declaration reduces retained earnings and creates a payable.',
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
    explanation: 'If converted, additional shares dilute ownership.',
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
    explanation: 'Deferred revenue decreases as service is delivered.',
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
    title: 'Cash Flow Classification for Asset Sale',
    description: 'A company sells equipment for $80,000. It had a book value of $70,000. Where and how much is reported in the cash flow statement?',
    answer: 80000,
    unit: '$ under investing',
    hint: 'Focus on cash received.',
    explanation: 'Sale proceeds go to investing section; gain goes to income.',
    learnContent: {
      concept: 'Cash from asset sales is investing activity.',
      formula: 'Sale price → Investing inflow',
      example: 'Sell asset for $50K → Investing inflow $50K\nSell land for $100K → Investing inflow $100K'
    }
  },
  {
    id: 'acc-medium-137',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Inventory Write-Down Impact',
    description: 'A company originally held $50,000 in inventory. Due to obsolescence, 20% of this inventory became unsellable. What is the non-cash expense recorded on the income statement?',
    answer: 10000,
    unit: '$',
    hint: 'Apply the write-down percentage to total inventory.',
    explanation: 'A 20% write-down of $50,000 results in a $10,000 non-cash expense.',
    learnContent: {
      concept: 'Write-downs reduce assets and net income but are non-cash.',
      formula: 'Write-down amount = Inventory × Write-down %',
      example: '$100,000 inventory, 10% write-down → $10,000 non-cash expense\n$60,000 inventory, 25% write-down → $15,000 non-cash expense'
    }
  },
  {
    id: 'acc-medium-138',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Impairment of Intangible Assets',
    description: 'A company has $50,000 in patents. Due to a loss in market value, it writes off 60% of their value. What is the non-cash charge recognized on the income statement?',
    answer: 30000,
    unit: '$',
    hint: 'Multiply the original value by the impairment percentage.',
    explanation: '$50,000 × 60% = $30,000 impairment expense.',
    learnContent: {
      concept: 'Impairments are non-cash, non-recurring charges.',
      formula: 'Impairment expense = Asset value × Impairment %',
      example: '$40,000 intangible, 50% impairment → $20,000 expense\n$100,000 asset, 25% impairment → $25,000 expense'
    }
  },
  {
    id: 'acc-medium-139',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Gain on Sale of Investment',
    description: 'A company bought stock for $80,000 and sells it two years later for $120,000. What is the gain reported on the income statement?',
    answer: 40000,
    unit: '$',
    hint: 'Subtract book value from sale proceeds.',
    explanation: '$120,000 – $80,000 = $40,000 gain.',
    learnContent: {
      concept: 'Gains reflect increase in asset value realized upon sale.',
      formula: 'Gain = Sale Price – Book Value',
      example: 'Buy at $60K, sell at $75K → $15K gain\nBuy at $100K, sell at $95K → $5K loss'
    }
  },
  {
    id: 'acc-medium-140',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Amortization of Intangibles',
    description: 'A $40,000 customer list is amortized over 5 years using straight-line. What is the annual non-cash expense added back to the cash flow statement?',
    answer: 8000,
    unit: '$',
    hint: 'Divide total intangible by useful life.',
    explanation: '$40,000 / 5 years = $8,000 amortization per year.',
    learnContent: {
      concept: 'Amortization is non-cash but reduces net income.',
      formula: 'Amortization = Total / Useful Life',
      example: '$25K over 5 years → $5K/year\n$60K over 3 years → $20K/year'
    }
  },
  {
    id: 'acc-medium-141',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Minority Interest Accounting',
    description: 'A subsidiary earns $200,000 in net income. The parent company owns 70%. What is the portion of income attributable to minority interest?',
    answer: 60000,
    unit: '$',
    hint: 'Calculate portion not owned.',
    explanation: '30% × $200,000 = $60,000 minority interest.',
    learnContent: {
      concept: 'Minority interest = % not owned × sub income.',
      formula: 'Minority = Sub income × (1 – % owned)',
      example: '75% owned, $100K income → $25K minority\n90% owned, $300K income → $30K minority'
    }
  },
  {
    id: 'acc-medium-142',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Equity Investment Accounting',
    description: 'A company owns 40% of a joint venture that reports $100,000 in earnings. What is the equity income recognized?',
    answer: 40000,
    unit: '$',
    hint: 'Use equity method for 20–50% stakes.',
    explanation: '40% of $100,000 = $40,000 equity income.',
    learnContent: {
      concept: 'Equity method accounts for ownership share.',
      formula: 'Equity Income = Affiliate NI × Ownership %',
      example: '30% of $60K → $18K\n25% of $80K → $20K'
    }
  },
  {
    id: 'acc-medium-143',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Deferred Tax Asset Recognition',
    description: 'A company reports a $20,000 NOL and has a tax rate of 25%. What is the deferred tax asset?',
    answer: 5000,
    unit: '$',
    hint: 'Multiply NOL by tax rate.',
    explanation: '$20,000 × 25% = $5,000 DTA.',
    learnContent: {
      concept: 'DTA reflects future tax savings.',
      formula: 'DTA = NOL × Tax Rate',
      example: '$10K NOL at 30% → $3K DTA\n$50K NOL at 20% → $10K DTA'
    }
  },
  {
    id: 'acc-medium-144',
    track: 'accounting',
    difficulty: 'medium',
    title: 'DTL from Depreciation Timing',
    description: 'A company uses accelerated tax depreciation of $35,000 and book depreciation of $20,000. Tax rate is 30%. What is the DTL?',
    answer: 4500,
    unit: '$',
    hint: 'Difference × tax rate.',
    explanation: '($35K – $20K) × 30% = $4,500 DTL',
    learnContent: {
      concept: 'DTL results from temporary timing differences.',
      formula: 'DTL = (Tax Dep – Book Dep) × Tax Rate',
      example: '$15K difference, 25% → $3,750 DTL\n$5K diff, 20% → $1K DTL'
    }
  },
  {
    id: 'acc-medium-145',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Purchase Accounting Adjustment',
    description: 'A company acquires another for $2.5M. The book value is $1.9M and identified intangibles are $300K. What is the goodwill?',
    answer: 300000,
    unit: '$',
    hint: 'Goodwill = Price – Net assets acquired',
    explanation: '$2.5M – ($1.9M + $300K) = $300K',
    learnContent: {
      concept: 'Goodwill represents premium over fair value.',
      formula: 'Goodwill = Purchase Price – (Book Value + Intangibles)',
      example: 'Paid $3M, BV $2.6M, Intangibles $200K → $200K goodwill\nPaid $1.5M, net assets $1.5M → $0 goodwill'
    }
  },
  {
    id: 'acc-medium-146',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Non-Controlling Interest on Balance Sheet',
    description: 'A company owns 85% of a subsidiary with $800,000 in equity. What is the NCI shown on the balance sheet?',
    answer: 120000,
    unit: '$',
    hint: 'Multiply equity by % minority.',
    explanation: '15% × $800K = $120K NCI',
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
    description: `HavenSteel – Asset Allocation from Acquisition

HavenSteel acquired Keystone Metals for $800,000.

The fair value of net assets acquired was $600,000, consisting of:

Cash: $50,000

Inventory: $150,000

Intangibles: $100,000

The remaining portion was allocated to PP&E

The tax basis of PP&E was $200,000, and the tax rate is 25%.

📊 Financial Summary:

Purchase Price: $800,000

Fair Value of Net Assets: $600,000

Cash: $50,000

Inventory: $150,000

Intangibles: $100,000

Tax Basis of PP&E: $200,000

Tax Rate: 25%

What deferred tax liability is created from the basis difference in PP&E?`,
    answer: 25000,
    unit: '$',
    hint: 'You must first compute the fair value of PP&E.',
    explanation: `Total net assets = $600,000

Cash + Inventory + Intangibles = 50K + 150K + 100K = 300K

Therefore, PP&E fair value = 600K – 300K = 300K

Book Basis = 300K; Tax Basis = 200K → Step-up = 100K

DTL = 100K × 25% = 25,000`,
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
    description: `FerroNova – Working Capital and Depreciation Timing

FerroNova reported $100,000 in Net Income.

During the year:

Accounts Receivable increased by $40,000 due to delayed customer payments

Inventory decreased by $25,000 as the company ran down safety stock

Prepaid expenses increased by $30,000

Accounts Payable decreased by $10,000

Accrued expenses increased by $15,000

📊 Financial Summary:

Net Income: $100,000

AR ↑ $40,000

Inventory ↓ $25,000

Prepaid ↑ $30,000

A/P ↓ $10,000

Accrued ↑ $15,000

What is cash flow from operations?`,
    answer: 60000,
    unit: '$',
    hint: 'Think about which WC changes are sources vs. uses of cash.',
    explanation: `Start from NI = 100K

AR ↑ = –40K

Inventory ↓ = +25K

Prepaid ↑ = –30K

A/P ↓ = –10K

Accrued ↑ = +15K

CFO = 100 – 40 + 25 – 30 – 10 + 15 = 60,000`,
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
    description: `Strathmore – Lease Transition Effects

Strathmore previously had a long-term lease treated as operating, with annual rent payments of $80,000.

Due to ASC 842, the lease was reclassified as a finance lease, and the company recorded:

Depreciation expense of $60,000

Interest expense of $20,000

Assume the company's Net Income for the year was $100,000.

📊 Financial Summary:

Rent Expense (prior method): $80,000

Depreciation: $60,000

Interest Expense: $20,000

Net Income: $100,000

What is the cash flow from operations after lease reclassification?`,
    answer: 160000,
    unit: '$',
    hint: 'Interest is already included in Net Income. Add back depreciation.',
    explanation: `Start with Net Income = 100K

Depreciation (non-cash) = +60K

Interest is already included in Net Income

CFO = 100 + 60 = 160,000`,
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
    description: `Rexa Systems – Non-Cash Charges and Adjustments

Rexa reported $75,000 in Net Income.

During the year, it incurred:

A non-cash impairment charge of $30,000

Restructuring charges of $20,000, of which $15,000 was paid in cash

A gain on sale of equipment of $10,000

📊 Financial Summary:

Net Income: $75,000

Impairment: $30,000

Restructuring: $20,000 (15K cash)

Gain on Sale: $10,000

What is cash flow from operations?`,
    answer: 120000,
    unit: '$',
    hint: 'Add back non-cash charges, subtract gain on sale.',
    explanation: `NI = 75K

Impairment = +30K (non-cash)

Restructuring = 5K add-back (20K – 15K paid)

Gain on sale = –10K

CFO = 75 + 30 + 5 – 10 = 120,000`,
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
    description: `Graviton Corp – Operating vs. Non-Cash Flow Impacts

Graviton paid $200,000 upfront for inventory.

Only $150,000 of it was sold and recorded in COGS.

Separately, Graviton recorded a $10,000 FX loss from revaluing a foreign subsidiary.

Net Income was $90,000.

📊 Financial Summary:

Net Income: $90,000

Inventory Paid: $200,000

Inventory Used (COGS): $150,000

FX Loss: $10,000

What is cash flow from operations?`,
    answer: 50000,
    unit: '$',
    hint: 'Unutilized inventory increases working capital. FX loss is non-cash.',
    explanation: `Inventory increase = 200K – 150K = 50K use of cash

FX loss = +10K (non-cash add-back)

CFO = 90 - 50 + 10 = 50,000`,
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
    description: `NovaLend – WC and Accrual Reversal

At the start of the year, NovaLend had $50,000 in accrued bonuses from the prior year.

During the year:

It paid out the full $50,000

It also accrued a new $70,000 for year-end bonuses

Net Income was $90,000

📊 Financial Summary:

Beginning Accrual: $50,000

Accrual Paid: $50,000

New Accrual: $70,000

Net Income: $90,000

What is NovaLend's cash flow from operations?`,
    answer: 160000,
    unit: '$',
    hint: 'Beginning accrual paid → no impact. New accrual unpaid → CFO increase.',
    explanation: `Payment of prior year bonus = no CFO effect

New accrual (not paid) = +70K

CFO = 90 + 70 = 160,000`,
    learnContent: {
      concept: 'Accruals paid = no impact (already expensed). New unpaid accruals = source of cash. Cash flow ignores timing of expense recognition vs. payment.',
      formula: 'CFO = NI + Increase in Accrued Liabilities',
      example: '💼 Paystack NI = 60K, new accrual ↑ 20K → CFO = 80K\n🧮 Ledgerly NI = 100K, paid old accrual = 30K, new = 40K → CFO = 140K\n🏦 Fundora NI = 75K, accrual ↑ 25K → CFO = 100K'
    }
  }
];