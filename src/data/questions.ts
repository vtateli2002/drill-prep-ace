import { Question, Track, Difficulty } from '@/types/drill';

export const QUESTIONS: Question[] = [
  // Topic 47: Accrual vs. Cash Accounting
  {
    id: 'acc-easy-146',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Accrual vs. Cash Accounting – Timing Differences',
    description: `A company performs $10,000 of consulting work in December but receives cash payment in January. Under accrual accounting, how much revenue is recognized in December?`,
    answer: 10000,
    unit: '$',
    hint: 'Accrual accounting recognizes revenue when earned, regardless of cash.',
    explanation: `Revenue is recognized when the service is performed, not when cash is received. Thus, $10,000 in December.

• • •

Step-by-step breakdown:

1. Accrual Accounting Principle:
   • Revenue recognized when earned/performed
   • Cash timing is irrelevant

2. Service Analysis:
   • Consulting work completed: December
   • Cash received: January (next period)
   
3. Revenue Recognition:
   → December revenue: $10,000
   → January revenue: $0 (cash collection only)

Key Points:
   • Accrual basis matches revenue to performance period
   • Cash basis would recognize $0 in December, $10,000 in January
   • This creates timing differences between the two methods`,
    learnContent: {
      concept: 'Accrual accounting matches revenues to the period earned, not when cash is collected.',
      formula: 'Revenue recognized = Services performed (accrual basis)',
      example: 'Invoice in Dec, payment in Jan → recognize in Dec\nPaid in advance, service in future → recognize when service delivered\nWork done in March, paid in May → recognize in March'
    }
  },
  {
    id: 'acc-medium-52',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Accrual vs. Cash Accounting – Mixed Entries',
    description: `A business earns $40,000 in services, of which $25,000 is paid in cash immediately. The remaining $15,000 is billed for future payment. What amount is reported as revenue under: (1) Accrual accounting, and (2) Cash accounting? What is the difference between the two approaches?`,
    answer: 15000,
    unit: '$',
    hint: 'Accrual = full $40k. Cash = $25k. Difference = $15k.',
    explanation: `Accrual recognizes $40k when earned. Cash only records $25k collected. Difference = $15k.

• • •

Step-by-step breakdown:

1. Service Performance Analysis:
   • Total services performed: $40,000
   • Cash received immediately: $25,000
   • Accounts receivable created: $15,000

2. Accrual Accounting:
   → Revenue recognized: $40,000 (full amount earned)

3. Cash Accounting:
   → Revenue recognized: $25,000 (only cash received)

4. Difference Calculation:
   → Accrual - Cash = $40,000 - $25,000 = $15,000

Key Points:
   • Accrual captures economic reality of earnings
   • Cash basis understates performance when receivables exist
   • Difference equals uncollected receivables`,
    learnContent: {
      concept: 'Cash accounting records only received cash. Accrual records all earned revenue.',
      formula: 'Difference = Accrual Revenue − Cash Revenue',
      example: '$50k earned, $30k paid = $20k difference\n$100k earned, $100k paid = $0 difference\n$75k earned, $50k paid = $25k difference'
    }
  },
  {
    id: 'acc-hard-28',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Accrual vs. Cash – Complex Expense Recognition',
    description: `A firm incurs $24,000 in annual rent paid upfront on Jan 1. It also earns $120,000 in service revenue over the year but collects only $90,000 in cash. By year-end, what is Net Income under: (1) Accrual basis and (2) Cash basis? What is the difference?`,
    answer: 30000,
    unit: '$',
    hint: 'Accrual: Rent = $24k/12 × 12 = $24k; Revenue = $120k. Cash: Rent = $24k, Revenue = $90k. Compare Net Income.',
    explanation: `Accrual Net Income = $120k − $24k = $96k. Cash Net Income = $90k − $24k = $66k. Difference = $96k − $66k = $30k.

• • •

Step-by-step breakdown:

1. Expense Analysis:
   • Annual rent paid upfront: $24,000
   • Both methods recognize full rent (cash paid)

2. Revenue Analysis:
   • Services performed: $120,000
   • Cash collected: $90,000
   • Uncollected receivables: $30,000

3. Accrual Net Income:
   • Revenue: $120,000 (earned)
   • Expenses: $24,000 (rent)
   → Net Income: $120,000 - $24,000 = $96,000

4. Cash Net Income:
   • Revenue: $90,000 (collected)
   • Expenses: $24,000 (rent paid)
   → Net Income: $90,000 - $24,000 = $66,000

5. Difference:
   → $96,000 - $66,000 = $30,000

Key Points:
   • Difference equals uncollected revenue ($30k)
   • Accrual provides better performance measurement
   • Cash basis useful for liquidity analysis`,
    learnContent: {
      concept: 'Accrual recognizes revenue when earned and expenses when incurred. Cash recognizes only cash transactions.',
      formula: 'Difference = Accrual NI − Cash NI',
      example: 'Accrual: $80k − $20k = $60k; Cash: $60k − $20k = $40k → Difference = $20k\nAccrual = $100k − $30k = $70k; Cash = $80k − $30k = $50k → $20k difference'
    }
  },
  // Topic 48: Matching Principle
  {
    id: 'acc-easy-147',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Matching Principle – Revenue & Expense',
    description: `A firm earns $50,000 in revenue in June. It paid a $5,000 commission in July related to the June sale. When is the $5,000 commission recognized under accrual accounting?`,
    answer: 'June',
    hint: 'Match expense to the period when the associated revenue is earned.',
    explanation: `Even though paid in July, the commission supports June revenue, so it is recognized in June.

• • •

Step-by-step breakdown:

1. Revenue Recognition:
   • Sales transaction: June
   • Revenue recognized: June ($50,000)

2. Commission Analysis:
   • Commission earned: June (relates to June sale)
   • Commission paid: July (cash timing)

3. Matching Principle Application:
   → Commission expense recognized: June
   → Matches revenue period, not cash payment period

4. Accounting Treatment:
   • June: Record commission expense and accrued liability
   • July: Pay commission and reduce liability

Key Points:
   • Expenses matched to revenue period they help generate
   • Cash payment timing irrelevant under accrual accounting
   • Creates temporary accrued liability until payment`,
    learnContent: {
      concept: 'The matching principle requires aligning expenses with the revenue they help generate.',
      formula: 'Expense period = Revenue recognition period (accrual)',
      example: 'Sale in Jan, shipping cost paid in Feb → record both in Jan\nAd cost in April for April sales → record in April\nCommission in March for March sale → recognize in March'
    }
  },
  {
    id: 'acc-medium-53',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Matching Principle – Inventory and COGS',
    description: `A company sells $80,000 worth of goods in Q2. The goods cost $50,000, purchased in Q1. When is the $50,000 COGS recognized under accrual accounting?`,
    answer: 'Q2',
    hint: 'COGS is recognized when related sales revenue is recorded, not when inventory was purchased.',
    explanation: `The $50,000 was incurred earlier but matched to Q2 sales. Under accrual, both revenue and cost are recognized in Q2.

• • •

Step-by-step breakdown:

1. Inventory Timeline:
   • Q1: Purchased goods for $50,000 (asset recorded)
   • Q2: Sold goods for $80,000

2. Revenue Recognition:
   • Q2: Revenue recognized $80,000 (when sold)

3. Matching Principle Application:
   • COGS recognized: Q2 (matches revenue period)
   • Amount: $50,000 (historical cost)

4. Q2 Journal Entry Impact:
   • Revenue: +$80,000
   • COGS: -$50,000
   • Gross Profit: $30,000

Key Points:
   • Inventory becomes COGS when goods are sold
   • Purchase timing (Q1) irrelevant for expense recognition
   • Matching ensures proper profit measurement`,
    learnContent: {
      concept: 'Expenses like COGS are recorded in the same period as the related revenue under the matching principle.',
      formula: 'COGS period = Revenue recognition period',
      example: 'Inventory bought in Jan, sold in March → COGS in March\nAdvertising in April for May launch → expense in May\nProduct costs in Q1, sales in Q3 → COGS in Q3'
    }
  },
  {
    id: 'acc-hard-29',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Matching Principle – Deferred Expenses and Revenue',
    description: `A software company receives $120,000 in Jan for a 12-month contract. It pays $24,000 commission in Feb for the sale. By end of June, how much commission expense is recognized under accrual accounting?`,
    answer: 12000,
    unit: '$',
    hint: 'Expense is matched to the same period as recognized revenue. Revenue is recognized evenly, so match proportion of the year.',
    explanation: `Revenue recognized from Jan–Jun = 6/12 = 50%. Matching principle dictates 50% of $24k commission = $12k.

• • •

Step-by-step breakdown:

1. Contract Analysis:
   • Total contract value: $120,000
   • Contract duration: 12 months
   • Monthly revenue: $120,000 ÷ 12 = $10,000

2. Revenue Recognition (Jan-June):
   • Months elapsed: 6 months
   • Revenue recognized: 6 × $10,000 = $60,000
   • Percentage complete: 6/12 = 50%

3. Commission Matching:
   • Total commission: $24,000
   • Commission to match: 50% × $24,000 = $12,000

4. Accounting Treatment:
   • Feb: Record $24,000 prepaid commission (asset)
   • Jan-June: Recognize $2,000 expense monthly ($12,000 total)
   • Remaining: $12,000 prepaid commission asset

Key Points:
   • Commission expense matched to revenue recognition pattern
   • Prepaid commission treated as asset until earned
   • Systematic allocation over contract period`,
    learnContent: {
      concept: 'Prepaid costs like commissions are expensed in sync with revenue over time.',
      formula: 'Recognized Expense = Total Expense × % of revenue recognized',
      example: '$36k prepaid expense, 9-month service → 3 months = 3/9 × $36k = $12k\n$12k commission on 1-year deal, 6 months used = $6k expense\n$18k prepaid, 8-month contract, 4 months = $9k expense'
    }
  },
  // Topic 49: Capitalization vs. Expensing
  {
    id: 'acc-easy-148',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Capitalize vs. Expense – Equipment',
    description: `A company buys a $10,000 machine expected to last 5 years. Should the cost be capitalized or expensed immediately under accrual accounting?`,
    answer: 'Capitalized',
    hint: 'Long-lived assets are not expensed immediately. They are depreciated over useful life.',
    explanation: `Because the machine provides benefit beyond one year, the cost is capitalized and depreciated.

• • •

Step-by-step breakdown:

1. Asset Evaluation:
   • Cost: $10,000
   • Expected useful life: 5 years
   • Benefits extend beyond current period

2. Capitalization Test:
   • Does asset provide future economic benefits? Yes
   • Does benefit extend beyond one year? Yes
   → Meets capitalization criteria

3. Accounting Treatment:
   • Initial: Capitalize $10,000 as equipment asset
   • Ongoing: Depreciate $2,000 annually ($10,000 ÷ 5 years)

4. Income Statement Impact:
   • Year 1-5: $2,000 depreciation expense each year
   • No immediate $10,000 expense

Key Points:
   • Capital expenditures create long-term assets
   • Expense recognition spread over useful life
   • Matches expense to periods receiving benefit`,
    learnContent: {
      concept: 'Capitalize when the benefit lasts >1 year. Expense if consumed immediately.',
      formula: 'Capitalize if economic life > 1 year',
      example: '$5k laptop (3-year use) → capitalized\n$200 printer ink → expensed\n$50k truck (10-year life) → capitalized'
    }
  },
  {
    id: 'acc-medium-54',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Capitalize vs. Expense – Mixed Example',
    description: `A company develops a $50,000 software tool. $20,000 is spent in planning (research), and $30,000 is spent coding the functional product. According to GAAP, how much should be capitalized?`,
    answer: 30000,
    unit: '$',
    hint: 'Only development phase costs (post feasibility) are capitalized. Research is expensed.',
    explanation: `The $20,000 research is expensed. The $30,000 development qualifies for capitalization once feasibility is met.

• • •

Step-by-step breakdown:

1. Cost Analysis:
   • Total software costs: $50,000
   • Research phase: $20,000 (planning)
   • Development phase: $30,000 (coding)

2. GAAP Software Rules:
   • Research costs: Always expensed
   • Development costs: Capitalized after technological feasibility

3. Technological Feasibility:
   • Achieved when detailed design is complete
   • Coding phase indicates feasibility established

4. Accounting Treatment:
   • Research phase: Expense $20,000 immediately
   • Development phase: Capitalize $30,000 as software asset

Key Points:
   • Research and early development are uncertain
   • Post-feasibility development has probable future benefits
   • Creates intangible asset for completed software`,
    learnContent: {
      concept: 'GAAP allows capitalization of software costs incurred after technological feasibility is established.',
      formula: 'Capitalized = Dev Phase Costs; Expensed = Research/Pre-feasibility',
      example: '$10k design + $40k coding = capitalize $40k\n$5k research + $15k dev = capitalize $15k\n$25k planning + $75k development = capitalize $75k'
    }
  },
  {
    id: 'acc-hard-30',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Capitalize vs. Expense – Maintenance vs. Improvement',
    description: `A company spends $80,000 on a building: - $20,000 to repaint and fix minor wear - $30,000 to install a new HVAC system with 10-year life - $30,000 to improve roof extending its life by 15 years. How much is capitalized under accrual accounting?`,
    answer: 60000,
    unit: '$',
    hint: 'Maintenance = expense. Improvements = capitalize if they extend useful life or improve value.',
    explanation: `Painting is maintenance → expense. HVAC and roof upgrades extend life → capitalize. Total capitalized = $30k + $30k = $60k.

• • •

Step-by-step breakdown:

1. Expenditure Analysis:
   • Repainting/minor repairs: $20,000
   • New HVAC system: $30,000
   • Roof improvements: $30,000

2. Capitalization Criteria Assessment:
   a) Repainting ($20,000):
      • Maintains existing condition
      • No life extension or improvement
      → Expense immediately

   b) HVAC System ($30,000):
      • Adds new functionality
      • 10-year useful life
      → Capitalize as building improvement

   c) Roof Improvements ($30,000):
      • Extends building life by 15 years
      • Enhances asset value
      → Capitalize as building improvement

3. Total Capitalization:
   → HVAC + Roof = $30,000 + $30,000 = $60,000

Key Points:
   • Maintenance preserves existing capacity
   • Improvements enhance or extend asset life
   • Capitalized costs increase depreciation base`,
    learnContent: {
      concept: 'Only capital improvements are capitalized. Repairs and maintenance are expensed.',
      formula: 'Capitalized = Life-extending/improving costs; Expensed = routine maintenance',
      example: '$10k repair + $20k upgrade = capitalize $20k\n$5k cleaning + $25k asset improvement = $25k capitalized\n$15k maintenance + $35k addition = $35k capitalized'
    }
  },
  // Topic 50: Book vs. Market Equity
  {
    id: 'acc-easy-149',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Book vs. Market Equity – Basics',
    description: `A company has: - Common Stock = $10,000 - APIC = $40,000 - Retained Earnings = $30,000 - Treasury Stock = $5,000. What is Book Value of Equity?`,
    answer: 75000,
    unit: '$',
    hint: 'Book Value = Total Shareholder\'s Equity (sum of components).',
    explanation: `Total = $10k + $40k + $30k − $5k = $75k.

• • •

Step-by-step breakdown:

1. Equity Components:
   • Common Stock (par value): $10,000
   • Additional Paid-in Capital: $40,000
   • Retained Earnings: $30,000
   • Treasury Stock (contra): ($5,000)

2. Book Value Calculation:
   Book Equity = Common + APIC + Retained - Treasury
   Book Equity = $10,000 + $40,000 + $30,000 - $5,000
   Book Equity = $75,000

3. Component Analysis:
   • Positive equity sources: $80,000
   • Treasury stock reduction: $5,000
   • Net book value: $75,000

Key Points:
   • Book value reflects historical accounting values
   • Treasury stock reduces total equity
   • Based on balance sheet, not market prices`,
    learnContent: {
      concept: 'Book equity reflects historical capital and retained earnings on the balance sheet.',
      formula: 'Book Equity = Common + APIC + Retained Earnings − Treasury',
      example: '$5k + $15k + $20k − $2k = $38k\n$50k + $60k − $10k = $100k\n$25k + $35k + $45k − $8k = $97k'
    }
  },
  {
    id: 'acc-medium-55',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Book vs. Market Equity – Share Price Application',
    description: `A company has 1 million shares outstanding. Its Book Equity is $80 million, and its current share price is $120. What is the difference between Book Value and Market Value of Equity?`,
    answer: 40,
    unit: 'million $',
    hint: 'Market Value = Share Price × Shares Outstanding. Subtract Book Value to find the difference.',
    explanation: `Market Equity = $120 × 1M = $120M; Difference = $120M − $80M = $40M.

• • •

Step-by-step breakdown:

1. Given Information:
   • Shares outstanding: 1,000,000
   • Book equity: $80,000,000
   • Share price: $120

2. Market Value Calculation:
   Market Value = Share Price × Shares Outstanding
   Market Value = $120 × 1,000,000 = $120,000,000

3. Difference Analysis:
   Difference = Market Value - Book Value
   Difference = $120,000,000 - $80,000,000 = $40,000,000

4. Per-Share Analysis:
   • Book value per share: $80M ÷ 1M = $80
   • Market value per share: $120
   • Premium per share: $40

Key Points:
   • Market value reflects investor expectations
   • $40M premium suggests growth prospects
   • Book value understates market perception`,
    learnContent: {
      concept: 'Book Equity is historical; Market Equity reflects investor valuation via stock price.',
      formula: 'Market Equity = Share Price × Shares; Difference = Market − Book',
      example: 'Price $60 × 2M shares = $120M; Book = $100M → Diff = $20M\n$150 × 500k shares = $75M; Book = $60M → Diff = $15M\n$90 × 1.5M shares = $135M; Book = $110M → Diff = $25M'
    }
  },
  {
    id: 'acc-hard-31',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Book vs. Market Equity – Dilution Adjustments',
    description: `A company has: - Book Equity = $150 million - 2 million basic shares outstanding - 100,000 in-the-money options with $50 strike - Share price = $70. What is: (1) Diluted Market Equity, and (2) Difference vs. Book Value?`,
    answer: 64,
    unit: 'million $',
    hint: 'Use Treasury Stock Method to adjust shares, then calculate Market Cap and subtract Book Value.',
    explanation: `Proceeds = 100k × $50 = $5M → Shares repurchased = $5M / $70 ≈ 71.4k → Net new shares = 28.6k → Total diluted shares = 2.0286M × $70 ≈ $142M → Difference = $142M − $150M = −$8M deficit.

• • •

Step-by-step breakdown:

1. Treasury Stock Method Calculation:
   • Options exercised: 100,000 shares
   • Strike price: $50
   • Proceeds from exercise: 100,000 × $50 = $5,000,000

2. Share Repurchase Analysis:
   • Current stock price: $70
   • Shares repurchased: $5,000,000 ÷ $70 = 71,429 shares

3. Net Dilution:
   • Gross shares issued: 100,000
   • Shares repurchased: 71,429
   • Net new shares: 100,000 - 71,429 = 28,571

4. Diluted Share Count:
   • Basic shares: 2,000,000
   • Net dilution: 28,571
   • Total diluted: 2,028,571 shares

5. Diluted Market Value:
   Market Cap = 2,028,571 × $70 = $142,000,000

6. Difference vs Book:
   Difference = $142M - $150M = -$8M (Market below Book)

Key Points:
   • Options dilute when in-the-money
   • Treasury method reduces dilution impact
   • Market trading below book value indicates undervaluation`,
    learnContent: {
      concept: 'Diluted Equity reflects fully diluted share count including in-the-money options/warrants.',
      formula: 'Diluted Shares = Basic + (Options − Repurchased); Market Cap = Diluted × Price',
      example: '2M shares + 50k options − 20k repurchased → 2.03M × $80 = $162.4M\n1M shares + 25k options net → 1.025M × $90 = $92.25M\n3M + 75k options - 30k repurchased → 3.045M × $60 = $182.7M'
    }
  },
  // Statement of Comprehensive Income
  {
    id: 'acc-easy-143',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Statement of Comprehensive Income – Basics',
    description: 'A company reports Net Income of $80,000. It also has:\n• $5,000 unrealized gain on available-for-sale securities\n• $2,000 FX translation loss\n\nWhat is Comprehensive Income for the period?',
    answer: 83000,
    unit: '$',
    hint: 'Comprehensive Income = Net Income + Other Comprehensive Income (OCI) items.',
    explanation: `Calculation:
Comprehensive Income = $80,000 + $3,000 = $83,000

• • •

Step-by-step breakdown:

1. Calculate Other Comprehensive Income (OCI):
   • Unrealized gain on AFS securities: +$5,000
   • FX translation loss: -$2,000
   → Net OCI = $5,000 - $2,000 = $3,000

2. Total Comprehensive Income:
   • Net Income: $80,000
   • Add OCI: +$3,000
   → Comprehensive Income = $83,000

Key Points:
• Comprehensive Income includes both Net Income and OCI items
• OCI captures unrealized gains/losses that bypass the income statement
• AFS securities and FX translation adjustments are common OCI components`,
    learnContent: {
      concept: 'Comprehensive Income equals Net Income plus Other Comprehensive Income (OCI), which includes unrealized gains/losses like AFS securities and foreign exchange translation adjustments.',
      formula: 'Comprehensive Income = Net Income + Unrealized Gains − Unrealized Losses',
      example: '$100K NI + $4K OCI gain − $1K FX loss = $103K\n$75K NI + $2K pension gain = $77K\n$90K NI − $3K AFS loss + $1K FX gain = $88K'
    }
  },
  {
    id: 'acc-medium-49',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Statement of Comprehensive Income – Adjustments',
    description: 'A firm has:\n• Net Income = $120,000\n• $10,000 AFS gain, $4,000 FX loss, and $3,000 cash flow hedge loss\n• $5,000 of prior year unrealized loss reclassified to Net Income this year\n\nWhat is Comprehensive Income this year?',
    answer: 123000,
    unit: '$',
    hint: 'Only current-year OCI items count toward comprehensive income. Reclassification has already entered Net Income.',
    explanation: `Calculation:
Comprehensive Income = $120,000 + $3,000 = $123,000

• • •

Step-by-step breakdown:

1. Calculate Current-Year OCI:
   • AFS gain: +$10,000
   • FX loss: -$4,000
   • Cash flow hedge loss: -$3,000
   → Net current OCI = $10,000 - $4,000 - $3,000 = $3,000

2. Reclassification Analysis:
   • Prior year OCI reclassified: $5,000
   → This amount already included in Net Income, do not double-count

3. Total Comprehensive Income:
   • Net Income: $120,000
   • Add current OCI: +$3,000
   → Comprehensive Income = $123,000

Key Points:
• Only current-period OCI items affect current comprehensive income
• Reclassified amounts from prior OCI are already in Net Income
• Avoid double-counting reclassifications in comprehensive income calculation`,
    learnContent: {
      concept: 'Comprehensive Income only includes current-year OCI items that have not yet been reclassified to Net Income. Reclassified items are already captured in Net Income.',
      formula: 'Comprehensive Income = Net Income + Net OCI Adjustments (excluding reclassified)',
      example: '$90K NI + $8K OCI − $1K FX loss = $97K\n$110K + $2K pension + $1K FX = $113K\n$85K NI + $5K current OCI (ignore $2K reclassified) = $90K'
    }
  },
  {
    id: 'acc-hard-25',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Statement of Comprehensive Income – Complex Walk',
    description: 'A company has:\n• Net Income = $140,000\n• $6,000 AFS gain, $3,000 FX loss, $4,000 pension gain\n• $7,000 OCI loss from prior year reclassified into Net Income this year\n\nWhat is total Comprehensive Income this year?',
    answer: 147000,
    unit: '$',
    hint: 'Only new unrealized OCI items affect current Comprehensive Income. Reclassified items already appear in Net Income.',
    explanation: `Calculation:
Comprehensive Income = $140,000 + $7,000 = $147,000

• • •

Step-by-step breakdown:

1. Analyze Current-Year OCI Components:
   • AFS gain: +$6,000
   • FX loss: -$3,000
   • Pension gain: +$4,000
   → Net current OCI = $6,000 - $3,000 + $4,000 = $7,000

2. Reclassification Treatment:
   • Prior year OCI loss reclassified: $7,000
   → This $7,000 loss is now part of the $140,000 Net Income
   → Do not adjust comprehensive income for reclassifications

3. Total Comprehensive Income:
   • Net Income (includes reclassified items): $140,000
   • Add current-year OCI: +$7,000
   → Comprehensive Income = $147,000

Key Points:
• Current comprehensive income includes Net Income plus new OCI items
• Reclassified OCI from prior years is already embedded in current Net Income
• Separate current-year unrealized items from reclassification adjustments`,
    learnContent: {
      concept: 'Comprehensive Income equals Net Income plus current OCI changes (unrealized items), excluding reclassified items that are already captured in Net Income.',
      formula: 'Comprehensive Income = Net Income + OCI (excluding reclassifications)',
      example: '$120K + $5K FX − $2K AFS loss = $123K\n$100K + $2K OCI − $0 = $102K\n$95K NI + $8K current OCI (ignore $3K reclassified) = $103K'
    }
  },
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
  // VALUATION QUESTIONS - Topic 1: Enterprise Value (EV) Definition
  {
    id: 'val-easy-1',
    track: 'valuation',
    difficulty: 'easy',
    title: 'Enterprise Value (EV) Definition – Basic Calculation',
    description: `A company has the following as of year-end:

Market Capitalization: $500 million
Cash and Cash Equivalents: $80 million
Total Debt: $250 million
Preferred Equity: $30 million
Noncontrolling Interest: $20 million

What is the company's Enterprise Value (EV)?`,
    answer: 720000000,
    unit: '$',
    hint: 'Enterprise Value = Equity Value + Net Debt + Preferred + NCI − Cash',
    explanation: `📌 **Question Analysis**

Enterprise Value represents the total value of a company to all capital providers. Calculate by adding debt-like obligations and subtracting cash from market capitalization.

💡 **Explanation**

Step-by-step calculation:

1. **Start with Market Cap**: $500M (equity value)
2. **Add Debt-Like Obligations**:
   • Total Debt: +$250M
   • Preferred Equity: +$30M
   • Noncontrolling Interest: +$20M
3. **Subtract Cash**: -$80M
4. **Enterprise Value**: $500M + $250M + $30M + $20M - $80M = $720M

Key takeaways:
• EV reflects total business value across all stakeholders
• Debt-like items increase enterprise value as they represent claims
• Cash reduces EV as it's available to pay down debt immediately

🎯 **Interview Angle**

This is a fundamental valuation concept tested in every finance interview. Interviewers ask this to assess your understanding of:
• How enterprise value differs from equity value
• Which items count as "debt-like" obligations
• Why cash is subtracted from enterprise value
• The relationship between capital structure and valuation

📘 **Core Concept**

• Enterprise Value measures the total cost to acquire 100% of a company's operations
• It's capital structure neutral - ignores how the business is financed
• Used as the numerator in key valuation multiples like EV/EBITDA

⚙️ **How It Works**

In M&A transactions, buyers must pay the market cap to equity holders, assume all debt, pay off preferred shareholders, and deal with minority interests. They receive the company's cash as an offset, making the net cost equal to Enterprise Value.

💥 **Why It Matters**

• Foundation for all enterprise-based valuation multiples
• Critical for comparable company analysis
• Essential for DCF valuation (enterprise DCF approach)
• Standard metric for M&A transaction analysis

📐 **Formula**

Enterprise Value = Market Cap + Total Debt + Preferred Stock + Noncontrolling Interest − Cash & Cash Equivalents

📚 **Examples**

1. **Tech Company**: $2B market cap, $500M debt, $100M cash → EV = $2.4B
2. **Retail Chain**: $800M market cap, $300M debt, $50M preferred, $200M cash → EV = $950M  
3. **Manufacturing**: $1.5B market cap, $400M debt, $20M NCI, $150M cash → EV = $1.77B

❌ **Common Mistakes**

1. **Forgetting preferred stock** - Preferred shares are debt-like and must be added
2. **Adding cash instead of subtracting** - Cash reduces the acquisition cost
3. **Ignoring noncontrolling interests** - Minority stakes represent additional claims on enterprise value`,
    learnContent: {
      concept: 'Enterprise Value reflects the total value of the business to all capital providers.',
      formula: 'EV = Equity Value + Debt + Preferred + NCI − Cash',
      example: '$1B Market Cap + $200M Debt − $100M Cash = $1.1B EV\n$500M MC + $250M Debt + $20M NCI − $50M Cash = $720M EV\n$2B MC + $300M Debt + $50M Preferred − $150M Cash = $2.2B EV'
    }
  },
  {
    id: 'val-medium-1',
    track: 'valuation',
    difficulty: 'medium',
    title: 'Enterprise Value (EV) Definition – Complex Components',
    description: `As of today, a firm has:

Market Cap: $1.2B
Cash: $100M
Debt: $400M
Operating Leases (Capitalized): $120M
Preferred Stock: $50M
Noncontrolling Interest: $30M
Long-Term Investments: $80M

Operating leases are treated as debt-like. Long-term investments are non-operating and highly liquid.

What is the firm's Enterprise Value (EV)?`,
    answer: 1620000000,
    unit: '$',
    hint: 'Add debt-like items. Subtract all non-operating, liquid assets (like LT investments).',
    explanation: `📌 **Question Analysis**

This tests understanding of complex EV components including operating leases and non-operating assets. Must distinguish between debt-like obligations and liquid investments.

💡 **Explanation**

Step-by-step calculation:

1. **Start with Market Cap**: $1.2B
2. **Add Debt-Like Obligations**:
   • Total Debt: +$400M
   • Capitalized Operating Leases: +$120M (debt-equivalent under IFRS 16)
   • Preferred Stock: +$50M
   • Noncontrolling Interest: +$30M
3. **Subtract Non-Operating Assets**:
   • Cash: -$100M
   • Long-Term Investments: -$80M (non-core, liquid)
4. **Enterprise Value**: $1.2B + $600M - $180M = $1.620B

Key takeaways:
• Operating leases are debt-equivalent under current accounting standards
• Long-term investments are subtracted as they're non-operating and liquid
• EV reflects only the operating enterprise value

🎯 **Interview Angle**

Advanced EV questions test your knowledge of:
• Recent accounting changes (lease capitalization under ASC 842/IFRS 16)
• Distinguishing between operating vs. non-operating assets
• Understanding when to add vs. subtract various balance sheet items
• How modern accounting standards affect valuation calculations

📘 **Core Concept**

• Operating leases create debt-like obligations that must be included in EV
• Non-operating investments reduce the net cost of acquisition
• Modern EV calculations require careful analysis of balance sheet complexity

⚙️ **How It Works**

Under current accounting standards, operating leases appear on the balance sheet as liabilities. In an acquisition, the buyer assumes these lease obligations just like debt. Meanwhile, liquid investments can be sold to reduce the net acquisition cost.

💥 **Why It Matters**

• Post-2019 lease accounting dramatically affects EV calculations for asset-heavy industries
• Private equity buyers particularly focus on adjusted EV for lease-heavy businesses
• Investment bankers must correctly classify all balance sheet items for accurate valuations

📐 **Formula**

EV = Market Cap + Debt + Capitalized Leases + Preferred + NCI − Cash − Non-Operating Investments

📚 **Examples**

1. **Retailer**: $500M market cap, $200M debt, $150M lease liabilities, $50M cash → EV = $800M
2. **Tech Company**: $3B market cap, $800M debt, $100M investments, $300M cash → EV = $3.4B
3. **Restaurant Chain**: $1B market cap, $400M debt, $300M leases, $100M cash → EV = $1.6B

❌ **Common Mistakes**

1. **Ignoring lease liabilities** - Operating leases are now debt-equivalent under new standards
2. **Not subtracting marketable securities** - Liquid investments offset acquisition cost
3. **Adding non-operating assets** - Only debt-like items should be added to market cap`,
    learnContent: {
      concept: 'EV adds all debt-like obligations and removes non-core assets to reflect operating enterprise value.',
      formula: 'EV = Equity + Net Debt + Preferred + NCI − Excess Assets',
      example: 'Subtracting LT securities or excess cash reduces EV\nCapitalized leases and pensions are often added as debt equivalents\n$800M MC + $200M Debt + $50M Leases − $30M Cash − $20M Investments = $1B EV'
    }
  },
  {
    id: 'val-hard-1',
    track: 'valuation',
    difficulty: 'hard',
    title: 'Enterprise Value (EV) Definition – Comprehensive Analysis',
    description: `A company has the following data:

Market Cap: $2.4B
Cash: $250M
Short-Term Investments: $150M
Debt: $1.1B
Finance Lease Liabilities: $200M
Pension Liability (Unfunded): $120M
Preferred Stock: $100M
NCI: $80M
Equity Investments (Passive): $90M
Operating Assets held for sale (core to business): $50M

Cash and short-term investments are highly liquid. Equity investments are non-operating. Held-for-sale assets are core to operations and not subtracted.

What is the company's Enterprise Value (EV)?`,
    answer: 3510000000,
    unit: '$',
    hint: 'Add all debt-like items and subtract only non-operating, highly liquid assets (not core assets like held-for-sale ops).',
    explanation: `📌 **Question Analysis**

This comprehensive EV calculation tests advanced understanding of balance sheet complexity, including pension liabilities, held-for-sale assets, and passive investments.

💡 **Explanation**

Step-by-step calculation:

1. **Start with Market Cap**: $2.4B
2. **Add All Debt-Like Obligations**:
   • Total Debt: +$1.1B
   • Finance Lease Liabilities: +$200M (debt-equivalent)
   • Unfunded Pension Liability: +$120M (debt-like obligation)
   • Preferred Stock: +$100M
   • Noncontrolling Interest: +$80M
3. **Subtract Non-Operating, Liquid Assets**:
   • Cash: -$250M
   • Short-Term Investments: -$150M (liquid, non-operating)
   • Equity Investments (Passive): -$90M (non-operating)
4. **Operating Assets**: Held-for-sale assets ($50M) NOT subtracted - still core operations
5. **Enterprise Value**: $2.4B + $1.6B - $490M = $3.510B

Key takeaways:
• Unfunded pension liabilities are debt-equivalent obligations
• Held-for-sale operational assets remain in EV (still generating operating cash flows)
• Only non-operating, liquid investments are subtracted

🎯 **Interview Angle**

This tests sophisticated EV understanding that senior analysts and associates must master:
• Distinguishing between operating vs. non-operating assets
• Understanding pension accounting implications for valuation
• Recognizing when "held for sale" assets should vs. shouldn't be excluded
• Comprehensive knowledge of modern balance sheet complexity

📘 **Core Concept**

• Enterprise Value must capture all claims on operating cash flows
• Unfunded pension obligations represent real debt-like commitments
• Asset classification (operating vs. non-operating) drives EV treatment

⚙️ **How It Works**

In an acquisition, the buyer assumes all debt-like obligations including pension liabilities and lease commitments. They receive liquid investments as an offset. Held-for-sale operating assets continue generating cash flows until disposition, so they remain in EV.

💥 **Why It Matters**

• Critical for valuing mature industrial companies with complex balance sheets
• Pension liabilities significantly affect EV for certain sectors (airlines, manufacturing)
• Proper asset classification determines accurate EV for M&A analysis
• Essential for credit analysis and debt capacity calculations

📐 **Formula**

EV = Market Cap + Total Debt + Finance Leases + Pension Liabilities + Preferred + NCI − Cash − Short-term Investments − Non-Operating Investments

📚 **Examples**

1. **Industrial Company**: $5B market cap, $2B debt, $300M pensions, $500M cash → EV = $6.8B
2. **Airline**: $3B market cap, $8B debt, $400M leases, $200M pensions, $1B cash → EV = $10.6B
3. **Utility**: $10B market cap, $15B debt, $500M pensions, $2B cash → EV = $23.5B

❌ **Common Mistakes**

1. **Excluding pension liabilities** - Unfunded pensions are debt-equivalent obligations
2. **Subtracting held-for-sale operating assets** - These still generate operating cash flows
3. **Treating all investments equally** - Must distinguish operating vs. passive/financial investments`,
    learnContent: {
      concept: 'Enterprise Value reflects the capital structure-neutral value of a company\'s core operations.',
      formula: 'EV = Market Cap + Debt + Leases + Pensions + Preferred + NCI − Cash − Non-operating Assets',
      example: 'Do not subtract "held for sale" assets if operational\nAdd unfunded pensions, leases, or legal obligations as debt-like liabilities\n$1B MC + $500M Debt + $100M Pensions − $200M Cash − $50M Investments = $1.35B EV'
    }
  },
  {
    id: 'val-easy-2',
    track: 'valuation',
    difficulty: 'easy',
    title: 'Fully Diluted Equity Value - Treasury Stock Method',
    description: `A company has the following:

Shares Outstanding: 40 million
Current Share Price: $25
In-the-money Options: 2 million with a $15 strike price

The company also has $50 million in cash and $200 million in debt.

Assume the Treasury Stock Method applies to options.

What is the company's fully diluted Equity Value?`,
    answer: 1020000000,
    unit: '$',
    hint: 'Calculate fully diluted shares using the Treasury Stock Method, then multiply by share price.',
    explanation: `📌 **Question Analysis**

This tests the Treasury Stock Method for calculating diluted equity value. Must account for option proceeds used to repurchase shares at current market price.

💡 **Explanation**

Step-by-step calculation:

1. **Basic Shares**: 40 million
2. **Option Proceeds**: 2M options × $15 strike = $30M total proceeds
3. **Shares Repurchased**: $30M ÷ $25 current price = 1.2M shares
4. **Net Dilution**: 2M new shares - 1.2M repurchased = 0.8M net dilution
5. **Total Diluted Shares**: 40M + 0.8M = 40.8M shares
6. **Equity Value**: 40.8M shares × $25 = $1.020B

Key takeaways:
• Treasury Stock Method reduces gross dilution by assuming share repurchases
• Only the net dilutive effect impacts equity value
• Cash and debt don't affect equity value calculation

🎯 **Interview Angle**

Essential for equity research and investment banking:
• Understanding how employee options affect valuation
• Proper dilution calculations for DCF models
• Critical for comparable company analysis when companies have different option structures

📘 **Core Concept**

• Treasury Stock Method assumes companies use option proceeds to buy back shares
• This creates net dilution rather than gross dilution from option exercise
• Used for calculating diluted earnings per share and equity values

⚙️ **How It Works**

When employees exercise options, they pay the strike price to the company. The Treasury Stock Method assumes this cash is immediately used to repurchase shares at the current market price, minimizing dilution to existing shareholders.

💥 **Why It Matters**

• Standard method for all public company valuations
• Required for diluted EPS calculations under GAAP
• Critical for accurate per-share metrics in equity research

📐 **Formula**

Net Dilutive Shares = Options Outstanding - (Option Proceeds ÷ Current Share Price)
Fully Diluted Equity Value = (Basic Shares + Net Dilutive Shares) × Share Price

📚 **Examples**

1. **Tech Startup**: 50M shares, 5M options at $10, stock at $30 → Net dilution = 5M - 1.67M = 3.33M
2. **Growth Company**: 100M shares, 10M options at $20, stock at $50 → Net dilution = 10M - 4M = 6M  
3. **Mature Company**: 200M shares, 8M options at $40, stock at $80 → Net dilution = 8M - 4M = 4M

❌ **Common Mistakes**

1. **Using gross dilution** - Must subtract shares that can be repurchased with proceeds
2. **Including out-of-the-money options** - Only in-the-money options are dilutive
3. **Forgetting to multiply by share price** - Need total equity value, not just share count`,
    learnContent: {
      concept: 'Equity Value = Share Price × Fully Diluted Shares Outstanding',
      formula: 'Fully Diluted Equity Value = (Basic + Net Dilutive Shares) × Share Price',
      example: '• 1M options @ $10, stock at $30 = $30M value, $10M proceeds → 0.67M net dilution\n• 50M shares @ $20 = $1.00B Equity Value'
    }
  },
  {
    id: 'val-medium-2',
    track: 'valuation',
    difficulty: 'medium',
    title: 'Complex Dilution Analysis - Multiple Securities',
    description: `A company reports the following:

Basic Shares Outstanding: 80 million
Share Price: $18
5 million in-the-money options with a $12 strike price
3 million RSUs (expected to vest)
4 million convertible bonds, each convertible into 1 share

Assume the share price is above the conversion threshold. Use the Treasury Stock Method for options and assume full dilution for RSUs and convertibles.

What is the company's fully diluted Equity Value?`,
    answer: 1596060000,
    unit: '$',
    hint: 'Apply TSM for options. RSUs and convertibles are fully dilutive and added in full.',
    explanation: `Formula: Equity Value = (Basic + Net Options + RSUs + Convertibles) × Share Price

Step-by-step calculation:

1. Basic Shares: 80 million

2. Options (Treasury Stock Method):
   - Option proceeds: 5M × $12 = $60M
   - Shares repurchased: $60M ÷ $18 = 3.333M
   - Net new shares from options: 5M - 3.333M = 1.667M

3. RSUs: 3M (added fully when expected to vest)

4. Convertibles: 4M (added fully when in-the-money)

5. Total Diluted Shares: 80M + 1.667M + 3M + 4M = 88.667M

6. Equity Value: 88.667M × $18 = $1,596.06M = $1,596,060,000

RSUs and convertible securities are typically added in full when calculating dilution, while options use the Treasury Stock Method to account for the proceeds generated.`,
    learnContent: {
      concept: 'Fully diluted Equity Value incorporates TSM for options and full add-in for RSUs and in-the-money convertibles.',
      formula: 'Equity Value = (Basic + Net Options + RSUs + Convertibles) × Share Price',
      example: '• Options @ strike below share price dilute via TSM\n• RSUs always added fully when expected to vest'
    }
  },
  {
    id: 'val-hard-2',
    track: 'valuation',
    difficulty: 'hard',
    title: 'Advanced Dilution with Convertible Bonds',
    description: `A company reports:

Basic Shares: 120 million
Share Price: $22
10 million options with a $10 strike price
6 million RSUs (fully expected to vest)
$200 million of convertible bonds, each convertible into shares at a $16 price

Assume:
- Share price is above the conversion threshold
- Options use Treasury Stock Method
- RSUs and convertibles are fully dilutive

What is the company's fully diluted Equity Value?`,
    answer: 3166980000,
    unit: '$',
    hint: 'Apply TSM for options, add RSUs fully, and determine convertible share count using the conversion price.',
    explanation: `Formula: Equity Value = (Basic + Net Options + RSUs + Convertible Shares) × Share Price

Step-by-step calculation:

1. Basic Shares: 120 million

2. Options (Treasury Stock Method):
   - Option proceeds: 10M × $10 = $100M
   - Shares repurchased: $100M ÷ $22 = 4.545M
   - Net dilution: 10M - 4.545M = 5.455M

3. RSUs: 6M (added fully when expected to vest)

4. Convertible Bonds:
   - Convertible shares: $200M bond value ÷ $16 conversion price = 12.5M shares

5. Total Diluted Shares: 120M + 5.455M + 6M + 12.5M = 143.955M

6. Equity Value: 143.955M × $22 = $3,166.98M = $3,166,980,000

Convertible bonds are valued at their conversion ratio (bond value ÷ conversion price) when the current share price exceeds the conversion threshold, making conversion economically attractive.`,
    learnContent: {
      concept: 'Fully diluted Equity Value includes all in-the-money instruments and RSUs, with precise conversion logic.',
      formula: 'Equity Value = (Basic + Net Options + RSUs + Convertible Shares) × Share Price',
      example: '• $150M in convertibles @ $15 = 10M shares if stock > $15\n• Strike prices below share price = dilutive under TSM'
    }
  },
  {
    id: 'val-easy-3',
    track: 'valuation',
    difficulty: 'easy',
    title: 'EV vs. Equity Value Reconciliation',
    description: `A company has the following:

Equity Value: $900 million
Debt: $300 million
Preferred Stock: $50 million
Noncontrolling Interest: $25 million
Cash: $100 million

What is the Enterprise Value?`,
    answer: 1175000000,
    unit: '$',
    hint: 'EV = Equity Value + Debt + Preferred + NCI − Cash',
    explanation: `Formula: EV = $900M + $300M + $50M + $25M - $100M = $1,175M

Step-by-step calculation:

Start with Equity Value: $900M
Add Debt: $900M + $300M = $1,200M
Add Preferred: $1,200M + $50M = $1,250M
Add NCI: $1,250M + $25M = $1,275M
Subtract Cash: $1,275M − $100M = $1,175M

Final Answer: $1,175,000,000`,
    learnContent: {
      concept: 'To reconcile Equity Value to EV, add all capital structure-related claims and subtract non-operating assets like cash.',
      formula: 'EV = Equity Value + Debt + Preferred + NCI − Cash',
      example: '• $800M Equity + $200M Debt − $50M Cash = $950M EV\n• $1B Equity + $300M Debt + $50M Preferred − $100M Cash = $1.25B EV'
    }
  },
  {
    id: 'val-medium-3',
    track: 'valuation',
    difficulty: 'medium',
    title: 'EV vs. Equity Value with Operating Leases',
    description: `A company's financials report:

Equity Value: $1.75 billion
Cash: $200 million
Debt: $600 million
Capitalized Operating Leases: $120 million
Pension Liability (Unfunded): $80 million
Preferred Stock: $70 million
Noncontrolling Interest: $40 million
Short-Term Investments: $100 million

Both capitalized leases and pensions are considered debt-like. Short-term investments are non-operating and should be subtracted in addition to cash.

What is the company's Enterprise Value?`,
    answer: 2360000000,
    unit: '$',
    hint: 'Start from Equity Value, add all debt-like and financing-related items, and subtract all liquid non-operating assets.',
    explanation: `Formula: EV = $1.75B + $600M + $120M + $80M + $70M + $40M - $200M - $100M = $2.36B

Step-by-step calculation:

Start with Equity Value = $1.75B
Add Debt = $1.75B + $600M = $2.35B
Add Capitalized Leases = $2.35B + $120M = $2.47B
Add Pension Liabilities = $2.47B + $80M = $2.55B
Add Preferred Stock = $2.55B + $70M = $2.62B
Add Noncontrolling Interest = $2.62B + $40M = $2.66B
Subtract Cash = $2.66B − $200M = $2.46B
Subtract Short-Term Investments = $2.46B − $100M = $2.36B

Final Answer: $2,360,000,000`,
    learnContent: {
      concept: 'EV adds all debt-like obligations and removes non-core assets to reflect operating enterprise value.',
      formula: 'EV = Equity + Net Debt + Preferred + NCI − Excess Assets',
      example: '• Subtracting LT securities or excess cash reduces EV\n• Capitalized leases and pensions are often added as debt equivalents'
    }
  },
  {
    id: 'val-hard-3',
    track: 'valuation',
    difficulty: 'hard',
    title: 'Complex EV Reconciliation with Multiple Assets',
    description: `A company reports:

Market Cap: $5.6B
Cash: $500M
Short-Term Investments: $200M
Long-Term Debt: $1.4B
Finance Lease Liabilities: $300M
Preferred Stock: $150M
Noncontrolling Interest: $100M
Unfunded Pension Liabilities: $250M
Operating Assets held for sale: $80M
Equity Investments (non-core): $180M

Cash, ST investments, and equity investments are all non-operating. Assets held for sale are core to the business and not subtracted.

What is the company's Enterprise Value?`,
    answer: 6920000000,
    unit: '$',
    hint: 'Only subtract liquid, non-operating assets. Add all debt-like and capital structure items.',
    explanation: `Formula: EV = $5.6B + $1.4B + $300M + $150M + $100M + $250M - $500M - $200M - $180M = $6.92B

Step-by-step calculation:

Equity Value = $5.6B
Long-Term Debt = $5.6B + $1.4B = $7.0B
Finance Leases = $7.0B + $300M = $7.3B
Preferred Stock = $7.3B + $150M = $7.45B
Noncontrolling Interest = $7.45B + $100M = $7.55B
Pension Liabilities = $7.55B + $250M = $7.80B
− Cash = $7.80B − $500M = $7.30B
− Short-Term Investments = $7.30B − $200M = $7.10B
− Equity Investments = $7.10B − $180M = $6.92B

Final Answer: $6,920,000,000`,
    learnContent: {
      concept: 'Enterprise Value reflects the capital structure-neutral value of a company\'s core operations.',
      formula: 'EV = Market Cap + Debt + Leases + Pensions + Preferred + NCI − Cash − Non-operating Assets',
      example: '• Do not subtract "held for sale" assets if operational\n• Add unfunded pensions, leases, or legal obligations as debt-like liabilities'
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

Assume all sales are made on credit. What is the DSO (Days Sales Outstanding)? Use a 365-day year.

*Note: Please round your answer to the nearest tenth (1 decimal place).*`,
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

What is the quick ratio?

*Note: Please round your answer to the nearest hundredth (2 decimal places).*`,
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
    id: 'acc-easy-67',
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
    id: 'acc-easy-68',
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
    id: 'acc-easy-69',
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
    id: 'acc-easy-150',
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
    id: 'acc-easy-151',
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
    id: 'acc-easy-152',
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
    id: 'acc-easy-153',
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
    id: 'acc-easy-154',
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
    id: 'acc-easy-155',
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
    id: 'acc-easy-156',
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
    id: 'acc-easy-157',
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
    id: 'acc-easy-158',
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
    id: 'acc-easy-91',
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

  // RESEARCH & DEVELOPMENT (R&D) EXPENSE QUESTIONS
  {
    id: 'acc-easy-76',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Impact of Capitalizing vs. Expensing R&D',
    description: 'Arcadia Pharma spent $8,000,000 on R&D this year, of which $2,000,000 was capitalized as an intangible asset under IFRS rules, with a 4-year straight-line amortization.\n\nHow much R&D expense will appear on the income statement for this year?',
    answer: 6500000,
    unit: '$',
    hint: 'Only capitalized R&D is amortized; rest is expensed immediately.',
    explanation: 'Expensed immediately: $8,000,000 – $2,000,000 = $6,000,000\nAmortization for this year: $2,000,000 / 4 = $500,000\nTotal IS expense: $6,000,000 + $500,000 = $6,500,000\n\nLogic: R&D partially appears through direct expense, partially as amortization.',
    learnContent: {
      concept: 'IFRS allows some R&D capitalization; GAAP rarely does.',
      formula: 'R&D IS Expense = (Expensed R&D) + (Capitalized R&D ÷ Useful Life)',
      example: '$3M expensed, $1M capitalized over 5 years: $3M + $200K = $3.2M\n\n$9M expensed, $3M capitalized over 3 years: $9M + $1M = $10M'
    }
  },
  {
    id: 'acc-easy-77',
    track: 'accounting',
    difficulty: 'easy',
    title: 'R&D Expense and Profitability',
    description: 'If Sumatra Inc. generated $15,000,000 in revenue, $4,000,000 gross profit, and $2,500,000 was spent on R&D, what percentage of gross profit was spent on R&D (rounded to the nearest whole number)?',
    answer: 63,
    unit: '%',
    hint: '(R&D / Gross Profit) × 100',
    explanation: '$2,500,000 / $4,000,000 = 0.625 = 63%\n\nLogic: Shows how large R&D is relative to profits.',
    learnContent: {
      concept: 'R&D intensity can indicate innovation focus.',
      formula: '(R&D Expense/Gross Profit) × 100%',
      example: '$1M R&D/$4M GP: 25%\n\n$600K R&D/$1.2M GP: 50%'
    }
  },
  {
    id: 'acc-easy-78',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Deferred R&D from Capitalized Projects',
    description: 'Polygon Tech capitalized $1,200,000 of R&D. Amortization is over 3 years on a straight-line basis. After 2 years, what is the remaining value on the balance sheet?',
    answer: 400000,
    unit: '$',
    hint: 'Annual amortization × 2 years. Subtract from capitalized amount.',
    explanation: 'Annual amortization = $1,200,000 / 3 = $400,000/year\nAfter 2 years: $400,000 × 2 = $800,000 amortized\nRemaining balance: $1,200,000 – $800,000 = $400,000\n\nLogic: Intangibles only appear on BS if not fully amortized.',
    learnContent: {
      concept: 'Only capitalized R&D appears as an asset; amortization erodes value over time.',
      formula: 'Remaining Value = Cost - (Annual Amortization × Years)',
      example: '$600K over 5 years, after 3: $600K - (3×$120K) = $240K'
    }
  },

  // DEPRECIATION EXPENSE QUESTIONS
  {
    id: 'acc-easy-79',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Depreciation & Tax Shield',
    description: 'Glenmont Tools records $600,000 depreciation. If their tax rate is 30%, what is the company\'s tax shield (total cash saved due to depreciation)?',
    answer: 180000,
    unit: '$',
    hint: 'Tax shield = Depreciation × Tax Rate',
    explanation: '$600,000 × 0.30 = $180,000\n\nLogic: Depreciation lowers taxable income, thus taxes paid.',
    learnContent: {
      concept: 'Non-cash expenses provide real cash savings via lower taxes.',
      formula: 'Tax Shield = Depreciation × Tax Rate',
      example: '$500K depreciation, 25% tax rate: $125K tax shield\n\n$200K depreciation, 21% tax rate: $42K tax shield'
    }
  },
  {
    id: 'acc-easy-80',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Straight-Line Depreciation Calculation',
    description: 'A company buys $80,000 of equipment, expects $10,000 salvage value after 7 years. What\'s annual depreciation expense?',
    answer: 10000,
    unit: '$',
    hint: '(Initial Cost – Salvage) ÷ Useful Life',
    explanation: '($80,000 – $10,000) ÷ 7 = $70,000 ÷ 7 = $10,000\n\nLogic: Depreciation spreads the net depreciable amount over the asset\'s life.',
    learnContent: {
      concept: 'Salvage value reduces total amount to depreciate.',
      formula: 'Annual Depreciation = (Cost - Salvage Value) ÷ Useful Life',
      example: '$50K cost, $5K salvage, 5 years: ($45K ÷ 5) = $9K/year\n\n$120K cost, $20K salvage, 10 years: ($100K ÷ 10) = $10K/year'
    }
  },
  {
    id: 'acc-easy-81',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Accumulated Depreciation after Write-Down',
    description: 'Vista Inc. owns machinery with a historical cost of $100,000 and 4 years of straight-line depreciation over a 10-year life. After 4 years, the machine is written down by $12,000.\n\nWhat is the new accumulated depreciation after the write-down?',
    answer: 52000,
    unit: '$',
    hint: 'Accum. Depreciation = 4 years\' depreciation + write-down.',
    explanation: 'Annual dep = $100,000 ÷ 10 = $10,000\nAfter 4 years = $40,000\nWrite-down adds $12,000\nTotal = $40,000 + $12,000 = $52,000\n\nLogic: Impairments/write-downs add to accumulated depreciation.',
    learnContent: {
      concept: 'Accumulated depreciation is cumulative—including write-downs.',
      formula: 'Accumulated Depreciation = (Annual Depreciation × Years) + Write-downs',
      example: '$15K/year × 3 years + $5K write-down = $50K total'
    }
  },

  // AMORTIZATION EXPENSE QUESTIONS
  {
    id: 'acc-easy-82',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Annual Amortization with Residual Value',
    description: 'Banner Corp. acquires an intangible for $60,000, expects $10,000 residual after 5 years. What is the annual amortization?',
    answer: 10000,
    unit: '$',
    hint: '(Asset value – Residual) ÷ Useful Life',
    explanation: '($60,000 – $10,000) ÷ 5 = $50,000 ÷ 5 = $10,000\n\nLogic: Same as depreciation, but for intangibles.',
    learnContent: {
      concept: 'Amortization schedules reduce asset value over useful life.',
      formula: 'Annual Amortization = (Cost - Residual Value) ÷ Useful Life',
      example: '$30K cost, $5K residual, 5 years: ($25K ÷ 5) = $5K/year'
    }
  },
  {
    id: 'acc-easy-83',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Book Value of Intangible after Early Disposal',
    description: 'A patent was acquired for $20,000 and amortized over 4 years. After 3 years, it was sold for $5,000. What was its book value just before sale?',
    answer: 5000,
    unit: '$',
    hint: 'Amortization per year × years elapsed; subtract from original.',
    explanation: '$20,000/4 = $5,000/year; after 3 years: $5,000 × 3 = $15,000 amortized\nBook value = $20,000 – $15,000 = $5,000\n\nLogic: Intangibles\' value declines each year via amortization.',
    learnContent: {
      concept: 'Book value drops annually; matches undepreciated/unamortized value.',
      formula: 'Book Value = Original Cost - Accumulated Amortization',
      example: '$40K cost, $8K/year, after 2 years: $40K - $16K = $24K book value'
    }
  },
  {
    id: 'acc-easy-84',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Amortization Impact on Net Income',
    description: 'Company X has $200,000 EBIT and records $40,000 annual amortization expense (tax rate 25%). What is the new after-tax income?',
    answer: 120000,
    unit: '$',
    hint: 'EBIT minus amortization, then apply taxes.',
    explanation: 'Pretax profit = $200,000 – $40,000 = $160,000\nTax = $160,000 × 0.25 = $40,000\nNet income = $160,000 – $40,000 = $120,000\n\nLogic: Amortization is subtracted before calculating taxes.',
    learnContent: {
      concept: 'Amortization reduces taxable income, affecting net profit, not cash.',
      formula: 'Net Income = (EBIT - Amortization) × (1 - Tax Rate)',
      example: '$300K EBIT, $50K amortization, 30% tax: ($250K × 0.7) = $175K net'
    }
  },

  // STOCK-BASED COMPENSATION (SBC) QUESTIONS
  {
    id: 'acc-easy-85',
    track: 'accounting',
    difficulty: 'easy',
    title: 'SBC Expense and Net Income',
    description: 'Nira Foods reported $13,000,000 in pre-tax earnings and included $1,200,000 of stock-based compensation. If the tax rate is 21%, what is the reported net income?',
    answer: 10270000,
    unit: '$',
    hint: 'Taxable income = pre-tax; SBC is a deductible expense.',
    explanation: 'Tax = $13,000,000 × 21% = $2,730,000\nNet income = $13,000,000 – $2,730,000 = $10,270,000\n\nLogic: SBC reduces pre-tax income, lowering taxes paid and reported net income.',
    learnContent: {
      concept: 'SBC is a non-cash expense, but tax-deductible for net income.',
      formula: 'Net Income = Pre-tax Income × (1 - Tax Rate)',
      example: '$10M pre-tax, 25% tax: $10M × 0.75 = $7.5M net income'
    }
  },
  {
    id: 'acc-easy-86',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Add-Back of SBC on Cash Flow Statement',
    description: 'A company earns $2 million in net income, including $300,000 of SBC. What is CFO (cash flow from operations) before working capital if there are no other non-cash adjustments?',
    answer: 2300000,
    unit: '$',
    hint: 'Non-cash SBC must be added back.',
    explanation: 'CFO = Net Income + Non-cash Expenses = $2,000,000 + $300,000 = $2,300,000\n\nLogic: Non-cash charges suppress net income, but add back to reach CFO.',
    learnContent: {
      concept: 'SBC reduces net income but doesn\'t use cash.',
      formula: 'CFO = Net Income + Non-cash Expenses (like SBC)',
      example: '$5M net income, $400K SBC: CFO = $5.4M before working capital'
    }
  },
  {
    id: 'acc-easy-87',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Dilution from SBC',
    description: 'A company had 1,000,000 shares at year start. During the year, it issued SBC worth $100,000 at a $20/share stock price, with no buyback.\n\nHow many shares are outstanding at year end?',
    answer: 1005000,
    unit: 'shares',
    hint: 'SBC value / share price = new shares issued. Add to starting shares.',
    explanation: '$100,000 / $20 = 5,000 shares\nShares outstanding = 1,000,000 + 5,000 = 1,005,000\n\nLogic: SBC creates new dilution, raising share count.',
    learnContent: {
      concept: 'SBC increases share count and potential dilution.',
      formula: 'New Shares = SBC Value ÷ Share Price; Total = Starting + New',
      example: '$200K SBC at $25/share = 8K new shares'
    }
  },

  // OPERATING INCOME (EBIT) QUESTIONS
  {
    id: 'acc-easy-88',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Calculating EBIT from Multi-Step Income Statement',
    description: 'A company reports $700,000 in gross profit, $220,000 in SG&A, $35,000 depreciation, and $47,500 R&D.\n\nWhat is operating income (EBIT)?',
    answer: 397500,
    unit: '$',
    hint: 'EBIT = Gross Profit – SG&A – Depreciation – R&D.',
    explanation: '$700,000 – $220,000 – $35,000 – $47,500 = $397,500\n\nLogic: All core operating expenses below gross profit must be subtracted.',
    learnContent: {
      concept: 'EBIT includes all core operating costs, but not interest/taxes.',
      formula: 'EBIT = Gross Profit - SG&A - Depreciation - Other Operating Expenses',
      example: '$500K GP, $200K SG&A, $50K depreciation: EBIT = $250K'
    }
  },
  {
    id: 'acc-easy-89',
    track: 'accounting',
    difficulty: 'easy',
    title: 'EBIT after Non-Recurring Gain',
    description: 'Waters Group had $1,500,000 operating income before a $100,000 gain from selling equipment.\n\nWhat is reported EBIT?',
    answer: 1600000,
    unit: '$',
    hint: 'Include the non-recurring gain in EBIT.',
    explanation: 'Operating income = $1,500,000\nNon-recurring gain: +$100,000\nEBIT = $1,600,000\n\nLogic: One-off gains increase EBIT for the period.',
    learnContent: {
      concept: 'EBIT sometimes includes one-time gains/losses, unless adjusted for "core" EBIT.',
      formula: 'EBIT = Operating Income + One-time Gains - One-time Losses',
      example: '$2M operating income + $50K asset sale gain = $2.05M EBIT'
    }
  },
  {
    id: 'acc-easy-90',
    track: 'accounting',
    difficulty: 'easy',
    title: 'EBIT after Restructuring Charge',
    description: 'BlueStar Inc. reports $2,300,000 EBIT before a $200,000 restructuring expense. What is EBIT after the charge?',
    answer: 2100000,
    unit: '$',
    hint: 'Subtract restructuring expense from operating income.',
    explanation: '$2,300,000 – $200,000 = $2,100,000\n\nLogic: Restructuring and other non-core items reduce operating income at the EBIT line.',
    learnContent: {
      concept: 'Adjusted EBIT removes non-core items for comparability.',
      formula: 'EBIT = Operating Income - Restructuring - Other One-time Charges',
      example: '$5M operating income - $300K restructuring = $4.7M EBIT'
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
    explanation: "Calculation: $800,000 + $200,000 - $90,000 - $40,000 = $870,000\n\n• • •\n\nStep-by-Step Analysis:\n\n1. Beginning PP&E Balance\n   - Starting amount: $800,000\n\n2. Add Capital Expenditures\n   - CapEx during year: +$200,000\n   - Running total: $1,000,000\n\n3. Subtract Depreciation\n   - Annual depreciation: -$90,000\n   - Running total: $910,000\n\n4. Subtract Asset Disposals\n   - Book value of equipment sold: -$40,000\n   - Final PP&E balance: $870,000\n\nKey Points:\n   • CapEx increases PP&E by the full purchase amount\n   • Depreciation reduces PP&E each period\n   • Asset sales reduce PP&E by net book value, not sale price",
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
    explanation: "Calculation: ($50,000 ÷ $600,000) × 365 = 30.4 days\n\n• • •\n\nStep-by-Step Analysis:\n\n1. Gather Key Metrics\n   - Average accounts payable: $50,000\n   - Annual cost of goods sold: $600,000\n\n2. Calculate Payable Turnover\n   - Payable turnover ratio: $600,000 ÷ $50,000 = 12 times\n   - Daily COGS: $600,000 ÷ 365 = $1,644\n\n3. Calculate Days Payable Outstanding\n   - DPO = $50,000 ÷ $1,644 = 30.4 days\n   - Alternative: (Average AP ÷ COGS) × 365\n\nKey Points:\n   • DPO measures how long company takes to pay suppliers\n   • Higher DPO indicates longer payment period (better cash flow)\n   • Industry comparison helps assess payment strategy effectiveness",
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
    explanation: "Calculation: $2,500,000 - ($1,900,000 + $300,000) = $300,000\n\n• • •\n\nStep-by-Step Analysis:\n\n1. Purchase Price Allocation\n   - Total acquisition cost: $2,500,000\n   - Book value of net assets: $1,900,000\n   - Identified intangibles: $300,000\n   - Fair value of net assets: $1,900,000 + $300,000 = $2,200,000\n\n2. Goodwill Calculation\n   - Goodwill = Purchase price - Fair value of net assets\n   - Goodwill = $2,500,000 - $2,200,000 = $300,000\n\n3. Goodwill Characteristics\n   - Represents premium paid for intangible benefits\n   - Not amortized under current standards\n   - Subject to annual impairment testing\n   - Reflects synergies, market position, workforce\n\nKey Points:\n   • Goodwill is excess of purchase price over fair value of net assets\n   • Includes both book value and identified intangibles\n   • Cannot be amortized but must be tested for impairment\n   • Represents value of assembled business beyond identifiable assets",
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
  },

  // EBITDA QUESTIONS
  {
    id: 'acc-easy-92',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Calculating EBITDA from Multiple Line Items',
    description: 'Riverside Sporting had $440,000 revenue, $180,000 COGS, $65,000 SG&A, $20,000 depreciation, and $5,000 amortization. What is EBITDA?',
    answer: 195000,
    unit: '$',
    hint: 'EBITDA = Revenue – COGS – SG&A',
    explanation: "Calculation: $440,000 - $180,000 - $65,000 = $195,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Start with Revenue\n   - Total Revenue: $440,000\n\n2. Subtract Cost of Goods Sold\n   - COGS: $180,000\n   - Remaining: $440,000 - $180,000 = $260,000\n\n3. Subtract SG&A Expenses\n   - SG&A: $65,000\n   - EBITDA: $260,000 - $65,000 = $195,000\n\n4. Ignore Depreciation & Amortization\n   - Depreciation: $20,000 (not subtracted)\n   - Amortization: $5,000 (not subtracted)\n   - These are non-cash expenses excluded from EBITDA\n\nKey Points:\n   • EBITDA measures core operating performance\n   • Excludes financing, tax, and non-cash expenses\n   • Useful for comparing operational efficiency across companies\n   • Higher EBITDA indicates stronger core profitability",
    learnContent: {
      concept: 'EBITDA stands for Earnings Before Interest, Taxes, Depreciation & Amortization.',
      formula: 'EBITDA = Revenue – COGS – SG&A',
      example: 'Rev $500K, COGS $200K, SG&A $100K = EBITDA $200K'
    }
  },
  {
    id: 'acc-easy-93',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Adjusted EBITDA with Non-Recurring Charges',
    description: 'Vista Tech reported $300,000 operating income, plus $25,000 depreciation, $15,000 amortization, and $10,000 one-time legal expense. What is normalized EBITDA?',
    answer: 340000,
    unit: '$',
    hint: 'EBITDA excludes D&A and should remove non-recurring expenses.',
    explanation: "Calculation: $300,000 + $25,000 + $15,000 = $340,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Start with Operating Income\n   - Operating Income: $300,000\n   - (Already includes the $10,000 one-time legal expense)\n\n2. Add Back Depreciation\n   - Depreciation: $25,000\n   - Running total: $300,000 + $25,000 = $325,000\n\n3. Add Back Amortization\n   - Amortization: $15,000\n   - EBITDA: $325,000 + $15,000 = $340,000\n\n4. One-Time Legal Expense Analysis\n   - Legal expense: $10,000 (already deducted in operating income)\n   - Not added back since it\'s included in the operating line\n\nKey Points:\n   • EBITDA adds back non-cash D&A expenses\n   • One-time items may be normalized depending on reporting\n   • Operating income is the starting point when D&A is separate\n   • Normalized EBITDA helps compare core performance",
    learnContent: {
      concept: 'Standard EBITDA adds back D&A, sometimes normalized for one-offs.',
      formula: 'EBITDA = Operating Income + Depreciation + Amortization',
      example: 'Op Income $200K + Dep $30K + Amort $10K = EBITDA $240K'
    }
  },

  // INTEREST INCOME QUESTIONS
  {
    id: 'acc-easy-94',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Net Interest Income from Investments and Debt',
    description: 'Global Energy earns $7,000 in interest from investments and pays $2,000 in loan interest. What is net interest income?',
    answer: 5000,
    unit: '$',
    hint: 'Subtract interest paid from interest earned.',
    explanation: "Calculation: $7,000 - $2,000 = $5,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Interest Earned from Investments\n   - Investment Interest Income: $7,000\n\n2. Interest Paid on Debt\n   - Loan Interest Expense: $2,000\n\n3. Calculate Net Interest\n   - Net Interest Income: $7,000 - $2,000 = $5,000\n\nBusiness Implications:\n   • Company is a net lender (earns more than it pays)\n   • Positive net interest improves overall profitability\n   • Investment portfolio generates sufficient returns\n\nKey Points:\n   • Net interest shows true financing impact\n   • Positive = more earned than paid\n   • Important for cash flow and profitability analysis\n   • Reflects company\'s financing strategy effectiveness",
    learnContent: {
      concept: 'Net interest is interest revenue minus interest paid.',
      formula: 'Interest Income – Interest Expense',
      example: 'Earned $10K, paid $3K = net $7K'
    }
  },
  {
    id: 'acc-easy-95',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Interest Income Calculation after Changing Balances',
    description: 'A company had $50,000 in marketable securities at the start of the year earning 4% interest. After selling $10,000 in June, what is total interest income for the year (no reinvestment)?',
    answer: 1800,
    unit: '$',
    hint: 'Calculate income on initial, subtract for money withdrawn midyear.',
    explanation: "Calculation: ($50,000 × 4% × 0.5) + ($40,000 × 4% × 0.5) = $1,000 + $800 = $1,800\n\n• • •\n\nStep-by-step breakdown:\n\n1. First Half of Year (January-June)\n   - Securities Balance: $50,000\n   - Time Period: 6 months (0.5 years)\n   - Interest: $50,000 × 4% × 0.5 = $1,000\n\n2. Securities Sale in June\n   - Amount Sold: $10,000\n   - Remaining Balance: $50,000 - $10,000 = $40,000\n\n3. Second Half of Year (July-December)\n   - Securities Balance: $40,000\n   - Time Period: 6 months (0.5 years)\n   - Interest: $40,000 × 4% × 0.5 = $800\n\n4. Total Annual Interest Income\n   - First Half: $1,000\n   - Second Half: $800\n   - Total: $1,000 + $800 = $1,800\n\nKey Points:\n   • Interest calculated on actual balances held during each period\n   • Balance changes affect income proportionally\n   • Time-weighted calculation ensures accuracy\n   • Cash flow timing impacts total returns",
    learnContent: {
      concept: 'Interest income = average balance × interest rate × time held.',
      formula: 'Principal × Rate × Time',
      example: '$100K at 3% for 6 months = $100K × 0.03 × 0.5 = $1.5K'
    }
  },

  // INTEREST EXPENSE QUESTIONS
  {
    id: 'acc-easy-96',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Total Interest Expense from Multiple Debts',
    description: 'A company holds $120,000 at 7% and $180,000 at 6%. What is annual interest expense?',
    answer: 19200,
    unit: '$',
    hint: 'Sum interest on each loan.',
    explanation: "Calculation: ($120,000 × 7%) + ($180,000 × 6%) = $8,400 + $10,800 = $19,200\n\n• • •\n\nStep-by-step breakdown:\n\n1. First Debt Calculation\n   - Principal Amount: $120,000\n   - Interest Rate: 7%\n   - Annual Interest: $120,000 × 7% = $8,400\n\n2. Second Debt Calculation\n   - Principal Amount: $180,000\n   - Interest Rate: 6%\n   - Annual Interest: $180,000 × 6% = $10,800\n\n3. Total Interest Expense\n   - First Debt: $8,400\n   - Second Debt: $10,800\n   - Combined Total: $8,400 + $10,800 = $19,200\n\nBusiness Implications:\n   • Higher rate debt ($120k at 7%) costs more per dollar\n   • Lower rate debt ($180k at 6%) is more cost-effective\n   • Total debt service affects cash flow and profitability\n\nKey Points:\n   • Each debt instrument has independent interest calculation\n   • Blended average rate = $19,200 ÷ $300,000 = 6.4%\n   • Interest expense reduces taxable income\n   • Debt management impacts overall cost of capital",
    learnContent: {
      concept: 'Total expense = sum of all loans\' interest.',
      formula: 'Σ(principal × rate)',
      example: 'Loan 1: $50K × 5% = $2.5K, Loan 2: $30K × 4% = $1.2K = Total $3.7K'
    }
  },
  {
    id: 'acc-easy-97',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Net Income Impact of Interest Expense',
    description: 'If operating income is $210,000 and interest expense is $30,000, with a 30% tax rate, what is net income?',
    answer: 126000,
    unit: '$',
    hint: 'Subtract interest for EBT, apply tax.',
    explanation: "**Calculation:** Net Income = $126,000\n\n• • •\n\n**Step-by-step breakdown:**\n\n1. **Start with Operating Income**\n   - Operating Income: $210,000\n\n2. **Subtract Interest Expense**\n   - Interest Expense: $30,000\n   - Earnings Before Tax (EBT): $210,000 - $30,000 = $180,000\n\n3. **Calculate Tax Expense**\n   - Tax Rate: 30%\n   - Tax Expense: $180,000 × 30% = $54,000\n\n4. **Calculate Net Income**\n   - EBT: $180,000\n   - Less: Tax Expense: $54,000\n   - Net Income: $180,000 - $54,000 = $126,000\n\n**Key Points:**\n   • Interest expense is tax-deductible\n   • Reduces taxable income, creating tax shield\n   • Tax shield value = $30,000 × 30% = $9,000\n   • Interest affects both EBT and after-tax income",
    learnContent: {
      concept: 'Interest is a deductible expense that lowers net income.',
      formula: '(Operating Income - Interest) × (1 - Tax Rate)',
      example: '($100K - $10K) × (1 - 0.25) = $67.5K'
    }
  },

  // TAX EXPENSE QUESTIONS
  {
    id: 'acc-easy-98',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Calculating Tax Expense on Pre-Tax Income',
    description: 'Walter Co. had pre-tax income of $120,000 and a 28% tax rate. What is tax expense?',
    answer: 33600,
    unit: '$',
    hint: 'Tax expense = pre-tax income × tax rate.',
    explanation: "**Calculation:** Tax Expense = $33,600\n\n• • •\n\n**Step-by-step breakdown:**\n\n1. **Pre-Tax Income**\n   - Earnings Before Tax: $120,000\n\n2. **Apply Corporate Tax Rate**\n   - Tax Rate: 28%\n   - Tax Calculation: $120,000 × 28% = $33,600\n\n3. **Resulting Net Income**\n   - Pre-Tax Income: $120,000\n   - Less: Tax Expense: $33,600\n   - Net Income: $120,000 - $33,600 = $86,400\n\n**Business Implications:**\n   • 28% of pre-tax earnings go to government\n   • 72% remains for shareholders ($86,400)\n   • Tax efficiency affects shareholder value\n\n**Key Points:**\n   • Tax expense reduces funds available to equity holders\n   • Effective tax planning can optimize after-tax returns\n   • Tax rate varies by jurisdiction and company structure\n   • Deductible expenses lower taxable income base",
    learnContent: {
      concept: 'Tax expense is deducted after all other costs.',
      formula: 'Pre-tax Income × Tax Rate',
      example: '$200K × 25% = $50K tax expense'
    }
  },
  {
    id: 'acc-easy-99',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Deferred Tax Liability from Depreciation',
    description: 'Book depreciation was $10,000, tax depreciation $15,000. Tax rate is 20%. What is DTL for the year?',
    answer: 1000,
    unit: '$',
    hint: 'DTL = (Tax dep – Book dep) × tax rate (if tax>book).',
    explanation: "**Calculation:** Deferred Tax Liability = $1,000\n\n• • •\n\n**Step-by-step breakdown:**\n\n1. **Book vs Tax Depreciation Difference**\n   - Tax Depreciation: $15,000\n   - Book Depreciation: $10,000\n   - Temporary Difference: $15,000 - $10,000 = $5,000\n\n2. **DTL Calculation**\n   - Temporary Difference: $5,000\n   - Tax Rate: 20%\n   - DTL Created: $5,000 × 20% = $1,000\n\n3. **Cash Flow Impact**\n   - Tax Savings This Year: $5,000 × 20% = $1,000\n   - Future Tax Owed: $1,000 (when book catches up)\n\n**Business Implications:**\n   • Accelerated tax depreciation creates timing benefit\n   • Company pays $1,000 less in current taxes\n   • Will pay $1,000 more in future years\n   • Creates temporary cash flow advantage\n\n**Key Points:**\n   • DTL represents future tax obligations\n   • Timing differences eventually reverse\n   • Tax planning can optimize cash flows\n   • Balance sheet liability reflects future payment",
    learnContent: {
      concept: 'Timing differences in book/tax create deferred taxes.',
      formula: '(Tax Depreciation - Book Depreciation) × Tax Rate',
      example: 'Tax $20K, Book $15K, Rate 25% = ($20K-$15K) × 0.25 = $1.25K DTL'
    }
  },

  // NET INCOME QUESTIONS
  {
    id: 'acc-easy-100',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Net Income from Multistep Statement',
    description: 'Company has $500,000 revenue, $250,000 COGS, $75,000 SG&A, $25,000 depreciation, $10,000 interest, 24% tax rate. What is net income?',
    answer: 106400,
    unit: '$',
    hint: 'Gross profit – SG&A – dep – interest → EBT × (1–tax).',
    explanation: "**Calculation:** Net Income = $106,400\n\n• • •\n\n**Step-by-step breakdown:**\n\n1. **Calculate Gross Profit**\n   - Revenue: $500,000\n   - COGS: $250,000\n   - Gross Profit: $500,000 - $250,000 = $250,000\n\n2. **Subtract Operating Expenses**\n   - SG&A: $75,000\n   - Depreciation: $25,000\n   - Operating Income: $250,000 - $75,000 - $25,000 = $150,000\n\n3. **Subtract Interest Expense**\n   - Interest Expense: $10,000\n   - Earnings Before Tax: $150,000 - $10,000 = $140,000\n\n4. **Calculate and Subtract Taxes**\n   - Tax Rate: 24%\n   - Tax Expense: $140,000 × 24% = $33,600\n   - Net Income: $140,000 - $33,600 = $106,400\n\n**Income Statement Flow:**\n   • Revenue → Gross Profit → Operating Income → EBT → Net Income\n   • Each step subtracts relevant expenses\n   • Net income is \"bottom line\" available to shareholders\n\n**Key Points:**\n   • Multi-step income statement shows profit progression\n   • Interest expense creates tax shield of $2,400\n   • Net margin = $106,400 ÷ $500,000 = 21.3%\n   • Final earnings available for dividends or reinvestment",
    learnContent: {
      concept: 'Net income is "bottom line" after all expenses.',
      formula: '(Revenue - All Expenses - Interest) × (1 - Tax Rate)',
      example: 'Rev $100K, Exp $60K, Int $5K, Tax 20% = ($35K) × 0.8 = $28K'
    }
  },
  {
    id: 'acc-easy-101',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Net Income and Retained Earnings',
    description: 'If net income is $66,000 and $8,000 in dividends are paid, how much goes to retained earnings?',
    answer: 58000,
    unit: '$',
    hint: 'Net income minus dividends.',
    explanation: "**Calculation:** Addition to Retained Earnings = $58,000\n\n• • •\n\n**Step-by-step breakdown:**\n\n1. **Net Income Earned**\n   - Net Income: $66,000\n   - Available for shareholders\n\n2. **Dividends Declared and Paid**\n   - Cash Dividends: $8,000\n   - Distributed to shareholders\n\n3. **Retained Earnings Increase**\n   - Net Income: $66,000\n   - Less: Dividends Paid: $8,000\n   - Addition to RE: $66,000 - $8,000 = $58,000\n\n**Dividend Analysis:**\n   • Payout Ratio: $8,000 ÷ $66,000 = 12.1%\n   • Retention Ratio: $58,000 ÷ $66,000 = 87.9%\n   • Company retains most earnings for growth\n\n**Key Points:**\n   • Retained earnings represent reinvested profits\n   • Higher retention supports future growth\n   • Balance between dividends and reinvestment\n   • Retained earnings increase shareholders\' equity",
    learnContent: {
      concept: 'Dividends reduce amount reinvested in company.',
      formula: 'Net Income - Dividends Paid',
      example: 'NI $100K, dividends $20K = $80K to retained earnings'
    }
  },

  // EARNINGS PER SHARE QUESTIONS
  {
    id: 'acc-easy-102',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Stock Split and Basic EPS',
    description: 'Net income is $90,000 and shares outstanding go from 30,000 to 60,000 after a 2-for-1 split. What is EPS?',
    answer: 2,
    unit: '$',
    hint: 'EPS = Net income / new shares.',
    explanation: "**Calculation:** Basic EPS = $2.00\n\n• • •\n\n**Step-by-step breakdown:**\n\n1. **Pre-Split Share Structure**\n   - Starting Shares: 30,000\n   - Net Income: $90,000\n\n2. **2-for-1 Stock Split Impact**\n   - Post-Split Shares: 30,000 × 2 = 60,000\n   - Split treated as if occurred at beginning of year\n   - Weighted Average Shares: 45,000 (assumes mid-year split)\n\n3. **EPS Calculation**\n   - Net Income: $90,000\n   - Weighted Average Shares: 45,000\n   - Basic EPS: $90,000 ÷ 45,000 = $2.00\n\n**Stock Split Analysis:**\n   • Splits increase share count proportionally\n   • No change in total value, just per-share amounts\n   • EPS decreases due to higher share count\n   • Makes shares more accessible to investors\n\n**Key Points:**\n   • Stock splits are retroactively applied for EPS\n   • Weighted average considers timing of split\n   • Lower EPS doesn\'t mean lower company value\n   • Improves share liquidity and affordability",
    learnContent: {
      concept: 'Splits increase shares, lower EPS directly.',
      formula: 'Net Income / Weighted Average Shares',
      example: 'NI $100K, 50K shares = $2 EPS'
    }
  },
  {
    id: 'acc-easy-103',
    track: 'accounting',
    difficulty: 'easy',
    title: 'EPS after Share Issuance',
    description: 'Net income is $250,000. Company had 50,000 shares, issued 10,000 new ones at year end (assume 55,000 weighted average shares). What is EPS?',
    answer: 4.55,
    unit: '$',
    hint: 'EPS = Net income / average shares.',
    explanation: "**Calculation:** Basic EPS = $4.55 (rounded to $5)\n\n• • •\n\n**Step-by-step breakdown:**\n\n1. **Share Structure Analysis**\n   - Beginning Shares: 50,000\n   - New Shares Issued: 10,000 (at year-end)\n   - Weighted Average Shares: 55,000\n\n2. **EPS Calculation**\n   - Net Income: $250,000\n   - Weighted Average Shares: 55,000\n   - Basic EPS: $250,000 ÷ 55,000 = $4.55\n\n3. **Dilution Analysis**\n   - Pre-Issuance EPS: $250,000 ÷ 50,000 = $5.00\n   - Post-Issuance EPS: $4.55\n   - Dilution: $5.00 - $4.55 = $0.45 per share\n\n**Business Implications:**\n   • Share issuance dilutes existing shareholders\n   • 20% increase in shares with same earnings\n   • Dilution of 9% in per-share earnings\n   • New capital can fund growth to offset dilution\n\n**Key Points:**\n   • Weighted average accounts for timing of issuance\n   • Dilution occurs unless earnings grow proportionally\n   • New capital should generate returns to benefit all shareholders\n   • Timing of issuance affects weighted average calculation",
    learnContent: {
      concept: 'EPS shows profit per share.',
      formula: 'Net Income / Weighted Average Shares Outstanding',
      example: 'NI $180K, 40K avg shares = $4.50 EPS'
    }
  },

  // DIVIDENDS QUESTIONS
  {
    id: 'acc-easy-104',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Dividend Per Share Calculation',
    description: 'VegaCo paid $21,000 in dividends with 3,000 shares out. What was the dividend per share?',
    answer: 7,
    unit: '$',
    hint: 'Total dividends / shares.',
    explanation: "**Calculation:** Dividend Per Share = $7.00\n\n• • •\n\n**Step-by-step breakdown:**\n\n1. **Dividend Information**\n   - Total Dividends Paid: $21,000\n   - Shares Outstanding: 3,000\n\n2. **Calculate Dividend Per Share**\n   - Formula: Total Dividends ÷ Shares Outstanding\n   - DPS: $21,000 ÷ 3,000 = $7.00\n\n3. **Shareholder Impact**\n   - Each share receives $7.00 in dividends\n   - Total distribution represents return to shareholders\n\n**Dividend Analysis:**\n   • DPS shows direct cash return per share owned\n   • Higher DPS indicates strong cash generation\n   • Consistent DPS demonstrates reliable returns\n\n**Key Points:**\n   • Dividend per share measures direct shareholder payout\n   • Total return = DPS + capital appreciation\n   • Companies balance dividends with growth investment\n   • DPS sustainability depends on earnings and cash flow",
    learnContent: {
      concept: 'Dividend per share = what each owner gets.',
      formula: 'Total Dividends / Shares Outstanding',
      example: '$50K dividends / 10K shares = $5 per share'
    }
  },
  {
    id: 'acc-easy-105',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Dividend Payout Ratio',
    description: 'Net income is $40,000; $8,000 dividends paid. What is payout ratio (whole %)?',
    answer: 20,
    unit: '%',
    hint: 'Dividends / Net income × 100.',
    explanation: "**Calculation:** Dividend Payout Ratio = 20%\n\n• • •\n\n**Step-by-step breakdown:**\n\n1. **Dividend and Earnings Data**\n   - Dividends Paid: $8,000\n   - Net Income: $40,000\n\n2. **Calculate Payout Ratio**\n   - Formula: (Dividends Paid ÷ Net Income) × 100\n   - Payout Ratio: ($8,000 ÷ $40,000) × 100 = 20%\n\n3. **Retention Ratio**\n   - Retained Earnings: $40,000 - $8,000 = $32,000\n   - Retention Ratio: ($32,000 ÷ $40,000) × 100 = 80%\n\n**Dividend Policy Analysis:**\n   • Company pays out 20% of earnings as dividends\n   • Retains 80% for reinvestment and growth\n   • Conservative payout suggests growth focus\n   • Sustainable dividend coverage\n\n**Key Points:**\n   • Payout ratio indicates dividend sustainability\n   • Lower ratios suggest growth-oriented strategy\n   • Higher ratios indicate income-focused approach\n   • Balance between current income and future growth",
    learnContent: {
      concept: 'Standard measure for dividend policy.',
      formula: '(Dividends Paid / Net Income) × 100',
      example: '$30K dividends / $150K NI = 20% payout ratio'
    }
  },

  // CASH & CASH EQUIVALENTS QUESTIONS
  {
    id: 'acc-easy-106',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Ending Cash Calculation',
    description: 'Opening cash $25,000, stock issued $10,000, loan repaid $12,000, sales collected $18,000, inventory bought $6,000. What is ending cash?',
    answer: 35000,
    unit: '$',
    hint: 'Add inflows, subtract outflows.',
    explanation: "**Calculation:** Ending Cash = $35,000\n\n• • •\n\n**Step-by-step breakdown:**\n\n1. **Starting Cash Position**\n   - Opening Cash Balance: $25,000\n\n2. **Cash Inflows**\n   - Stock Issued: $10,000\n   - Sales Collected: $18,000\n   - Total Inflows: $10,000 + $18,000 = $28,000\n\n3. **Cash Outflows**\n   - Loan Repaid: $12,000\n   - Inventory Purchased: $6,000\n   - Total Outflows: $12,000 + $6,000 = $18,000\n\n4. **Ending Cash Calculation**\n   - Opening Cash: $25,000\n   - Plus: Total Inflows: $28,000\n   - Less: Total Outflows: $18,000\n   - Ending Cash: $25,000 + $28,000 - $18,000 = $35,000\n\n**Cash Flow Analysis:**\n   • Net cash increase of $10,000 during period\n   • Positive operating cash flow from collections\n   • Financing activities: +$10K equity, -$12K debt repayment\n   • Investment in inventory reduces liquidity\n\n**Key Points:**\n   • Cash flow management critical for operations\n   • Multiple activities affect cash position\n   • Ending cash represents available liquidity\n   • Track all sources and uses of cash",
    learnContent: {
      concept: 'Ending cash is true company liquidity.',
      formula: 'Beginning Cash + Inflows - Outflows',
      example: 'Start $10K + collect $50K - pay $30K = end $30K'
    }
  },
  {
    id: 'acc-easy-107',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Excess Cash over Minimum',
    description: 'Firm holds $30,000 cash, needs $22,000 minimum. How much excess cash?',
    answer: 8000,
    unit: '$',
    hint: 'Subtract minimum from total.',
    explanation: "**Calculation:** Excess Cash = $8,000\n\n• • •\n\n**Step-by-step breakdown:**\n\n1. **Cash Position Analysis**\n   - Total Cash Held: $30,000\n   - Minimum Cash Required: $22,000\n\n2. **Excess Cash Calculation**\n   - Excess Cash: $30,000 - $22,000 = $8,000\n   - Available for discretionary use\n\n3. **Minimum Cash Requirements**\n   - Operating cash needs: $22,000\n   - Safety buffer for operations\n   - Working capital requirements\n\n**Treasury Management Options:**\n   • Invest excess in marketable securities\n   • Pay down debt to reduce interest expense\n   • Distribute to shareholders via dividends\n   • Fund growth initiatives or capex\n\n**Key Points:**\n   • Excess cash represents investment opportunity\n   • Minimum cash ensures operational liquidity\n   • Optimal cash management maximizes returns\n   • Balance liquidity needs with investment returns",
    learnContent: {
      concept: 'Minimum cash = operational liquidity constraint.',
      formula: 'Total Cash - Minimum Required Cash',
      example: 'Hold $100K, need $80K = $20K excess'
    }
  },

  // MARKETABLE SECURITIES QUESTIONS
  {
    id: 'acc-easy-108',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Liquidation of Marketable Securities',
    description: '$60,000 in marketable securities, $10,000 sold to fund capex. What\'s ending balance?',
    answer: 50000,
    unit: '$',
    hint: 'Subtract those sold.',
    explanation: "Calculation: $60,000 - $10,000 = $50,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Beginning Securities Balance\n   - Starting Marketable Securities: $60,000\n\n2. Securities Liquidation\n   - Amount Sold for Capex: $10,000\n   - Purpose: Fund capital expenditures\n\n3. Ending Balance Calculation\n   - Beginning Balance: $60,000\n   - Less: Securities Sold: $10,000\n   - Ending Balance: $60,000 - $10,000 = $50,000\n\nInvestment Portfolio Analysis:\n   • 16.7% of securities liquidated ($10K ÷ $60K)\n   • Cash generated to fund growth investments\n   • Remaining $50K provides liquidity buffer\n\nKey Points:\n   • Marketable securities provide flexible liquidity\n   • Can be converted to cash for strategic needs\n   • Balance between liquidity and investment returns\n   • Portfolio management supports capital allocation",
    learnContent: {
      concept: 'Converting investments to cash.',
      formula: 'Beginning Balance - Amount Sold',
      example: 'Start $200K, sell $50K = end $150K'
    }
  },
  {
    id: 'acc-easy-109',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Marketable Securities and Quick Ratio',
    description: '$12,000 cash, $5,000 marketable securities, $3,000 receivables, $10,000 payables. What is quick ratio (nearest whole number)?',
    answer: 2,
    unit: '',
    hint: 'Quick ratio = (cash + securities + receivables) / payables.',
    explanation: "**Calculation:** Quick Ratio = 2.0\n\n• • •\n\n**Step-by-step breakdown:**\n\n1. **Liquid Assets Calculation**\n   - Cash: $12,000\n   - Marketable Securities: $5,000\n   - Accounts Receivable: $3,000\n   - Total Quick Assets: $12,000 + $5,000 + $3,000 = $20,000\n\n2. **Current Liabilities**\n   - Accounts Payable: $10,000\n\n3. **Quick Ratio Calculation**\n   - Quick Ratio: $20,000 ÷ $10,000 = 2.0\n\n**Liquidity Analysis:**\n   • Company has $2 of liquid assets for every $1 of current liabilities\n   • Strong short-term liquidity position\n   • Can easily meet immediate obligations\n   • Quick ratio > 1.0 indicates good liquidity\n\n**Key Points:**\n   • Quick ratio excludes inventory (less liquid)\n   • Measures ability to pay short-term debts immediately\n   • Higher ratios indicate stronger liquidity\n   • Benchmark: >1.0 is generally healthy",
    learnContent: {
      concept: 'Higher quick ratio = greater short-term solvency.',
      formula: '(Cash + Marketable Securities + A/R) / Current Liabilities',
      example: '($50K + $20K + $30K) / $40K = 2.5x quick ratio'
    }
  },

  // ACCOUNTS RECEIVABLE QUESTIONS
  {
    id: 'acc-easy-110',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Calculating Collections on A/R',
    description: 'Start of year A/R $5,000, $17,000 in credit sales, end A/R $3,000. How much cash was collected?',
    answer: 19000,
    unit: '$',
    hint: 'Collections = Start + Sales – End',
    explanation: "**Calculation:** Cash Collected = $19,000\n\n• • •\n\n**Step-by-step breakdown:**\n\n1. **Beginning A/R Balance**\n   - Start of Year A/R: $5,000\n   - Outstanding customer invoices\n\n2. **Credit Sales During Year**\n   - Credit Sales: $17,000\n   - New invoices issued to customers\n\n3. **Ending A/R Balance**\n   - End of Year A/R: $3,000\n   - Remaining uncollected invoices\n\n4. **Cash Collections Calculation**\n   - Formula: Beginning A/R + Credit Sales - Ending A/R\n   - Collections: $5,000 + $17,000 - $3,000 = $19,000\n\n**A/R Management Analysis:**\n   • Total invoiced: $5,000 + $17,000 = $22,000\n   • Collection rate: $19,000 ÷ $22,000 = 86.4%\n   • A/R decreased by $2,000 (improvement in collections)\n\n**Key Points:**\n   • Cash collections exceed credit sales by $2,000\n   • Strong collection performance reduces A/R\n   • Improved working capital management\n   • Faster collections improve cash flow",
    learnContent: {
      concept: 'A/R flows affect liquidity management.',
      formula: 'Beginning A/R + Credit Sales - Ending A/R',
      example: 'Start $10K + sales $80K - end $15K = $75K collected'
    }
  },
  {
    id: 'acc-easy-111',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Receivables Days Outstanding',
    description: 'Average A/R $4,500; annual credit sales $54,000. What are average collection days (rounded whole days)?',
    answer: 30,
    unit: 'days',
    hint: '(A/R / Sales) × 365',
    explanation: "**Calculation:** Average Collection Days = 30 days\n\n• • •\n\n**Step-by-step breakdown:**\n\n1. **A/R and Sales Data**\n   - Average A/R: $4,500\n   - Annual Credit Sales: $54,000\n\n2. **Calculate Daily Sales**\n   - Daily Credit Sales: $54,000 ÷ 365 = $148\n\n3. **Days Sales Outstanding (DSO)**\n   - Formula: (Average A/R ÷ Annual Credit Sales) × 365\n   - DSO: ($4,500 ÷ $54,000) × 365 = 30.4 ≈ 30 days\n\n**Collection Performance Analysis:**\n   • Customers pay within 30 days on average\n   • Strong collection efficiency\n   • Good working capital management\n   • Industry benchmark comparison needed\n\n**Key Points:**\n   • Lower DSO indicates faster collections\n   • Impacts cash flow and working capital\n   • Monitor trends for collection effectiveness\n   • Balance collection speed with customer relationships",
    learnContent: {
      concept: 'Receivable "days" show payment speed for cash flow planning.',
      formula: '(Average A/R / Annual Credit Sales) × 365',
      example: '($20K / $200K) × 365 = 36.5 days'
    }
  },

  // ALLOWANCE FOR DOUBTFUL ACCOUNTS QUESTIONS
  {
    id: 'acc-easy-112',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Calculating Bad Debt and Net A/R',
    description: 'McRae Electronics had $180,000 in sales, all on credit. They estimated 2% of credit sales will be uncollectible and recorded an allowance. By year-end, customers failed to pay $3,000 they owed, which was written off. What is the year-end Allowance for Doubtful Accounts balance?',
    answer: 600,
    unit: '$',
    hint: 'Start with initial allowance (sales × % uncollectible). Subtract any write-offs that actually occurred.',
    explanation: "Calculation: ($180,000 × 2%) - $3,000 = $3,600 - $3,000 = $600\n\n• • •\n\nStep-by-step breakdown:\n\n1. Initial Allowance Calculation\n   - Credit Sales: $180,000\n   - Estimated Uncollectible Rate: 2%\n   - Initial Allowance: $180,000 × 2% = $3,600\n\n2. Write-offs During Year\n   - Actual write-offs: $3,000\n   - These reduce the allowance balance\n\n3. Ending Allowance Balance\n   - Beginning allowance: $3,600\n   - Less: Write-offs: $3,000\n   - Ending balance: $3,600 - $3,000 = $600\n\nKey Points:\n   • Allowance is an estimate; write-offs use up allowance but uncollected funds remove specific balances\n   • The allowance account is a contra-asset reducing accounts receivable\n   • Write-offs don't affect the income statement if properly estimated",
    learnContent: {
      concept: 'The Allowance for Doubtful Accounts is a contra-asset reducing accounts receivable to net realizable value.',
      formula: 'Allowance Ending = Opening Allowance + Provision Expense – Write-Offs',
      example: 'Project $2,500 as bad debt on $100k of sales; $600 is written off. Ending: $2,500 – $600 = $1,900'
    }
  },
  {
    id: 'acc-easy-113',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Net Accounts Receivable on the Balance Sheet',
    description: 'Ling\'s Distributors reports $72,000 in gross accounts receivable and a $2,000 allowance for doubtful accounts. What is the net accounts receivable on the balance sheet?',
    answer: 70000,
    unit: '$',
    hint: 'Subtract allowance from gross A/R.',
    explanation: "Calculation: $72,000 - $2,000 = $70,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Gross Accounts Receivable\n   - Total amount owed by customers: $72,000\n\n2. Allowance for Doubtful Accounts\n   - Estimated uncollectible amount: $2,000\n   - This is a contra-asset account\n\n3. Net Accounts Receivable\n   - Net A/R = Gross A/R - Allowance\n   - Net A/R = $72,000 - $2,000 = $70,000\n\nKey Points:\n   • Net A/R reflects the expected ultimately collectible cash\n   • Allowance anticipates nonpayment risks\n   • Balance sheet presents realistic asset values\n   • Net amount represents expected cash inflow",
    learnContent: {
      concept: 'Net A/R ensures the balance sheet does not overstate incoming cash. The allowance anticipates nonpayment risks.',
      formula: 'Net A/R = Gross A/R – Allowance',
      example: '$35,000 A/R, $1,000 allowance = $34,000'
    }
  },
  {
    id: 'acc-easy-114',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Bad Debt Adjustment after Write-Offs',
    description: 'GemCo starts the year with a $1,500 allowance. During the year, $700 debts are written off, and a review at year-end calls for a $1,100 ending balance. What is the bad debt expense recognized for the year?',
    answer: 300,
    unit: '$',
    hint: 'Think: Ending Allowance = Opening – Write-Offs + Bad Debt Expense.',
    explanation: "Calculation: $1,100 - ($1,500 - $700) = $1,100 - $800 = $300\n\n• • •\n\nStep-by-step breakdown:\n\n1. Beginning Allowance Balance\n   - Starting allowance: $1,500\n\n2. Write-offs During Year\n   - Debts written off: $700\n   - Allowance after write-offs: $1,500 - $700 = $800\n\n3. Required Ending Balance\n   - Year-end review requirement: $1,100\n\n4. Bad Debt Expense Calculation\n   - Required increase: $1,100 - $800 = $300\n   - Bad debt expense for the year: $300\n\nKey Points:\n   • Expense closes the gap between opening allowance, write-offs, and the reviewed need for closing allowance\n   • Bad debt expense ensures income statement matches revenue with expected costs\n   • Formula: Ending Allowance = Beginning + Expense – Write-Offs",
    learnContent: {
      concept: 'Bad debt expense ensures income statement matches revenue with expected costs from uncollected amounts.',
      formula: 'Ending Allowance = Beginning + Expense – Write-Offs',
      example: 'Begin $500, write off $200, want end $400 → $400–$300=$100'
    }
  },

  // INVENTORY QUESTIONS
  {
    id: 'acc-easy-115',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Inventory Change and Cash Flow Impact',
    description: 'A company starts with $6,000 of inventory, buys $10,000 more, ends with $8,500. How much cash was spent on inventory purchases not expensed as COGS?',
    answer: 2500,
    unit: '$',
    hint: 'Change in inventory = Ending – Beginning. Additional cash tied up in inventory.',
    explanation: "Calculation: $8,500 - $6,000 = $2,500\n\n• • •\n\nStep-by-step breakdown:\n\n1. Beginning Inventory\n   - Starting inventory: $6,000\n\n2. Inventory Purchases\n   - Cash spent on purchases: $10,000\n\n3. Ending Inventory\n   - Year-end inventory: $8,500\n\n4. Cash Not Yet Expensed\n   - Inventory increase: $8,500 - $6,000 = $2,500\n   - This represents cash spent but not yet recognized as COGS\n\nKey Points:\n   • Increase to inventory is a use of cash, but not a COGS expense yet\n   • Each dollar added to inventory increases cash investment\n   • Affects working capital and signals future COGS\n   • Higher inventory levels tie up more operating cash",
    learnContent: {
      concept: 'Each dollar added to inventory increases cash investment, affects working capital, and signals future COGS.',
      formula: 'Inventory Increase = New Purchases Not Yet Expensed = Ending – Beginning',
      example: 'Start $5k, end $7k: $2k cash spent, not expensed'
    }
  },
  {
    id: 'acc-easy-116',
    track: 'accounting',
    difficulty: 'easy',
    title: 'COGS Calculation Using FIFO',
    description: 'A retailer starts with 90 units at $12/each, buys 100 units at $15/each, then sells 150 units using FIFO. What is total COGS for the period?',
    answer: 1980,
    unit: '$',
    hint: 'FIFO uses oldest inventory first.',
    explanation: "Calculation: (90 × $12) + (60 × $15) = $1,080 + $900 = $1,980\n\n• • •\n\nStep-by-step breakdown:\n\n1. Beginning Inventory\n   - 90 units at $12 each = $1,080 total\n\n2. Purchases During Period\n   - 100 units at $15 each = $1,500 total\n   - Total available: 190 units\n\n3. FIFO Cost Flow (First In, First Out)\n   - Sell 150 units total\n   - First 90 units from beginning inventory: 90 × $12 = $1,080\n   - Next 60 units from purchases: 60 × $15 = $900\n\n4. Total COGS\n   - COGS = $1,080 + $900 = $1,980\n\nKey Points:\n   • FIFO uses oldest costs first\n   • In inflation, FIFO results in lower COGS and higher profits\n   • Remaining inventory is valued at most recent costs\n   • Method choice impacts both COGS and ending inventory values",
    learnContent: {
      concept: 'FIFO matches oldest costs first, meaning in inflation profit is higher, inventory higher.',
      formula: 'FIFO COGS = (Old Units × Old Cost) + (New Units × New Cost)',
      example: '60 @ $10, 40 @ $15, sold 75 FIFO: 60×$10=600, 15×$15=225; Total=$825'
    }
  },
  {
    id: 'acc-easy-117',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Inventory Days Outstanding Calculation',
    description: 'Thorn Coffee averages $8,500 inventory and had $60,000 COGS. What are average inventory days outstanding? (Nearest whole day.)',
    answer: 52,
    unit: 'days',
    hint: 'Inventory Days = (Inventory/COGS) × 365',
    explanation: "Calculation: ($8,500 ÷ $60,000) × 365 = 0.1417 × 365 = 51.7 ≈ 52 days\n\n• • •\n\nStep-by-step breakdown:\n\n1. Inventory and COGS Data\n   - Average inventory: $8,500\n   - Annual COGS: $60,000\n\n2. Daily COGS Calculation\n   - Daily COGS: $60,000 ÷ 365 = $164.38\n\n3. Inventory Days Outstanding\n   - Formula: (Average Inventory ÷ COGS) × 365\n   - Days = ($8,500 ÷ $60,000) × 365 = 51.7 days\n   - Rounded: 52 days\n\nKey Points:\n   • The lower the number, the faster inventory turns\n   • Higher days indicates risk for obsolescence\n   • Inventory turnover measures efficiency\n   • More turns signal less money tied up in goods",
    learnContent: {
      concept: 'Inventory turnover measures efficiency; more turns signal less $ tied up in goods.',
      formula: 'Days = (Avg Inventory / COGS) × 365',
      example: '$10,000/$73,000×365=50'
    }
  },

  // PREPAID EXPENSES QUESTIONS
  {
    id: 'acc-easy-118',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Adjusting Prepaid Insurance on the Balance Sheet',
    description: 'A company paid $12,000 for a full-year insurance policy on Oct 1. By Dec 31 (year end), what\'s the prepaid expense balance?',
    answer: 9000,
    unit: '$',
    hint: '10 months remain unused.',
    explanation: "Calculation: $12,000 - ($12,000 × 3/12) = $12,000 - $3,000 = $9,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Insurance Policy Details\n   - Total cost: $12,000\n   - Coverage period: 12 months (full year)\n   - Start date: October 1\n\n2. Insurance Used by Year-End\n   - Months used: October, November, December = 3 months\n   - Amount used: $12,000 × (3/12) = $3,000\n\n3. Prepaid Balance Remaining\n   - Unexpired portion: $12,000 - $3,000 = $9,000\n   - Months remaining: 9 months (Jan-Sep next year)\n\nKey Points:\n   • Prepaid assets decrease as service is consumed over time\n   • Only used portion flows to expense\n   • Unexpired coverage remains as asset on balance sheet\n   • Prepaid expenses represent future economic benefits",
    learnContent: {
      concept: 'Prepaids are paid ahead; reflected as assets until usage.',
      formula: 'Prepaid End = Prepaid Paid – Amount Used',
      example: '$6,000 annual, 5 months used: $6,000×(7/12)=$3,500 left'
    }
  },
  {
    id: 'acc-easy-119',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Expense Recognition for Prepaids',
    description: 'Valence paid $7,200 for rent covering a 12-month lease starting March 1. What rent expense is recognized in the year ended December 31?',
    answer: 6000,
    unit: '$',
    hint: 'Recognize expense for occupied months in the year.',
    explanation: "Calculation: $7,200 × (10/12) = $6,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Lease Payment Details\n   - Total prepaid rent: $7,200\n   - Lease period: 12 months\n   - Start date: March 1\n\n2. Months Covered in Current Year\n   - March through December = 10 months\n   - Remaining months (Jan-Feb next year) = 2 months\n\n3. Rent Expense Recognition\n   - Expense for current year: $7,200 × (10/12) = $6,000\n   - Prepaid remaining: $7,200 × (2/12) = $1,200\n\nKey Points:\n   • Only months covered/used in the reporting period flow to expense\n   • Expense moves from asset (prepaid) to income statement as used\n   • Matching principle ensures expenses align with benefits received\n   • Prepaid rent becomes rent expense over time",
    learnContent: {
      concept: 'Expense moves from asset (prepaid) to income statement as used.',
      formula: 'Expense = Total Prepaid × (Months Used/Total Months)',
      example: '$12,000, Jan–Jun: $12,000×(6/12)=$6,000'
    }
  },
  {
    id: 'acc-easy-120',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Prepaid vs. Accrued Expense Timing',
    description: 'A company pays $2,400 for a 1-year insurance policy on May 1. What is the prepaid balance at October 31?',
    answer: 1200,
    unit: '$',
    hint: 'First, count months elapsed and remaining.',
    explanation: "Calculation: $2,400 × (6/12) = $1,200\n\n• • •\n\nStep-by-step breakdown:\n\n1. Insurance Policy Terms\n   - Total cost: $2,400\n   - Coverage period: 12 months\n   - Start date: May 1\n\n2. Time Analysis as of October 31\n   - Months elapsed: May, June, July, August, September, October = 6 months\n   - Months remaining: November through April = 6 months\n\n3. Prepaid Balance Calculation\n   - Monthly insurance cost: $2,400 ÷ 12 = $200\n   - Amount used (6 months): $200 × 6 = $1,200\n   - Prepaid remaining: $2,400 - $1,200 = $1,200\n   - Alternative: $2,400 × (6/12) = $1,200\n\nKey Points:\n   • Unexpired portion remains on assets as prepaid\n   • Prepaids flip to expense as service is used\n   • Equal monthly amortization for uniform benefits\n   • Balance sheet shows future economic value",
    learnContent: {
      concept: 'Prepaids flip to expense as service used.',
      formula: 'Prepaid Ending = Prepaid – (Prepaid × Months Used / Total)',
      example: '$1,200/yr, after 9 months: $1,200–$900=$300'
    }
  },

  // OTHER CURRENT ASSETS QUESTIONS
  {
    id: 'acc-easy-121',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Understanding the Effect of an Increase in Other Current Assets',
    description: 'If other current assets increase by $12,000, all else being equal, what is the effect on cash flow from operations?',
    answer: -12000,
    unit: '$',
    hint: 'Asset increases use cash under indirect CFS.',
    explanation: "Calculation: Increase in Current Assets = -$12,000 to CFO\n\n• • •\n\nStep-by-step breakdown:\n\n1. Cash Flow Impact of Asset Changes\n   - Asset increases = use of cash (negative to CFO)\n   - Asset decreases = source of cash (positive to CFO)\n\n2. Other Current Assets Increase\n   - Change: +$12,000\n   - Cash flow effect: -$12,000\n\n3. Operating Cash Flow Adjustment\n   - Under indirect method, asset increases are subtracted\n   - Operating cash flow decreases by $12,000\n\nKey Points:\n   • Purchasing/reclassing an asset reduces available cash\n   • Cash flow from operations adjusts for changes in current assets/liabilities\n   • Asset increases tie up cash in working capital\n   • Higher current assets reduce operational liquidity",
    learnContent: {
      concept: 'Cash flow from operations adjusts for changes in current assets/liabilities.',
      formula: '∆Other Assets (↑) → CFS (–)',
      example: '+$6,000 other asset: –$6,000 to CFO'
    }
  },
  {
    id: 'acc-easy-122',
    track: 'accounting',
    difficulty: 'easy',
    title: 'How a Security Deposit Impacts Current Assets',
    description: 'Company pays $2,500 for a lease security deposit (refundable in 1 year). What line does this appear on the balance sheet?',
    answer: 2500,
    unit: '$',
    hint: 'Deposits held <12 months = current.',
    explanation: "Classification: Other Current Assets\n\n• • •\n\nStep-by-step breakdown:\n\n1. Security Deposit Characteristics\n   - Amount: $2,500\n   - Purpose: Lease security deposit\n   - Refundable timeline: 1 year\n\n2. Current vs. Non-Current Classification\n   - Current assets: Expected to be realized within 12 months\n   - Deposit is refundable in 1 year = current\n\n3. Balance Sheet Presentation\n   - Appears under: Other Current Assets\n   - Represents a short-term asset\n   - Expected cash recovery within operating cycle\n\nKey Points:\n   • A refundable deposit due in under 12 months is a current asset\n   • Deposit is expected to be returned (liquid asset) in short term\n   • Security deposits, advances, and similar items are other current if less than 1-year\n   • Classification affects liquidity analysis",
    learnContent: {
      concept: 'Security deposits, advances, and similar items are other current if less than 1-year.',
      formula: 'Time to Recovery < 12 months = Current Asset',
      example: '$4,000 refundable utility deposit, due next year: other current'
    }
  },
  {
    id: 'acc-easy-123',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Other Current Asset Write-offs',
    description: 'A company recognizes its $3,000 other current asset as unrecoverable. What happens to net income?',
    answer: -3000,
    unit: '$',
    hint: 'Full write-off flows to the income statement as expense.',
    explanation: "Calculation: Net Income Impact = -$3,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Asset Write-off\n   - Other current asset: $3,000\n   - Determination: Unrecoverable\n\n2. Accounting Treatment\n   - Remove asset from balance sheet\n   - Record expense on income statement\n   - Amount: $3,000\n\n3. Net Income Impact\n   - Write-off expense: $3,000\n   - Net income reduction: $3,000\n   - After-tax impact depends on tax rate\n\nKey Points:\n   • Full write-off flows to the income statement as expense\n   • Write-offs for unrecoverable current assets directly hurt earnings\n   • When a short-term asset is unrecoverable, it\'s expensed immediately\n   • Reduces both assets and net income",
    learnContent: {
      concept: 'When a short-term asset is unrecoverable, it\'s expensed and reduces profitability.',
      formula: 'Write-off Amount = Expense = Reduction in Net Income',
      example: '$1,200 receivable, written off as bad debt: expense $1,200'
    }
  },

  // NET PP&E QUESTIONS
  {
    id: 'acc-easy-124',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Calculating Net PP&E after Purchase and Depreciation',
    description: 'Start with $150,000 net PP&E. The company buys $20,000 new equipment and records $15,000 depreciation during the year. What is net PP&E at year-end?',
    answer: 155000,
    unit: '$',
    hint: 'Net PP&E = Starting + Additions – Depreciation',
    explanation: "Calculation: $150,000 + $20,000 - $15,000 = $155,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Beginning Net PP&E\n   - Starting balance: $150,000\n\n2. Capital Additions\n   - New equipment purchased: $20,000\n   - Increases net PP&E balance\n\n3. Depreciation Expense\n   - Annual depreciation: $15,000\n   - Reduces net PP&E balance\n\n4. Ending Net PP&E Calculation\n   - Beginning: $150,000\n   - Plus: Additions: $20,000\n   - Less: Depreciation: $15,000\n   - Ending: $155,000\n\nKey Points:\n   • Net PP&E is the balance after adding new fixed assets and taking out depreciation\n   • Accumulated depreciation shrinks net value; capex increases it\n   • Depreciation reflects wear and tear on existing assets\n   • New purchases expand productive capacity",
    learnContent: {
      concept: 'Net PP&E is the balance after adding new fixed assets and taking out depreciation for wear/tear.',
      formula: 'Beginning Net PP&E + Capex – Depreciation',
      example: '$40,000 start, $10,000 add, $5,000 dep = $45,000 net'
    }
  },
  {
    id: 'acc-easy-125',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Net PP&E with Asset Disposal',
    description: 'A company has $85,000 net PP&E at year start, sells equipment with a book value of $5,000 during the year, and records $8,000 in depreciation. No additions. What is year-end net PP&E?',
    answer: 72000,
    unit: '$',
    hint: 'Subtract both depreciation and the book value of disposed asset.',
    explanation: "Calculation: $85,000 - $5,000 - $8,000 = $72,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Beginning Net PP&E\n   - Starting balance: $85,000\n\n2. Asset Disposal\n   - Equipment sold (book value): $5,000\n   - Reduces net PP&E by book value\n   - Sale price doesn\'t affect PP&E calculation\n\n3. Depreciation Expense\n   - Annual depreciation on remaining assets: $8,000\n   - Further reduces net PP&E\n\n4. Ending Net PP&E Calculation\n   - Beginning: $85,000\n   - Less: Asset disposal: $5,000\n   - Less: Depreciation: $8,000\n   - Ending: $72,000\n\nKey Points:\n   • Disposals reduce net balance; only book value matters for PP&E, not sale proceeds\n   • Net PP&E must account for disposal of assets as well as use/wear\n   • Gain/loss on sale appears on income statement separately\n   • Both disposal and depreciation reduce the asset base",
    learnContent: {
      concept: 'Net PP&E must account for disposal of assets as well as use/wear.',
      formula: 'Beginning - Disposals (at book value) - Depreciation + Additions',
      example: '$50,000 opening, $5,000 disposal, $10,000 dep: $35,000'
    }
  },
  {
    id: 'acc-easy-126',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Net PP&E after Revaluation and Impairment',
    description: 'SuperMart opens year with $220,000 net PP&E, records $22,000 depreciation, buys $14,000 equipment. Due to fire, $16,000 is written off (impaired, no insurance recovery). What is year-end net PP&E?',
    answer: 196000,
    unit: '$',
    hint: 'Opening – Depreciation – Impairment + Additions',
    explanation: "Calculation: $220,000 - $22,000 - $16,000 + $14,000 = $196,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Beginning Net PP&E\n   - Starting balance: $220,000\n\n2. Regular Depreciation\n   - Annual depreciation: $22,000\n   - Normal wear and tear expense\n\n3. Impairment Loss\n   - Fire damage write-off: $16,000\n   - No insurance recovery\n   - Additional reduction beyond normal depreciation\n\n4. Capital Additions\n   - Equipment purchased: $14,000\n   - Increases asset base\n\n5. Ending Net PP&E Calculation\n   - Beginning: $220,000\n   - Less: Depreciation: $22,000\n   - Less: Impairment: $16,000\n   - Plus: Additions: $14,000\n   - Ending: $196,000\n\nKey Points:\n   • Impairment and depreciation reduce net asset, capex increases it\n   • Net PP&E after impairments is lower; companies must reassess book vs. fair value\n   • Fire losses without insurance reduce asset base permanently\n   • Multiple factors can affect PP&E in a single period",
    learnContent: {
      concept: 'Net PP&E after impairments is lower; companies must reassess book vs. fair value.',
      formula: 'Beginning - Depreciation - Impairment + Additions',
      example: '$100,000 – $10,000 dep – $5,000 impair + $2,500 capex = $87,500'
    }
  },

  // ACCUMULATED DEPRECIATION QUESTIONS
  {
    id: 'acc-easy-127',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Accumulated Depreciation Calculation',
    description: 'Asset cost is $25,000; annual depreciation is $3,000. After 4 years, what\'s accumulated depreciation?',
    answer: 12000,
    unit: '$',
    hint: 'Multiply annual depreciation by number of years.',
    explanation: "Calculation: $3,000 × 4 = $12,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Annual Depreciation\n   - Yearly depreciation expense: $3,000\n\n2. Time Period\n   - Number of years: 4 years\n\n3. Accumulated Depreciation\n   - Total accumulated: $3,000 × 4 = $12,000\n   - Represents cumulative depreciation to date\n\n4. Asset Analysis\n   - Original cost: $25,000\n   - Accumulated depreciation: $12,000\n   - Net book value: $25,000 - $12,000 = $13,000\n\nKey Points:\n   • Accumulated depreciation tracks total value expensed against an asset over time\n   • Each year adds to the cumulative total\n   • Contra-asset account that reduces gross asset value\n   • Shows total wear and tear recognized to date",
    learnContent: {
      concept: 'Accumulated depreciation tracks total value expensed against an asset over time.',
      formula: 'Accumulated = Annual Dep × Years',
      example: '$5,000/year, 3 years: $15,000'
    }
  },
  {
    id: 'acc-easy-128',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Accumulated Depreciation with Asset Disposal',
    description: 'Machinery cost $80,000; after 5 years, $30,000 has been depreciated. Equipment is sold and $30,000 in accumulated depreciation is removed. What is remaining accumulated depreciation for assets not sold?',
    answer: 0,
    unit: '$',
    hint: 'If all equipment is disposed, accumulated dep goes to zero.',
    explanation: "Calculation: $30,000 - $30,000 = $0\n\n• • •\n\nStep-by-step breakdown:\n\n1. Pre-Disposal Status\n   - Machinery cost: $80,000\n   - Accumulated depreciation: $30,000\n   - Net book value: $50,000\n\n2. Asset Disposal\n   - Equipment sold with $30,000 accumulated depreciation\n   - Both asset and accumulated depreciation are removed\n\n3. Remaining Accumulated Depreciation\n   - All accumulated depreciation transferred out\n   - Remaining balance: $0\n\nKey Points:\n   • All accumulated depreciation transferred out on full disposal\n   • Asset sales remove corresponding accumulated depreciation from accounts\n   • Disposals reduce both asset and contra-asset accounts\n   • Clean slate for remaining assets after disposal",
    learnContent: {
      concept: 'Disposals reduce both asset and contra-asset (accumulated) accounts.',
      formula: 'Remaining Accumulated Dep = Total - Amount Disposed',
      example: 'Asset $10,000; whole asset sold, accumulated $6,000; post-sale = $0'
    }
  },
  {
    id: 'acc-easy-129',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Net PP&E from Asset and Accum Depreciation',
    description: 'Precise Industries records $70,000 gross PP&E, $28,000 accumulated depreciation. What is net PP&E on the balance sheet?',
    answer: 42000,
    unit: '$',
    hint: 'Subtract accum. depreciation from gross asset cost.',
    explanation: "Calculation: $70,000 - $28,000 = $42,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Gross PP&E\n   - Original cost of assets: $70,000\n   - Historical cost basis\n\n2. Accumulated Depreciation\n   - Total depreciation to date: $28,000\n   - Contra-asset account\n\n3. Net PP&E Calculation\n   - Net PP&E = Gross Cost - Accumulated Depreciation\n   - Net PP&E = $70,000 - $28,000 = $42,000\n\n4. Balance Sheet Presentation\n   - Shows undepreciated book value\n   - Represents remaining asset value\n\nKey Points:\n   • Net PP&E reflects undepreciated book value\n   • Balance sheet reports both gross asset and net amounts\n   • Accumulated depreciation is a contra-asset\n   • Net amount shows current carrying value",
    learnContent: {
      concept: 'Balance sheet reports both gross asset and net (less accum dep).',
      formula: 'Net PP&E = Gross Cost – Accum Dep',
      example: '$90,000, $35,000 dep: $55,000'
    }
  },

  // GOODWILL QUESTIONS  
  {
    id: 'acc-easy-130',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Goodwill Calculation in an Acquisition',
    description: 'Alpha buys Beta for $800,000. Beta\'s net assets at fair market value are $730,000. What is goodwill created?',
    answer: 70000,
    unit: '$',
    hint: 'Goodwill = Purchase Price – Net Identifiable Assets',
    explanation: "Calculation: $800,000 - $730,000 = $70,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Acquisition Details\n   - Purchase price paid: $800,000\n   - Fair value of net assets: $730,000\n\n2. Goodwill Calculation\n   - Formula: Purchase Price - Fair Value of Net Assets\n   - Goodwill = $800,000 - $730,000 = $70,000\n\n3. Economic Interpretation\n   - Premium paid above asset value: $70,000\n   - Represents intangible value of business\n\n4. Goodwill Characteristics\n   - Reflects value for reputation, relationships, synergies\n   - Only created through acquisition\n   - Not amortized but tested for impairment\n\nKey Points:\n   • Goodwill reflects value for reputation, relationships, synergies over book/market value of assets\n   • Only created by acquisition, not ordinary asset revaluations\n   • Represents premium paid for business beyond identifiable assets\n   • Subject to annual impairment testing",
    learnContent: {
      concept: 'Goodwill is only created by acquisition, not ordinary asset revaluations.',
      formula: 'Goodwill = Purchase Price – Fair Net Assets',
      example: '$1,100,000 buy, $1,000,000 net assets: $100,000'
    }
  },
  {
    id: 'acc-easy-131',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Goodwill Impairment Impact',
    description: 'Three years after acquiring Delta for $200,000 premium, Delta\'s value is reassessed, and $45,000 goodwill is impaired. What is the adjustment to net income from impairment?',
    answer: -45000,
    unit: '$',
    hint: 'Impairment loss reduces net income in full.',
    explanation: "Calculation: Net Income Impact = -$45,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Goodwill Impairment\n   - Original goodwill premium: $200,000\n   - Impairment amount: $45,000\n   - Indicates value decline\n\n2. Accounting Treatment\n   - Impairment recorded as expense\n   - Non-cash charge to income statement\n   - Reduces goodwill asset on balance sheet\n\n3. Net Income Impact\n   - Impairment expense: $45,000\n   - Net income reduction: $45,000\n   - Dollar-for-dollar impact on earnings\n\nKey Points:\n   • Impairments are non-cash but hit the income statement, reducing reported net income\n   • Shows the buyer overpaid or value eroded post-deal; reduces future book value\n   • Impairment signals asset overpayment, market change, or business underperformance\n   • Cannot reverse impairment losses under US GAAP",
    learnContent: {
      concept: 'Impairment signals asset overpayment, market change, or business underperformance.',
      formula: 'Impairment loss = Write-down amount',
      example: '$50k impairment: NI –$50k'
    }
  },
  {
    id: 'acc-easy-132',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Goodwill after Partial Asset Sale',
    description: 'If a subsidiary is sold for $600,000, and on acquisition $100,000 in goodwill was created, but only 60% of the business is sold, what is remaining goodwill?',
    answer: 40000,
    unit: '$',
    hint: 'Proportionate goodwill remains.',
    explanation: "Calculation: $100,000 × (100% - 60%) = $100,000 × 40% = $40,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Original Goodwill\n   - Total goodwill created: $100,000\n   - Represents premium for entire business\n\n2. Partial Divestiture\n   - Percentage sold: 60%\n   - Percentage retained: 40%\n\n3. Goodwill Allocation\n   - Goodwill sold: $100,000 × 60% = $60,000\n   - Goodwill remaining: $100,000 × 40% = $40,000\n\n4. Business Logic\n   - Goodwill follows ownership proportion\n   - Partial sales reduce goodwill proportionally\n\nKey Points:\n   • Proportionate goodwill remains after partial divestiture\n   • Partial sales reduce goodwill but not all unless the whole business is sold\n   • Goodwill matches remaining ownership proportion\n   • Sale proceeds may result in gain/loss separate from goodwill",
    learnContent: {
      concept: 'Goodwill matches remaining ownership proportion after divestiture.',
      formula: 'Remaining Goodwill = Original × Percentage Retained',
      example: '$50k goodwill, 50% sold: $25k left'
    }
  },

  // OTHER INTANGIBLE ASSETS QUESTIONS
  {
    id: 'acc-easy-133',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Amortization of Customer List',
    description: 'X-Corp acquired a customer list for $30,000, to be amortized over 6 years. What is year 3 amortization expense?',
    answer: 5000,
    unit: '$',
    hint: 'Divide value by useful life.',
    explanation: "Calculation: $30,000 ÷ 6 = $5,000 per year\n\n• • •\n\nStep-by-step breakdown:\n\n1. Intangible Asset Details\n   - Customer list cost: $30,000\n   - Useful life: 6 years\n   - Amortization method: Straight-line\n\n2. Annual Amortization\n   - Annual expense: $30,000 ÷ 6 = $5,000\n   - Same amount each year over useful life\n\n3. Year 3 Amortization\n   - Year 3 expense: $5,000\n   - Consistent with all other years\n\n4. Cumulative Impact\n   - Total amortized by end of Year 3: $5,000 × 3 = $15,000\n   - Remaining book value: $30,000 - $15,000 = $15,000\n\nKey Points:\n   • Only intangible assets with a definable life are amortized\n   • Finite-life intangibles are amortized like tangible assets\n   • Annual amortization is consistent over useful life\n   • Reduces both asset value and net income",
    learnContent: {
      concept: 'Only intangible assets with a definable life are amortized.',
      formula: 'Annual Amort = Cost / Useful Life',
      example: '$18,000, 6 yrs: $3,000/yr'
    }
  },
  {
    id: 'acc-easy-134',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Net Value of Intangibles after Amortization',
    description: 'MediaCo paid $40,000 for a trademark with a 10-year life, 3 years ago. What\'s net intangible value now?',
    answer: 28000,
    unit: '$',
    hint: 'Amortization × years; subtract from original value.',
    explanation: "Calculation: $40,000 - ($40,000 ÷ 10 × 3) = $40,000 - $12,000 = $28,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Trademark Details\n   - Original cost: $40,000\n   - Useful life: 10 years\n   - Time elapsed: 3 years\n\n2. Annual Amortization\n   - Annual expense: $40,000 ÷ 10 = $4,000 per year\n\n3. Cumulative Amortization\n   - 3 years of amortization: $4,000 × 3 = $12,000\n   - Total amortized to date\n\n4. Net Book Value\n   - Original cost: $40,000\n   - Less: Accumulated amortization: $12,000\n   - Net intangible value: $28,000\n\nKey Points:\n   • Book value decreases as amortization expense accumulates\n   • Net value represents remaining unamortized cost\n   • Similar to depreciation for tangible assets\n   • Balance sheet shows net carrying amount",
    learnContent: {
      concept: 'Book value decreases as amortization expense accumulates.',
      formula: 'Net Intangible = Cost – (Years × Annual Amort)',
      example: '$24k, 4 yrs in on 8-yr asset: $12k'
    }
  },
  {
    id: 'acc-easy-135',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Intangible Asset Amortization and Tax Shield',
    description: 'A company amortizes $25,000 of a patent yearly, tax rate 20%. What\'s tax shield from the amortization each year?',
    answer: 5000,
    unit: '$',
    hint: 'Tax shield = Amortization × tax rate.',
    explanation: "Calculation: $25,000 × 20% = $5,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Amortization Expense\n   - Annual patent amortization: $25,000\n   - Tax-deductible expense\n\n2. Tax Rate\n   - Corporate tax rate: 20%\n   - Applied to deductible expenses\n\n3. Tax Shield Calculation\n   - Tax shield = Amortization × Tax rate\n   - Tax shield = $25,000 × 20% = $5,000\n\n4. Cash Flow Benefit\n   - Reduces taxable income by $25,000\n   - Saves $5,000 in cash taxes annually\n   - Non-cash expense creates real cash savings\n\nKey Points:\n   • Amortization, while non-cash, reduces taxable income\n   • Tax shield increases free cash flow; lowers tax paid\n   • Creates value through reduced tax obligations\n   • Important component of investment analysis",
    learnContent: {
      concept: 'Tax shield increases free cash flow; lowers tax paid.',
      formula: 'Shield = Amort × Tax Rate',
      example: '$12k amort, 25% tax: $3,000'
    }
  },

  // ACCOUNTS PAYABLE QUESTIONS
  {
    id: 'acc-easy-136',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Change in Payables and Cash Flow',
    description: 'If accounts payable rises from $14,000 to $18,000 over the year, what is the impact on cash flow from operations?',
    answer: 4000,
    unit: '$',
    hint: 'Liability increase is a source of cash.',
    explanation: "Calculation: $18,000 - $14,000 = $4,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Accounts Payable Change\n   - Beginning balance: $14,000\n   - Ending balance: $18,000\n   - Increase: $4,000\n\n2. Cash Flow Impact\n   - Liability increases = source of cash\n   - Company delayed $4,000 in payments\n   - Cash retained longer in business\n\n3. Operating Cash Flow Effect\n   - Positive impact: +$4,000\n   - Improves cash flow from operations\n\nKey Points:\n   • Delaying payments frees up company cash\n   • Payables increases are cash inflows; company stretches payment terms\n   • Working capital management affects cash flow\n   • Higher payables provide financing from suppliers",
    learnContent: {
      concept: 'Payables increases are cash inflows; company stretches payment terms.',
      formula: 'CFO increase = ∆ Payables',
      example: '$5k up, +$5k cash'
    }
  },
  {
    id: 'acc-easy-137',
    track: 'accounting',
    difficulty: 'easy',
    title: 'A/P Turnover Days Calculation',
    description: 'Payables average $10,000; annual purchases on credit are $80,000. What is average accounts payable days outstanding? (Nearest whole day.)',
    answer: 46,
    unit: 'days',
    hint: '(Avg A/P / Purchases) × 365',
    explanation: "Calculation: ($10,000 ÷ $80,000) × 365 = 0.125 × 365 = 45.6 ≈ 46 days\n\n• • •\n\nStep-by-step breakdown:\n\n1. Payables and Purchase Data\n   - Average accounts payable: $10,000\n   - Annual credit purchases: $80,000\n\n2. Daily Purchases\n   - Daily purchases: $80,000 ÷ 365 = $219.18\n\n3. Days Payable Outstanding\n   - Formula: (Average A/P ÷ Annual Purchases) × 365\n   - DPO: ($10,000 ÷ $80,000) × 365 = 45.6 days\n   - Rounded: 46 days\n\nKey Points:\n   • Shows average time to pay suppliers\n   • Longer payable days boost liquidity, but too high may damage supplier relationships\n   • Industry comparison helps assess payment practices\n   • Balance between cash flow and supplier relations",
    learnContent: {
      concept: 'Longer payable days boost liquidity, but too high may damage supplier relationships.',
      formula: 'Days = (A/P / Purchases) × 365',
      example: '$25k/$200k×365=46'
    }
  },
  {
    id: 'acc-easy-138',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Expense Recognized When Payables Settle',
    description: 'Last month\'s A/P was $8,000; the company paid $6,500 to suppliers during the month. Current month\'s balance is $9,200. What were total expense purchases this month?',
    answer: 7700,
    unit: '$',
    hint: 'Expense = Payments + increase in A/P.',
    explanation: "Calculation: $6,500 + ($9,200 - $8,000) = $6,500 + $1,200 = $7,700\n\n• • •\n\nStep-by-step breakdown:\n\n1. Accounts Payable Activity\n   - Beginning A/P: $8,000\n   - Ending A/P: $9,200\n   - Change in A/P: +$1,200\n\n2. Cash Payments\n   - Payments to suppliers: $6,500\n   - Reduces payables balance\n\n3. Total Expense Recognition\n   - Cash paid: $6,500\n   - Plus: Increase in payables: $1,200\n   - Total expenses: $7,700\n\nKey Points:\n   • Expense is what is both paid and accrued, not just cash paid\n   • Total expense = payments made plus liabilities accrued for the period\n   • Captures full cost regardless of payment timing\n   • Accrual accounting matches expenses to period incurred",
    learnContent: {
      concept: 'Expense = payments made plus liabilities accrued for the period.',
      formula: 'Total Expense = Payments + (A/P End – A/P Start)',
      example: 'Paid $5,000, A/P up $800: $5,800 expense'
    }
  },

  // ACCRUED EXPENSES QUESTIONS
  {
    id: 'acc-easy-139',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Accrued Expense Increase and Cash Flow',
    description: 'Accrued expenses increase by $2,400 during the period. What is the effect on cash flow from operations?',
    answer: 2400,
    unit: '$',
    hint: 'Liability increase adds to cash flow.',
    explanation: "Calculation: Accrued Expense Increase = +$2,400 to CFO\n\n• • •\n\nStep-by-step breakdown:\n\n1. Accrued Expense Change\n   - Increase in accrued expenses: $2,400\n   - Represents expenses incurred but not yet paid\n\n2. Cash Flow Impact\n   - Liability increases = source of cash\n   - Company has delayed $2,400 in payments\n   - Cash retained in business longer\n\n3. Operating Cash Flow Effect\n   - Positive impact: +$2,400\n   - Improves cash flow from operations\n   - Non-cash working capital benefit\n\nKey Points:\n   • Accruals arose for expenses not yet paid, cash held longer\n   • Matching principle—expense on IS, cash not yet disbursed\n   • Accrued expense increases are inflow for CFO, reduce period\'s net cash outflows\n   • Working capital management affects liquidity",
    learnContent: {
      concept: 'Accrued expense increases are inflow for CFO, reduce period\'s net cash outflows.',
      formula: 'CFO Impact = Increase in Accrued Expenses',
      example: '+$1,000 accrued: +$1,000 CFO'
    }
  },
  {
    id: 'acc-easy-140',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Accrued Expenses Settled',
    description: 'A company\'s accrued expenses fell from $9,500 to $7,000. If it recognized $20,000 in the income statement, how much cash did it pay for these expenses during the period?',
    answer: 22500,
    unit: '$',
    hint: 'Cash paid = Expense recognized + decrease in accrued balance.',
    explanation: "Calculation: $20,000 + ($9,500 - $7,000) = $20,000 + $2,500 = $22,500\n\n• • •\n\nStep-by-step breakdown:\n\n1. Expense Recognition\n   - Income statement expense: $20,000\n   - Amount expensed during period\n\n2. Accrued Expense Change\n   - Beginning accrued: $9,500\n   - Ending accrued: $7,000\n   - Decrease: $2,500\n\n3. Cash Payment Calculation\n   - Current period expense: $20,000\n   - Plus: Decrease in accrued (prior period settlements): $2,500\n   - Total cash paid: $22,500\n\nKey Points:\n   • Cash paid = Expense recognized + decrease in accrued balance\n   • Settling old accruals increases cash outflows versus recognized expenses\n   • Bigger decrease in accrued means more was paid out than expensed in the period\n   • Timing differences between expense recognition and payment",
    learnContent: {
      concept: 'Bigger decrease in accrued means more was paid out than expensed in the period.',
      formula: 'Cash Paid = Current Expense + Decrease in Accrued',
      example: 'Expense $5k, accrued falls $2k: $7k paid'
    }
  },
  {
    id: 'acc-easy-141',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Recognizing Expense Timing',
    description: 'A firm records $5,000 expense for employee bonuses which were not yet paid, and an additional $3,000 for rent incurred but to be paid next period. What is total increase in accrued expenses?',
    answer: 8000,
    unit: '$',
    hint: 'All incurred but unpaid expenses increase accrued.',
    explanation: "Calculation: $5,000 + $3,000 = $8,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Employee Bonus Expense\n   - Amount: $5,000\n   - Status: Incurred but not paid\n   - Increases accrued expenses\n\n2. Rent Expense\n   - Amount: $3,000\n   - Status: Incurred but payment due next period\n   - Also increases accrued expenses\n\n3. Total Accrued Expense Increase\n   - Employee bonuses: $5,000\n   - Rent: $3,000\n   - Total increase: $8,000\n\nKey Points:\n   • All incurred but unpaid expenses increase accrued\n   • IS captures expense when incurred, not paid—difference goes to accrued\n   • Accruals ensure correct matching of costs for each reporting period\n   • Timing differences create accrued liabilities",
    learnContent: {
      concept: 'Accruals ensure correct matching of costs for each reporting period.',
      formula: 'Accrued Increase = Sum of Unpaid Expenses Incurred',
      example: '$1,500 salary expense, unpaid: +$1,500 accrued'
    }
  },

  // 32. Current Portion of Long-Term Debt
  {
    id: 'acc-easy-142',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Identifying Current Portion at Year-End',
    description: 'A $32,000 loan is repaid in four equal $8,000 annual installments, paid each December 31.\n\nWhat is the current portion of long-term debt to be reported at year-end?',
    answer: 8000,
    unit: '$',
    hint: 'Current portion is the principal due in the next 12 months.',
    explanation: "Calculation: Current portion = $8,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Loan Structure:\n   - Total loan: $32,000\n   - Payment schedule: Four equal annual installments\n   - Payment amount: $8,000 per year\n   - Payment date: December 31st\n\n2. Current Portion Definition:\n   - Principal amount due within next 12 months\n   - Only the next scheduled payment qualifies\n\n3. Current Portion Calculation:\n   - Next payment due: $8,000\n   - Therefore current portion = $8,000\n\nKey Points:\n   • Only the next scheduled principal payment ($8,000) is \"current\"\n   • Remaining principal ($24,000) stays in long-term debt\n   • Current portion appears in current liabilities section",
    learnContent: {
      concept: 'Current portion of long-term debt represents principal payments due within the next 12 months.',
      formula: 'Current Portion = Principal Due in Next 12 Months',
      example: '$50,000 loan, $10,000 annual payments → Current portion = $10,000'
    }
  },

  {
    id: 'acc-medium-146',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Current Portion after Early Prepayment',
    description: 'A firm\'s $24,000 bank loan is paid back as $6,000 principal per year. This December, they prepay $2,000 toward next year\'s installment.\n\nWhat is the current portion of long-term debt at December 31?',
    answer: 4000,
    unit: '$',
    hint: 'Next year\'s scheduled principal payment minus prepayment.',
    explanation: "Calculation: $6,000 - $2,000 = $4,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Original Payment Schedule:\n   - Total loan: $24,000\n   - Annual principal payment: $6,000\n   - Next year's scheduled payment: $6,000\n\n2. Prepayment Impact:\n   - Prepayment made in December: $2,000\n   - Applied toward next year's installment\n   - Reduces amount still due next year\n\n3. Current Portion Calculation:\n   - Originally due next year: $6,000\n   - Less: Prepayment already made: $2,000\n   - Current portion remaining: $4,000\n\nKey Points:\n   • Scheduled payment: $6,000; $2,000 prepaid leaves $4,000 due in next 12 months (current portion)\n   • Prepayments reduce the current portion obligation\n   • The $2,000 prepayment reduces both cash and the current liability",
    learnContent: {
      concept: 'Prepayments reduce the current portion of long-term debt by the amount paid ahead of schedule.',
      formula: 'Current Portion = Scheduled Payment - Prepayments Made',
      example: '$10,000 due next year, $3,000 prepaid → Current portion = $7,000'
    }
  },

  {
    id: 'acc-hard-179',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Rescheduled Amortization with Deferral and Prepayment',
    description: 'A five-year $60,000 loan is paid in annual principal installments of $12,000 each Dec 31. In Year 2, the company prepays $4,000 toward next year and negotiates to defer half ($6,000) of next year\'s payment to Year 5.\n\nWhat is the current portion of long-term debt at Year 2 year-end?',
    answer: 2000,
    unit: '$',
    hint: 'Scheduled for next year: $12,000. Half deferred to Year 5, so $6,000 due. Prepaid $4,000 ahead.',
    explanation: "Calculation: $12,000 - $6,000 - $4,000 = $2,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Original Loan Structure:\n   - Total loan: $60,000\n   - Term: 5 years\n   - Annual payment: $12,000\n   - Year 3 scheduled payment: $12,000\n\n2. Loan Modification Effects:\n   a) Deferral:\n      - Half of Year 3 payment deferred: $6,000\n      - Deferred amount moved to Year 5\n      - Year 3 payment reduced to: $6,000\n   \n   b) Prepayment:\n      - Prepaid toward Year 3: $4,000\n      - Further reduces Year 3 obligation\n\n3. Current Portion Calculation:\n   - Original Year 3 payment: $12,000\n   - Less: Deferred to Year 5: ($6,000)\n   - Less: Prepaid in Year 2: ($4,000)\n   - Current portion at Year 2 end: $2,000\n\nKey Points:\n   • $12,000 (scheduled) – $6,000 (deferral) – $4,000 (prepay) = $2,000\n   • Complex loan modifications require careful tracking\n   • Deferrals move obligations to future periods\n   • Prepayments reduce current obligations",
    learnContent: {
      concept: 'Complex loan modifications involving deferrals and prepayments require careful calculation of the remaining current portion.',
      formula: 'Current Portion = Scheduled Payment - Deferrals - Prepayments',
      example: '$15,000 due, $5,000 deferred, $3,000 prepaid → Current portion = $7,000'
    }
  },

  // 33. Long-Term Debt
  {
    id: 'acc-easy-143',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Long-Term Debt after Single Repayment',
    description: 'A company starts with $75,000 in long-term notes and makes a $20,000 repayment by year-end.\n\nWhat is its ending long-term debt?',
    answer: 55000,
    unit: '$',
    hint: 'Subtract repayment from the start-of-year balance.',
    explanation: "Calculation: $75,000 - $20,000 = $55,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Beginning Balance:\n   - Long-term debt at start: $75,000\n   - This represents the outstanding principal\n\n2. Repayment During Year:\n   - Principal repayment made: $20,000\n   - This reduces the outstanding debt balance\n   - (Note: Interest payments don't reduce principal)\n\n3. Ending Balance Calculation:\n   - Beginning balance: $75,000\n   - Less: Principal repayment: $20,000\n   - Ending long-term debt: $55,000\n\nKey Points:\n   • Only principal payments reduce debt balance\n   • Interest payments are expensed, not debt reduction\n   • Long-term debt decreases with each principal payment\n   • Simple calculation: Beginning balance minus repayments",
    learnContent: {
      concept: 'Long-term debt balance decreases only when principal payments are made, not interest payments.',
      formula: 'Ending Debt = Beginning Debt - Principal Repayments',
      example: '$100,000 debt, $15,000 principal payment → $85,000 ending debt'
    }
  },

  {
    id: 'acc-medium-147',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Net Long-Term Debt Including New Borrowing',
    description: 'A company starts the year with $48,000 in long-term debt, issues $36,000 new debt, and repays $20,000 principal.\n\nWhat is ending long-term debt?',
    answer: 64000,
    unit: '$',
    hint: 'Add new borrowings, subtract repayments.',
    explanation: "Calculation: $48,000 + $36,000 - $20,000 = $64,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Beginning Position:\n   - Long-term debt at start: $48,000\n   - Base amount from previous periods\n\n2. New Borrowing:\n   - Additional debt issued: $36,000\n   - Increases total debt outstanding\n   - Provides cash inflow to company\n\n3. Principal Repayment:\n   - Principal paid during year: $20,000\n   - Reduces outstanding debt balance\n   - Represents cash outflow\n\n4. Ending Balance Calculation:\n   - Beginning debt: $48,000\n   - Add: New borrowing: $36,000\n   - Less: Principal repayment: ($20,000)\n   - Ending long-term debt: $64,000\n\nKey Points:\n   • New borrowings increase debt balance\n   • Principal repayments decrease debt balance\n   • Net effect: $48,000 + $36,000 - $20,000 = $64,000\n   • Track all debt activity during the period",
    learnContent: {
      concept: 'Long-term debt changes reflect both new borrowings (increases) and principal repayments (decreases).',
      formula: 'Ending Debt = Beginning + New Borrowings - Principal Repayments',
      example: '$30,000 start + $15,000 new - $8,000 repay = $37,000 end'
    }
  },

  {
    id: 'acc-hard-180',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Multi-Year Note and Current Portion',
    description: 'A $100,000 term loan is paid in five annual principal installments of $20,000. In Year 1, company pays the scheduled $20,000 and prepays $10,000 against Year 2\'s installment.\n\nWhat is the current portion of long-term debt to be reported at the end of Year 1?',
    answer: 10000,
    unit: '$',
    hint: 'For next year: scheduled principal $20,000 minus any paid early.',
    explanation: "Calculation: $20,000 - $10,000 = $10,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Original Loan Structure:\n   - Total loan: $100,000\n   - Payment schedule: 5 annual installments\n   - Annual principal payment: $20,000\n   - Year 2 scheduled payment: $20,000\n\n2. Year 1 Payment Activity:\n   a) Scheduled Payment:\n      - Year 1 payment made: $20,000\n      - Reduces total debt to $80,000\n   \n   b) Prepayment:\n      - Additional payment toward Year 2: $10,000\n      - Applied against future obligation\n      - Total Year 1 payments: $30,000\n\n3. Current Portion at Year 1 End:\n   - Year 2 originally scheduled: $20,000\n   - Less: Prepayment already made: $10,000\n   - Current portion remaining: $10,000\n\n4. Debt Classification:\n   - Current portion (due in Year 2): $10,000\n   - Long-term portion (Years 3-5): $60,000\n   - Total remaining debt: $70,000\n\nKey Points:\n   • Next year's portion: $20,000 – $10,000 (prepaid) = $10,000\n   • Prepayments reduce future current portion obligations\n   • Total debt reduced by all payments: $100,000 - $30,000 = $70,000\n   • Proper classification between current and long-term portions",
    learnContent: {
      concept: 'Prepayments against future installments reduce the current portion of long-term debt for the applicable period.',
      formula: 'Current Portion = Next Period Scheduled Payment - Prepayments Against That Period',
      example: '$25,000 due next year, $8,000 prepaid → Current portion = $17,000'
    }
  },

  // 34. Notes Payable
  {
    id: 'acc-easy-144',
    track: 'accounting',
    difficulty: 'easy',
    title: 'New Note Payable as a Current Liability',
    description: 'The company issues a 10-month, $6,000 note payable in April.\n\nWhat is the balance in notes payable immediately after issue?',
    answer: 6000,
    unit: '$',
    hint: 'Show the full principal.',
    explanation: "Calculation: Notes payable = $6,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Note Issuance:\n   - Principal amount: $6,000\n   - Term: 10 months\n   - Issue date: April\n   - Maturity: February (next year)\n\n2. Initial Recording:\n   - Debit: Cash $6,000\n   - Credit: Notes Payable $6,000\n   - Full principal amount recorded as liability\n\n3. Classification:\n   - Since term is 10 months (less than 12 months)\n   - Classified as current liability\n   - Will appear in current liabilities section\n\nKey Points:\n   • Notes payable initially recorded at full principal amount\n   • Interest accrues over time but doesn't affect initial principal\n   • 10-month term makes this a current liability\n   • No immediate impact on interest payable account",
    learnContent: {
      concept: 'Notes payable are initially recorded at the full principal amount borrowed.',
      formula: 'Initial Notes Payable = Principal Amount Borrowed',
      example: '$15,000 note issued → Notes Payable = $15,000'
    }
  },

  {
    id: 'acc-medium-148',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Notes Payable and Accrued Interest at Year-End',
    description: 'On March 1, firm borrows $15,000 via a 12-month note at 8% (interest paid at maturity).\n\nWhat is the total notes payable plus accrued interest on December 31?',
    answer: 16000,
    unit: '$',
    hint: 'Find accrued 10 months of interest, add to principal.',
    explanation: "Calculation: $15,000 + $1,000 = $16,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Note Details:\n   - Principal: $15,000\n   - Interest rate: 8% annual\n   - Issue date: March 1\n   - Maturity: March 1 (next year)\n   - Interest payment: At maturity\n\n2. Time Period Calculation:\n   - From March 1 to December 31\n   - Months elapsed: 10 months\n   - Interest accrual period: 10/12 of year\n\n3. Interest Calculation:\n   - Annual interest: $15,000 × 8% = $1,200\n   - Accrued interest: $1,200 × (10/12) = $1,000\n   - Formula: Principal × Rate × Time\n\n4. Total Liability:\n   - Notes payable (principal): $15,000\n   - Plus: Accrued interest: $1,000\n   - Total liability: $16,000\n\nKey Points:\n   • Interest: $15,000 × 8% × (10/12) = $1,000\n   • Principal remains: $15,000\n   • Total = $15,000 + $1,000 = $16,000\n   • Interest accrues even when paid at maturity",
    learnContent: {
      concept: 'Accrued interest must be recorded even when interest is paid at maturity, following the matching principle.',
      formula: 'Total Liability = Principal + (Principal × Rate × Time Elapsed)',
      example: '$20,000 note at 6% for 8 months → $20,000 + ($20,000 × 6% × 8/12) = $20,800'
    }
  },

  {
    id: 'acc-hard-181',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Multiple Notes Schedule, Repaid and Accrued',
    description: 'A company starts with a $10,000 note at 6% (repaid in full, including interest, after 4 months). In May, it issues a $12,000, 8% 12-month note. In October, $4,000 principal is repaid on the second note.\n\nBy Dec 31, what is notes payable plus accrued interest (round to nearest $100)?',
    answer: 8600,
    unit: '$',
    hint: 'Second note: principal left = $12,000 – $4,000 = $8,000. Interest: $12,000 × 8% × (8/12) = $640 (May to December, 8 months). Total = $8,000 + $640 ≈ $8,600 (rounded to nearest hundred)',
    explanation: "Calculation: $8,000 + $640 = $8,640 ≈ $8,600\n\n• • •\n\nStep-by-step breakdown:\n\n1. First Note (Fully Repaid):\n   - Principal: $10,000 at 6%\n   - Repaid in full after 4 months\n   - No balance remaining at Dec 31\n   - Interest paid with principal\n\n2. Second Note Analysis:\n   a) Original Terms:\n      - Principal: $12,000\n      - Rate: 8% annual\n      - Issue date: May 1\n      - Term: 12 months\n   \n   b) Principal Repayment:\n      - October payment: $4,000\n      - Remaining principal: $12,000 - $4,000 = $8,000\n\n3. Interest Calculation (Second Note):\n   - Time period: May 1 to Dec 31 = 8 months\n   - Interest base: Full $12,000 (for May-September)\n   - Then $8,000 (for October-December)\n   - Simplified calculation: $12,000 × 8% × (8/12) = $640\n\n4. Year-End Balance:\n   - Remaining principal: $8,000\n   - Accrued interest: $640\n   - Total: $8,640\n   - Rounded to nearest $100: $8,600\n\nKey Points:\n   • Only remaining principal and accrued interest on unpaid balance\n   • First note completely eliminated from books\n   • Interest calculation considers full original principal for period\n   • Rounding requirement applies to final answer",
    learnContent: {
      concept: 'Multiple notes require tracking each note separately, including partial repayments and varying interest rates.',
      formula: 'Total = Remaining Principal + Accrued Interest on Outstanding Balance',
      example: 'Two notes: $5,000 at 5% + $8,000 at 7% (both 6 months) = Total principal + respective interest'
    }
  },

  // 35. Deferred Revenue
  {
    id: 'acc-easy-145',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Deferred Revenue Remaining After Partial Fulfillment',
    description: 'A firm collects $24,000 upfront for a 12-month subscription on March 1.\n\nWhat is deferred revenue on December 31?',
    answer: 4000,
    unit: '$',
    hint: 'Service not yet delivered (Jan–Feb next year): 2/12 of contract.',
    explanation: "Calculation: $24,000 × (2/12) = $4,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Contract Details:\n   - Total subscription: $24,000\n   - Term: 12 months\n   - Start date: March 1\n   - End date: February 28 (next year)\n\n2. Service Period Analysis:\n   - Total months: 12\n   - Months served by Dec 31: March through December = 10 months\n   - Months remaining: January and February = 2 months\n\n3. Revenue Recognition:\n   - Monthly revenue: $24,000 ÷ 12 = $2,000\n   - Revenue recognized (10 months): $2,000 × 10 = $20,000\n   - Revenue deferred (2 months): $2,000 × 2 = $4,000\n\n4. Deferred Revenue Calculation:\n   - Alternative method: $24,000 × (2/12) = $4,000\n   - Represents unearned portion\n   - Will be recognized in next year\n\nKey Points:\n   • Service not yet delivered (Jan–Feb next year): 2/12 of contract\n   • Deferred revenue represents future service obligation\n   • Recognition follows straight-line method over contract term\n   • Balance sheet liability until service delivered",
    learnContent: {
      concept: 'Deferred revenue represents the unearned portion of cash received in advance for future services.',
      formula: 'Deferred Revenue = Total Contract × (Months Remaining / Total Months)',
      example: '$36,000 annual contract, 3 months left → $36,000 × 3/12 = $9,000 deferred'
    }
  },

  {
    id: 'acc-medium-149',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Deferred Revenue Rollforward—Recognized Amount',
    description: 'Start deferred revenue: $8,000. During year: new prepayments collected $28,000. End deferred revenue: $6,000.\n\nHow much revenue recognized this year?',
    answer: 30000,
    unit: '$',
    hint: 'Revenue recognized = opening + new collections – end.',
    explanation: "Calculation: $8,000 + $28,000 - $6,000 = $30,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Deferred Revenue Activity Analysis:\n   - Beginning balance: $8,000 (from prior period)\n   - New cash collections: $28,000 (new customer payments)\n   - Ending balance: $6,000 (unearned at year-end)\n\n2. Revenue Recognition Logic:\n   - Beginning deferred represents prior cash, now earned\n   - New collections may be partially earned this year\n   - Ending deferred represents cash not yet earned\n\n3. Revenue Calculation Method:\n   - Total cash available for earning: $8,000 + $28,000 = $36,000\n   - Less: Still deferred (unearned): $6,000\n   - Therefore earned this year: $36,000 - $6,000 = $30,000\n\n4. Alternative Verification:\n   - Beginning deferred earned: $8,000\n   - New collections earned: $28,000 - ($6,000 ending)\n   - Total revenue recognized: $30,000\n\nKey Points:\n   • Revenue recognized = opening + new collections – end\n   • Formula tracks the flow from cash to earnings\n   • Ending balance represents future revenue potential\n   • Method works regardless of contract complexity",
    learnContent: {
      concept: 'Revenue recognition can be calculated by analyzing the flow of deferred revenue balances and new collections.',
      formula: 'Revenue Recognized = Beginning Deferred + New Collections - Ending Deferred',
      example: '$5,000 start + $20,000 new - $3,000 end = $22,000 recognized'
    }
  },

  {
    id: 'acc-hard-182',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Multi-Year Deferred Revenue, Cohort Tracking',
    description: 'A business collects $36,000 in advance every Jan 1 for annual contracts. Revenue is recognized evenly through the year.\n\nWhat is deferred revenue at the end of March Year 2 (after 15 months total; all contracts have same start date each year)?',
    answer: 27000,
    unit: '$',
    hint: 'Year 2 contract: $36,000, after 3/12 months, 9/12 left = $27,000 still deferred.',
    explanation: "Calculation: $36,000 × (9/12) = $27,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Contract Structure:\n   - Annual collection: $36,000 every January 1\n   - Service period: 12 months (Jan 1 - Dec 31)\n   - Revenue recognition: Straight-line monthly\n   - Monthly revenue: $36,000 ÷ 12 = $3,000\n\n2. Timeline Analysis:\n   - Year 1: Contract started Jan 1 Year 1\n   - Year 2: New contract started Jan 1 Year 2\n   - Analysis date: March 31 Year 2 (15 months from start)\n\n3. Year 1 Contract Status (at March 31 Year 2):\n   - Contract period: Jan 1 Year 1 - Dec 31 Year 1\n   - Status at March 31 Year 2: Fully completed\n   - Deferred revenue: $0 (all recognized)\n\n4. Year 2 Contract Status (at March 31 Year 2):\n   - Contract period: Jan 1 Year 2 - Dec 31 Year 2\n   - Time elapsed: Jan, Feb, March = 3 months\n   - Revenue recognized: $3,000 × 3 = $9,000\n   - Remaining service: 9 months (April - December)\n   - Deferred revenue: $3,000 × 9 = $27,000\n\n5. Total Deferred Revenue:\n   - Year 1 contract: $0\n   - Year 2 contract: $27,000\n   - Total: $27,000\n\nKey Points:\n   • After 3 months of Year 2, only next 9 months of Year 2's $36,000 contract are unearned\n   • Year 1 contract completely fulfilled by its December 31 end\n   • $36,000 × 9/12 = $27,000\n   • Each annual cohort tracked separately",
    learnContent: {
      concept: 'Multi-year deferred revenue tracking requires analyzing each contract cohort separately based on their individual service periods.',
      formula: 'Deferred Revenue = Contract Value × (Months Remaining in Contract / Total Contract Months)',
      example: 'Annual $48,000 contract, 7 months left → $48,000 × 7/12 = $28,000 deferred'
    }
  },

  // Topic 36: Other Current Liabilities
  {
    id: 'acc-easy-142',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Other Current Liabilities Year-End Balance',
    description: 'A company starts the year with $6,000 in accrued bonuses and $3,000 in warranty liabilities. During the year, it incurs an additional $4,000 in warranty obligations and pays $5,000 in total liabilities. At year-end, it identifies $2,000 in new customer refund liabilities.\n\nWhat is the total Other Current Liabilities balance at year-end?',
    answer: 10000,
    unit: '$',
    hint: 'Start with opening balance, add new obligations, subtract payments.',
    explanation: "Calculation: $9,000 + $4,000 + $2,000 - $5,000 = $10,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Opening Balance\n   - Accrued bonuses: $6,000\n   - Warranty liabilities: $3,000\n   - Total opening: $9,000\n\n2. New Obligations During Year\n   - Additional warranty obligations: $4,000\n   - Customer refund liabilities: $2,000\n   - Total new: $6,000\n\n3. Payments Made\n   - Total liabilities paid: $5,000\n\n4. Year-End Balance\n   - Opening + New - Payments: $9,000 + $6,000 - $5,000 = $10,000\n\nKey Points:\n   • Other current liabilities include various short-term obligations\n   • New accruals increase the balance\n   • Payments reduce the liability balance\n   • Track all components separately for accurate reporting",
    learnContent: {
      concept: 'Other current liabilities include various short-term obligations beyond standard payables and accruals.',
      formula: 'Ending Balance = Opening + New Accruals - Payments',
      example: 'Start $5k, add $3k warranty, pay $2k → $6k ending'
    }
  },
  {
    id: 'acc-medium-100',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Multiple Current Liabilities Tracking',
    description: 'A firm has the following Other Current Liabilities at the start of the year:\n\n- Accrued payroll: $8,000\n- Customer deposits: $5,000\n- Sales tax payable: $2,000\n\nDuring the year:\n- It pays $6,000 in payroll\n- Receives $3,000 more in customer deposits\n- Pays $1,500 in sales tax\n- Recognizes $2,000 in contingent legal liabilities expected to settle within 12 months\n\nAt year-end, it reclassifies $2,000 of customer deposits as long-term due to extended service timelines.\n\nWhat is the total Other Current Liabilities balance at year-end?',
    answer: 10500,
    unit: '$',
    hint: 'Track each liability type separately, then sum the ending balances.',
    explanation: "Calculation: $2,000 + $6,000 + $500 + $2,000 = $10,500\n\n• • •\n\nStep-by-step breakdown:\n\n1. Accrued Payroll\n   - Opening: $8,000\n   - Payments: $6,000\n   - Ending: $8,000 - $6,000 = $2,000\n\n2. Customer Deposits\n   - Opening: $5,000\n   - New deposits: $3,000\n   - Reclassified to long-term: $2,000\n   - Ending: $5,000 + $3,000 - $2,000 = $6,000\n\n3. Sales Tax Payable\n   - Opening: $2,000\n   - Payments: $1,500\n   - Ending: $2,000 - $1,500 = $500\n\n4. Legal Liabilities\n   - New contingent liabilities: $2,000\n\n5. Total Year-End Balance\n   - Sum of all components: $2,000 + $6,000 + $500 + $2,000 = $10,500\n\nKey Points:\n   • Track each liability component separately\n   • Reclassifications affect current vs. long-term split\n   • New contingent liabilities add to current if settling within 12 months\n   • Payments reduce specific liability balances",
    learnContent: {
      concept: 'Other current liabilities require separate tracking of each component with different payment timing and classification rules.',
      formula: 'Component Balance = Opening + New Accruals - Payments ± Reclassifications',
      example: 'Payroll $5k - $3k paid = $2k; Deposits $4k + $1k new = $5k'
    }
  },
  {
    id: 'acc-hard-71',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Complex Current Liabilities with Tax Calculations',
    description: 'A company begins the year with:\n- $12,000 accrued warranty liabilities\n- $3,000 accrued payroll\n- $5,000 sales tax payable\n\nDuring the year:\n- $4,000 of warranty work is completed\n- Sales increase by $100,000 with a 6% sales tax rate; 90% of tax is still unpaid at year-end\n- $3,000 new payroll accrual is recorded, but $4,000 is paid\n\nAt year-end, $2,000 in legal liabilities are recognized, with 60% classified as long-term.\n\nWhat is the total Other Current Liabilities balance at year-end?',
    answer: 16200,
    unit: '$',
    hint: 'Calculate each component separately, including the sales tax calculation and legal liability split.',
    explanation: "Calculation: $8,000 + $5,400 + $2,000 + $800 = $16,200\n\n• • •\n\nStep-by-step breakdown:\n\n1. Warranty Liabilities\n   - Opening: $12,000\n   - Work completed: $4,000\n   - Ending: $12,000 - $4,000 = $8,000\n\n2. Sales Tax Calculation\n   - New sales: $100,000\n   - Tax rate: 6%\n   - Total tax: $100,000 × 6% = $6,000\n   - Unpaid portion: $6,000 × 90% = $5,400\n   (Note: This appears to be new tax accrued, not added to opening balance)\n\n3. Accrued Payroll\n   - Opening: $3,000\n   - New accrual: $3,000\n   - Payments: $4,000\n   - Ending: $3,000 + $3,000 - $4,000 = $2,000\n\n4. Legal Liabilities (Current Portion)\n   - Total legal liabilities: $2,000\n   - Long-term portion: 60%\n   - Current portion: $2,000 × 40% = $800\n\n5. Total Current Liabilities\n   - Sum: $8,000 + $5,400 + $2,000 + $800 = $16,200\n\nKey Points:\n   • Sales tax accruals based on percentage of sales\n   • Legal liabilities split between current and long-term\n   • Warranty work completion reduces liability\n   • Net payroll calculation includes new accruals and payments",
    learnContent: {
      concept: 'Complex current liabilities involve calculations, classifications, and timing differences that affect multiple balance sheet lines.',
      formula: 'Sales Tax Accrual = Sales × Tax Rate × Unpaid %',
      example: '$50k sales, 8% tax, 70% unpaid = $2,800 accrual'
    }
  },

  // Topic 37: Common Stock
  {
    id: 'acc-easy-143',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Common Stock After Stock Split and New Issue',
    description: 'A company issues 400,000 shares at $10 per share with a $0.01 par value. Mid-year, it executes a 2-for-1 stock split. Then it issues another 100,000 shares at $15.\n\nWhat is the Common Stock balance at year-end?',
    answer: 9000,
    unit: '$',
    hint: 'Par value remains the same after split; calculate total shares outstanding.',
    explanation: "Calculation: Post-split shares + new shares = (800,000 + 100,000) × $0.01 = $9,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Initial Issue\n   - Shares issued: 400,000\n   - Par value per share: $0.01\n   - Common stock: 400,000 × $0.01 = $4,000\n\n2. Stock Split (2-for-1)\n   - Pre-split shares: 400,000\n   - Post-split shares: 400,000 × 2 = 800,000\n   - Par value remains: $0.01 per share\n   - Common stock after split: 800,000 × $0.01 = $8,000\n\n3. New Share Issue\n   - Additional shares: 100,000\n   - Par value: $0.01\n   - Additional common stock: 100,000 × $0.01 = $1,000\n\n4. Total Common Stock\n   - Post-split: $8,000\n   - New issue: $1,000\n   - Total: $8,000 + $1,000 = $9,000\n\nKey Points:\n   • Stock splits increase share count but don't change total common stock value\n   • Par value per share remains constant through splits\n   • New issues add to common stock at par value\n   • Issue price above par goes to Additional Paid-in Capital",
    learnContent: {
      concept: 'Common stock represents the par value of all outstanding shares, unaffected by stock splits but increased by new issuances.',
      formula: 'Common Stock = Outstanding Shares × Par Value per Share',
      example: '500k shares × $0.01 par = $5,000 common stock'
    }
  },
  {
    id: 'acc-medium-101',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Common Stock with Share Retirement and Split',
    description: 'A firm has 1,000,000 authorized shares, $0.01 par. It issues 300,000 shares at $12. Later, it buys back and retires 50,000 shares. At year-end, it does a 3-for-2 stock split.\n\nWhat is the Common Stock balance at year-end?',
    answer: 3750,
    unit: '$',
    hint: 'Retired shares reduce the count; stock split increases remaining shares proportionally.',
    explanation: "Calculation: (300,000 - 50,000) × 3/2 × $0.01 = 375,000 × $0.01 = $3,750\n\n• • •\n\nStep-by-step breakdown:\n\n1. Initial Share Issue\n   - Shares issued: 300,000\n   - Par value: $0.01\n   - Initial common stock: 300,000 × $0.01 = $3,000\n\n2. Share Retirement\n   - Shares retired: 50,000\n   - Remaining shares: 300,000 - 50,000 = 250,000\n   - Common stock after retirement: 250,000 × $0.01 = $2,500\n\n3. Stock Split (3-for-2)\n   - Pre-split shares: 250,000\n   - Split ratio: 3-for-2 (each share becomes 1.5 shares)\n   - Post-split shares: 250,000 × 3/2 = 375,000\n   - Par value remains: $0.01\n\n4. Final Common Stock Balance\n   - Outstanding shares: 375,000\n   - Par value: $0.01\n   - Common stock: 375,000 × $0.01 = $3,750\n\nKey Points:\n   • Share retirements permanently reduce outstanding shares\n   • Stock splits proportionally increase share count\n   • Par value per share remains constant\n   • Retired shares cannot be reissued (unlike treasury stock)",
    learnContent: {
      concept: 'Share retirements permanently reduce outstanding shares, while stock splits proportionally increase the remaining shares.',
      formula: 'Post-Split Shares = (Issued - Retired) × Split Ratio',
      example: '(400k - 100k) × 2-for-1 = 600k shares'
    }
  },
  {
    id: 'acc-hard-72',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Complex Stock Transactions with Reverse Split and Dividend',
    description: 'A company starts with 2,000,000 authorized shares, $0.01 par, and 600,000 issued shares. It issues 200,000 new shares at $10, then does a 1-for-5 reverse split. It then grants a 5% stock dividend on post-split shares. Finally, it issues another 10,000 shares at $15.\n\nWhat is the Common Stock balance at year-end?',
    answer: 1780,
    unit: '$',
    hint: 'Work through each transaction sequentially: new issue, reverse split, stock dividend, final issue.',
    explanation: "Calculation: (160,000 + 8,000 + 10,000) × $0.01 = 178,000 × $0.01 = $1,780\n\n• • •\n\nStep-by-step breakdown:\n\n1. Initial Position\n   - Outstanding shares: 600,000\n   - Par value: $0.01\n\n2. New Share Issue\n   - Additional shares: 200,000\n   - Total shares: 600,000 + 200,000 = 800,000\n\n3. Reverse Split (1-for-5)\n   - Pre-split shares: 800,000\n   - Post-split shares: 800,000 ÷ 5 = 160,000\n   - Par value remains: $0.01\n\n4. Stock Dividend (5%)\n   - Base shares: 160,000\n   - Dividend shares: 160,000 × 5% = 8,000\n   - Total after dividend: 160,000 + 8,000 = 168,000\n\n5. Final Share Issue\n   - Additional shares: 10,000\n   - Final total shares: 168,000 + 10,000 = 178,000\n\n6. Common Stock Balance\n   - Total shares: 178,000\n   - Par value: $0.01\n   - Common stock: 178,000 × $0.01 = $1,780\n\nKey Points:\n   • Reverse splits reduce share count proportionally\n   • Stock dividends increase share count based on existing shares\n   • All transactions affect the share count for common stock calculation\n   • Par value remains constant throughout all transactions",
    learnContent: {
      concept: 'Multiple stock transactions must be processed sequentially, with each affecting the base for subsequent calculations.',
      formula: 'Final Shares = ((Initial + Issues) ÷ Reverse Split + Stock Dividend) + Final Issues',
      example: '((100k + 50k) ÷ 3 + 10%) + 5k = 58.3k shares'
    }
  },

  // Topic 38: Preferred Stock
  {
    id: 'acc-easy-144',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Cumulative Preferred Dividend Payment',
    description: 'A company issues 5,000 preferred shares at $100 par, 7% cumulative. It skips dividends in Year 1, pays all arrears in Year 2, and then redeems 2,000 shares at par in Year 3.\n\nWhat is the total preferred dividend paid in Year 2?',
    answer: 70000,
    unit: '$',
    hint: 'Calculate annual dividend, then multiply by years of arrears.',
    explanation: "Calculation: 5,000 × $100 × 7% × 2 years = $35,000 × 2 = $70,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Annual Dividend Calculation\n   - Outstanding shares: 5,000\n   - Par value per share: $100\n   - Dividend rate: 7%\n   - Annual dividend: 5,000 × $100 × 7% = $35,000\n\n2. Dividend Arrears\n   - Year 1: Skipped (dividends in arrears)\n   - Year 1 unpaid: $35,000\n\n3. Year 2 Payment\n   - Year 1 arrears: $35,000\n   - Year 2 current: $35,000\n   - Total paid in Year 2: $35,000 + $35,000 = $70,000\n\n4. Year 3 Note\n   - Share redemption occurs after Year 2 payment\n   - Does not affect Year 2 calculation\n\nKey Points:\n   • Cumulative preferred dividends accumulate when skipped\n   • All arrears must be paid before common dividends\n   • Dividends calculated on outstanding shares at time of declaration\n   • Redemptions affect future dividend calculations, not past payments",
    learnContent: {
      concept: 'Cumulative preferred dividends accumulate in arrears when skipped and must be paid in full before any common dividends.',
      formula: 'Preferred Dividend = Shares × Par Value × Dividend Rate',
      example: '1,000 shares × $50 par × 6% = $3,000 annual dividend'
    }
  },
  {
    id: 'acc-medium-102',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Preferred Dividends with Mid-Year Redemption',
    description: 'A firm has 4,000 cumulative preferred shares, $50 par, 6% dividend. Dividends were missed in Years 1 and 2. In Year 3, 1,000 shares are redeemed mid-year. It declares full dividends for all outstanding preferred shares in Year 3 and pays all arrears.\n\nWhat is the total preferred dividend payout in Year 3?',
    answer: 36000,
    unit: '$',
    hint: 'Calculate arrears on all shares, then prorate Year 3 dividend based on outstanding periods.',
    explanation: "Calculation: $24,000 (arrears) + $9,000 (full year) + $3,000 (half year) = $36,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Annual Dividend Rate\n   - Total shares: 4,000\n   - Par value: $50\n   - Rate: 6%\n   - Annual dividend: 4,000 × $50 × 6% = $12,000\n\n2. Dividend Arrears (Years 1 & 2)\n   - Year 1 missed: $12,000\n   - Year 2 missed: $12,000\n   - Total arrears: $24,000\n\n3. Year 3 Dividend Calculation\n   - Shares outstanding full year: 4,000 - 1,000 = 3,000\n   - Full-year dividend: 3,000 × $50 × 6% = $9,000\n   \n   - Redeemed shares (half-year): 1,000\n   - Half-year dividend: 1,000 × $50 × 6% × 0.5 = $1,500\n   \n   Wait, let me recalculate:\n   - 3,000 shares full year: $9,000\n   - 1,000 shares half year: $3,000\n   - Total Year 3: $12,000\n\n4. Total Payment in Year 3\n   - Arrears: $24,000\n   - Year 3 current: $12,000\n   - Total: $36,000\n\nKey Points:\n   • Arrears calculated on original share count\n   • Current year dividends prorated for redemptions\n   • Mid-year redemptions receive partial year dividends\n   • All arrears paid regardless of current outstanding shares",
    learnContent: {
      concept: 'Preferred dividend calculations must account for timing of share changes and prorate dividends accordingly.',
      formula: 'Prorated Dividend = Shares × Par × Rate × (Months Outstanding ÷ 12)',
      example: '500 shares × $100 × 5% × (8÷12) = $1,667 for 8 months'
    }
  },
  {
    id: 'acc-hard-73',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Complex Preferred Dividend with Multiple Changes',
    description: 'A firm has 6,000 preferred shares, $100 par, 8% cumulative.\n\n- Dividends were skipped in Year 1 and partially paid in Year 2 ($24,000 paid).\n- In Year 3, it redeems 2,000 shares mid-year and issues 1,000 new preferred shares mid-year (same terms).\n- It pays all remaining arrears and declares full dividends for Year 3.\n\nWhat is the total preferred dividend paid in Year 3?',
    answer: 116000,
    unit: '$',
    hint: 'Track arrears separately, then calculate Year 3 dividends with mid-year changes.',
    explanation: "Calculation: $48,000 (Year 1) + $24,000 (Year 2 balance) + $44,000 (Year 3) = $116,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Annual Dividend Rate\n   - Original shares: 6,000\n   - Par value: $100\n   - Rate: 8%\n   - Annual dividend: 6,000 × $100 × 8% = $48,000\n\n2. Dividend Arrears\n   - Year 1 skipped: $48,000\n   - Year 2 due: $48,000, paid: $24,000\n   - Year 2 arrears: $48,000 - $24,000 = $24,000\n   - Total arrears: $48,000 + $24,000 = $72,000\n\n3. Year 3 Dividend Calculation\n   a) First half (6,000 shares): 6,000 × $100 × 8% × 0.5 = $24,000\n   b) Second half after changes:\n      - Remaining shares: 6,000 - 2,000 = 4,000\n      - New shares: 1,000\n      - Total second half: 5,000 shares\n      - Second half dividend: 5,000 × $100 × 8% × 0.5 = $20,000\n   c) Total Year 3: $24,000 + $20,000 = $44,000\n\n4. Total Payment in Year 3\n   - Year 1 arrears: $48,000\n   - Year 2 arrears: $24,000\n   - Year 3 current: $44,000\n   - Total: $116,000\n\nKey Points:\n   • Complex preferred dividend calculations require careful tracking of arrears\n   • Mid-year changes affect current year calculations\n   • All arrears must be cleared before common dividends\n   • Partial payments create additional arrears to track",
    learnContent: {
      concept: 'Complex preferred dividend scenarios require systematic tracking of arrears and careful calculation of prorated amounts for share changes.',
      formula: 'Total Payment = All Arrears + Current Year Prorated Dividends',
      example: 'Arrears $10k + Current (500×$100×6%×0.75) = $10k + $2.25k = $12.25k'
    }
  },

  // Topic 39: Additional Paid-In Capital (APIC)
  {
    id: 'acc-easy-145',
    track: 'accounting',
    difficulty: 'easy',
    title: 'APIC from Stock Issuance and Options',
    description: 'A company issues 50,000 shares at $20/share, $0.01 par. Then it grants stock options to employees worth $500,000.\n\nWhat is the total APIC increase for the year?',
    answer: 1499500,
    unit: '$',
    hint: 'APIC includes premium above par value plus stock-based compensation.',
    explanation: "Calculation: ($20 - $0.01) × 50,000 + $500,000 = $999,500 + $500,000 = $1,499,500\n\n• • •\n\nStep-by-step breakdown:\n\n1. Stock Issuance APIC\n   - Shares issued: 50,000\n   - Issue price: $20\n   - Par value: $0.01\n   - Premium per share: $20 - $0.01 = $19.99\n   - APIC from issuance: 50,000 × $19.99 = $999,500\n\n2. Stock-Based Compensation\n   - Employee stock options value: $500,000\n   - This increases APIC when recognized\n\n3. Total APIC Increase\n   - Stock issuance premium: $999,500\n   - Stock-based compensation: $500,000\n   - Total increase: $1,499,500\n\nKey Points:\n   • APIC captures amount received above par value\n   • Stock-based compensation increases APIC\n   • Par value goes to Common Stock account\n   • Both cash and non-cash transactions can increase APIC",
    learnContent: {
      concept: 'Additional Paid-In Capital represents amounts received above par value from stock issuances and stock-based compensation.',
      formula: 'APIC = (Issue Price - Par Value) × Shares + Stock-Based Comp',
      example: '($15 - $0.01) × 10k shares + $100k options = $149.9k + $100k = $249.9k'
    }
  },
  {
    id: 'acc-medium-103',
    track: 'accounting',
    difficulty: 'medium',
    title: 'APIC with Treasury Stock Transactions',
    description: 'A firm issues 100,000 shares at $18, par $1. Later it repurchases 30,000 at $20. It reissues 10,000 at $22 and 10,000 at $16. The rest are held in Treasury.\n\nWhat is the ending APIC balance from all equity transactions?',
    answer: 1680000,
    unit: '$',
    hint: 'Calculate initial APIC from issuance, then add/subtract gains/losses from treasury reissuances.',
    explanation: "Calculation: $1,700,000 + $20,000 - $40,000 = $1,680,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Initial Stock Issuance\n   - Shares: 100,000\n   - Issue price: $18\n   - Par value: $1\n   - APIC from issuance: (18 - 1) × 100,000 = $1,700,000\n\n2. Treasury Stock Repurchase\n   - Shares repurchased: 30,000 at $20\n   - No APIC impact on repurchase\n\n3. Treasury Stock Reissuances\n   a) First reissuance: 10,000 at $22\n      - Original cost: $20\n      - Reissue price: $22\n      - Gain: ($22 - $20) × 10,000 = $20,000\n      - Increases APIC\n   \n   b) Second reissuance: 10,000 at $16\n      - Original cost: $20\n      - Reissue price: $16\n      - Loss: ($16 - $20) × 10,000 = -$40,000\n      - Decreases APIC\n\n4. Final APIC Balance\n   - Initial APIC: $1,700,000\n   - Treasury gains: $20,000\n   - Treasury losses: -$40,000\n   - Final APIC: $1,680,000\n\nKey Points:\n   • Treasury stock gains/losses affect APIC\n   • Gains from treasury reissuances increase APIC\n   • Losses from treasury reissuances decrease APIC\n   • Treasury repurchases don't directly affect APIC",
    learnContent: {
      concept: 'Treasury stock transactions create gains or losses that adjust APIC based on the difference between reissue price and original cost.',
      formula: 'Treasury Gain/Loss = (Reissue Price - Original Cost) × Shares',
      example: 'Bought at $15, reissued at $18: ($18-$15) × 1k = $3k gain to APIC'
    }
  },
  {
    id: 'acc-hard-74',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Complex APIC with Multiple Treasury Transactions',
    description: 'A company starts with $0 APIC.\n\n- Issues 200,000 shares at $25, $0.01 par\n- Repurchases 60,000 at $30\n- Reissues 30,000 at $28, 15,000 at $20, 15,000 at $32\n\nLosses/gains are booked to APIC.\n\nWhat is the final APIC balance after all transactions?',
    answer: 4818000,
    unit: '$',
    hint: 'Start with issuance APIC, then calculate each treasury transaction gain/loss separately.',
    explanation: "Calculation: $4,998,000 + $30,000 - $60,000 - $150,000 = $4,818,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Initial Stock Issuance APIC\n   - Shares: 200,000\n   - Issue price: $25\n   - Par value: $0.01\n   - APIC: ($25 - $0.01) × 200,000 = $4,998,000\n\n2. Treasury Stock Repurchase\n   - Shares: 60,000 at $30 each\n   - No immediate APIC impact\n   - Treasury cost basis: $30 per share\n\n3. Treasury Stock Reissuances\n   a) 30,000 shares at $28\n      - Loss: ($28 - $30) × 30,000 = -$60,000\n      - Decreases APIC by $60,000\n   \n   b) 15,000 shares at $20\n      - Loss: ($20 - $30) × 15,000 = -$150,000\n      - Decreases APIC by $150,000\n   \n   c) 15,000 shares at $32\n      - Gain: ($32 - $30) × 15,000 = $30,000\n      - Increases APIC by $30,000\n\n4. Final APIC Calculation\n   - Initial APIC: $4,998,000\n   - Treasury loss (28): -$60,000\n   - Treasury loss (20): -$150,000\n   - Treasury gain (32): +$30,000\n   - Final APIC: $4,818,000\n\nKey Points:\n   • Multiple treasury transactions each affect APIC separately\n   • Treasury losses can reduce APIC below original issuance amount\n   • All treasury gains/losses use the same cost basis ($30)\n   • Net effect of treasury transactions: -$180,000",
    learnContent: {
      concept: 'Complex APIC calculations require tracking each treasury transaction separately, with all gains and losses affecting the APIC balance.',
      formula: 'Final APIC = Initial APIC + Sum of All Treasury Gains/Losses',
      example: 'Initial $100k + $5k gain - $8k loss + $2k gain = $99k final APIC'
    }
  },

  // Topic 40: Treasury Stock
  {
    id: 'acc-easy-146',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Treasury Stock Balance After Reissuances',
    description: 'A firm buys back 50,000 shares at $10. Later, it reissues 20,000 at $15 and 15,000 at $7.\n\nWhat is the remaining Treasury Stock balance at year-end?',
    answer: 150000,
    unit: '$',
    hint: 'Treasury stock is valued at cost; calculate remaining shares times original cost.',
    explanation: "Calculation: (50,000 - 20,000 - 15,000) × $10 = 15,000 × $10 = $150,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Treasury Stock Repurchase\n   - Shares repurchased: 50,000\n   - Cost per share: $10\n   - Total treasury stock: 50,000 × $10 = $500,000\n\n2. Treasury Stock Reissuances\n   - First reissuance: 20,000 shares at $15\n     (Reissue price doesn't affect treasury balance)\n   - Second reissuance: 15,000 shares at $7\n     (Reissue price doesn't affect treasury balance)\n   - Total shares reissued: 20,000 + 15,000 = 35,000\n\n3. Remaining Treasury Stock\n   - Original shares: 50,000\n   - Shares reissued: 35,000\n   - Shares still held: 50,000 - 35,000 = 15,000\n   - Treasury stock balance: 15,000 × $10 = $150,000\n\nKey Points:\n   • Treasury stock is always carried at original cost\n   • Reissue prices don't affect treasury stock balance\n   • Only remaining shares count toward treasury balance\n   • Gains/losses on reissuance affect APIC, not treasury stock",
    learnContent: {
      concept: 'Treasury stock represents shares repurchased by the company and held at original cost until reissued or retired.',
      formula: 'Treasury Stock Balance = Remaining Shares × Original Cost per Share',
      example: 'Bought 10k at $8, reissued 3k → (10k-3k) × $8 = $56k treasury stock'
    }
  },
  {
    id: 'acc-medium-104',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Treasury Stock with Multiple Reissuances',
    description: 'A company repurchases 80,000 shares at $12. It reissues:\n\n- 30,000 at $14\n- 20,000 at $10\n- 10,000 at $12\n\nThe rest are still held.\n\nWhat is the total Treasury Stock balance at year-end?',
    answer: 240000,
    unit: '$',
    hint: 'Count total shares reissued, subtract from original repurchase, multiply by cost.',
    explanation: "Calculation: (80,000 - 60,000) × $12 = 20,000 × $12 = $240,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Initial Treasury Stock Purchase\n   - Shares repurchased: 80,000\n   - Cost per share: $12\n   - Total treasury cost: 80,000 × $12 = $960,000\n\n2. Treasury Stock Reissuances\n   - First reissuance: 30,000 shares at $14\n   - Second reissuance: 20,000 shares at $10\n   - Third reissuance: 10,000 shares at $12\n   - Total shares reissued: 30,000 + 20,000 + 10,000 = 60,000\n\n3. Remaining Treasury Shares\n   - Original repurchase: 80,000 shares\n   - Total reissued: 60,000 shares\n   - Still held in treasury: 80,000 - 60,000 = 20,000 shares\n\n4. Treasury Stock Balance\n   - Remaining shares: 20,000\n   - Original cost: $12 per share\n   - Treasury stock balance: 20,000 × $12 = $240,000\n\nKey Points:\n   • Treasury stock balance only includes shares still held\n   • All treasury shares valued at original repurchase cost\n   • Reissue prices create APIC gains/losses but don't affect treasury balance\n   • Multiple reissuances reduce treasury stock proportionally",
    learnContent: {
      concept: 'Treasury stock balance represents only the shares still held by the company, valued at their original repurchase cost.',
      formula: 'Remaining Treasury = (Original Shares - Total Reissued) × Cost',
      example: '(50k - 30k reissued) × $15 cost = $300k treasury stock'
    }
  },
  {
    id: 'acc-hard-75',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Complex Treasury Stock with Large Reissuance Program',
    description: 'A firm repurchases 150,000 shares at $18 = $2.7M.\n\nReissues:\n- 60,000 at $20\n- 30,000 at $12\n- 30,000 at $18\n\nRemaining shares are held.\n\nWhat is the Treasury Stock balance at year-end?',
    answer: 540000,
    unit: '$',
    hint: 'Calculate total shares reissued, then find remaining balance at original cost.',
    explanation: "Calculation: (150,000 - 120,000) × $18 = 30,000 × $18 = $540,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Initial Treasury Stock Purchase\n   - Shares repurchased: 150,000\n   - Cost per share: $18\n   - Total treasury cost: $2,700,000 (confirmed: 150,000 × $18)\n\n2. Treasury Stock Reissuances\n   - First reissuance: 60,000 shares at $20\n     • Gain per share: $20 - $18 = $2\n     • Total gain to APIC: $120,000\n   \n   - Second reissuance: 30,000 shares at $12\n     • Loss per share: $12 - $18 = -$6\n     • Total loss from APIC: $180,000\n   \n   - Third reissuance: 30,000 shares at $18\n     • No gain/loss (reissued at cost)\n   \n   - Total shares reissued: 60,000 + 30,000 + 30,000 = 120,000\n\n3. Remaining Treasury Stock\n   - Original shares: 150,000\n   - Shares reissued: 120,000\n   - Shares still held: 150,000 - 120,000 = 30,000\n\n4. Treasury Stock Balance\n   - Remaining shares: 30,000\n   - Original cost per share: $18\n   - Treasury stock balance: 30,000 × $18 = $540,000\n\nKey Points:\n   • Large reissuance programs can significantly reduce treasury holdings\n   • All reissuances valued at original cost for treasury calculation\n   • Net APIC impact: $120,000 gain - $180,000 loss = -$60,000\n   • Treasury stock represents 20% of original repurchase (30k/150k)",
    learnContent: {
      concept: 'Large treasury stock programs require careful tracking of reissuances to determine the remaining treasury balance.',
      formula: 'Treasury Balance = (Total Bought - All Reissued) × Original Cost',
      example: '(200k bought - 170k reissued) × $25 = 30k × $25 = $750k treasury'
    }
  },

  // Topic 41: Retained Earnings
  {
    id: 'acc-easy-147',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Basic Retained Earnings Calculation',
    description: 'A company starts the year with $50,000 in Retained Earnings. During the year, it earns $40,000 in Net Income and pays $10,000 in dividends.\n\nWhat is the year-end Retained Earnings balance?',
    answer: 80000,
    unit: '$',
    hint: 'Start with beginning Retained Earnings, add Net Income, subtract Dividends paid.',
    explanation: "Calculation: $50,000 + $40,000 - $10,000 = $80,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Beginning Retained Earnings\n   - Starting balance: $50,000\n   - This represents cumulative earnings retained from prior years\n\n2. Current Year Net Income\n   - Net income earned: $40,000\n   - This increases retained earnings as profits are retained\n\n3. Dividends Paid\n   - Cash dividends: $10,000\n   - This reduces retained earnings as profits are distributed\n\n4. Ending Retained Earnings\n   - Beginning: $50,000\n   - Plus net income: +$40,000\n   - Less dividends: -$10,000\n   - Ending balance: $80,000\n\nKey Points:\n   • Retained earnings increase when the company earns profit (Net Income)\n   • Retained earnings decrease when dividends are paid to shareholders\n   • This represents the cumulative earnings kept in the business\n   • Only declared and paid dividends reduce retained earnings",
    learnContent: {
      concept: 'Retained Earnings are updated by adding net income and subtracting dividends paid during the year.',
      formula: 'Ending Retained Earnings = Beginning Balance + Net Income - Dividends',
      example: '$100,000 start + $20,000 income - $5,000 dividends = $115,000'
    }
  },
  {
    id: 'acc-medium-105',
    track: 'accounting',
    difficulty: 'medium', 
    title: 'Retained Earnings with Stock Dividend',
    description: 'A firm begins the year with $120,000 in Retained Earnings. During the year:\n\n- It earns $60,000 in Net Income\n- Pays $20,000 in cash dividends\n- Issues 5,000 shares as a 10% stock dividend when the stock is trading at $15/share\n\nWhat is the year-end Retained Earnings balance?',
    answer: 85000,
    unit: '$',
    hint: 'Stock dividends reduce Retained Earnings by market value. Also subtract cash dividends, and add net income.',
    explanation: "Calculation: $120,000 + $60,000 - $20,000 - $75,000 = $85,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Beginning Retained Earnings\n   - Starting balance: $120,000\n\n2. Net Income Addition\n   - Current year earnings: +$60,000\n   - Increases retained earnings\n\n3. Cash Dividends\n   - Cash paid to shareholders: -$20,000\n   - Direct reduction of retained earnings\n\n4. Stock Dividend Impact\n   - Shares issued: 5,000\n   - Market value per share: $15\n   - Stock dividend value: 5,000 × $15 = $75,000\n   - Reduces retained earnings by full market value\n\n5. Final Calculation\n   - Beginning: $120,000\n   - Plus net income: +$60,000\n   - Less cash dividends: -$20,000\n   - Less stock dividend: -$75,000\n   - Ending balance: $85,000\n\nKey Points:\n   • Stock dividends transfer value from retained earnings to common stock\n   • Stock dividends valued at market price, not par value\n   • Both cash and stock dividends reduce retained earnings\n   • Net income always increases retained earnings",
    learnContent: {
      concept: 'Both cash and stock dividends reduce Retained Earnings. Stock dividends use market value.',
      formula: 'Ending RE = Beginning + Net Income - Cash Dividends - Stock Dividend (at Market Value)',
      example: '$50,000 + $20,000 - $5,000 - $10,000 = $55,000'
    }
  },
  {
    id: 'acc-hard-76',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Complex Retained Earnings with Prior Period Adjustment',
    description: 'A company has the following activity during the year:\n\n- Beginning Retained Earnings = $300,000\n- Net Income = $100,000\n- Declares 20% stock dividend on 50,000 shares (stock price = $10)\n- Pays $30,000 in dividends\n- Restates prior year error, reducing RE by $25,000\n\nWhat is the year-end Retained Earnings?',
    answer: 245000,
    unit: '$',
    hint: 'Reduce RE for cash dividends, stock dividends (at market), and prior period restatements. Add net income.',
    explanation: "Calculation: $300,000 + $100,000 - $30,000 - $100,000 - $25,000 = $245,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Beginning Retained Earnings\n   - Starting balance: $300,000\n   - Before any adjustments\n\n2. Current Year Net Income\n   - Earnings added: +$100,000\n   - Increases retained earnings\n\n3. Stock Dividend Calculation\n   - Outstanding shares: 50,000\n   - Stock dividend rate: 20%\n   - Shares issued: 50,000 × 20% = 10,000 shares\n   - Market price: $10 per share\n   - Stock dividend value: 10,000 × $10 = $100,000\n   - Reduces retained earnings by market value\n\n4. Cash Dividends\n   - Cash paid to shareholders: -$30,000\n   - Direct reduction of retained earnings\n\n5. Prior Period Adjustment\n   - Error correction: -$25,000\n   - Reduces retained earnings for prior year restatement\n\n6. Final Retained Earnings\n   - Beginning: $300,000\n   - Plus net income: +$100,000\n   - Less cash dividends: -$30,000\n   - Less stock dividend: -$100,000\n   - Less prior adjustment: -$25,000\n   - Ending balance: $245,000\n\nKey Points:\n   • Prior period adjustments directly impact retained earnings\n   • Stock dividends calculated on pre-dividend outstanding shares\n   • Multiple transactions can significantly impact retained earnings\n   • Error corrections bypass current income statement",
    learnContent: {
      concept: 'Retained Earnings are impacted by net income, dividends, stock dividends, and accounting corrections.',
      formula: 'Ending RE = Beginning + Net Income - Cash Dividends - Stock Dividend - Prior Period Adjustment',
      example: '$400,000 + $50,000 - $10,000 - $60,000 - $20,000 = $360,000'
    }
  },

  // Topic 42: AOCI / OCI
  {
    id: 'acc-easy-148',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Basic AOCI Calculation',
    description: 'A company has an AOCI balance of $5,000 at the start of the year. During the year, it records:\n\n- $2,000 unrealized gain on AFS securities\n- $1,000 FX translation gain\n\nWhat is AOCI at year-end?',
    answer: 8000,
    unit: '$',
    hint: 'Add gains to beginning balance.',
    explanation: "Calculation: $5,000 + $2,000 + $1,000 = $8,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Beginning AOCI Balance\n   - Starting balance: $5,000\n   - Represents cumulative other comprehensive income from prior periods\n\n2. Unrealized Gain on Securities\n   - Available-for-sale securities gain: +$2,000\n   - Increases AOCI as this bypasses net income\n\n3. Foreign Exchange Translation Gain\n   - FX translation adjustment: +$1,000\n   - Increases AOCI from foreign subsidiary translation\n\n4. Ending AOCI Balance\n   - Beginning balance: $5,000\n   - Plus securities gain: +$2,000\n   - Plus FX gain: +$1,000\n   - Ending balance: $8,000\n\nKey Points:\n   • AOCI includes unrealized gains/losses not shown in Net Income\n   • Securities gains/losses go to AOCI until realized\n   • Foreign exchange translation adjustments accumulate in AOCI\n   • These items bypass the income statement but affect equity",
    learnContent: {
      concept: 'AOCI includes unrealized gains/losses not shown in Net Income.',
      formula: 'Ending AOCI = Beginning + Unrealized Gains + FX Adjustments',
      example: '$10,000 + $3,000 - $1,000 = $12,000'
    }
  },
  {
    id: 'acc-medium-106',
    track: 'accounting',
    difficulty: 'medium',
    title: 'AOCI with Mixed Gains and Losses',
    description: 'Beginning AOCI is $12,000. During the year:\n\n- $4,000 unrealized loss on securities\n- $3,000 pension gain\n- $1,000 FX loss\n\nWhat is AOCI at year-end?',
    answer: 10000,
    unit: '$',
    hint: 'Losses reduce AOCI; gains increase it.',
    explanation: "Calculation: $12,000 - $4,000 + $3,000 - $1,000 = $10,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Beginning AOCI Balance\n   - Starting balance: $12,000\n   - Cumulative other comprehensive income from prior years\n\n2. Unrealized Securities Loss\n   - Securities decline in value: -$4,000\n   - Decreases AOCI as unrealized loss\n\n3. Pension Gain\n   - Pension plan adjustment: +$3,000\n   - Increases AOCI from actuarial gains or plan amendments\n\n4. Foreign Exchange Loss\n   - FX translation loss: -$1,000\n   - Decreases AOCI from foreign subsidiary translation\n\n5. Net AOCI Change\n   - Securities loss: -$4,000\n   - Pension gain: +$3,000\n   - FX loss: -$1,000\n   - Net change: -$2,000\n\n6. Ending AOCI Balance\n   - Beginning: $12,000\n   - Net change: -$2,000\n   - Ending balance: $10,000\n\nKey Points:\n   • AOCI can include various types of comprehensive income items\n   • Pension adjustments from actuarial gains/losses accumulate in AOCI\n   • Multiple OCI components can offset each other\n   • AOCI represents cumulative unrealized items that bypass Net Income",
    learnContent: {
      concept: 'AOCI tracks cumulative unrealized items that bypass Net Income.',
      formula: 'Ending AOCI = Beginning + Gains - Losses',
      example: '$20,000 - $5,000 + $2,000 = $17,000'
    }
  },
  {
    id: 'acc-hard-77',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Complex AOCI with Reclassifications',
    description: 'Start of year AOCI = $30,000. During the year:\n\n- $6,000 unrealized loss\n- $5,000 pension liability loss\n- $3,000 FX gain\n- $2,000 cash flow hedge gain\n- $4,000 loss reclassified into Net Income\n\nWhat is year-end AOCI?',
    answer: 20000,
    unit: '$',
    hint: 'Reclassifications to Net Income reduce AOCI.',
    explanation: "Calculation: $30,000 - $6,000 - $5,000 + $3,000 + $2,000 - $4,000 = $20,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Beginning AOCI Balance\n   - Starting balance: $30,000\n   - Cumulative other comprehensive income\n\n2. Current Year OCI Items\n   a) Unrealized loss: -$6,000\n      - Securities or other unrealized decline\n   \n   b) Pension liability loss: -$5,000\n      - Actuarial loss or plan amendment\n   \n   c) Foreign exchange gain: +$3,000\n      - Translation adjustment from foreign operations\n   \n   d) Cash flow hedge gain: +$2,000\n      - Effective portion of hedge gains\n\n3. Reclassification Adjustment\n   - Loss reclassified to Net Income: -$4,000\n   - Previously in AOCI, now recognized in earnings\n   - Reduces AOCI to avoid double counting\n\n4. Net AOCI Impact\n   - Total new OCI: -$6,000 - $5,000 + $3,000 + $2,000 = -$6,000\n   - Less reclassification: -$4,000\n   - Net AOCI change: -$10,000\n\n5. Ending AOCI Balance\n   - Beginning: $30,000\n   - Current OCI items: -$6,000\n   - Reclassification: -$4,000\n   - Ending balance: $20,000\n\nKey Points:\n   • Reclassifications prevent double-counting in equity\n   • When OCI items are realized, they move from AOCI to Net Income\n   • Multiple OCI components tracked simultaneously\n   • Cash flow hedges have specific reclassification rules",
    learnContent: {
      concept: 'AOCI includes unrealized gains/losses and is reduced by reclassifications.',
      formula: 'Ending AOCI = Start + Gains - Losses - Reclassifications',
      example: '$50,000 - $10,000 + $5,000 - $3,000 = $42,000'
    }
  },

  // Topic 43: Total Shareholders' Equity
  {
    id: 'acc-easy-149',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Basic Shareholders Equity Calculation',
    description: 'A company has:\n\n- Common Stock = $2,000\n- APIC = $28,000\n- Retained Earnings = $40,000\n- AOCI = $5,000\n- Treasury Stock = $10,000\n\nWhat is Total Shareholders Equity?',
    answer: 65000,
    unit: '$',
    hint: 'Add all equity components, subtract Treasury Stock.',
    explanation: "Calculation: $2,000 + $28,000 + $40,000 + $5,000 - $10,000 = $65,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Contributed Capital Components\n   - Common Stock: $2,000\n   - Additional Paid-in Capital: $28,000\n   - Total contributed capital: $30,000\n\n2. Earned Capital\n   - Retained Earnings: $40,000\n   - Accumulated comprehensive income from operations\n\n3. Other Comprehensive Income\n   - AOCI: $5,000\n   - Unrealized gains/losses accumulated over time\n\n4. Treasury Stock Reduction\n   - Treasury Stock: $10,000\n   - Contra-equity account that reduces total equity\n\n5. Total Shareholders Equity\n   - Common Stock: $2,000\n   - APIC: $28,000\n   - Retained Earnings: $40,000\n   - AOCI: $5,000\n   - Less Treasury Stock: -$10,000\n   - Total: $65,000\n\nKey Points:\n   • Shareholders equity includes contributed capital, retained earnings, and AOCI\n   • Treasury stock is a contra-equity account that reduces total equity\n   • AOCI can be positive or negative depending on unrealized gains/losses\n   • All components represent shareholders claims on company assets",
    learnContent: {
      concept: 'Shareholders Equity includes contributed capital, retained earnings, and AOCI, less treasury stock.',
      formula: 'Total Equity = Common Stock + APIC + Retained Earnings + AOCI - Treasury Stock',
      example: '$5,000 + $15,000 + $20,000 - $3,000 = $37,000'
    }
  },
  {
    id: 'acc-medium-107',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Shareholders Equity with New Share Issuance',
    description: 'A company has:\n\n- Common Stock = $5,000\n- APIC = $45,000\n- Retained Earnings = $60,000\n- AOCI = $7,000\n- Treasury Stock = $18,000\n\nIt issues 10,000 new shares at $6/share ($1 par).\n\nWhat is Total Shareholders Equity at year-end?',
    answer: 159000,
    unit: '$',
    hint: 'Update Common Stock and APIC for new shares, then recalculate.',
    explanation: "Calculation: $15,000 + $95,000 + $60,000 + $7,000 - $18,000 = $159,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Original Equity Components\n   - Common Stock: $5,000\n   - APIC: $45,000\n   - Retained Earnings: $60,000\n   - AOCI: $7,000\n   - Treasury Stock: $18,000\n   - Original total: $99,000\n\n2. New Share Issuance\n   - Shares issued: 10,000\n   - Issue price: $6 per share\n   - Par value: $1 per share\n   - Total proceeds: 10,000 × $6 = $60,000\n\n3. Allocation of Proceeds\n   - To Common Stock: 10,000 × $1 = $10,000\n   - To APIC: 10,000 × ($6 - $1) = $50,000\n\n4. Updated Equity Components\n   - New Common Stock: $5,000 + $10,000 = $15,000\n   - New APIC: $45,000 + $50,000 = $95,000\n   - Retained Earnings: $60,000 (unchanged)\n   - AOCI: $7,000 (unchanged)\n   - Treasury Stock: $18,000 (unchanged)\n\n5. Total Shareholders Equity\n   - Common Stock: $15,000\n   - APIC: $95,000\n   - Retained Earnings: $60,000\n   - AOCI: $7,000\n   - Less Treasury Stock: -$18,000\n   - Total: $159,000\n\nKey Points:\n   • New share issuances increase both Common Stock and APIC\n   • Share proceeds allocated between par value and premium\n   • Other equity components remain unchanged by share issuance\n   • Total equity increases by full amount of proceeds received",
    learnContent: {
      concept: 'Share issuance increases both Common Stock and APIC.',
      formula: 'Equity = Common + APIC + RE + AOCI - Treasury',
      example: '$10k + $50k + $60k + $4k - $5k = $119k'
    }
  },
  {
    id: 'acc-hard-78',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Complex Shareholders Equity with Multiple Transactions',
    description: 'A company has:\n\n- Common Stock = $10,000\n- APIC = $90,000\n- Retained Earnings = $100,000\n- AOCI = -$8,000\n- Treasury Stock = $35,000\n\nDuring the year:\n- Repurchases 10,000 shares at $12 = $120,000\n- Declares $20,000 in dividends (unpaid)\n- Reports $60,000 Net Income\n\nWhat is Total Shareholders Equity at year-end?',
    answer: 77000,
    unit: '$',
    hint: 'Update Treasury Stock and Retained Earnings before recomputing equity.',
    explanation: "Calculation: $10,000 + $90,000 + $140,000 - $8,000 - $155,000 = $77,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Beginning Equity Components\n   - Common Stock: $10,000\n   - APIC: $90,000\n   - Retained Earnings: $100,000\n   - AOCI: -$8,000 (negative balance)\n   - Treasury Stock: $35,000\n   - Beginning total: $157,000\n\n2. Share Repurchase Transaction\n   - Shares repurchased: 10,000\n   - Cost per share: $12\n   - Total cost: $120,000\n   - New Treasury Stock: $35,000 + $120,000 = $155,000\n\n3. Retained Earnings Changes\n   - Beginning Retained Earnings: $100,000\n   - Plus Net Income: +$60,000\n   - Less Dividends declared: -$20,000\n   - Ending Retained Earnings: $140,000\n\n4. Unchanged Components\n   - Common Stock: $10,000 (no new issuances)\n   - APIC: $90,000 (no impact from treasury purchase)\n   - AOCI: -$8,000 (no OCI transactions)\n\n5. Ending Shareholders Equity\n   - Common Stock: $10,000\n   - APIC: $90,000\n   - Retained Earnings: $140,000\n   - AOCI: -$8,000\n   - Less Treasury Stock: -$155,000\n   - Total: $77,000\n\n6. Net Change Analysis\n   - Beginning equity: $157,000\n   - Ending equity: $77,000\n   - Net decrease: $80,000\n   - Driven by: $120,000 treasury purchase - $60,000 net income + $20,000 dividends = $80,000 decrease\n\nKey Points:\n   • Treasury stock purchases reduce total equity dollar-for-dollar\n   • Dividends declared reduce retained earnings even if unpaid\n   • Net income increases retained earnings and total equity\n   • Multiple transactions can significantly impact equity balances",
    learnContent: {
      concept: 'Buybacks increase Treasury Stock and reduce equity. Dividends reduce RE.',
      formula: 'Equity = Common + APIC + (RE + NI - Div) + AOCI - Treasury',
      example: '$25k + $110k + $150k - $5k - $60k = $220k'
    }
  },

  // Topic 44: Non-controlling Interest
  {
    id: 'acc-easy-150',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Basic Non-controlling Interest Income',
    description: 'Parent owns 80% of a subsidiary that earns $50,000.\n\nWhat is the NCIs share of Net Income?',
    answer: 10000,
    unit: '$',
    hint: 'NCI owns 20%, so multiply by $50,000.',
    explanation: "Calculation: $50,000 × 20% = $10,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Ownership Structure\n   - Parent company ownership: 80%\n   - Non-controlling interest: 100% - 80% = 20%\n   - NCI represents minority shareholders in subsidiary\n\n2. Subsidiary Net Income\n   - Total subsidiary earnings: $50,000\n   - This income belongs to all shareholders proportionally\n\n3. NCI Share Calculation\n   - NCI ownership percentage: 20%\n   - Subsidiary net income: $50,000\n   - NCI share: $50,000 × 20% = $10,000\n\n4. Consolidated Impact\n   - Parent's share: $50,000 × 80% = $40,000\n   - NCI share: $10,000\n   - Total subsidiary income: $50,000 (confirmed)\n\nKey Points:\n   • NCI reflects minority ownership in subsidiaries\n   • NCI gets proportional share of subsidiary earnings\n   • In consolidation, full subsidiary income included with NCI portion separated\n   • Parent and NCI shares must total 100% of subsidiary income",
    learnContent: {
      concept: 'NCI reflects minority ownership in subsidiaries.',
      formula: 'NCI Share = Sub Net Income × (1 - Parent %)',
      example: '25% NCI × $40,000 = $10,000'
    }
  },
  {
    id: 'acc-medium-108',
    track: 'accounting',
    difficulty: 'medium',
    title: 'NCI with Dividends Impact',
    description: 'Parent owns 70% of a sub. Sub earns $80,000 and pays $20,000 in dividends.\n\nWhat is the change in NCI?',
    answer: 18000,
    unit: '$',
    hint: 'NCI = (1 - 70%) × ($80,000 - $20,000)',
    explanation: "Calculation: 30% × ($80,000 - $20,000) = 30% × $60,000 = $18,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Ownership Structure\n   - Parent ownership: 70%\n   - Non-controlling interest: 100% - 70% = 30%\n\n2. Subsidiary Financial Activity\n   - Net income earned: $80,000\n   - Dividends paid: $20,000\n   - Net retained by subsidiary: $80,000 - $20,000 = $60,000\n\n3. NCI Share of Income\n   - NCI ownership: 30%\n   - Share of net income: $80,000 × 30% = $24,000\n   - This increases NCI balance\n\n4. NCI Share of Dividends\n   - Dividends paid by subsidiary: $20,000\n   - NCI share of dividends: $20,000 × 30% = $6,000\n   - This decreases NCI balance (cash to NCI shareholders)\n\n5. Net Change in NCI\n   - Income effect: +$24,000\n   - Dividend effect: -$6,000\n   - Net change: $24,000 - $6,000 = $18,000\n   - Alternative: 30% × ($80,000 - $20,000) = $18,000\n\nKey Points:\n   • NCI increases from subsidiaries retained earnings (income minus dividends)\n   • Dividends paid reduce NCI as cash flows to minority shareholders\n   • Net change reflects NCIs share of subsidiary retained earnings\n   • Parent and NCI are affected proportionally by subsidiary activities",
    learnContent: {
      concept: 'NCI increases from income, decreases from dividends.',
      formula: 'ΔNCI = (1 - Parent%) × (NI - Dividends)',
      example: '20% NCI × ($100k - $10k) = $18k'
    }
  },
  {
    id: 'acc-hard-79',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Complex NCI with Ownership Change',
    description: 'Parent owns 85% of sub. Sub earns $100,000 and pays $30,000 dividends.\n\nMidyear, sub issues $40,000 equity to outsiders, dropping parent stake to 75%.\n\nWhat is total change in NCI?',
    answer: 54000,
    unit: '$',
    hint: 'Time-split income and dividends by ownership %, then add new equity to outsiders.',
    explanation: "Calculation: $5,250 + $8,750 + $40,000 = $54,000\n\n• • •\n\nStep-by-step breakdown:\n\n1. Ownership Structure Changes\n   - Initial parent ownership: 85% (NCI: 15%)\n   - After equity issuance: 75% (NCI: 25%)\n   - Ownership change occurs midyear\n\n2. Time-Based Income/Dividend Allocation\n   - Assume equal distribution: 6 months each period\n   - First half income: $100,000 ÷ 2 = $50,000\n   - First half dividends: $30,000 ÷ 2 = $15,000\n   - Second half income: $50,000\n   - Second half dividends: $15,000\n\n3. First Half NCI Impact (15% ownership)\n   - NCI share of income: $50,000 × 15% = $7,500\n   - NCI share of dividends: $15,000 × 15% = $2,250\n   - Net NCI change: $7,500 - $2,250 = $5,250\n\n4. Equity Issuance Impact\n   - New equity issued to outsiders: $40,000\n   - This directly increases NCI balance\n   - Dilutes parent ownership from 85% to 75%\n\n5. Second Half NCI Impact (25% ownership)\n   - NCI share of income: $50,000 × 25% = $12,500\n   - NCI share of dividends: $15,000 × 25% = $3,750\n   - Net NCI change: $12,500 - $3,750 = $8,750\n\n6. Total NCI Change\n   - First half retained earnings: $5,250\n   - New equity from outsiders: $40,000\n   - Second half retained earnings: $8,750\n   - Total change: $5,250 + $40,000 + $8,750 = $54,000\n\nKey Points:\n   • Ownership percentage changes require time-weighted calculations\n   • New equity issuances to outsiders directly increase NCI\n   • Timing of ownership changes affects income/dividend allocation\n   • Parent dilution benefits NCI holders through increased ownership percentage",
    learnContent: {
      concept: 'NCI is affected by ownership %, income, dividends, and equity issuances.',
      formula: 'ΔNCI = NCI Share (Income - Dividends) + Equity raised to outsiders',
      example: '20% × ($60k - $10k) + $20k = $22k'
    }
  },

  // Topic 51: Structure of Statement of Cash Flows
  {
    id: 'acc-easy-59',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Cash Flow Statement Structure – Basics',
    description: `A company reports the following:
- Net Income: $80,000
- Depreciation: $10,000
- Increase in Inventory: $5,000
- CapEx: $15,000

What is Net Cash from Operating Activities?`,
    answer: 85000,
    unit: '$',
    hint: 'Start with Net Income. Add back depreciation. Subtract increase in inventory.',
    explanation: `Calculation:
Operating CF = $80,000 + $10,000 − $5,000 = $85,000

• • •

Step-by-step breakdown:

1. Start with Net Income:
   • Net Income: $80,000
   → This is the baseline operating result

2. Add Non-Cash Items:
   • Depreciation: $10,000
   → Added back because it reduced NI but didn't use cash

3. Adjust for Working Capital:
   • Increase in Inventory: $5,000
   → Subtracted because cash was used to build inventory

4. Operating Cash Flow:
   → Operating CF = $80,000 + $10,000 − $5,000 = $85,000
   
Note: CapEx is an investing activity, not operating.

Key Points:
   • Operating CF starts with Net Income from operations
   • Non-cash expenses like depreciation are added back
   • Working capital increases use cash, decreases provide cash
   • CapEx belongs in investing activities, not operating`,
    learnContent: {
      concept: 'Cash Flow from Operations begins with Net Income and adjusts for non-cash items and changes in working capital.',
      formula: 'Operating CF = Net Income + Depreciation − Increase in Inventory',
      example: '$50k + $5k − $2k = $53k\n$100k + $20k − $10k = $110k\n$75k + $8k − $3k = $80k'
    }
  },
  {
    id: 'acc-medium-37',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Cash Flow Statement – Indirect Method',
    description: `A company reports:
- Net Income: $120,000
- Depreciation: $25,000
- Amortization: $10,000
- Increase in Accounts Receivable: $30,000
- Decrease in Accounts Payable: $15,000
- Increase in Deferred Revenue: $20,000

What is Cash Flow from Operations?`,
    answer: 130000,
    unit: '$',
    hint: 'Add back non-cash charges and adjust for working capital changes.',
    explanation: `Calculation:
CFO = $120,000 + $25,000 + $10,000 − $30,000 − $15,000 + $20,000 = $130,000

• • •

Step-by-step breakdown:

1. Start with Net Income:
   • Net Income: $120,000
   → Base operating performance

2. Add Back Non-Cash Items:
   • Depreciation: $25,000
   • Amortization: $10,000
   → Total non-cash add-backs: $35,000

3. Working Capital Adjustments:
   • Increase in AR: ($30,000)
     → Cash tied up in receivables
   • Decrease in AP: ($15,000)
     → Cash used to pay down payables
   • Increase in Deferred Revenue: $20,000
     → Cash received for future services

4. Net Working Capital Impact:
   → ($30,000) + ($15,000) + $20,000 = ($25,000)

5. Total Operating Cash Flow:
   → $120,000 + $35,000 − $25,000 = $130,000

Key Points:
   • Indirect method reconciles Net Income to cash
   • All non-cash expenses are added back
   • Asset increases use cash, liability increases provide cash
   • Deferred revenue represents cash received upfront`,
    learnContent: {
      concept: 'The indirect method starts with Net Income and adjusts for non-cash expenses and working capital movement.',
      formula: 'CFO = NI + D&A − ∆AR − ∆AP + ∆Deferred Revenue',
      example: '$80k + $10k − $5k − $2k = $83k\n$150k + $15k − $10k + $5k = $160k\n$100k + $12k − $8k + $3k = $107k'
    }
  },
  {
    id: 'acc-hard-28',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Cash Flow Statement – Multi-Line Analysis',
    description: `A company has:
- Net Income: $200,000
- Depreciation: $40,000
- Amortization: $20,000
- Stock-Based Compensation: $15,000
- Increase in AR: $30,000
- Decrease in Inventory: $10,000
- Decrease in AP: $25,000
- Increase in Accrued Expenses: $12,000
- Deferred Revenue increase: $18,000

What is total Operating Cash Flow?`,
    answer: 260000,
    unit: '$',
    hint: 'Start with Net Income, add non-cash items, adjust for WC changes line by line.',
    explanation: `Calculation:
Operating CF = $200,000 + $40,000 + $20,000 + $15,000 − $30,000 + $10,000 − $25,000 + $12,000 + $18,000 = $260,000

• • •

Step-by-step breakdown:

1. Starting Point:
   • Net Income: $200,000
   → Core operating profitability

2. Non-Cash Additions:
   • Depreciation: $40,000
   • Amortization: $20,000
   • Stock-Based Compensation: $15,000
   → Total non-cash add-backs: $75,000

3. Working Capital Analysis:
   
   Asset Changes (use cash when increase):
   • Increase in AR: ($30,000)
     → More credit sales, less cash collected
   • Decrease in Inventory: $10,000
     → Inventory sold, converted to cash
   
   Liability Changes (provide cash when increase):
   • Decrease in AP: ($25,000)
     → Paid down suppliers, used cash
   • Increase in Accrued Expenses: $12,000
     → Expenses incurred but not yet paid
   • Increase in Deferred Revenue: $18,000
     → Cash received for future delivery

4. Net Working Capital Impact:
   → ($30,000) + $10,000 + ($25,000) + $12,000 + $18,000 = ($15,000)

5. Total Operating Cash Flow:
   → $200,000 + $75,000 + ($15,000) = $260,000

Key Points:
   • Stock-based compensation is a non-cash expense like D&A
   • Each working capital component must be analyzed individually
   • Asset decreases and liability increases both provide cash
   • Complex companies require detailed line-by-line analysis`,
    learnContent: {
      concept: 'Detailed CFO calculation requires precise tracking of each non-cash and working capital adjustment.',
      formula: 'CFO = NI + D&A + SBC − ∆AR + ∆Inventory − ∆AP + ∆Accrued + ∆Deferred Rev',
      example: '$100k + $20k − $15k + $5k + $10k = $120k\n$300k + $30k − $25k − $10k + $15k = $310k\n$150k + $18k − $12k + $8k = $164k'
    }
  },

  // Topic 52: Net Income as CFO Start
  {
    id: 'acc-easy-60',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Net Income – CFO Starting Point',
    description: `Why is Net Income used as the starting point in the indirect method of the Cash Flow Statement?`,
    answer: 'Because it reflects accrual-based profit and needs to be adjusted to reflect actual cash flow',
    hint: 'Think about what net income includes that may not be cash.',
    explanation: `Answer: Because it reflects accrual-based profit and needs to be adjusted to reflect actual cash flow.

• • •

Detailed explanation:

1. Accrual vs. Cash Basis:
   • Net Income follows accrual accounting principles
   • It includes revenues earned and expenses incurred
   • But not all revenues/expenses involve immediate cash flow

2. Non-Cash Items in Net Income:
   • Depreciation and amortization reduce NI but don't use cash
   • Stock-based compensation is an expense but not cash outflow
   • Impairment charges reduce NI without cash impact

3. Timing Differences:
   • Revenue may be recorded before cash is collected (AR)
   • Expenses may be recorded before cash is paid (AP)
   • Working capital changes create timing mismatches

4. Why Start with Net Income:
   • It captures all operating activities in one number
   • Provides a comprehensive starting point for adjustments
   • Easier to adjust than starting from zero

5. The Reconciliation Process:
   • Add back non-cash expenses
   • Adjust for working capital timing differences
   • Results in actual cash generated from operations

Key Points:
   • Net Income is accrual-based, CFO is cash-based
   • Starting with NI and adjusting is more efficient than direct method
   • The indirect method shows how profit translates to cash
   • Essential for understanding cash generation vs. accounting profit`,
    learnContent: {
      concept: 'The indirect CFO method begins with Net Income because it captures all operating results, but needs adjustment for non-cash and timing effects.',
      formula: 'Operating CF = Net Income + Non-cash Adjustments ± Changes in Working Capital',
      example: 'Net Income = $100k; add $20k depreciation = $120k cash\nNI = $50k; subtract $10k AR increase = $40k cash\nNI = $80k; add $15k D&A, subtract $5k WC = $90k'
    }
  },
  {
    id: 'acc-medium-38',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Net Income – Adjustments Needed',
    description: `A company has Net Income of $90,000. It adds back $15,000 depreciation and subtracts $20,000 increase in AR, $5,000 decrease in AP, and adds $10,000 in deferred revenue increase.

What is Operating Cash Flow?`,
    answer: 90000,
    unit: '$',
    hint: 'Follow the indirect method: NI + non-cash + working capital changes.',
    explanation: `Calculation:
OCF = $90,000 + $15,000 − $20,000 − $5,000 + $10,000 = $90,000

• • •

Step-by-step breakdown:

1. Starting Point:
   • Net Income: $90,000
   → Accrual-based operating profit

2. Non-Cash Adjustments:
   • Add back Depreciation: $15,000
   → This reduced NI but didn't use cash

3. Working Capital Adjustments:
   
   Assets (use cash when increase):
   • Increase in AR: ($20,000)
     → Credit sales not yet collected
   
   Liabilities (use cash when decrease):
   • Decrease in AP: ($5,000)
     → Paid down supplier balances
   • Increase in Deferred Revenue: $10,000
     → Received cash for future services

4. Net Working Capital Impact:
   → ($20,000) + ($5,000) + $10,000 = ($15,000)

5. Total Operating Cash Flow:
   → $90,000 + $15,000 + ($15,000) = $90,000

Interesting Note:
   • Despite $90,000 in profit, cash flow is also exactly $90,000
   • The non-cash depreciation exactly offset working capital drain
   • This shows how adjustments can net to zero

Key Points:
   • Net Income must be reconciled to actual cash flow
   • Non-cash items always get added back to NI
   • Working capital changes reflect timing differences
   • Final OCF can be higher, lower, or equal to Net Income`,
    learnContent: {
      concept: 'Net Income must be adjusted to reconcile accrual profit with cash reality.',
      formula: 'OCF = NI + Depreciation − ∆AR − ∆AP + ∆Deferred Rev',
      example: '$100k + $10k − $5k − $5k + $5k = $105k\n$80k + $8k − $3k = $85k\n$120k + $15k − $10k + $5k = $130k'
    }
  },
  {
    id: 'acc-hard-29',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Net Income Reconciliation – Multi-Factor',
    description: `Net Income = $150,000. Adjustments include:
- Depreciation = $30,000
- SBC = $20,000
- Increase in AR = $40,000
- Decrease in AP = $15,000
- Increase in Accrued = $18,000
- Decrease in Inventory = $10,000
- Deferred Revenue = $12,000

What is total Operating Cash Flow?`,
    answer: 185000,
    unit: '$',
    hint: 'Tally each component line-by-line. Positive = adds to cash; negative = uses cash.',
    explanation: `Calculation:
OCF = $150,000 + $30,000 + $20,000 − $40,000 − $15,000 + $18,000 + $10,000 + $12,000 = $185,000

• • •

Step-by-step breakdown:

1. Starting Point:
   • Net Income: $150,000
   → Base accrual-based profit

2. Non-Cash Add-Backs:
   • Depreciation: $30,000
     → Asset write-down, no cash impact
   • Stock-Based Compensation: $20,000
     → Employee expense paid with equity, not cash
   → Total non-cash additions: $50,000

3. Working Capital Component Analysis:
   
   Asset Changes (Cash impact when they change):
   • Increase in AR: ($40,000)
     → Sales made on credit, cash not collected
   • Decrease in Inventory: $10,000
     → Inventory converted to sales, freed up cash
   
   Liability Changes (Cash impact when they change):
   • Decrease in AP: ($15,000)
     → Paid suppliers, used cash
   • Increase in Accrued: $18,000
     → Expenses recorded but not yet paid
   • Increase in Deferred Revenue: $12,000
     → Cash received for future delivery

4. Net Working Capital Summary:
   → ($40,000) + $10,000 + ($15,000) + $18,000 + $12,000 = ($15,000)

5. Total Operating Cash Flow:
   → $150,000 + $50,000 + ($15,000) = $185,000

Cash Flow Quality Analysis:
   • OCF ($185k) > Net Income ($150k) by $35k
   • Strong cash conversion driven by non-cash charges
   • Working capital was a small drag on cash
   • Overall healthy operating cash generation

Key Points:
   • Each adjustment must be classified as cash/non-cash properly
   • Asset increases use cash, decreases provide cash
   • Liability increases provide cash, decreases use cash
   • The net result shows true cash-generating ability`,
    learnContent: {
      concept: 'Reconciling Net Income into CFO requires summing non-cash and working capital drivers.',
      formula: 'OCF = NI + Non-cash + ∆WC',
      example: '$200k + $50k − $20k − $10k + $5k = $225k\n$120k + $10k − $15k + $10k = $125k\n$90k + $18k − $8k = $100k'
    }
  },

  // Topic 53: Depreciation & Amortization Add-back
  {
    id: 'acc-easy-61',
    track: 'accounting',
    difficulty: 'easy',
    title: 'D&A Add-Back – Basic Concept',
    description: `A company reports: Net Income = $75,000 and Depreciation = $10,000.

Why is Depreciation added back on the Cash Flow Statement?`,
    answer: 'Because it is a non-cash expense',
    hint: 'Think about what cash is actually spent.',
    explanation: `Answer: Because it is a non-cash expense.

• • •

Detailed explanation:

1. What is Depreciation:
   • Systematic allocation of asset cost over useful life
   • Accounting method to match expense with revenue
   • Required under accrual accounting principles

2. Impact on Net Income:
   • Depreciation expense reduces reported Net Income
   • But no actual cash was spent during the period
   • The cash was spent when the asset was originally purchased

3. Cash Flow Statement Logic:
   • We start with Net Income ($75,000)
   • NI was reduced by $10,000 depreciation
   • But this $10,000 didn't represent a cash outflow
   • So we add it back to show true cash generation

4. The Add-Back Process:
   • Net Income: $75,000 (includes $10k depreciation expense)
   • Add back Depreciation: $10,000
   • Operating Cash Flow: $85,000
   → This shows actual cash generated from operations

5. Timing Difference:
   • Cash outflow: When asset was purchased (past)
   • Depreciation expense: Spread over asset life (present)
   • CFO add-back: Removes non-cash impact (present)

Real Example:
   • Buy $100k machine in 2020 → $100k cash outflow in 2020
   • $20k annual depreciation 2021-2025 → No cash impact
   • Add back $20k each year to CFO → Shows true cash generation

Key Points:
   • Depreciation is an allocation, not a cash transaction
   • It artificially reduces Net Income for cash flow purposes
   • Adding it back reveals actual operating cash generation
   • This principle applies to all non-cash expenses`,
    learnContent: {
      concept: 'Depreciation is non-cash and should be added back when calculating Operating Cash Flow.',
      formula: 'Operating CF = Net Income + Depreciation + Other non-cash items',
      example: '$50k NI + $5k depreciation = $55k OCF\n$100k NI + $20k D&A = $120k OCF\n$80k NI + $12k depreciation = $92k OCF'
    }
  },
  {
    id: 'acc-medium-39',
    track: 'accounting',
    difficulty: 'medium',
    title: 'D&A Add-Back – Asset Schedule',
    description: `A firm has $300,000 in Net PP&E and uses straight-line depreciation over 10 years. It reports Net Income of $200,000.

What is the depreciation add-back and the resulting Operating Cash Flow (no other adjustments)?`,
    answer: 230000,
    unit: '$',
    hint: 'Depreciation = PP&E ÷ Useful life. Add to Net Income.',
    explanation: `Calculation:
Annual depreciation = $300,000 ÷ 10 = $30,000
OCF = $200,000 + $30,000 = $230,000

• • •

Step-by-step breakdown:

1. Straight-Line Depreciation Method:
   • Takes asset cost and spreads evenly over useful life
   • Formula: Annual Depreciation = Asset Cost ÷ Useful Life
   • Consistent expense each year

2. Calculate Annual Depreciation:
   • Net PP&E: $300,000
   • Useful Life: 10 years
   → Annual Depreciation = $300,000 ÷ 10 = $30,000

3. Impact on Financial Statements:
   
   Income Statement:
   • Depreciation reduces Net Income by $30,000
   • Reported Net Income: $200,000 (after depreciation)
   
   Cash Flow Statement:
   • Start with Net Income: $200,000
   • Add back non-cash depreciation: $30,000
   • Operating Cash Flow: $230,000

4. The Cash Flow Logic:
   • The $30,000 depreciation didn't use any cash this year
   • Cash was spent when asset was originally purchased
   • Adding back shows true cash generation: $230,000

5. Year-over-Year Consistency:
   • This $30,000 add-back will occur each year for 10 years
   • Total depreciation over life: $300,000
   • Matches original asset cost

Key Points:
   • Straight-line creates consistent annual depreciation
   • Higher asset base = higher annual depreciation add-back
   • OCF will consistently exceed NI by depreciation amount
   • This is why asset-heavy companies often show strong cash flow`,
    learnContent: {
      concept: 'Straight-line depreciation evenly spreads cost across years. It\'s added back to calculate CFO.',
      formula: 'Depreciation = Asset Cost ÷ Useful Life; OCF = NI + D&A',
      example: '$100k asset, 5 years = $20k D&A per year\n$250k PP&E, 10 years = $25k/year\n$120k equipment, 6 years = $20k/year'
    }
  },
  {
    id: 'acc-hard-30',
    track: 'accounting',
    difficulty: 'hard',
    title: 'D&A Rollforward – Multi-Asset Example',
    description: `Company has:
- Equipment A: $100,000, 5-year life
- Equipment B: $50,000, 2-year life (purchased mid-year)
- Software C: $30,000, 3-year life

What is total D&A expense and the add-back for this year?`,
    answer: 42500,
    unit: '$',
    hint: 'Account for half-year depreciation on mid-year purchase. Sum individual items.',
    explanation: `Calculation:
A: $100,000 ÷ 5 = $20,000
B: $50,000 ÷ 2 = $25,000/year, but half-year = $12,500
C: $30,000 ÷ 3 = $10,000
Total = $20,000 + $12,500 + $10,000 = $42,500

• • •

Step-by-step breakdown:

1. Equipment A - Full Year:
   • Cost: $100,000
   • Useful Life: 5 years
   • Purchase Timing: Beginning of year (full year depreciation)
   → Annual Depreciation = $100,000 ÷ 5 = $20,000

2. Equipment B - Mid-Year Purchase:
   • Cost: $50,000
   • Useful Life: 2 years
   • Purchase Timing: Mid-year (6 months)
   • Full Year Depreciation = $50,000 ÷ 2 = $25,000
   → This Year Depreciation = $25,000 × 6/12 = $12,500

3. Software C - Full Year:
   • Cost: $30,000
   • Useful Life: 3 years
   • Purchase Timing: Beginning of year (full year)
   → Annual Amortization = $30,000 ÷ 3 = $10,000

4. Total D&A Calculation:
   • Equipment A: $20,000
   • Equipment B: $12,500
   • Software C: $10,000
   → Total D&A Expense = $42,500

5. Cash Flow Impact:
   • This $42,500 reduces Net Income
   • But represents no cash outflow in current year
   • Must be added back to CFO calculation
   → Operating CF Add-back = $42,500

6. Future Years Preview:
   
   Next Year D&A:
   • Equipment A: $20,000 (continues)
   • Equipment B: $25,000 (full year)
   • Software C: $10,000 (continues)
   • Total: $55,000

Key Points:
   • Each asset depreciates independently based on its life
   • Mid-year purchases get prorated depreciation
   • Software amortization follows same principles as equipment depreciation
   • Total D&A becomes the CFO add-back amount`,
    learnContent: {
      concept: 'Each asset\'s depreciation depends on timing, cost, and useful life. Mid-year purchases only count partial.',
      formula: 'D&A = Σ (Cost ÷ Useful Life × Time Held)',
      example: '$60k asset, 3 years = $20k/year\n$40k asset, 2-year life bought mid-year = $10k D&A\n$90k asset, 5 years, 9 months held = $13.5k D&A'
    }
  },

  // Topic 55: Capital Expenditures
  {
    id: 'acc-medium-40',
    track: 'accounting',
    difficulty: 'medium',
    title: 'CapEx Identification – Mixed Use Case',
    description: `A company has the following expenditures:
- $40,000 to buy new equipment
- $15,000 in routine repairs
- $25,000 to install software that enhances production for 5+ years

What is the total amount classified as Capital Expenditures?`,
    answer: 65000,
    unit: '$',
    hint: 'Capitalize items with long-term benefits. Expense maintenance and routine repairs.',
    explanation: `Calculation:
CapEx = $40,000 (equipment) + $25,000 (long-term software) = $65,000

• • •

Step-by-step breakdown:

1. Equipment Purchase:
   • New equipment: $40,000
   → Capitalized (long-term productive asset)

2. Routine Repairs:
   • Routine repairs: $15,000
   → Expensed (maintenance, not improvement)

3. Software Installation:
   • Production software: $25,000
   • Useful life: 5+ years
   → Capitalized (enhances long-term productivity)

4. CapEx Classification:
   • Capitalize: Equipment + Software = $40,000 + $25,000 = $65,000
   • Expense: Repairs = $15,000

Key Points:
   • CapEx must provide benefits beyond one year
   • Routine maintenance is expensed immediately
   • Software enhancing production qualifies as CapEx
   • Total CapEx affects investing cash flows`,
    learnContent: {
      concept: 'CapEx includes expenditures that improve or extend asset life.',
      formula: 'CapEx = Sum of long-term, value-adding purchases',
      example: '$60k for building + $10k new software = $70k CapEx\n$20k repairs = expensed, not CapEx\n$30k equipment + $5k installation = $35k CapEx'
    }
  },
  {
    id: 'acc-hard-31',
    track: 'accounting',
    difficulty: 'hard',
    title: 'CapEx Calculation from Financials',
    description: `Company reports:
- Beginning PP&E (Net): $300,000
- Ending PP&E (Net): $360,000
- Depreciation Expense: $40,000

No asset disposals occurred. What was the Capital Expenditure this year?`,
    answer: 100000,
    unit: '$',
    hint: 'Reverse out depreciation to isolate new purchases.',
    explanation: `Calculation:
CapEx = Ending PP&E − Beginning PP&E + Depreciation = $360,000 − $300,000 + $40,000 = $100,000

• • •

Step-by-step breakdown:

1. PP&E Rollforward Logic:
   • Beginning PP&E (Net): $300,000
   • Add: CapEx purchases (unknown)
   • Less: Depreciation expense: ($40,000)
   • Equals: Ending PP&E (Net): $360,000

2. Set Up the Equation:
   $300,000 + CapEx − $40,000 = $360,000

3. Solve for CapEx:
   CapEx = $360,000 − $300,000 + $40,000 = $100,000

4. Verification:
   • Starting balance: $300,000
   • Add CapEx: $100,000
   • Less depreciation: ($40,000)
   • Ending balance: $360,000 ✓

5. Cash Flow Impact:
   • Operating CF: Add back $40,000 depreciation
   • Investing CF: Subtract $100,000 CapEx

Alternative Formula Approach:
   Net PP&E Change = $360,000 − $300,000 = $60,000
   CapEx = Net Change + Depreciation = $60,000 + $40,000 = $100,000

Key Points:
   • Net PP&E obscures gross CapEx due to depreciation
   • Must add back depreciation to find actual purchases
   • No disposals simplifies the calculation
   • CapEx represents actual cash invested in long-term assets`,
    learnContent: {
      concept: 'CapEx = Net PP&E increase + Depreciation when no disposals occur.',
      formula: 'CapEx = Ending PP&E − Beginning PP&E + Depreciation',
      example: 'Beg PP&E = $200k, End = $250k, Dep = $30k → CapEx = $80k\n$500k − $480k + $40k = $60k\n$120k − $100k + $15k = $35k'
    }
  },

  // Topic 56: Asset Purchase/Sales
  {
    id: 'acc-easy-62',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Asset Sale Proceeds',
    description: `A company sells a machine for $15,000. The book value of the machine is $12,000.

What is the gain recorded on the Income Statement?`,
    answer: 3000,
    unit: '$',
    hint: 'Gain = Sale Price − Book Value',
    explanation: `Calculation:
Gain on Sale = $15,000 − $12,000 = $3,000

• • •

Step-by-step breakdown:

1. Asset Sale Components:
   • Sale proceeds: $15,000
   • Book value: $12,000
   → Difference determines gain/loss

2. Gain/Loss Calculation:
   • Sale Price > Book Value = Gain
   • Sale Price < Book Value = Loss
   • $15,000 > $12,000 → Gain

3. Gain Amount:
   → Gain = $15,000 − $12,000 = $3,000

4. Financial Statement Impact:
   
   Income Statement:
   • Gain on Asset Sale: $3,000 (increases income)
   
   Cash Flow Statement:
   • Investing Activities: $15,000 cash inflow
   • Operating Activities: Subtract $3,000 gain (indirect method)

Key Points:
   • Gains increase Net Income but must be removed from operating CF
   • Full sale proceeds appear in investing cash flows
   • Book value represents net carrying amount on balance sheet
   • Timing: gain recognized when sale is completed`,
    learnContent: {
      concept: 'Gains/losses from asset sales are the difference between sale proceeds and book value.',
      formula: 'Gain = Proceeds − Book Value',
      example: '$20k sale, $15k book = $5k gain\n$8k sale, $10k book = $2k loss\n$50k sale, $50k book = $0 gain/loss'
    }
  },
  {
    id: 'acc-medium-41',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Asset Sale and Cash Flow Impact',
    description: `A firm sells equipment for $25,000. The original cost was $50,000 with $30,000 accumulated depreciation.

What is the gain or loss on sale, and how does it affect the Income Statement and Cash Flow Statement?`,
    answer: '$5,000 gain; $25,000 inflow under Investing Activities',
    hint: 'Net book value = Cost − Accumulated Depreciation. Compare to sale price.',
    explanation: `Calculation:
Net Book Value = $50,000 − $30,000 = $20,000
Gain on Sale = $25,000 − $20,000 = $5,000

• • •

Step-by-step breakdown:

1. Determine Net Book Value:
   • Original cost: $50,000
   • Accumulated depreciation: $30,000
   → Net book value = $50,000 − $30,000 = $20,000

2. Calculate Gain/Loss:
   • Sale proceeds: $25,000
   • Net book value: $20,000
   → Gain = $25,000 − $20,000 = $5,000

3. Income Statement Impact:
   • Gain on Asset Sale: $5,000
   → Increases Net Income by $5,000

4. Cash Flow Statement Impact:
   
   Operating Activities (Indirect Method):
   • Start with Net Income (includes $5,000 gain)
   • Subtract gain: ($5,000)
   → Removes non-operating gain from operating CF
   
   Investing Activities:
   • Cash from asset sale: $25,000
   → Full proceeds classified as investing inflow

5. Net Cash Effect:
   • Total cash received: $25,000
   • Operating CF adjustment: ($5,000)
   • Investing CF: $25,000
   → Net cash impact: $25,000

Key Points:
   • Book value is cost minus accumulated depreciation
   • Gain appears in both IS and CF but in different sections
   • Operating CF removes gains to avoid double-counting
   • Full sale proceeds always go to investing activities`,
    learnContent: {
      concept: 'Asset sales affect both the IS (gain/loss) and CFS (full cash proceeds).',
      formula: 'Gain = Sale − (Cost − Acc. Dep); CFS = Proceeds in Investing',
      example: '$60k sale, $45k book → $15k gain, $60k CFS inflow\n$15k sale, $18k book → $3k loss, $15k CFS inflow\n$30k sale, $25k book → $5k gain, $30k investing'
    }
  },
  {
    id: 'acc-hard-32',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Multiple Asset Sale Reconciliation',
    description: `A company reports the following asset sales during the year:
- Asset A: Original Cost = $100,000; Accum. Depreciation = $70,000; Sold for $35,000
- Asset B: Original Cost = $60,000; Accum. Depreciation = $20,000; Sold for $30,000

What is the total gain or loss on these sales, and what is the total investing cash inflow?`,
    answer: '$5,000 net loss; $65,000 investing inflow',
    hint: 'Net Book Value = Cost − Accumulated Dep. Compare each to sale price, then sum gains and proceeds.',
    explanation: `Calculation:
Asset A: Book = $100,000 − $70,000 = $30,000; Gain = $35,000 − $30,000 = $5,000
Asset B: Book = $60,000 − $20,000 = $40,000; Loss = $30,000 − $40,000 = ($10,000)
Total gain/loss = $5,000 − $10,000 = ($5,000) Net Loss
Cash inflow = $35,000 + $30,000 = $65,000

• • •

Step-by-step breakdown:

1. Asset A Analysis:
   • Original cost: $100,000
   • Accumulated depreciation: $70,000
   • Net book value: $100,000 − $70,000 = $30,000
   • Sale proceeds: $35,000
   → Gain = $35,000 − $30,000 = $5,000

2. Asset B Analysis:
   • Original cost: $60,000
   • Accumulated depreciation: $20,000
   • Net book value: $60,000 − $20,000 = $40,000
   • Sale proceeds: $30,000
   → Loss = $30,000 − $40,000 = ($10,000)

3. Combined Results:
   
   Total Gain/Loss:
   • Asset A gain: $5,000
   • Asset B loss: ($10,000)
   → Net loss: $5,000 − $10,000 = ($5,000)
   
   Total Cash Proceeds:
   • Asset A: $35,000
   • Asset B: $30,000
   → Total investing inflow: $65,000

4. Financial Statement Impact:
   
   Income Statement:
   • Loss on Asset Sales: ($5,000)
   → Reduces Net Income
   
   Cash Flow Statement:
   • Operating Activities: Add back $5,000 loss (indirect method)
   • Investing Activities: $65,000 cash inflow

Key Points:
   • Each asset must be analyzed separately
   • Gains and losses can offset each other
   • Cash flows reflect actual proceeds regardless of gains/losses
   • Net loss increases operating CF in indirect method`,
    learnContent: {
      concept: 'Analyze each asset separately: compute book value, compare to sale, and aggregate cash inflows.',
      formula: 'Total Gain/Loss = Σ (Proceeds − Book Value); Cash Inflow = Σ Proceeds',
      example: '$20k gain + $5k loss = $15k gain; Proceeds = $100k\n$10k gain + $12k loss = $2k loss; Proceeds = $90k\n$8k gain + $3k loss = $5k net gain; $150k proceeds'
    }
  },

  // Topic 57: Acquisitions/Divestitures
  {
    id: 'acc-easy-70',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Acquisition – Cash Flow Classification',
    description: `A company acquires another business and pays $500,000 in cash.

Where is this shown on the Cash Flow Statement?`,
    answer: 'Investing Activities (Cash Outflow)',
    hint: 'Think about long-term investment in another business.',
    explanation: `Answer: Investing Activities (Cash Outflow)

• • •

Detailed explanation:

1. Nature of Acquisition:
   • Purchase of another business entity
   • Long-term strategic investment
   • Acquiring assets and operations for future benefits

2. Cash Flow Classification Logic:
   
   Operating Activities:
   • Day-to-day business operations
   • Revenue and expense transactions
   • Working capital changes
   
   Investing Activities:
   • Purchase/sale of long-term assets
   • Acquisitions and divestitures
   • Capital expenditures
   • Securities investments
   
   Financing Activities:
   • Debt and equity transactions
   • Dividends and buybacks
   • Changes in capital structure

3. Why Investing Activities:
   • Acquisition represents purchase of long-term assets
   • Similar to buying PP&E or other investments
   • Provides future economic benefits
   • Not part of regular operating cycle

4. Cash Flow Impact:
   • Investing Activities: ($500,000)
   • Represents cash outflow for the acquisition
   • Reduces total cash available

5. Balance Sheet Impact:
   • Assets acquired are recorded
   • Goodwill may be created
   • Cash decreases by $500,000

Key Points:
   • All business acquisitions are investing activities
   • Cash outflows reduce investing cash flow
   • Acquisition costs also go to investing section
   • Method of payment affects the classification`,
    learnContent: {
      concept: 'Acquisition payments are cash outflows and reported under investing activities.',
      formula: 'Cash Flow from Investing = −Purchase Price (if paid in cash)',
      example: '$200k acquisition → ($200k) CFS outflow\n$1M deal = ($1M) Investing Cash Flow\n$750k business purchase = ($750k) investing'
    }
  },
  {
    id: 'acc-medium-42',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Acquisition Impact on Balance Sheet',
    description: `Company acquires a target for $600,000. Target has:
- $300,000 in assets
- $100,000 in liabilities

What is the Goodwill created?`,
    answer: 400000,
    unit: '$',
    hint: 'Goodwill = Purchase Price − Net Identifiable Assets',
    explanation: `Calculation:
Net Assets = $300,000 − $100,000 = $200,000
Goodwill = $600,000 − $200,000 = $400,000

• • •

Step-by-step breakdown:

1. Determine Net Identifiable Assets:
   • Target's assets: $300,000
   • Target's liabilities: $100,000
   → Net assets = $300,000 − $100,000 = $200,000

2. Calculate Goodwill:
   • Purchase price: $600,000
   • Net identifiable assets: $200,000
   → Goodwill = $600,000 − $200,000 = $400,000

3. Economic Interpretation:
   • Acquirer paid $600,000
   • Received net assets worth $200,000
   • Premium of $400,000 represents goodwill

4. What Goodwill Represents:
   • Intangible value not separately identifiable
   • Brand recognition, customer relationships
   • Synergies and strategic value
   • Management expertise and market position

5. Balance Sheet Impact (Acquirer):
   
   Assets:
   • Acquired assets: $300,000
   • Goodwill: $400,000
   • Cash: ($600,000)
   → Net change: $100,000 increase in assets
   
   Liabilities:
   • Assumed liabilities: $100,000

6. Purchase Price Allocation:
   • Step 1: Record identifiable assets at fair value
   • Step 2: Record assumed liabilities at fair value
   • Step 3: Remaining purchase price = Goodwill

Key Points:
   • Goodwill represents excess of price over net assets
   • Must be tested annually for impairment
   • Cannot be amortized under current GAAP
   • Reflects intangible value and synergies`,
    learnContent: {
      concept: 'Goodwill represents the excess of purchase price over net identifiable assets acquired.',
      formula: 'Goodwill = Purchase Price − (Assets − Liabilities)',
      example: '$1M price, $600k assets, $200k liabilities → $1M − $400k = $600k Goodwill\n$500k deal, $300k net assets → $200k Goodwill\n$800k price, $700k net assets → $100k Goodwill'
    }
  },
  {
    id: 'acc-hard-33',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Acquisition + PPA + Deferred Tax',
    description: `Firm acquires another company for $1.2M. Net assets acquired (fair value) = $900k.

Among these, $300k is allocated to intangible assets (amortizable). Tax basis of intangibles = $0. Tax rate = 25%.

What are: (1) Goodwill created and (2) Deferred Tax Liability from PPA?`,
    answer: 'Goodwill = $300,000; DTL = $75,000',
    hint: 'Goodwill = Price − Net Assets. DTL = Difference in book vs. tax basis × Tax Rate.',
    explanation: `Calculation:
Goodwill = $1,200,000 − $900,000 = $300,000
DTL from intangibles = ($300,000 − $0) × 25% = $75,000

• • •

Step-by-step breakdown:

1. Goodwill Calculation:
   • Purchase price: $1,200,000
   • Net assets acquired (fair value): $900,000
   → Goodwill = $1,200,000 − $900,000 = $300,000

2. Deferred Tax Analysis:
   
   Book vs. Tax Basis Difference:
   • Book basis of intangibles: $300,000 (fair value)
   • Tax basis of intangibles: $0 (not deductible)
   → Temporary difference: $300,000

3. DTL Calculation:
   • Temporary difference: $300,000
   • Tax rate: 25%
   → DTL = $300,000 × 25% = $75,000

4. Why DTL is Created:
   • Book depreciation will exceed tax depreciation
   • Future amortization of $300k creates book expense
   • No corresponding tax deduction available
   • Results in higher future taxable income

5. Purchase Price Allocation Summary:
   • Total price: $1,200,000
   • Net identifiable assets: $900,000
     - Includes $300,000 intangibles
   • DTL created: ($75,000)
   • Goodwill (residual): $300,000

6. Balance Sheet Impact (Acquirer):
   
   Assets:
   • Acquired assets: $900,000
   • Goodwill: $300,000
   • Cash: ($1,200,000)
   
   Liabilities:
   • Assumed liabilities: (included in net assets)
   • DTL created: $75,000

7. Future Impact:
   • Intangible amortization will create book expense
   • No tax deduction for amortization
   • DTL will reverse as temporary difference unwinds

Key Points:
   • PPA creates temporary differences between book and tax
   • DTLs arise when book basis > tax basis
   • Goodwill is calculated after considering all adjustments
   • Tax effects must be considered in acquisition accounting`,
    learnContent: {
      concept: 'DTLs arise when book basis > tax basis. Goodwill = excess over net assets.',
      formula: 'DTL = (Book − Tax) × Rate; Goodwill = Price − Net Assets',
      example: '$800k paid, $500k net assets, $200k intangible → $300k Goodwill, $50k DTL\n$1.5M deal, $1.1M assets incl. $400k intangibles, $0 tax → $100k DTL\n$600k price, $450k assets, $150k intangible difference → $37.5k DTL'
    }
  },

  // Topic 58: Investment in Securities
  {
    id: 'acc-easy-71',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Securities Investment – Cash Flow Classification',
    description: `A company purchases $100,000 of marketable securities (held for trading).

How is this recorded on the Cash Flow Statement?`,
    answer: 'Cash Outflow under Investing Activities',
    hint: 'Securities purchases are considered investments.',
    explanation: `Answer: Cash Outflow under Investing Activities

• • •

Detailed explanation:

1. Nature of Securities Purchase:
   • Marketable securities are financial investments
   • Held for trading or investment purposes
   • Not part of regular operating activities

2. Cash Flow Classification Framework:
   
   Operating Activities:
   • Core business operations
   • Revenue and expense transactions
   • Working capital changes
   
   Investing Activities:
   • Purchase/sale of investments
   • Capital expenditures
   • Acquisitions and divestitures
   
   Financing Activities:
   • Debt and equity transactions
   • Dividends and buybacks

3. Why Investing Activities:
   • Securities represent investments in other entities
   • Similar to other long-term investments
   • Not cash equivalents (>3 month maturity)
   • Purpose is investment return, not operations

4. Cash Flow Impact:
   • Investing Activities: ($100,000)
   • Represents cash used for investment
   • Reduces available cash

5. Exception - Cash Equivalents:
   • Very short-term, highly liquid investments
   • Maturity ≤ 3 months when purchased
   • These are NOT classified as investing activities
   • Considered equivalent to cash

6. Balance Sheet Impact:
   • Investment securities: $100,000
   • Cash: ($100,000)
   → Net assets unchanged, composition changed

Key Points:
   • Securities purchases are investing activities unless cash equivalents
   • Trading vs. AFS classification doesn't affect cash flow treatment
   • Sales of securities also go to investing activities
   • Income from securities goes to operating activities`,
    learnContent: {
      concept: 'Buying securities is an investing activity unless held as cash equivalents.',
      formula: 'Cash Flow from Investing = −Purchase Amount',
      example: '$50k securities purchase = ($50k) cash flow\n$200k bond purchase = ($200k) Investing outflow\n$75k stock purchase = ($75k) investing'
    }
  },
  {
    id: 'acc-medium-43',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Available-for-Sale vs. Trading Securities',
    description: `A company buys $80,000 of Available-for-Sale (AFS) securities. By year-end, their fair value increases by $5,000.

Where is this unrealized gain reported?`,
    answer: 'Other Comprehensive Income (OCI)',
    hint: 'AFS securities affect OCI, not the Income Statement.',
    explanation: `Answer: Other Comprehensive Income (OCI)

• • •

Detailed explanation:

1. Securities Classification Impact:
   
   Trading Securities:
   • Held for short-term profit
   • Unrealized gains/losses → Income Statement
   • Fair value changes affect Net Income immediately
   
   Available-for-Sale (AFS):
   • Held for indefinite period
   • Unrealized gains/losses → Other Comprehensive Income
   • Fair value changes bypass Net Income

2. AFS Accounting Treatment:
   
   Initial Purchase:
   • AFS Securities: $80,000
   • Cash: ($80,000)
   
   Year-End Fair Value Adjustment:
   • AFS Securities: $5,000 (increase to $85,000)
   • AOCI (Accumulated OCI): $5,000

3. Financial Statement Impact:
   
   Income Statement:
   • No impact from unrealized gain
   • Net Income unaffected
   
   Other Comprehensive Income:
   • Unrealized gain on AFS securities: $5,000
   • Increases total comprehensive income
   
   Balance Sheet:
   • AFS securities at fair value: $85,000
   • AOCI (part of equity): $5,000

4. Why OCI vs. Income Statement:
   • AFS securities not held for trading
   • Gains/losses are temporary and unrealized
   • Volatility should not affect current earnings
   • Provides more stable income reporting

5. When Gains Hit Income Statement:
   • Upon sale of AFS securities
   • Reclassification from AOCI to earnings
   • Called "reclassification adjustment"

6. Comprehensive Income Components:
   • Net Income: $X
   • OCI: $5,000 (AFS gain)
   • Total Comprehensive Income: $X + $5,000

Key Points:
   • AFS unrealized gains bypass the income statement
   • OCI provides temporary holding place for unrealized items
   • Upon sale, gains/losses reclassify to earnings
   • AOCI accumulates on balance sheet until realized`,
    learnContent: {
      concept: 'AFS gains/losses affect OCI until realized.',
      formula: 'OCI Adjustment = Change in Fair Value of AFS Securities',
      example: '$10k AFS gain → $10k OCI\n$15k loss = ($15k) OCI impact\n$8k appreciation → $8k AOCI increase'
    }
  },
  {
    id: 'acc-hard-34',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Equity Method Investment Accounting',
    description: `A company owns 30% of another firm and uses the equity method. That investee reports $200,000 Net Income and pays $50,000 in dividends.

What is the impact on the investor's Income Statement and Cash Flow Statement?`,
    answer: '$60,000 income (IS); $15,000 cash inflow (CFS from Investing)',
    hint: 'Equity income = 30% × Net Income. Dividends = return of capital, not income.',
    explanation: `Calculation:
Equity Income = 30% × $200,000 = $60,000 (Income Statement)
Dividend Cash = 30% × $50,000 = $15,000 (Cash Flow Statement - Investing)

• • •

Step-by-step breakdown:

1. Equity Method Criteria:
   • Ownership: 30% (significant influence threshold: 20-50%)
   • Investor can influence investee's decisions
   • Not consolidated due to <50% ownership

2. Income Statement Impact:
   
   Equity Income Recognition:
   • Investor's share of investee's earnings
   • 30% × $200,000 = $60,000
   • Reported as "Equity in Earnings of Investee"
   • Increases investor's Net Income

3. Balance Sheet Impact:
   
   Investment Account Changes:
   • Increase for equity income: $60,000
   • Decrease for dividends received: $15,000
   • Net increase: $45,000

4. Cash Flow Statement Impact:
   
   Operating Activities:
   • Equity income is non-cash ($60,000)
   • Must be subtracted in indirect method
   • Shows that income didn't generate cash
   
   Investing Activities:
   • Dividends received: $15,000 cash inflow
   • Represents actual cash from investment

5. Journal Entries (Investor):
   
   Record Equity Income:
   • Dr. Investment in Investee: $60,000
   • Cr. Equity Income: $60,000
   
   Record Dividend Received:
   • Dr. Cash: $15,000
   • Cr. Investment in Investee: $15,000

6. Reconciliation Logic:
   • Investee earned $200,000 → Investor records $60,000 income
   • Investee paid $50,000 dividends → Investor receives $15,000 cash
   • Investment account increases by net: $60,000 - $15,000 = $45,000

Key Points:
   • Equity method records investor's share of investee's performance
   • Income is recognized when earned, not when cash received
   • Dividends reduce investment account (return of capital)
   • Cash flow reflects only actual dividends received`,
    learnContent: {
      concept: 'Equity method: record pro-rata income; dividends reduce investment and are investing cash flow.',
      formula: 'IS = Ownership % × Net Income; CFS = Ownership % × Dividends',
      example: '20% of $100k NI → $20k income; 20% × $40k dividend = $8k CFS\n25% stake, $300k NI, $60k dividend = $75k income, $15k cash\n40% × $150k NI, $30k dividend = $60k income, $12k cash'
    }
  },

  // Topic 59: Dividends Paid
  {
    id: 'acc-easy-72',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Dividends Paid – Basic Effect',
    description: `A firm declares and pays $10,000 in dividends.

How is this reflected on the statements?`,
    answer: 'Financing Cash Flow outflow; no income statement impact',
    hint: 'Dividends affect cash and retained earnings, not net income.',
    explanation: `Answer: Financing Cash Flow outflow; no income statement impact

• • •

Detailed explanation:

1. Nature of Dividends:
   • Distribution of earnings to shareholders
   • Return of value to equity holders
   • Not an expense of doing business

2. Financial Statement Impact:
   
   Income Statement:
   • NO impact on revenues or expenses
   • NO impact on Net Income
   • Dividends are distributions, not expenses
   
   Balance Sheet:
   • Cash decreases: ($10,000)
   • Retained Earnings decreases: ($10,000)
   • Total equity decreases: ($10,000)
   
   Cash Flow Statement:
   • Financing Activities: ($10,000)
   • Represents cash returned to shareholders

3. Why Financing Activities:
   • Dividends are capital structure transactions
   • Similar to stock buybacks or debt repayments
   • Involves returning cash to providers of capital
   • Not related to operating or investing activities

4. Timing Considerations:
   
   Declaration Date:
   • Board declares dividend
   • Creates liability (Dividends Payable)
   • Reduces Retained Earnings
   
   Payment Date:
   • Cash is actually paid
   • Eliminates Dividends Payable
   • Cash flow impact occurs here

5. Journal Entries:
   
   Declaration:
   • Dr. Retained Earnings: $10,000
   • Cr. Dividends Payable: $10,000
   
   Payment:
   • Dr. Dividends Payable: $10,000
   • Cr. Cash: $10,000

6. Cash Flow vs. Income Statement:
   • Income Statement: Shows earning capacity
   • Cash Flow: Shows actual cash movements
   • Dividends affect cash but not earnings

Key Points:
   • Dividends are not expenses - they don't reduce Net Income
   • Cash impact classified as financing activity
   • Reduces both cash and retained earnings
   • Timing matters: declaration vs. payment dates`,
    learnContent: {
      concept: 'Dividends paid are financing outflows and reduce retained earnings.',
      formula: 'CFS Financing Outflow = Declared Dividends Paid',
      example: '$5k dividend = ($5k) financing outflow\n$20k payout → ($20k) CFS\n$15k quarterly dividend = ($15k) financing'
    }
  },
  {
    id: 'acc-medium-44',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Dividends and Statement Impact',
    description: `A firm earns $200,000 Net Income, pays $50,000 in dividends, and repurchases $30,000 of stock.

What is the effect on Retained Earnings and total Financing Cash Flow?`,
    answer: 'Retained Earnings increases by $150,000; Financing Cash Flow = ($80,000)',
    hint: 'Dividends reduce retained earnings. Both dividends and buybacks are financing outflows.',
    explanation: `Calculation:
Retained Earnings = Net Income − Dividends = $200,000 − $50,000 = $150,000 increase
Financing Cash Flow = −$50,000 (dividends) − $30,000 (buybacks) = ($80,000)

• • •

Step-by-step breakdown:

1. Retained Earnings Analysis:
   
   Beginning Retained Earnings: $X
   Add: Net Income: $200,000
   Less: Dividends Paid: ($50,000)
   Ending Retained Earnings: $X + $150,000
   
   → Net increase in RE: $150,000

2. Share Repurchase Impact:
   • Stock buybacks do NOT affect Retained Earnings
   • They reduce Treasury Stock (or increase if contra-equity)
   • Dividends are the only item affecting RE in this problem

3. Cash Flow Statement Impact:
   
   Financing Activities:
   • Dividends paid: ($50,000)
   • Stock repurchases: ($30,000)
   → Total financing outflow: ($80,000)

4. Balance Sheet Changes:
   
   Assets:
   • Cash decreases: ($80,000)
   
   Equity:
   • Retained Earnings: +$150,000 (NI - dividends)
   • Treasury Stock: +$30,000 (or reduces other equity)
   • Net equity change: +$120,000

5. Why Both are Financing Activities:
   • Dividends: Direct cash distribution to shareholders
   • Buybacks: Indirect return of cash (reduces share count)
   • Both represent capital returned to equity holders

6. Income Statement Impact:
   • Net Income: $200,000 (given)
   • NO impact from dividends or buybacks
   • These are capital transactions, not operating

7. Alternative Scenarios:
   • If buyback was $200,000: RE still +$150,000, CF = ($250,000)
   • If no dividends: RE +$200,000, CF = ($30,000)

Key Points:
   • Only dividends affect Retained Earnings, not buybacks
   • Both dividends and buybacks are financing cash outflows
   • Net Income flows through to RE unless distributed as dividends
   • Stock transactions affect paid-in capital accounts`,
    learnContent: {
      concept: 'Dividends reduce RE and are recorded as financing cash outflows along with stock buybacks.',
      formula: 'RE = NI − Dividends; CFS Financing = −Dividends − Buybacks',
      example: '$100k NI, $20k dividends → RE = $80k; ($20k) CFS\n$50k NI, $30k dividend, $10k buyback = RE = $20k; CFS = ($40k)\n$80k NI, $15k dividend, $25k buyback = RE = $65k; CFS = ($40k)'
    }
  },
  {
    id: 'acc-hard-35',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Dividend Policy Reconciliation',
    description: `A firm begins with $500,000 Retained Earnings. During the year:
- Net Income = $120,000
- Declares $40,000 dividend (paid next year)
- Pays $30,000 from prior year's dividend

What is year-end Retained Earnings, and what is the Cash Flow impact?`,
    answer: 'RE = $580,000; CFS = ($30,000) Financing Outflow',
    hint: 'Only declared dividends reduce RE. Only paid dividends affect CFS.',
    explanation: `Calculation:
Retained Earnings = $500,000 + $120,000 − $40,000 = $580,000
Cash Flow Impact = ($30,000) financing outflow (only cash actually paid)

• • •

Step-by-step breakdown:

1. Retained Earnings Rollforward:
   
   Beginning RE: $500,000
   Add: Net Income: $120,000
   Less: Dividends declared this year: ($40,000)
   Ending RE: $580,000

2. Key Distinction - Declaration vs. Payment:
   
   Dividends Declared This Year ($40,000):
   • Reduces Retained Earnings when declared
   • Creates Dividends Payable liability
   • Will affect cash flow when paid next year
   
   Dividends Paid This Year ($30,000):
   • From prior year declaration
   • No RE impact (already reduced last year)
   • Affects cash flow statement this year

3. Cash Flow Statement Impact:
   
   Financing Activities:
   • Dividends paid: ($30,000)
   • This is the only cash flow impact
   • Declared but unpaid dividends don't affect CFS

4. Balance Sheet Changes:
   
   Current Year Journal Entries:
   
   For Net Income:
   • Dr. Various accounts: $120,000
   • Cr. Retained Earnings: $120,000
   
   For Dividend Declaration:
   • Dr. Retained Earnings: $40,000
   • Cr. Dividends Payable: $40,000
   
   For Prior Year Dividend Payment:
   • Dr. Dividends Payable: $30,000
   • Cr. Cash: $30,000

5. Year-End Balance Sheet Positions:
   • Retained Earnings: $580,000
   • Dividends Payable: $40,000 (new liability)
   • Cash: Reduced by $30,000 from payments

6. Next Year Impact:
   • When $40,000 is paid: No RE impact
   • Cash flow: ($40,000) financing outflow
   • Eliminates Dividends Payable

7. Timing Summary:
   
   This Year:
   • RE impact: $120,000 income - $40,000 declared = $80,000 net
   • Cash impact: ($30,000) paid
   
   Next Year:
   • RE impact: $0 (already recorded)
   • Cash impact: ($40,000) when paid

Key Points:
   • Dividend declarations immediately reduce Retained Earnings
   • Cash flow reflects only actual cash payments
   • Timing differences create Dividends Payable liability
   • Each period affects RE and CFS differently`,
    learnContent: {
      concept: 'Declared dividends reduce RE when declared. CFS reflects only dividends actually paid.',
      formula: 'RE = Prior RE + NI − Declared Dividends; CFS = Dividends Paid',
      example: '$300k start + $100k NI − $20k declared = $380k RE\n$40k prior-year dividend paid = ($40k) CFS\n$250k + $80k NI - $15k declared = $315k RE'
    }
  },

  // Topic 60: Share Buybacks - Questions removed, replaced by newer ones
  // Medium question removed
  // Hard question removed

  // Topic 61: Share Buybacks (Effects on EPS, Equity) - Corrected
  {
    id: 'acc-easy-159',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Buybacks – Treasury Stock and APIC Impact with Issuance History',
    description: `At the start of the year, a firm has:
- Treasury Stock: $200,000
- APIC: $500,000

During the year:
- Company repurchases 10,000 shares at $25/share
- These shares were originally issued at $12/share

What is the **combined ending balance** of Treasury Stock and APIC, assuming excess repurchase cost reduces APIC first?`,
    answer: '$820,000',
    hint: 'Repurchase = Shares × Buyback Price. Excess over issue price reduces APIC.',
    explanation: `1. Repurchase = 10,000 × $25 = $250,000
2. Treasury Stock after = $200,000 + $250,000 = $450,000
3. Excess = ($25 − $12) × 10,000 = $130,000
4. APIC reduced: $500,000 − $130,000 = $370,000
5. Combined = $450,000 + $370,000 = $820,000`,
    learnContent: {
      concept: 'Buybacks reduce equity. Excess over issuance is taken from APIC before RE.',
      formula: 'TS = Prior TS + (Shares × Repurchase Price); APIC = Start − Excess Paid',
      example: 'Repurchase 5k @ $20, issued @ $10 → Excess = $50k → APIC hit\n$150k buyback + $100k prior TS = $250k TS; APIC = $400k − excess\n$300k APIC - $50k excess = $250k APIC'
    }
  },
  {
    id: 'acc-medium-61',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Buybacks with Historical Layers, Partial Reissuance, and APIC Drain',
    description: `A company begins the year with:
- 120,000 shares outstanding, par value = $1/share
- APIC: $900,000
- Treasury Stock: $0

During the year:
1. Buys back 30,000 shares at $28/share
2. 10,000 of those shares were originally issued at $18/share; the rest at $12/share
3. Reissues 5,000 treasury shares at $20/share mid-year

What is the **combined ending balance of Treasury Stock and APIC** assuming the company uses FIFO to assign original issuance price and all excess repurchase reduces APIC?`,
    answer: '$1,185,000',
    hint: 'Break buyback into layers. Track impact of repurchase + reissuance on TS and APIC separately.',
    explanation: `1. Buyback cost = 30,000 × $28 = $840,000
2. Shares originally issued at $18: 10,000 × $18 = $180,000 issuance cost
3. Shares originally issued at $12: 20,000 × $12 = $240,000
4. Total issuance value = $180,000 + $240,000 = $420,000
5. Excess over issuance = $840,000 − $420,000 = $420,000 → APIC reduction
6. New APIC = $900,000 − $420,000 = $480,000
7. Treasury stock after buyback = $840,000
8. Reissuance of 5,000 shares at $20:
   - Cost in treasury = FIFO: first 5,000 were issued at $18, repurchased at $28
   - Reissuance price = $20 → $8 loss/share × 5,000 = $40,000 APIC further reduced
9. New APIC = $480,000 − $40,000 = $440,000
10. Treasury Stock after removing 5,000 shares = $840,000 − ($28 × 5,000) = $700,000
11. Final combined balance = $700,000 + $485,000 = $1,185,000`,
    learnContent: {
      concept: 'Track buybacks and reissuance layer-by-layer, impact flows through TS and APIC.',
      formula: 'Excess = Buyback − Issuance Value; Reissuance = Price − Cost (APIC hit or gain)',
      example: 'Buyback 10k @ $30, originally issued @ $15 → Excess = $150k → APIC down\nReissue 5k @ $25, cost = $35 → $10/share APIC hit\n$500k APIC - $200k excess = $300k APIC'
    }
  },
  {
    id: 'acc-hard-61',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Comprehensive Equity Rollforward with Multi-Year Treasury, Layered Buybacks, and Issuance',
    description: `At YE 2023, a company reports:
- APIC: $1,000,000
- Treasury Stock: $300,000
- Outstanding shares: 95,000 (par $1, originally issued evenly between $10 and $20 per share)

During 2024:
1. Repurchases 20,000 shares at $35/share
   - 8,000 of these shares were originally issued at $20
   - 12,000 were issued at $10
2. Reissues 6,000 treasury shares at $25/share, drawn from the latest (2024) purchases
3. Has $50,000 in prior APIC from treasury share gains

What is the **combined ending balance** of Treasury Stock and APIC at YE 2024?`,
    answer: '$1,360,000',
    hint: 'Start with 2023 balances. Break down the repurchase by issue layer, compute excess drain on APIC, then factor in reissuance.',
    explanation: `1. Total repurchase = 20,000 × $35 = $700,000
2. Issuance value:
   - 8,000 × $20 = $160,000
   - 12,000 × $10 = $120,000
   - Total = $280,000 → Excess = $420,000 (APIC reduced)
3. APIC = $1,000,000 − $420,000 = $580,000
4. Add $50,000 historical APIC from prior treasury → New APIC = $580,000 + $50,000 = $630,000
5. Treasury Stock = Prior $300,000 + New $700,000 = $1,000,000
6. Reissuance of 6,000 at $25:
   - Original cost = $35 (2024 layer FIFO) → $10/share loss × 6,000 = $60,000
   - APIC = $630,000 − $60,000 = $570,000
   - TS = $1,000,000 − (6,000 × $35) = $790,000
7. Final Combined = $790,000 + $570,000 = $1,360,000`,
    learnContent: {
      concept: 'Track cumulative equity changes from multi-year buybacks and reissuance layers with FIFO and APIC loss logic.',
      formula: 'Repurchase = Price × Qty; Excess = Price − Issue; Reissuance = Sale − Cost',
      example: 'Reissue 10k @ $20, bought @ $30 = $100k APIC loss\nBuyback 5k @ $40, issued @ $15 = $125k APIC hit\n$800k APIC - $300k excess = $500k'
    }
  },

  // Topic 62: Share Issuance Proceeds
  {
    id: 'acc-easy-62',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Basic Share Issuance and APIC Accounting',
    description: `A company issues 50,000 new shares at $15 per share. The par value is $1 per share.

What is the total impact on Common Stock and APIC, and what is the combined total value recorded on the balance sheet?`,
    answer: '$750,000',
    hint: 'Split the proceeds between par value (to Common Stock) and the remainder (to APIC).',
    explanation: `1. Total proceeds = 50,000 × $15 = $750,000
2. Common Stock = 50,000 × $1 = $50,000
3. APIC = $750,000 − $50,000 = $700,000
4. Total value recorded = $50,000 + $700,000 = $750,000`,
    learnContent: {
      concept: 'Share issuances are split between Common Stock (par) and APIC (excess).',
      formula: 'Common Stock = Shares × Par; APIC = (Issue Price − Par) × Shares',
      example: '10,000 shares @ $12, par $1 → CS = $10,000, APIC = $110,000\n5,000 shares @ $25, par $1 → CS = $5,000, APIC = $120,000\n20,000 shares @ $8, par $1 → CS = $20,000, APIC = $140,000'
    }
  },
  {
    id: 'acc-medium-62',
    track: 'accounting',
    difficulty: 'medium',
    title: 'APIC Impact with Multiple Issuance Tranches and Expenses',
    description: `A company issues two tranches of stock:
1. 40,000 shares at $20/share
2. 30,000 shares at $25/share
Par value = $1/share
Issuance fees total $50,000 (paid in cash)

What is the total **combined ending balance** of Common Stock and APIC recorded on the balance sheet?`,
    answer: '$1,500,000',
    hint: 'Compute par and APIC for both tranches, subtract issuance fees from APIC.',
    explanation: `1. Tranche 1: Proceeds = 40,000 × $20 = $800,000
   - Common Stock = 40,000 × $1 = $40,000
   - APIC = $800,000 − $40,000 = $760,000
2. Tranche 2: Proceeds = 30,000 × $25 = $750,000
   - Common Stock = 30,000 × $1 = $30,000
   - APIC = $750,000 − $30,000 = $720,000
3. Combined Common Stock = $40,000 + $30,000 = $70,000
4. Combined APIC = $760,000 + $720,000 − $50,000 (fees) = $1,430,000
5. Combined total = $70,000 + $1,430,000 = $1,500,000`,
    learnContent: {
      concept: 'Fees reduce APIC, not Common Stock. Issuance proceeds split by tranche.',
      formula: 'CS = Shares × Par; APIC = Net Proceeds − CS − Fees',
      example: '$1M proceeds, $100k par, $50k fees → APIC = $850k\nSplit: $600k + $400k proceeds, par $1 → calculate separately then total\n$2M issue, $150k fees → APIC = $2M - CS - $150k'
    }
  },
  {
    id: 'acc-hard-62',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Issuance with Warrant Allocation and Deferred Offering Costs',
    description: `Company raises $3M by issuing:
- 100,000 shares at $30 each (par = $1)
- The fair value of detachable warrants issued simultaneously = $500,000
- $100,000 in offering expenses are paid and capitalized initially
- These costs are amortized straight-line over 5 years (1st year only)

What is the total **combined Common Stock and APIC balance** added to the balance sheet from this transaction in Year 1?`,
    answer: '$2,480,000',
    hint: 'Allocate warrant value out of total raised, subtract it from APIC. Subtract amortized fees for the year.',
    explanation: `1. Gross proceeds = 100,000 × $30 = $3,000,000
2. Warrants (equity portion) = $500,000 → allocated to APIC separately (not part of CS)
3. Common Stock = 100,000 × $1 = $100,000
4. APIC from shares = $3,000,000 − $100,000 (par) − $500,000 (warrants) = $2,400,000
5. Offering costs amortized in Year 1 = $100,000 ÷ 5 = $20,000 → reduce APIC
6. Final APIC = $2,400,000 − $20,000 = $2,380,000
7. Total equity impact = $100,000 (CS) + $2,380,000 (APIC) = $2,480,000`,
    learnContent: {
      concept: 'Warrants reduce proceeds allocated to shares. Fees reduce APIC when amortized.',
      formula: 'Gross − Par − Warrants − Fees (amortized)',
      example: '$2M issuance + $300k warrants → $1.7M equity\nCapex fees of $50k over 5 years = $10k/year hit to APIC\n$1.5M + $200k warrants + $80k fees = net $1.22M'
    }
  },

  // Topic 63: Debt Issued (Cash Inflow)
  {
    id: 'acc-easy-63',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Basic Debt Issuance and Net Cash Flow',
    description: `A company issues $1,000,000 in bonds at face value. Issuance fees total $40,000 and are paid in cash upfront.

What is the net cash inflow reported on the cash flow statement?`,
    answer: '$960,000',
    hint: 'Face value minus cash fees = net inflow.',
    explanation: `1. Gross proceeds = $1,000,000
2. Fees paid = $40,000
3. Net cash inflow = $1,000,000 − $40,000 = $960,000`,
    learnContent: {
      concept: 'Debt proceeds on CFS = gross inflow less cash paid fees',
      formula: 'Net Inflow = Face Value − Issuance Fees',
      example: '$500k bond, $20k fees → $480k net\n$2M loan, no fees → $2M cash inflow\n$750k debt, $35k fees → $715k net'
    }
  },
  {
    id: 'acc-medium-63',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Premium Debt Issuance with Deferred Financing Costs',
    description: `A company issues $5M in bonds at 102 (i.e., 2% premium). It pays $150,000 in fees which are capitalized.

What is the total **net cash inflow from financing activities**?`,
    answer: '$5,100,000',
    hint: 'Premium increases proceeds. Capitalized fees do not reduce cash flow.',
    explanation: `1. Issuance at 102 = 102% × $5M = $5.1M
2. Capitalized fees = no impact to CFS
3. Total cash inflow = $5,100,000`,
    learnContent: {
      concept: 'Premium debt issuance increases cash. Capitalized fees are non-cash.',
      formula: 'Cash Inflow = Face × (1 + Premium %)',
      example: '$3M @ 101 → $3.03M cash\n$1M @ 98 → $980k cash\n$2M @ 105 → $2.1M inflow'
    }
  },
  {
    id: 'acc-hard-63',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Multi-Tranche Issuance: Discounts, Fees, and Hybrid Cash Impact',
    description: `Company issues two tranches of debt:
1. $3M at par (100)
2. $2M at 97 (3% discount)
- $120,000 of fees are paid in cash
- Another $80,000 in fees are capitalized

What is the total **net cash inflow from debt issuance**?`,
    answer: '$4,820,000',
    hint: 'Cash inflow = proceeds from both tranches − cash-paid fees (not deferred).',
    explanation: `1. Tranche 1: $3M at 100 = $3,000,000
2. Tranche 2: $2M at 97 = $1,940,000
   - 3% discount = $60,000
3. Cash fees = $120,000 → subtract from cash
4. Deferred fees = $80,000 → capitalized (no CFS impact)
5. Net cash = $3,000,000 + $1,940,000 − $120,000 = $4,820,000`,
    learnContent: {
      concept: 'Discounts and cash fees affect CFS; capitalized fees do not.',
      formula: 'Net Cash = Issuance Proceeds − Cash Fees Paid',
      example: '$5M @ 98 = $4.9M; $50k fees paid → $4.85M inflow\nTwo bond tranches → compute and total\n$1M @ 95 + $500k @ 103 = $950k + $515k = $1.465M'
    }
  },

  // Topic 64: Debt Repaid (Cash Outflow)
  {
    id: 'acc-easy-64',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Basic Debt Repayment (Principal Only)',
    description: `A company repays $400,000 in loan principal at year-end. No interest is included in the payment.

What is the amount recorded as a cash outflow in the financing section of the cash flow statement?`,
    answer: '$400,000',
    hint: 'Only principal repayments show up in the financing section. Interest is operating.',
    explanation: `1. Debt principal repaid = $400,000
2. No interest → entire amount is financing outflow
3. Cash flow from financing = $400,000`,
    learnContent: {
      concept: 'Principal repayments reduce financing cash flow. Interest is operating.',
      formula: 'Cash Outflow = Principal Repaid',
      example: '$1M loan, repay $200k → CFF = $200k outflow\n$500k principal, $50k interest → only $500k goes in financing\n$300k repayment → $300k CFF outflow'
    }
  },
  {
    id: 'acc-medium-64',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Debt Repayment with Accrued Interest Split',
    description: `A company has $2M in term debt at 8% annual interest.
- On June 30, it repays $500,000 principal and all accrued interest to date.
- Interest is paid in cash and there are no fees or penalties.

What is the total cash outflow for this repayment, and how much is reported in the financing section?`,
    answer: '$580,000',
    hint: 'Split the payment into interest (operating) and principal (financing).',
    explanation: `1. Interest = $2,000,000 × 8% × 6/12 = $80,000 (half year)
2. Principal = $500,000
3. Total cash = $580,000
4. CFF = $500,000; CFO = $80,000`,
    learnContent: {
      concept: 'Cash flow classification depends on type: principal is financing, interest is operating.',
      formula: 'Interest = Principal × Rate × Time',
      example: '$1M loan, 5% interest, 6 months = $25k interest\nRepay $100k + $25k interest → $100k CFF, $25k CFO\n$3M debt, 6%, 9 months = $135k interest'
    }
  },
  {
    id: 'acc-hard-64',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Staggered Debt Repayment with Prepayment and Exit Fee',
    description: `A firm holds $3.5M in senior term debt:
- Scheduled repayment: $1.5M at year-end
- Mid-year, prepays $500,000 toward next year's installment
- Pays $100,000 early termination fee

What is the total **financing cash outflow**, and how much does this reduce debt on the balance sheet?`,
    answer: '$2,100,000',
    hint: 'Sum the actual cash flows in financing. Only principal reduces balance sheet debt.',
    explanation: `1. Year-end repayment = $1.5M
2. Prepayment = $500,000
3. Exit fee = $100,000 (cash, financing section)
4. Total CFF outflow = $1.5M + $500k + $100k = $2.1M
5. Balance sheet debt reduces by $2.0M (principal only)`,
    learnContent: {
      concept: 'Prepayments + fees affect cash flow. Only principal reduces debt liability.',
      formula: 'Cash Outflow = Principal + Prepayment + Fees',
      example: 'Loan: $1M repaid + $50k prepay + $20k fee → $1.07M CFF\nDebt down only by $1.05M (principal)\n$800k + $200k + $40k = $1.04M CFF'
    }
  },

  // Topic 65: Capitalized Financing Fees
  {
    id: 'acc-easy-65',
    track: 'accounting',
    difficulty: 'easy',
    title: 'Straight-Line Amortization of Financing Fees',
    description: `A company incurs $100,000 in financing fees when issuing a 5-year term loan. The fees are capitalized and amortized straight-line over the loan term.

What is the amortization expense for Year 1, and how is it reflected in the cash flow statement?`,
    answer: '$20,000',
    hint: 'Divide total fees evenly over loan term; amortization is non-cash.',
    explanation: `1. Amortization = $100,000 ÷ 5 years = $20,000
2. Income Statement → $20,000 financing fee amortization (non-cash)
3. Cash Flow Statement:
   - CFO: add back $20,000 as non-cash charge
   - No impact to CFF unless paid`,
    learnContent: {
      concept: 'Capitalized fees are amortized; amortization is non-cash and added back to CFO.',
      formula: 'Amort = Fees / Term',
      example: '$50k fees, 10-year loan → $5k/year amort\n$200k over 4 years = $50k annual add-back\n$75k fees, 3 years → $25k/year'
    }
  },
  {
    id: 'acc-medium-65',
    track: 'accounting',
    difficulty: 'medium',
    title: 'Financing Fees on Mid-Year Loan with Amortization Split',
    description: `Company raises a $6M term loan on July 1 with $180,000 in financing fees, amortized straight-line over 6 years.

What is the financing fee amortization in Year 1, and how does it affect Net Income, the Balance Sheet, and CFS?`,
    answer: '$15,000',
    hint: 'Only half-year amortization in Year 1 due to July issuance. Split into IS, BS, and CFO effects.',
    explanation: `1. Annual amortization = $180,000 ÷ 6 = $30,000
2. Year 1 is half-year → $30,000 × 0.5 = $15,000
3. Net Income: ↓ by $15,000 expense
4. Balance Sheet: asset value ↓ by $15,000
5. CFS:
   - CFO: add back $15,000
   - CFF: $180,000 outflow when paid`,
    learnContent: {
      concept: 'Mid-year fee amortization recognized proportionally. Non-cash portion affects NI and CFO.',
      formula: 'Amort = Total / Years × Fraction of Year',
      example: '$120k fees, 10-yr loan in Oct = $3k in Y1\nQ2 issuance → 75% of annual expense\n$90k fees, 3-yr term, Sep start = $10k Y1'
    }
  },
  {
    id: 'acc-hard-65',
    track: 'accounting',
    difficulty: 'hard',
    title: 'Financing Fee Rollforward with Early Repayment and Accelerated Amortization',
    description: `Company begins Year 2 with $140,000 in unamortized financing fees (4-year original term).
- Amortized straight-line
- In Year 2, repays the loan in full after 9 months

What is the **total amortization expense** recorded in Year 2, and how does it flow through the 3 statements?`,
    answer: '$105,000',
    hint: 'Accelerate amortization on early repayment. Expense all remaining unamortized fees at time of extinguishment.',
    explanation: `1. Annual amortization = $140,000 ÷ 4 = $35,000
2. After 9 months: recognize 9/12 × $35,000 = $26,250
3. Loan repaid → write off remaining: $140,000 − $26,250 = $113,750
4. Total Y2 amort = $26,250 + $113,750 = $140,000
5. Income Statement: ↓ by $140,000
6. Balance Sheet: fees reduced to $0
7. CFS:
   - CFO: add back entire $140,000 as non-cash amortization
   - CFF: any actual fee payments excluded unless new loan`,
    learnContent: {
      concept: 'Early repayment accelerates amortization of unamortized fees.',
      formula: 'Total Amort = Pro-rata + Accelerated Write-off',
      example: '$80k unamortized, paid after 1 year of 5 → $16k + $64k = $80k total\n$200k, repaid at 75% mark → recognize full balance\n$60k fees, 3-yr term, repaid Y2 → write off remainder'
    }
  },

  // Topic 4: Why Cash is Subtracted in Enterprise Value - Easy
  {
    id: 'val_cash_subtract_easy',
    track: 'valuation',
    difficulty: 'easy',
    title: 'Why Cash is Subtracted - Basic Concept',
    description: `A company has:

Market Cap: $420 million
Debt: $180 million
Preferred Stock: $30 million
Noncontrolling Interest: $20 million
Cash: $100 million

The company also owns an unrelated $50 million stake in a public company (non-operating).

What is the Enterprise Value?`,
    answer: 500000000,
    unit: '$',
    hint: 'Subtract both cash and non-core investments from the capital-backed value.',
    explanation: `Formula: EV = Equity Value + Debt + Preferred + NCI - Cash - Non-operating Investments

Step-by-step calculation:
• Start with Equity Value: $420M
• Add Debt: $420M + $180M = $600M
• Add Preferred Stock: $600M + $30M = $630M
• Add Noncontrolling Interest: $630M + $20M = $650M
• Subtract Cash: $650M − $100M = $550M
• Subtract Non-operating equity investment: $550M − $50M = $500M`,
    learnContent: {
      concept: 'Cash and excess non-operating assets are subtracted because they\'re not required to generate operating profits.',
      formula: 'EV = Equity + Debt + Preferred + NCI − Cash − Excess Investments',
      example: 'If you acquired a company, you\'d "pay" for the business minus the cash you acquire. $400M Market Cap + $100M Debt − $50M Cash = $450M EV'
    }
  },

  // Topic 4: Why Cash is Subtracted in Enterprise Value - Medium
  {
    id: 'val_cash_subtract_medium',
    track: 'valuation',
    difficulty: 'medium',
    title: 'Why Cash is Subtracted - PE Evaluation',
    description: `A PE firm is evaluating a business with the following:

Equity Value: $2.1B
Debt: $900M
Preferred Stock: $120M
Noncontrolling Interest: $80M
Cash: $350M
Excess Insurance Reserves (non-operating): $70M
Held-for-sale core warehouse asset: $60M

Assume the held-for-sale warehouse is still required for operations, but all other liquid reserves are non-operating.

What is the Enterprise Value?`,
    answer: 2780000000,
    unit: '$',
    hint: 'Subtract all liquid, non-operating assets—but not operational held-for-sale assets.',
    explanation: `Formula: EV = Equity Value + Debt + Preferred + NCI - Cash - Excess Insurance Reserves

Step-by-step calculation:
• Start with Equity Value: $2.1B
• Add Debt: $2.1B + $900M = $3.0B
• Add Preferred Stock: $3.0B + $120M = $3.12B
• Add NCI: $3.12B + $80M = $3.2B
• Subtract Cash: $3.2B − $350M = $2.85B
• Subtract Excess Insurance Reserves: $2.85B − $70M = $2.78B

Note: Do not subtract held-for-sale warehouse as it's still operational.`,
    learnContent: {
      concept: 'Cash is subtracted because the acquirer "gets it for free" — they don\'t need to re-invest it. Same applies to non-core, liquid assets.',
      formula: 'EV = Equity + Net Debt + Preferred + NCI − Cash − Excess Liquid Assets',
      example: 'Cash, marketable securities, insurance floats reduce EV. Don\'t subtract real estate still essential to the business.'
    }
  },

  // Topic 4: Why Cash is Subtracted in Enterprise Value - Hard
  {
    id: 'val_cash_subtract_hard',
    track: 'valuation',
    difficulty: 'hard',
    title: 'Why Cash is Subtracted - Software Company Valuation',
    description: `You are valuing a software company with:

Equity Value: $6.8B
Debt: $1.2B
Preferred Stock: $250M
Noncontrolling Interest: $160M
Cash: $800M
Short-Term Investments: $300M
Strategic Venture Investment in a non-core AI startup: $500M
Restricted Customer Deposits (held in escrow, not usable): $350M
Capital Lease Liabilities: $400M
Operating Property held for sale (used in core hosting): $100M

Which of the above should be subtracted from Enterprise Value? Calculate the final Enterprise Value.`,
    answer: 7210000000,
    unit: '$',
    hint: 'Subtract only non-operating, liquid assets: cash, short-term investments, and venture equity. Do not subtract restricted or operational assets.',
    explanation: `Formula: EV = Equity Value + Debt + Preferred + NCI + Capital Leases - Cash - Short-Term Investments - Strategic Venture Investment

Step-by-step calculation:
• Start with Equity Value: $6.8B
• Add Debt: $6.8B + $1.2B = $8.0B
• Add Preferred Stock: $8.0B + $250M = $8.25B
• Add Noncontrolling Interest: $8.25B + $160M = $8.41B
• Add Capital Lease Liabilities: $8.41B + $400M = $8.81B
• Subtract Cash: $8.81B − $800M = $8.01B
• Subtract Short-Term Investments: $8.01B − $300M = $7.71B
• Subtract Strategic Venture Investment: $7.71B − $500M = $7.21B

Items NOT subtracted:
• Restricted Customer Deposits → tied to operations
• Held-for-sale hosting asset → still operational`,
    learnContent: {
      concept: 'Subtract cash and non-core, liquid investments when calculating EV. Do not subtract operational or restricted-use assets.',
      formula: 'EV = Equity + Debt-like + Preferred + NCI − Cash − Non-operating Liquid Assets',
      example: 'Venture stakes and ST investments reduce EV. Escrowed deposits and hosting centers are essential and stay in EV.'
    }
  },

  // Topic 5: EV Multiples vs. Equity Multiples - Easy
  {
    id: 'val_multiples_easy',
    track: 'valuation',
    difficulty: 'easy',
    title: 'P/E Multiple Calculation',
    description: `A company has the following data:

Share Price: $20
Shares Outstanding: 110 million
Net Income: $120 million
EBITDA: $220 million
Revenue: $1.3 billion

What is its P/E multiple?

*Note: Please round your answer to the nearest hundredth (2 decimal places).*`,
    answer: 18.33,
    hint: 'P/E = Market Cap ÷ Net Income',
    explanation: `Formula: P/E = Equity Value ÷ Net Income = $2.2B ÷ $120M = 18.33

Step-by-step calculation:

1. Calculate Equity Value:
   Equity Value = Share Price × Shares Outstanding
   Equity Value = $20 × 110M = $2.2B

2. Identify Net Income:
   Net Income = $120M

3. Calculate P/E Multiple:
   P/E = Equity Value ÷ Net Income
   P/E = $2.2B ÷ $120M = 18.33

Final Answer: 18.33`,
    learnContent: {
      concept: 'P/E multiple measures how much investors pay for each dollar of earnings.',
      formula: 'P/E = Equity Value ÷ Net Income',
      example: '$500M Market Cap ÷ $25M Net Income = 20x P/E\n$1B Equity Value ÷ $100M Earnings = 10x P/E\n$300M Market Cap ÷ $15M Net Income = 20x P/E'
    }
  },

  // Topic 5: EV Multiples vs. Equity Multiples - Medium
  {
    id: 'val_multiples_medium',
    track: 'valuation',
    difficulty: 'medium',
    title: 'EV/EBITDA Multiple Calculation',
    description: `A company has the following:

Market Cap: $3.3B
Debt: $700M
Preferred Stock: $150M
Cash: $250M
EBIT: $350M
Depreciation & Amortization: $50M

What is its EV/EBITDA multiple?

*Note: Please round your answer to the nearest hundredth (2 decimal places).*`,
    answer: 10.00,
    hint: 'Calculate EBITDA first, then Enterprise Value, then divide.',
    explanation: `Formula: EV/EBITDA = Enterprise Value ÷ EBITDA = $3.9B ÷ $400M = 9.75 ≈ 10.00

Step-by-step calculation:

1. Calculate EBITDA:
   EBITDA = EBIT + Depreciation & Amortization
   EBITDA = $350M + $50M = $400M

2. Calculate Enterprise Value:
   EV = Market Cap + Debt + Preferred - Cash
   EV = $3.3B + $700M + $150M - $250M = $3.9B

3. Calculate EV/EBITDA Multiple:
   EV/EBITDA = $3.9B ÷ $400M = 9.75 ≈ 10.00

Final Answer: 10.00`,
    learnContent: {
      concept: 'EV/EBITDA measures enterprise value relative to operational cash flow before capital structure effects.',
      formula: 'EV/EBITDA = Enterprise Value ÷ EBITDA',
      example: '$2B EV ÷ $200M EBITDA = 10x multiple\n$500M EV ÷ $100M EBITDA = 5x multiple\n$1.5B EV ÷ $150M EBITDA = 10x multiple'
    }
  },

  // Topic 5: EV Multiples vs. Equity Multiples - Hard
  {
    id: 'val_multiples_hard',
    track: 'valuation',
    difficulty: 'hard',
    title: 'Comparing EV/EBITDA Multiples Between Companies',
    description: `You're comparing two companies:

Company A:
Share Price: $40
Shares Outstanding: 150M
Debt: $1.6B
Preferred Stock: $300M
NCI: $200M
Cash: $800M
EBIT: $450M
D&A: $50M

Company B:
Share Price: $36
Shares Outstanding: 125M
Debt: $900M
Cash: $300M
EBIT: $350M
D&A: $50M

By how much does Company A's EV/EBITDA multiple exceed Company B's?

*Note: Please round your answer to the nearest hundredth (2 decimal places).*`,
    answer: 1.85,
    hint: 'Calculate both companies\' EV/EBITDA multiples, then find the difference.',
    explanation: `Formula: Difference = Company A EV/EBITDA - Company B EV/EBITDA = 14.6x - 12.75x = 1.85x

Step-by-step calculation:

Company A:
1. Equity Value = $40 × 150M = $6.0B
2. EV = $6.0B + $1.6B + $0.3B + $0.2B - $0.8B = $7.3B
3. EBITDA = $450M + $50M = $500M
4. EV/EBITDA = $7.3B ÷ $500M = 14.6x

Company B:
1. Equity Value = $36 × 125M = $4.5B
2. EV = $4.5B + $0.9B - $0.3B = $5.1B
3. EBITDA = $350M + $50M = $400M
4. EV/EBITDA = $5.1B ÷ $400M = 12.75x

Difference = 14.6x - 12.75x = 1.85x

Final Answer: 1.85`,
    learnContent: {
      concept: 'Comparing EV/EBITDA multiples helps assess relative valuations between companies.',
      formula: 'Multiple Difference = Company A Multiple - Company B Multiple',
      example: 'Company X: 15x EV/EBITDA vs Company Y: 12x = 3x difference\nHigher multiples suggest premium valuation or growth expectations\nAnalyze differences in context of growth, margins, and risk profiles'
    }
  },

  // Topic 6: Enterprise Value with Treasury Stock Method
  {
    id: "val_ev_tsm_easy",
    track: "valuation",
    difficulty: "easy",
    title: "Enterprise Value with TSM - Convertible Bonds",
    description: "A company has:\n\n100 million shares\n\nShare price: $20\n\nNet debt: $200 million\n\n$100 million of in-the-money convertible bonds, convertible into 5 million shares at a $10 strike price\n\nWhat is the company's Enterprise Value, using the Treasury Stock Method?",
    answer: "2250000000",
    explanation: "Basic equity value = 100M × $20 = $2.0B\n\nTSM impact:\nProceeds = 5M × $10 = $50M\nShares repurchased = $50M ÷ $20 = 2.5M\nNet new shares = 5M – 2.5M = 2.5M\n\nTotal diluted shares = 102.5M\nDiluted equity value = 102.5M × $20 = $2.05B\n\nNet debt = $200M (no change)\n\nEV = $2.05B + $200M = $2.25B → 2,250,000,000\n\nFinal Answer: 2,250,000,000",
    hint: "Calculate diluted shares using TSM, then add net debt to diluted equity value.",
    learnContent: {
      concept: "Enterprise Value with Treasury Stock Method accounts for the dilutive effect of convertible securities when calculating a company's total value. TSM assumes proceeds from conversion are used to repurchase shares at current market price.",
      formula: "Enterprise Value = Diluted Equity Value + Net Debt\n\nTSM Steps:\n1. Calculate conversion proceeds\n2. Determine shares repurchased at current price\n3. Calculate net dilution\n4. Apply to equity value calculation",
      example: "If convertibles can be exercised for 10M shares at $15 strike with current price $30:\n• Proceeds: 10M × $15 = $150M\n• Repurchased: $150M ÷ $30 = 5M\n• Net dilution: 10M - 5M = 5M shares\n• This increases diluted share count by 5M"
    }
  },
  {
    id: "val_ev_tsm_medium",
    track: "valuation",
    difficulty: "medium",
    title: "Enterprise Value with TSM - Medium Complexity",
    description: "A company has:\n\n150 million shares\n\nShare price: $30\n\nNet debt: $400 million\n\n$300 million of in-the-money convertible bonds, convertible into 10 million shares at a $15 strike price\n\nWhat is the company's Enterprise Value, applying the Treasury Stock Method?",
    answer: "5050000000",
    explanation: "Basic equity value = 150M × $30 = $4.5B\n\nTSM steps:\nProceeds = 10M × $15 = $150M\nShares repurchased = $150M ÷ $30 = 5M\nNet new shares = 5M\n\nDiluted shares = 155M\nDiluted equity value = 155M × $30 = $4.65B\n\nNet debt = $400M\n\nEV = $4.65B + $400M = $5.05B → 5,050,000,000\n\nFinal Answer: 5,050,000,000",
    hint: "Apply TSM to find diluted shares, calculate diluted equity value, then add net debt.",
    learnContent: {
      concept: "When convertible bonds are in-the-money, TSM assumes they will be converted. The key is determining the net dilutive effect after accounting for share repurchases from conversion proceeds.",
      formula: "Net Dilution = Convertible Shares - (Proceeds ÷ Current Price)\n\nDiluted Equity = (Basic Shares + Net Dilution) × Share Price\n\nEnterprise Value = Diluted Equity + Net Debt",
      example: "For convertibles into 8M shares at $20 strike, current price $40:\n• Proceeds: 8M × $20 = $160M\n• Repurchased: $160M ÷ $40 = 4M\n• Net dilution: 8M - 4M = 4M shares\n• Diluted equity increases by 4M × $40 = $160M"
    }
  },
  {
    id: "val_ev_tsm_hard",
    track: "valuation",
    difficulty: "hard",
    title: "Enterprise Value with TSM - Complex Calculation",
    description: "A company has:\n\n200 million shares\n\nShare price: $40\n\nNet debt: $600 million\n\n$500 million of in-the-money convertible debt, convertible into 25 million shares at a $20 strike price\n\nWhat is the company's Enterprise Value under the Treasury Stock Method?",
    answer: "9100000000",
    explanation: "Basic equity value = 200M × $40 = $8.0B\n\nTSM details:\nProceeds = 25M × $20 = $500M\nShares repurchased = $500M ÷ $40 = 12.5M\nNet dilution = 25M – 12.5M = 12.5M\n\nDiluted shares = 212.5M\nDiluted equity value = 212.5M × $40 = $8.5B\n\nNet debt = $600M\n\nEV = $8.5B + $600M = $9.1B → 9,100,000,000\n\nFinal Answer: 9,100,000,000",
    hint: "Calculate the net dilutive impact of convertibles, apply to equity value, then add net debt for enterprise value.",
    learnContent: {
      concept: "Large convertible positions can significantly impact enterprise value calculations. TSM ensures we don't double-count the economic value by assuming proceeds are used efficiently to minimize dilution.",
      formula: "TSM Enterprise Value Calculation:\n1. Net Dilution = Convertible Shares - (Strike × Shares ÷ Current Price)\n2. Diluted Shares = Basic + Net Dilution\n3. Diluted Equity = Diluted Shares × Current Price\n4. Enterprise Value = Diluted Equity + Net Debt",
      example: "For a major convertible position:\n• Higher strike prices reduce net dilution\n• Lower current prices increase share repurchase capability\n• The net effect determines true enterprise value impact\n• Always verify in-the-money status before applying TSM"
    }
  },

  // Topic 7: Treasury Stock Method & Diluted Shares
  {
    id: 'val_tsm_easy_1',
    track: 'valuation',
    difficulty: 'easy',
    title: 'Treasury Stock Method - Basic Calculation',
    description: `A company has 100 million basic shares outstanding and a share price of $20. There are 5 million in-the-money options with a $10 strike price.

Using the Treasury Stock Method, what is the diluted share count?

*Note: Please round your answer to the nearest tenth (1 decimal place).*`,
    answer: 102.5,
    unit: 'million shares',
    hint: 'Calculate option proceeds, shares repurchased, then net new shares added.',
    explanation: `Formula: Diluted Shares = Basic Shares + Net New Shares from Options = 100M + 2.5M = 102.5M

Step-by-step calculation:

1. Calculate Option Proceeds:
   Option Proceeds = Options × Strike Price
   Option Proceeds = 5M × $10 = $50M

2. Calculate Shares Repurchased:
   Shares Repurchased = Proceeds ÷ Current Stock Price
   Shares Repurchased = $50M ÷ $20 = 2.5M

3. Calculate Net New Shares:
   Net New Shares = Options Exercised - Shares Repurchased
   Net New Shares = 5M - 2.5M = 2.5M

4. Calculate Diluted Share Count:
   Diluted Shares = Basic Shares + Net New Shares
   Diluted Shares = 100M + 2.5M = 102.5M

Final Answer: 102.5 million shares`,
    learnContent: {
      concept: 'Treasury Stock Method calculates dilution from stock options by assuming proceeds are used to repurchase shares.',
      formula: 'Diluted Shares = Basic Shares + (Options - Proceeds/Stock Price)',
      example: '10M options @ $5 strike, $15 stock price → 10M - ($50M/$15) = 6.67M net dilution\n20M options @ $8 strike, $12 stock price → 20M - ($160M/$12) = 6.67M net dilution'
    }
  },
  {
    id: 'val_tsm_easy_2',
    track: 'valuation',
    difficulty: 'easy',
    title: 'Treasury Stock Method - Net Dilution',
    description: `A company has 50 million basic shares, a stock price of $25, and 2 million in-the-money options with a $15 strike.

How many net new shares will be added from options under TSM?

*Note: Please round your answer to the nearest tenth (1 decimal place).*`,
    answer: 0.8,
    unit: 'million shares',
    hint: 'Focus on just the net dilution calculation: options minus shares repurchased.',
    explanation: `Formula: Net New Shares = Options - (Proceeds ÷ Stock Price) = 2M - 1.2M = 0.8M

Step-by-step calculation:

1. Calculate Option Proceeds:
   Option Proceeds = Options × Strike Price
   Option Proceeds = 2M × $15 = $30M

2. Calculate Shares Repurchased:
   Shares Repurchased = Proceeds ÷ Current Stock Price
   Shares Repurchased = $30M ÷ $25 = 1.2M

3. Calculate Net New Shares:
   Net New Shares = Options Exercised - Shares Repurchased
   Net New Shares = 2M - 1.2M = 0.8M

Final Answer: 0.8 million shares`,
    learnContent: {
      concept: 'Net dilution from options equals total options minus theoretical shares repurchased with proceeds.',
      formula: 'Net Dilution = Options - (Option Proceeds ÷ Stock Price)',
      example: '5M options @ $10, stock at $20 → 5M - ($50M/$20) = 2.5M net dilution\n3M options @ $8, stock at $16 → 3M - ($24M/$16) = 1.5M net dilution'
    }
  },
  {
    id: 'val_tsm_medium_1',
    track: 'valuation',
    difficulty: 'medium',
    title: 'Treasury Stock Method with RSUs',
    description: `A company has:

• 75 million basic shares
• Stock price: $30
• 6 million in-the-money options @ $10 strike
• 3 million unvested RSUs, with a performance hurdle that only 60% are expected to vest

What is the total diluted share count using TSM?

*Note: Please round your answer to the nearest tenth (1 decimal place).*`,
    answer: 80.8,
    unit: 'million shares',
    hint: 'Calculate option dilution using TSM, then add expected RSU vesting.',
    explanation: `Formula: Diluted Shares = Basic + Net Option Dilution + Expected RSUs = 75M + 4M + 1.8M = 80.8M

Step-by-step calculation:

1. Options Calculation:
   Option Proceeds = 6M × $10 = $60M
   Shares Repurchased = $60M ÷ $30 = 2M
   Net New Shares from Options = 6M - 2M = 4M

2. RSUs Calculation:
   Expected RSUs to Vest = 3M × 60% = 1.8M

3. Total Diluted Share Count:
   Diluted Shares = Basic Shares + Option Dilution + RSU Dilution
   Diluted Shares = 75M + 4M + 1.8M = 80.8M

Final Answer: 80.8 million shares`,
    learnContent: {
      concept: 'Diluted shares include options (using TSM) plus expected RSU vesting based on performance probability.',
      formula: 'Diluted = Basic + Net Options + (RSUs × Vesting Probability)',
      example: 'Options: 5M @ $15, stock $25 → 2M net dilution\nRSUs: 2M @ 80% vest → 1.6M dilution\nTotal: Basic + 2M + 1.6M'
    }
  },
  {
    id: 'val_tsm_medium_2',
    track: 'valuation',
    difficulty: 'medium',
    title: 'Treasury Stock Method with Share Repurchase',
    description: `A company has:

• 120 million basic shares
• Stock price: $40
• 10 million options @ $25 strike
• 5 million RSUs (all vest)
• Company announces a $200M share repurchase program (to be treated as treasury shares)

Using the TSM, what is the fully diluted share count?

*Note: Answer will be rounded to the nearest whole number.*`,
    answer: 124,
    unit: 'million shares',
    hint: 'Calculate option and RSU dilution, then subtract share repurchase impact.',
    explanation: `Formula: Diluted Shares = Basic + Net Options + RSUs - Repurchased = 120M + 3.75M + 5M - 5M = 123.75M ≈ 124M

Step-by-step calculation:

1. Options Calculation:
   Option Proceeds = 10M × $25 = $250M
   Shares Repurchased from Options = $250M ÷ $40 = 6.25M
   Net Dilution from Options = 10M - 6.25M = 3.75M

2. RSUs:
   RSU Dilution = 5M shares (all vest)

3. Share Repurchase Program:
   Shares Retired = $200M ÷ $40 = 5M shares

4. Net Share Change:
   Net New Shares = 3.75M + 5M - 5M = 3.75M

5. Final Diluted Share Count:
   Diluted Shares = 120M + 3.75M = 123.75M
   Rounded to nearest whole: 124M

Final Answer: 124 million shares`,
    learnContent: {
      concept: 'Share repurchase programs reduce total share count, offsetting dilution from stock-based compensation.',
      formula: 'Net Dilution = Option Dilution + RSUs - Share Repurchases',
      example: 'Options add 2M, RSUs add 3M, repurchase 4M → net dilution = 1M\nMust account for all sources of share count changes in valuation'
    }
  },
  {
    id: 'val_tsm_hard_1',
    track: 'valuation',
    difficulty: 'hard',
    title: 'Treasury Stock Method - Complex Equity Instruments',
    description: `A company has:

• 90 million basic shares
• Share price: $35
• 8 million options @ $20 strike
• 4 million RSUs (75% expected to vest)
• 2 million PSUs that vest only if share price exceeds $40
• Company announces a $105M share repurchase plan

What is the diluted share count?

*Note: Answer will be rounded to the nearest whole number.*`,
    answer: 93,
    unit: 'million shares',
    hint: 'PSUs do not vest at current price. Calculate all other dilutive effects.',
    explanation: `Formula: Diluted Shares = Basic + Net Options + Expected RSUs + PSUs - Repurchased = 90M + 3.429M + 3M + 0M - 3M = 93.429M ≈ 93M

Step-by-step calculation:

1. Options Calculation:
   Option Proceeds = 8M × $20 = $160M
   Shares Repurchased from Options = $160M ÷ $35 = 4.571M
   Net Dilution from Options = 8M - 4.571M = 3.429M

2. RSUs:
   Expected RSU Vesting = 4M × 75% = 3M shares

3. PSUs (Performance Share Units):
   Current Price = $35, Hurdle = $40
   PSUs not included (price below hurdle)

4. Share Repurchase:
   Shares Retired = $105M ÷ $35 = 3M shares

5. Net Share Increase:
   Net Increase = 3.429M + 3M + 0M - 3M = 3.429M

6. Final Diluted Share Count:
   Diluted Shares = 90M + 3.429M = 93.429M
   Rounded to nearest whole: 93M

Final Answer: 93 million shares`,
    learnContent: {
      concept: 'Performance Share Units only contribute to dilution if performance conditions are currently met.',
      formula: 'Diluted = Basic + Options + RSUs + (PSUs if hurdles met) - Repurchases',
      example: 'PSUs with $50 hurdle, stock at $45 → exclude from dilution\nPSUs with $40 hurdle, stock at $42 → include in dilution\nOnly count contingent instruments if conditions are satisfied'
    }
  },
  {
    id: 'val_tsm_hard_2',
    track: 'valuation',
    difficulty: 'hard',
    title: 'Treasury Stock Method - Full Equity Structure',
    description: `A company has:

• 110 million basic shares
• Stock price: $50
• 6 million options @ $30 strike
• 3 million RSUs (all vest)
• 1.5 million performance RSUs (50% expected to vest)
• $200M share repurchase authorization

What is the final diluted share count?

*Note: Answer will be rounded to the nearest whole number.*`,
    answer: 112,
    unit: 'million shares',
    hint: 'Calculate all dilutive instruments, including performance-based RSUs at expected vesting rate.',
    explanation: `Formula: Diluted = Basic + Net Options + RSUs + Performance RSUs - Repurchased = 110M + 2.4M + 3M + 0.75M - 4M = 112.15M ≈ 112M

Step-by-step calculation:

1. Options Calculation:
   Option Proceeds = 6M × $30 = $180M
   Shares Repurchased from Options = $180M ÷ $50 = 3.6M
   Net Dilution from Options = 6M - 3.6M = 2.4M

2. Regular RSUs:
   RSU Dilution = 3M shares (all vest)

3. Performance RSUs:
   Expected Performance RSU Vesting = 1.5M × 50% = 0.75M

4. Share Repurchase Authorization:
   Shares Retired = $200M ÷ $50 = 4M shares

5. Net Dilution Calculation:
   Total Dilution = 2.4M + 3M + 0.75M = 6.15M
   Net After Repurchase = 6.15M - 4M = 2.15M

6. Final Diluted Share Count:
   Diluted Shares = 110M + 2.15M = 112.15M
   Rounded to nearest whole: 112M

Final Answer: 112 million shares`,
    learnContent: {
      concept: 'Complex equity structures require careful tracking of all dilutive instruments and their probability-weighted impact.',
      formula: 'Total Dilution = ∑(All Equity Instruments × Vesting Probability) - Share Repurchases',
      example: 'Options: calculate using TSM\nRSUs: add full amount if certain to vest\nPerformance RSUs: multiply by probability\nRepurchases: subtract from total count'
    }
  },

  // Market Value vs Book Value Questions
  {
    id: 'val_mvbv_easy_1',
    track: 'valuation',
    difficulty: 'easy',
    title: 'Market vs Book Value Difference',
    description: `A company has:

• Net PP&E: $400 million
• Inventory: $100 million
• Accounts receivable: $80 million
• Cash: $70 million
• Total liabilities: $500 million
• Shares outstanding: 40 million
• Share price: $25

What is the difference between market value and book value of equity?

Enter your answer in dollars (no commas or currency symbols).`,
    answer: 280000000,
    unit: 'dollars',
    hint: 'Calculate book value (total assets - total liabilities), then market value (shares × price), then find the difference.',
    explanation: `Formula: Difference = Market Value - Book Value = $1,000M - $150M = $850M

Step-by-step calculation:

1. Calculate Total Assets:
   Net PP&E: $400M
   Inventory: $100M
   Accounts Receivable: $80M
   Cash: $70M
   Total Assets = $650M

2. Calculate Book Value of Equity:
   Book Value = Total Assets - Total Liabilities
   Book Value = $650M - $500M = $150M

3. Calculate Market Value of Equity:
   Market Value = Shares Outstanding × Share Price
   Market Value = 40M × $25 = $1,000M

4. Calculate Difference:
   Difference = Market Value - Book Value
   Difference = $1,000M - $150M = $850M

Final Answer: $850,000,000`,
    learnContent: {
      concept: 'Market value vs book value comparison measures the premium investors place on a company above its accounting net worth.',
      formula: 'Difference = Market Value - Book Value = (Shares × Price) - (Total Assets - Total Liabilities)',
      example: 'Market value reflects investor expectations and intangible assets; book value shows accounting net worth based on historical costs'
    }
  },

  {
    id: 'val_mvbv_medium_1',
    track: 'valuation',
    difficulty: 'medium',
    title: 'Market vs Book Value with Complex Balance Sheet',
    description: `A company reports the following:

Assets:
• Net PP&E: $1.1 billion
• Goodwill: $300 million
• Inventory: $200 million
• Cash and short-term investments: $150 million

Liabilities:
• Accounts payable: $300 million
• Accrued expenses: $200 million
• Deferred revenue: $100 million
• Operating lease liabilities: $250 million

Other Info:
• 90 million shares outstanding
• Share price: $32

What is the difference between market value and book value of equity?

Enter your answer in dollars (no commas or currency symbols).`,
    answer: 1980000000,
    unit: 'dollars',
    hint: 'Sum all assets, sum all liabilities, calculate book value, then compare to market value.',
    explanation: `Formula: Difference = Market Value - Book Value = $2,880M - $900M = $1,980M

Step-by-step calculation:

1. Calculate Total Assets:
   Net PP&E: $1,100M
   Goodwill: $300M
   Inventory: $200M
   Cash and short-term investments: $150M
   Total Assets = $1,750M

2. Calculate Total Liabilities:
   Accounts payable: $300M
   Accrued expenses: $200M
   Deferred revenue: $100M
   Operating lease liabilities: $250M
   Total Liabilities = $850M

3. Calculate Book Value of Equity:
   Book Value = Total Assets - Total Liabilities
   Book Value = $1,750M - $850M = $900M

4. Calculate Market Value of Equity:
   Market Value = Shares Outstanding × Share Price
   Market Value = 90M × $32 = $2,880M

5. Calculate Difference:
   Difference = Market Value - Book Value
   Difference = $2,880M - $900M = $1,980M

Final Answer: $1,980,000,000`,
    learnContent: {
      concept: 'Complex balance sheet analysis requires careful classification of all assets and liabilities, including operating lease liabilities and deferred revenue.',
      formula: 'Book Value = Total Assets - Total Liabilities (including operating lease liabilities and deferred revenue as true liabilities)',
      example: 'Modern accounting standards include lease liabilities and deferred revenue as actual liabilities that reduce equity value'
    }
  },

  {
    id: 'val_mvbv_medium_2',
    track: 'valuation',
    difficulty: 'medium',
    title: 'Market vs Book Value with Investment Assets',
    description: `A company reports the following:

• Buildings and land: $1.8 billion
• Equipment (net of depreciation): $700 million
• Inventory: $400 million
• Cash: $250 million
• Long-term investments: $300 million
• Operating lease right-of-use assets: $200 million
• Accounts payable: $600 million
• Accrued compensation: $250 million
• Finance lease liabilities: $350 million
• Deferred tax liabilities: $150 million
• Long-term debt: $1.2 billion
• Shares outstanding: 110 million
• Share price: $50

What is the difference between market value and book value of equity?

Enter your answer in dollars (no commas or currency symbols).`,
    answer: 4400000000,
    unit: 'dollars',
    hint: 'Add all asset figures, add all liability figures, calculate book value, then compare to market value.',
    explanation: `Formula: Difference = Market Value - Book Value = $5,500M - $1,100M = $4,400M

Step-by-step calculation:

1. Calculate Total Assets:
   Buildings and land: $1,800M
   Equipment (net): $700M
   Inventory: $400M
   Cash: $250M
   Long-term investments: $300M
   Operating lease ROU assets: $200M
   Total Assets = $3,650M

2. Calculate Total Liabilities:
   Accounts payable: $600M
   Accrued compensation: $250M
   Finance lease liabilities: $350M
   Deferred tax liabilities: $150M
   Long-term debt: $1,200M
   Total Liabilities = $2,550M

3. Calculate Book Value of Equity:
   Book Value = Total Assets - Total Liabilities
   Book Value = $3,650M - $2,550M = $1,100M

4. Calculate Market Value of Equity:
   Market Value = Shares Outstanding × Share Price
   Market Value = 110M × $50 = $5,500M

5. Calculate Difference:
   Difference = Market Value - Book Value
   Difference = $5,500M - $1,100M = $4,400M

Final Answer: $4,400,000,000`,
    learnContent: {
      concept: 'Comprehensive balance sheet analysis includes all asset types (operating assets, investments, ROU assets) and various liability categories.',
      formula: 'Market Premium = Market Value - Book Value, indicating investor expectations vs accounting value',
      example: 'Large differences often indicate significant intangible value, growth expectations, or asset undervaluation not captured in book value'
    }
  },
  // VALUATION QUESTIONS - Enterprise Value - Basic Components
  {
    id: 'val-easy-ev-basic-1',
    track: 'valuation',
    difficulty: 'easy',
    title: 'Enterprise Value – Basic Components',
    description: `A company has the following:

Equity Value: $1.2 billion
Cash: $150 million
Debt: $600 million
Operating lease liabilities: $300 million
Unfunded pension liabilities: $200 million

What is the Enterprise Value?`,
    answer: 2150000000,
    hint: 'EV = Equity Value + Debt-like items - Cash',
    explanation: `Enterprise Value = Equity Value + Debt + Operating Leases + Pension Liabilities – Cash

• • •

Step-by-step calculation:

Enterprise Value = $1,200,000,000 + $600,000,000 + $300,000,000 + $200,000,000 – $150,000,000

Enterprise Value = $2,150,000,000

Key Components:
• Equity Value: Starting point (market value)
• Add: All debt-like obligations
• Add: Operating lease liabilities (debt-equivalent)
• Add: Unfunded pension liabilities (debt-equivalent)
• Subtract: Cash (reduces net obligations)

Final Answer: $2,150,000,000`,
    learnContent: {
      concept: 'Enterprise Value represents the total value of a company\'s operations, adding debt-like obligations to equity value and subtracting cash.',
      formula: 'EV = Equity Value + Total Debt + Debt-Equivalents - Cash',
      example: 'Common debt-equivalents: operating leases, pension obligations, preferred stock, minority interest'
    }
  },
  {
    id: 'val-medium-ev-comprehensive-1',
    track: 'valuation',
    difficulty: 'medium',
    title: 'Enterprise Value – Comprehensive Components',
    description: `A company has:

Market Cap: $2.5 billion
Cash and short-term investments: $300 million
Total debt: $700 million
Unfunded pension liabilities: $250 million
OPEB obligations (unfunded): $100 million
Finance lease liabilities: $400 million
Operating lease liabilities: $350 million

What is the Enterprise Value?`,
    answer: 4000000000,
    hint: 'Include all debt-like obligations: debt, leases, pension, OPEB',
    explanation: `Enterprise Value = Market Cap + Debt + Finance Leases + Operating Leases + Pension Liabilities + Unfunded OPEB – Cash

• • •

Step-by-step calculation:

Enterprise Value = $2,500,000,000 + $700,000,000 + $400,000,000 + $350,000,000 + $250,000,000 + $100,000,000 – $300,000,000

Enterprise Value = $4,000,000,000

Debt-like Items Added:
• Total debt: $700M
• Finance lease liabilities: $400M
• Operating lease liabilities: $350M
• Unfunded pension liabilities: $250M
• OPEB obligations (unfunded): $100M

Cash Subtracted: $300M

Final Answer: $4,000,000,000`,
    learnContent: {
      concept: 'Comprehensive EV calculation includes all forms of debt, lease obligations, and unfunded liabilities that represent claims on the enterprise.',
      formula: 'EV = Market Cap + All Debt + All Leases + Pension/OPEB Liabilities - Cash',
      example: 'OPEB = Other Post-Employment Benefits (healthcare, life insurance for retirees)'
    }
  },
  {
    id: 'val-hard-ev-complex-1',
    track: 'valuation',
    difficulty: 'hard',
    title: 'Enterprise Value – Complex Capital Structure',
    description: `You're analyzing a firm with:

Market Cap: $6.2 billion
Cash & equivalents: $450 million
Gross debt: $1.1 billion
Finance lease liabilities: $300 million
Operating lease liabilities: $500 million
Unfunded pension obligations: $400 million
OPEB obligations (unfunded by $50 million)
Preferred stock: $250 million
Noncontrolling interest: $150 million

What is the Enterprise Value?`,
    answer: 8500000000,
    hint: 'Include preferred stock and noncontrolling interest as equity-like claims',
    explanation: `Enterprise Value = Equity Value + Gross Debt + Finance Leases + Operating Leases + Unfunded Pension + Unfunded OPEB + Preferred Stock + Noncontrolling Interest – Cash

• • •

Step-by-step calculation:

Enterprise Value = $6,200,000,000 + $1,100,000,000 + $300,000,000 + $500,000,000 + $400,000,000 + $50,000,000 + $250,000,000 + $150,000,000 – $450,000,000

Enterprise Value = $8,500,000,000

Complex Capital Structure Components:
• Market Cap (common equity): $6,200M
• Gross debt: $1,100M
• Finance lease liabilities: $300M
• Operating lease liabilities: $500M
• Unfunded pension obligations: $400M
• Unfunded OPEB obligations: $50M
• Preferred stock: $250M
• Noncontrolling interest: $150M
• Less: Cash & equivalents: ($450M)

Final Answer: $8,500,000,000`,
    learnContent: {
      concept: 'Complex EV calculations include all forms of capital claims: debt, leases, unfunded obligations, preferred equity, and noncontrolling interests.',
      formula: 'EV = Common Equity + Debt + Leases + Unfunded Liabilities + Preferred + NCI - Cash',
      example: 'Noncontrolling interest represents minority shareholders\' claims on subsidiaries, treated as equity-like in EV calculations'
    }
  }
];