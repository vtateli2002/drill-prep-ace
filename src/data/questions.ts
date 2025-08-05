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
  }
];