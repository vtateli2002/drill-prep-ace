import { Question, Track, Difficulty } from '@/types/drill';

export const QUESTIONS: Question[] = [
  // ACCOUNTING - Easy - NEW QUESTIONS
  {
    id: 'acc-easy-new-1',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Accounts Receivable Recognition',
    description: 'Your client pays you $1,000 today for a service you will perform next month. You\'re using accrual accounting.\n\nHow much revenue do you record this month?',
    answer: 0,
    unit: '$',
    hint: 'Under accrual accounting, revenue is only recognized when earned, not when cash is received',
    explanation: 'Since the service will be performed next month, no revenue is recognized this month. The $1,000 should be recorded as Deferred Revenue (a liability) until the service is performed.',
    learnContent: {
      concept: 'Accounts Receivable (A/R) represents money owed to a business for services rendered or products delivered. Under accrual accounting, revenue is only recognized when earned, not when cash is received. This avoids overstating performance in the wrong time period.',
      formula: 'Recognize Revenue: When service is performed\n\nIf payment is received early → record as Deferred Revenue (Liability)\nIf service is done but unpaid → record as Accounts Receivable (Asset)\nIf service is done and paid → record as Cash + Revenue',
      example: 'You receive $500 in March for a service in April → Record as Deferred Revenue in March\nYou invoice $750 after delivering goods → Record as Revenue + A/R\nYou collect cash after providing consulting → Record as Cash + Revenue'
    }
  },
  {
    id: 'acc-easy-new-2',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Gross Profit Calculation',
    description: 'A company has the following data this quarter:\n- Revenue = $50,000\n- Cost of Goods Sold (COGS) = $30,000\n\nWhat is Gross Profit?',
    answer: 20000,
    unit: '$',
    hint: 'Gross Profit = Revenue - Cost of Goods Sold',
    explanation: 'Gross Profit = $50,000 - $30,000 = $20,000',
    learnContent: {
      concept: 'Gross Profit shows how much money a company keeps after covering its direct production costs. It\'s a key profitability measure and helps gauge efficiency in producing and selling goods.',
      formula: 'Gross Profit = Revenue − Cost of Goods Sold (COGS)',
      example: 'Revenue = $80,000, COGS = $60,000 → Gross Profit = $20,000\nRevenue = $120,000, COGS = $90,000 → Gross Profit = $30,000\nRevenue = $55,000, COGS = $20,000 → Gross Profit = $35,000'
    }
  },
  {
    id: 'acc-easy-new-3',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Current Ratio',
    description: 'A business has:\n- Current Assets = $45,000\n- Current Liabilities = $15,000\n\nWhat is the Current Ratio?',
    answer: 3,
    unit: 'x',
    hint: 'Current Ratio = Current Assets ÷ Current Liabilities',
    explanation: 'Current Ratio = $45,000 ÷ $15,000 = 3.0x',
    learnContent: {
      concept: 'The Current Ratio tells us how well a company can pay off its short-term obligations using its short-term assets. A ratio over 1 means the company can meet its short-term liabilities. A high ratio can indicate strong liquidity, but too high might mean inefficient use of assets.',
      formula: 'Current Ratio = Current Assets ÷ Current Liabilities',
      example: 'Assets = $80,000, Liabilities = $40,000 → Ratio = 2.0x\nAssets = $25,000, Liabilities = $50,000 → Ratio = 0.5x\nAssets = $100,000, Liabilities = $20,000 → Ratio = 5.0x'
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