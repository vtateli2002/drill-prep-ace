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
    explanation: 'Net Income = $100,000 - $40,000 - $25,000 - $5,000 - $6,000 = $24,000',
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
    explanation: 'Monthly expense = $12,000 ÷ 12 = $1,000. From March 1 to June 30 = 4 months used. Prepaid = $12,000 - (4 × $1,000) = $8,000',
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
    explanation: 'Change in WC = $3,000 + $2,000 - $1,500 = $3,500',
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
    explanation: 'When goods are received on credit, the full value ($9,000) is added to Accounts Payable until payment is made.',
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
    explanation: 'Avg Inventory = ($40,000 + $20,000) ÷ 2 = $30,000. Inventory Turnover = $120,000 ÷ $30,000 = 4.0x',
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
    explanation: 'Avg Assets = ($60,000 + $40,000) ÷ 2 = $50,000. Asset Turnover = $180,000 ÷ $50,000 = 3.6x',
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
    explanation: 'Revenue = 500 × $120 = $60,000. COGS = 500 × $75 = $37,500. Gross Margin % = ($60,000 - $37,500) ÷ $60,000 × 100 = 37.5%',
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
    explanation: 'Total Liabilities = $10,000 + $50,000 = $60,000. Total Equity = $20,000 + $10,000 = $30,000. D/E = $60,000 ÷ $30,000 = 2.0x',
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
    explanation: 'Current Assets = $5,000 + $10,000 + $15,000 = $30,000. Current Liabilities = $8,000 + $12,000 = $20,000. Current Ratio = $30,000 ÷ $20,000 = 1.5x',
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
    explanation: 'Operating Income = $250,000 - $100,000 - $75,000 = $75,000. Operating Margin = $75,000 ÷ $250,000 × 100 = 30%',
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
    explanation: 'Ending Inventory = $5,000 + $12,000 - $13,500 = $3,500',
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
    explanation: 'Total Assets = $10,000 + $20,000 + $70,000 = $100,000. Total Liabilities = $15,000 + $30,000 + $5,000 = $50,000. Equity = $100,000 - $50,000 = $50,000',
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
    explanation: 'Operating Income = $18,000 - $7,000 - $4,000 - $2,000 = $5,000',
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
    explanation: 'Net Income Impact = -$2,000 × (1 - 0.30) = -$2,000 × 0.70 = -$1,400',
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
    explanation: 'Change in WC = $3,000 + $2,000 - $1,500 = $3,500',
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
    id: 'acc-easy-1',
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

  // ACCOUNTING - Hard - BETA QUESTIONS
  {
    id: 'acc-hard-1',
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
    explanation: 'Current Assets = $12K + $18K + $2K = $32K. Current Liabilities = $15K + $5K = $20K. Net Working Capital = $32K - $20K = $12K',
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
    explanation: 'Current liabilities include Accounts Payable, Accrued Expenses, and Short-Term Debt. Long-Term Debt and Deferred Tax Liabilities are excluded because they are not due in the current year. $12,000 + $8,000 + $10,000 = $30,000',
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
    id: 'acc-medium-67',
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
    id: 'acc-medium-68',
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
    id: 'acc-medium-69',
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
    id: 'acc-medium-70',
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
    id: 'acc-medium-71',
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
    id: 'acc-medium-72',
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
  }
];