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
  }
];