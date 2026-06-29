// ============================================================
//  国际化 (i18n) — 中英文切换
// ============================================================
let currentLang = 'zh'; // 'zh' | 'en'

// ---- 静态 UI 文本 ----
const i18nUI = {
    zh: {
        mainTitle: '政企通',
        subTitle: '企业全生命周期服务平台',
        btnStartup: '企业开办',
        btnOperate: '经营指南',
        btnCancel: '企业注销',
        backHome: '‹ 返回',
        axisTitle: '办事流程导览',
        cancelTypeTitle: '选择注销方式',
        cancelTypeIntro: '根据企业实际情况选择合适的注销方式。未开业或无债权债务的企业可优先选择简易注销，流程更快捷。',
        simpleCancel: '简易注销',
        simpleCancelDesc: '适用于未开业、无债权债务或已清算完毕的有限责任公司。无需清算组备案，公示期仅20天，全程约1.5-2个月。',
        simpleCancelCycle: '周期：1.5-2个月',
        simpleCancelNoLiquidation: '无需清算',
        badgeRecommended: '推荐',
        normalCancel: '普通注销',
        normalCancelDesc: '适用于所有公司类型。需成立清算组并备案，公示期45天，税务清算后取得清税证明，全程约2-4个月。',
        normalCancelCycle: '周期：2-4个月',
        normalCancelNeedLiquidation: '需清算备案',
        badgeStandard: '标准',
        flowTitle: '流程细则',
        gridTitle: '经营服务大厅',
        drawerTitle: '政策服务库',
        regionTitle: '各区助企政策',
        policyTitle: '助企政策',
        articleTitle: '政策正文',
        lingangTitle: '临港新片区专项政策',
        actionSheetTitle: '请选择办理途径',
        onlineBtn: '线上办理',
        onlineDesc: '跳转至上海市"一网通办"官方平台',
        offlineBtn: '线下办理',
        cancelBtn: '取消',
        districtTitle: '选择办理所在区',
        csLabel: '在线客服',
        selectDistrict: '企业所在区',
        viewPolicy: '查看各区最新助企政策汇编',
        policies: '项政策',
        flowLabel: '流程',
        typeLabel: '类型：',
        selectCurrent: '当前选择',
        copyAddress: '复制地址',
        callPhone: '拨打电话',
        addressCopied: '地址已复制',
        officialRelease: '官方发布',
        viewFullText: '查阅全文 >',
        publisher: '发布机构：所在区人民政府',
        effectDate: '实施日期：长期有效',
        noDataMsg: '暂无政策数据',
        serviceLibrary: '服务库',
        policyCompilation: '政策汇编',
        guidBtn: '办理指引 →',
        MonFri: '周一至周五 9:00-11:30, 13:30-16:30'
    },
    en: {
        mainTitle: 'BizGov Connect',
        subTitle: 'Enterprise Full-Lifecycle Service Platform',
        btnStartup: 'Business Registration',
        btnOperate: 'Operations Guide',
        btnCancel: 'Business Deregistration',
        backHome: '‹ Back',
        axisTitle: 'Process Guide',
        cancelTypeTitle: 'Select Deregistration Type',
        cancelTypeIntro: 'Choose the appropriate deregistration method based on your company\'s actual situation. Companies that have not commenced operations or have no outstanding debts may opt for simplified deregistration for a faster process.',
        simpleCancel: 'Simplified Deregistration',
        simpleCancelDesc: 'Applicable to limited liability companies that have not commenced operations, have no outstanding debts, or have completed liquidation. No liquidation committee filing required; public notice period is only 20 days, total process approximately 1.5-2 months.',
        simpleCancelCycle: 'Cycle: 1.5-2 months',
        simpleCancelNoLiquidation: 'No Liquidation Required',
        badgeRecommended: 'Recommended',
        normalCancel: 'Standard Deregistration',
        normalCancelDesc: 'Applicable to all company types. Requires establishment and filing of a liquidation committee, 45-day public notice period, and obtaining a tax clearance certificate after tax liquidation. Total process approximately 2-4 months.',
        normalCancelCycle: 'Cycle: 2-4 months',
        normalCancelNeedLiquidation: 'Liquidation Filing Required',
        badgeStandard: 'Standard',
        flowTitle: 'Process Details',
        gridTitle: 'Business Services Hall',
        drawerTitle: 'Policy Service Library',
        regionTitle: 'District Business Policies',
        policyTitle: 'Business Support Policies',
        articleTitle: 'Policy Full Text',
        lingangTitle: 'Lingang Special Zone Policies',
        actionSheetTitle: 'Select Processing Channel',
        onlineBtn: 'Online Processing',
        onlineDesc: 'Jump to Shanghai "One-Stop Online" Official Platform',
        offlineBtn: 'Offline Processing',
        cancelBtn: 'Cancel',
        districtTitle: 'Select Processing District',
        csLabel: 'Online Support',
        selectDistrict: 'Enterprise District',
        viewPolicy: 'View the latest district business support policies',
        policies: ' policies',
        flowLabel: 'Process',
        typeLabel: 'Type: ',
        selectCurrent: 'Current Selection',
        copyAddress: 'Copy Address',
        callPhone: 'Call',
        addressCopied: 'Address Copied',
        officialRelease: 'Official Release',
        viewFullText: 'View Full Text >',
        publisher: 'Publisher: District People\'s Government',
        effectDate: 'Effective: Long-term',
        noDataMsg: 'No policy data available',
        serviceLibrary: ' Service Library',
        policyCompilation: ' Policy Compilation',
        guidBtn: 'Processing Guide →',
        MonFri: 'Mon-Fri 9:00-11:30, 13:30-16:30'
    }
};

function t(key) {
    return (i18nUI[currentLang] && i18nUI[currentLang][key]) || (i18nUI.zh[key]) || key;
}

// ---- 官方链接英文名 ----
const officialLinksEN = {
    'startup': { online: 'https://yct.sh.gov.cn/portal_yct/', name: 'Shanghai Enterprise Registration Online — Business Registration' },
    'cancel_simple': { online: 'https://zwdt.sh.gov.cn', name: 'Shanghai One-Stop Online — Simplified Deregistration' },
    'cancel_normal': { online: 'https://zwdt.sh.gov.cn', name: 'Shanghai One-Stop Online — Standard Deregistration' },
    'tax': { online: 'https://zwdt.sh.gov.cn', name: 'Shanghai One-Stop Online — Tax Services' },
    'social': { online: 'https://zwdt.sh.gov.cn', name: 'Shanghai One-Stop Online — Social Insurance' },
    'housing': { online: 'https://zwdt.sh.gov.cn', name: 'Shanghai One-Stop Online — Housing Provident Fund' },
    'talent': { online: 'https://zwdt.sh.gov.cn', name: 'Shanghai One-Stop Online — Talent Services' },
    'yiwangtongban': { online: 'https://zwdt.sh.gov.cn', name: 'Shanghai One-Stop Online Platform' }
};

function getOnlineLinkEN(axisKey) {
    if (axisKey === 'startup') return { url: 'https://yct.sh.gov.cn/portal_yct/', desc: 'Jump to "Shanghai Enterprise Registration Online" for business registration' };
    return { url: 'https://zwdt.sh.gov.cn', desc: 'Jump to Shanghai "One-Stop Online" official platform' };
}

// ---- 各区窗口信息英文版 ----
const windowDataEN = {
    huangpu:  { name: 'Huangpu', office: 'Huangpu Market Supervision Bureau — Registration Window', address: '139 Julu Rd, Huangpu, Shanghai', time: 'Mon-Fri 9:00-11:30, 13:30-16:30', phone: '021-63265012' },
    jingan:   { name: 'Jing\'an', office: 'Jing\'an Market Supervision Bureau — Registration Window', address: '38 Moling Rd, Jing\'an, Shanghai', time: 'Mon-Fri 9:00-11:30, 13:30-16:30', phone: '021-52285907' },
    xuhui:    { name: 'Xuhui', office: 'Xuhui Market Supervision Bureau — Registration Window', address: '969 Nanning Rd, Xuhui, Shanghai', time: 'Mon-Fri 9:00-11:30, 13:30-16:30', phone: '021-24092222' },
    changning:{ name: 'Changning', office: 'Changning Market Supervision Bureau — Registration Window', address: '1436 Changning Rd, Changning, Shanghai', time: 'Mon-Fri 9:00-11:30, 13:30-16:30', phone: '021-22050831' },
    putuo:    { name: 'Putuo', office: 'Putuo Market Supervision Bureau — Registration Window', address: '1718 Dahe Rd, Putuo, Shanghai', time: 'Mon-Fri 9:00-11:30, 13:30-16:30', phone: '021-52564588' },
    hongkou:  { name: 'Hongkou', office: 'Hongkou Market Supervision Bureau — Registration Window', address: '338 Sanhe Rd, Hongkou, Shanghai', time: 'Mon-Fri 9:00-11:30, 13:30-16:30', phone: '021-25011181' },
    yangpu:   { name: 'Yangpu', office: 'Yangpu Market Supervision Bureau — Registration Window', address: '600 Huaide Rd, Yangpu, Shanghai', time: 'Mon-Fri 9:00-11:30, 13:30-16:30', phone: '021-25031753' },
    pudong:   { name: 'Pudong New Area', office: 'Pudong Market Supervision Bureau — Registration Window', address: '2 Huanhe Rd, Pudong, Shanghai', time: 'Mon-Fri 9:00-11:30, 13:30-16:30', phone: '021-68542222' },
    minhang:  { name: 'Minhang', office: 'Minhang Market Supervision Bureau — Registration Window', address: '6558 Humin Rd, Minhang, Shanghai', time: 'Mon-Fri 9:00-11:30, 13:30-16:30', phone: '021-64122688' },
    baoshan:  { name: 'Baoshan', office: 'Baoshan Market Supervision Bureau — Registration Window', address: '1 Songbin Rd, Baoshan, Shanghai', time: 'Mon-Fri 9:00-11:30, 13:30-16:30', phone: '021-56847588' },
    jiading:  { name: 'Jiading', office: 'Jiading Market Supervision Bureau — Registration Window', address: '118 Jiajian Hwy, Jiading, Shanghai', time: 'Mon-Fri 9:00-11:30, 13:30-16:30', phone: '021-59528814' },
    songjiang:{ name: 'Songjiang', office: 'Songjiang Market Supervision Bureau — Registration Window', address: '867 Ledu Rd(W), Songjiang, Shanghai', time: 'Mon-Fri 9:00-11:30, 13:30-16:30', phone: '021-67735888' },
    jinshan:  { name: 'Jinshan', office: 'Jinshan Market Supervision Bureau — Registration Window', address: '555 Longshan Rd, Jinshan, Shanghai', time: 'Mon-Fri 9:00-11:30, 13:30-16:30', phone: '021-57922211' },
    qingpu:   { name: 'Qingpu', office: 'Qingpu Market Supervision Bureau — Registration Window', address: '6189 Waiqingsong Hwy, Qingpu, Shanghai', time: 'Mon-Fri 9:00-11:30, 13:30-16:30', phone: '021-59728365' },
    fengxian: { name: 'Fengxian', office: 'Fengxian Market Supervision Bureau — Registration Window', address: '1529 Wangyuan Rd(S), Nanqiao, Fengxian, Shanghai', time: 'Mon-Fri 9:00-11:30, 13:30-16:30', phone: '021-67100376' },
    chongming:{ name: 'Chongming', office: 'Chongming Market Supervision Bureau — Registration Window', address: '1501 Cuizhu Rd, Chengqiao, Chongming, Shanghai', time: 'Mon-Fri 9:00-11:30, 13:30-16:30', phone: '021-59621570' }
};

const districtZonesEN = {
    center: { label: 'Central Districts', keys: ['huangpu','jingan','xuhui','changning','putuo','hongkou','yangpu'] },
    suburb: { label: 'Inner Suburbs', keys: ['pudong','minhang','baoshan','jiading','songjiang'] },
    outer: { label: 'Outer Suburbs', keys: ['jinshan','qingpu','fengxian','chongming'] }
};

// ---- 横轴导航英文数据 ----
const axisDataEN = {
    'startup': { title: 'Business Registration Guide', modules: [
        { id: 's1', step: 'STEP 01', title: 'Name Registration', desc: 'Check availability and register your company name online — no manual review required.', flow: [
            { title: 'Prepare Company Name', content: '<p>Log in to the Shanghai "One-Stop Online" platform (zwdt.sh.gov.cn) and enter the "Shanghai Enterprise Registration Online" section.</p><p>Prepare 3-5 alternative names. Format: Shanghai + Trade Name + Industry + Organization Type (e.g., "Shanghai XX Technology Co., Ltd.").</p><p>The system uses AI-powered name verification, providing real-time compliance feedback to avoid duplication with existing companies.</p>' },
            { title: 'Get Name Verification Result', content: '<p>The system performs automatic name verification, with results typically returned within 1 hour. Once approved, the name is reserved for approximately 6 months.</p><p>If your preferred name is taken, the system will indicate the reason for the conflict. You can try alternative names in sequence.</p>' }
        ]},
        { id: 's2', step: 'STEP 02', title: 'Establishment Registration', desc: 'Formally apply to establish a company with the registration authority and obtain a business license.', flowTypes: ['Company', 'Branch', 'Partnership', 'Sole Proprietorship'], flows: {
            'Company': [
                { title: 'Fill in Company Information', content: '<p>In the "One-Stop" service section, fill in the following:</p><p>• Shareholder information and capital contribution ratios</p><p>• Registered capital (subscribed system, no capital verification required)</p><p>• Business scope (select from the standardized directory)</p><p>• Legal representative and supervisor appointment details</p><p>The system supports template-based "one-click generation" of company articles of association and shareholder resolutions.</p>' },
                { title: 'Submit Documents', content: '<p>Required documents:</p><p>1. Company Registration (Filing) Application Form</p><p>2. Company Articles of Association (signed by all shareholders for LLCs, all promoters for joint-stock companies)</p><p>3. Qualification documents or copies of identity certificates for the legal representative, shareholders, directors, supervisors, senior management, and registration liaison</p><p>4. Appointment documents for the legal representative, directors, supervisors, and senior management</p><p>5. Business premises usage documents</p><p>6. Capital verification certificate (for joint-stock companies established by share offering)</p><p>7. Approval documents or license copies (where laws require pre-approval)</p>' },
                { title: 'Collect Business License', content: '<p>After approval, you may choose:</p><p>• <strong>Electronic Business License</strong>: Instant download, with the same legal effect as a paper license</p><p>• <strong>Paper License</strong>: Collect at the Market Supervision Bureau window or opt for postal delivery</p><p>Processing time: AI-powered review, license issued as fast as 1 business day.</p>' },
                { title: 'Service Window Inquiry', type: 'window', content: '' }
            ],
            'Branch': [
                { title: 'Fill in Branch Information', content: '<p>In the "One-Stop" service section, fill in the following:</p><p>• Branch name</p><p>• Business premises address</p><p>• Business scope (must not exceed that of the parent company)</p><p>• Branch manager information</p><p>A branch does not have legal person status; civil liability is borne by the parent company.</p>' },
                { title: 'Submit Documents', content: '<p>Required documents:</p><p>1. Branch Registration (Filing) Application Form</p><p>2. Business premises usage documents</p><p>3. Branch manager appointment information and copy of identity certificate (confirmed by the parent company\'s legal representative)</p><p>4. Copy of the parent company\'s business license</p><p>5. Copy of the agent\'s identity certificate</p><p>6. Approval documents or license copies (where laws require pre-approval)</p>' },
                { title: 'Collect Business License', content: '<p>After approval, you may choose:</p><p>• <strong>Electronic Business License</strong>: Instant download, with the same legal effect as a paper license</p><p>• <strong>Paper License</strong>: Collect at the Market Supervision Bureau window or opt for postal delivery</p><p>Processing time: AI-powered review, license issued as fast as 1 business day.</p>' },
                { title: 'Service Window Inquiry', type: 'window', content: '' }
            ],
            'Partnership': [
                { title: 'Fill in Partnership Information', content: '<p>In the "One-Stop" service section, fill in the following:</p><p>• Information for all partners</p><p>• Main contents of the partnership agreement</p><p>• Principal business premises address</p><p>• Business scope</p><p>• Executive partner information</p><p>Partnerships are classified into three types: general partnership, special general partnership, and limited partnership.</p>' },
                { title: 'Submit Documents', content: '<p>Required documents:</p><p>1. Partnership Enterprise Registration (Filing) Application Form</p><p>2. Partnership agreement signed by all partners</p><p>3. Qualification documents or copies of identity certificates for all partners, registration liaison, and agent</p><p>4. Principal business premises usage documents</p><p>5. Approval documents or license copies (where laws require pre-approval)</p><p>6. Professional qualification documents for partners (for special general partnership enterprises)</p>' },
                { title: 'Collect Business License', content: '<p>After approval, you may choose:</p><p>• <strong>Electronic Business License</strong>: Instant download, with the same legal effect as a paper license</p><p>• <strong>Paper License</strong>: Collect at the Market Supervision Bureau window or opt for postal delivery</p><p>Processing time: AI-powered review, license issued as fast as 1 business day.</p>' },
                { title: 'Service Window Inquiry', type: 'window', content: '' }
            ],
            'Sole Proprietorship': [
                { title: 'Fill in Enterprise Information', content: '<p>In the "One-Stop" service section, fill in the following:</p><p>• Investor information</p><p>• Enterprise name</p><p>• Registered address</p><p>• Business scope</p><p>• Capital contribution amount</p><p>A sole proprietorship is invested by a single natural person, who bears unlimited personal liability for the enterprise\'s debts.</p>' },
                { title: 'Submit Documents', content: '<p>Required documents:</p><p>1. Sole Proprietorship Enterprise Registration (Filing) Application Form</p><p>2. Copies of identity certificates for the investor and agent</p><p>3. Registered address usage documents</p><p>4. Approval documents or license copies (where laws require pre-approval)</p>' },
                { title: 'Collect Business License', content: '<p>After approval, you may choose:</p><p>• <strong>Electronic Business License</strong>: Instant download, with the same legal effect as a paper license</p><p>• <strong>Paper License</strong>: Collect at the Market Supervision Bureau window or opt for postal delivery</p><p>Processing time: AI-powered review, license issued as fast as 1 business day.</p>' },
                { title: 'Service Window Inquiry', type: 'window', content: '' }
            ]
        }},
        { id: 's3', step: 'STEP 03', title: 'Official Seal Engraving', desc: 'Have official seals (company chop, financial seal, etc.) engraved at a public security registered facility.', flow: [
            { title: 'Seal Engraving with License', content: '<p>Take your business license to a designated seal engraving facility registered with the Public Security Bureau. A standard set typically includes:</p><p>• Company official seal (required)</p><p>• Financial专用 seal</p><p>• Legal representative name seal</p><p>• Contract专用 seal (as needed)</p><p>• Invoice专用 seal (as needed)</p><p>Some areas in Shanghai have piloted electronic seals, issued simultaneously with the business license and available for online application.</p>' }
        ]},
        { id: 's4', step: 'STEP 04', title: 'Bank Account Opening', desc: 'Open a corporate basic deposit account for daily fund transactions and tax payments.', flow: [
            { title: 'Schedule Account Opening', content: '<p>Choose a bank and schedule a corporate account opening appointment. Required documents:</p><p>• Original business license (both copies)</p><p>• Original ID of the legal representative</p><p>• Company seal, financial seal, and legal representative seal</p><p>• Lease contract or business premises certificate</p><p>• Complete business background materials (AML review)</p>' },
            { title: 'On-site Processing', content: '<p>The legal representative must be present in person to fill out the account opening application and sign relevant agreements.</p><p>After bank approval, the account opening permit is issued within 1-3 business days.</p><p>The basic account is the company\'s sole fund settlement account, used for salary disbursement and tax payments.</p>' }
        ]},
        { id: 's5', step: 'STEP 05', title: 'Tax Registration', content: '', desc: 'Register your tax status with the tax authority and determine applicable tax categories and invoice eligibility.', flow: [
            { title: 'Tax Information Confirmation', content: '<p>Within 30 days of receiving your business license, log in to the Shanghai Electronic Tax Bureau to complete:</p><p>• Tax registration information confirmation</p><p>• Financial accounting system filing</p><p>• Bank account report</p><p>• Tax category assessment (VAT, corporate income tax, etc.)</p>' },
            { title: 'Invoice Application', content: '<p>Apply for invoices based on business needs:</p><p>• Determine invoice type (special VAT invoice / general invoice)</p><p>• Apply for tax control equipment or electronic invoice qualification</p><p>• First-time invoice applicants must complete real-name verification for the legal representative</p><p>• Small-scale taxpayers may apply for special invoices through the tax authority</p>' }
        ]},
        { id: 's6', step: 'STEP 06', title: 'Social Insurance Registration', desc: 'Register employees for social insurance — a legal obligation for all employers.', flow: [
            { title: 'Social Insurance Registration', content: '<p>Social insurance account opening has been integrated into the "One-Stop" company registration process and is completed together with enterprise information filing — no separate process required.</p><p>Employee labor contracts and ID information are needed to register insured persons.</p><p>Social insurance includes five types: Pension (employer 16% + employee 8%), Medical (employer 9.5% + employee 2%), Unemployment (employer 0.5% + employee 0.5%), Work Injury (employer 0.16%-1.52%).</p>' },
            { title: 'Employee Insurance Registration', content: '<p>Register employees for insurance within 30 days of employment:</p><p>• Log in to the Shanghai HR and Social Security Self-Service System</p><p>• Enter employee basic information and labor contract details</p><p>• Confirm the contribution base (adjusted annually in July)</p><p>• Declare and pay social insurance premiums monthly</p>' }
        ]},
        { id: 's7', step: 'STEP 07', title: 'Housing Fund Setup', desc: 'Open housing provident fund accounts for employees and make monthly contributions.', flow: [
            { title: 'Employer Account Opening', content: '<p>Process at the Shanghai Housing Provident Fund Management Center or through the online system. Required documents:</p><p>• Original and copy of business license (with company seal)</p><p>• Copy of legal representative\'s ID</p><p>• Original and copy of agent\'s ID</p><p>• Employer Registration Form (download from official website or fill on-site)</p><p>• Company seal, legal representative seal, bank account opening permit</p><p>Processing time: 1-2 business days when all documents are complete.</p>' },
            { title: 'Contribution Standards & Employee Registration', content: '<p>Contribution ratio: 5%-7% each for employer and employee.</p><p>July 2025 – June 2026 contribution base: upper limit 36,921 RMB, lower limit 2,690 RMB.</p><p>Monthly contribution upper limit: 5,222 RMB (14%), lower limit: 270 RMB (10%).</p><p>Within 30 days of hiring, set up or transfer individual employee accounts.</p>' }
        ]}
    ]},
    'cancel_simple': { title: 'Simplified Deregistration Guide', modules: [
        { id: 'cs1', step: 'STEP 01', title: 'Eligibility Check', desc: 'Verify whether your company meets the legal conditions for simplified deregistration.', flow: [
            { title: 'Confirm Eligibility', content: '<p>Simplified deregistration applies to the following situations:</p><p>• The company has not commenced business operations after receiving its business license (not yet in operation)</p><p>• No debts or creditor\'s rights exist before applying for deregistration</p><p>• All debts and creditor\'s rights have been settled</p><p>• Limited liability companies, non-corporate legal entities, sole proprietorships, and partnerships</p><p><strong>Inapplicable situations:</strong> Foreign-invested enterprises subject to special market access management; companies listed in the business exception list or serious violation and dishonesty list; companies with frozen, pledged shares or chattel mortgages, etc.</p>' },
            { title: 'Abnormal Status Resolution', content: '<p>If your company has any of the following issues, they must be resolved first:</p><p>• Listed in the business exception directory → Must be removed before applying</p><p>• Unresolved tax matters → Settle tax affairs first</p><p>• Frozen or pledged shares → Must be unfrozen or released before applying</p>' }
        ]},
        { id: 'cs2', step: 'STEP 02', title: 'File Simplified Deregistration Notice', desc: 'Publicize your deregistration intention through the public notice system and upload investor commitment letter.', flow: [
            { title: 'Log In and File', content: '<p>Log in to the "National Enterprise Credit Information Publicity System (Shanghai)" or "Shanghai Enterprise Registration Online" platform:</p><p>• Select "Simplified Deregistration" as the processing type</p><p>• Download and sign the "All Investors Commitment Letter"</p><p>• Upload a scanned copy or photo of the commitment letter</p><p>• The system automatically generates the simplified deregistration notice</p>' },
            { title: 'Commitment Letter Requirements', content: '<p>The "All Investors Commitment Letter" must include:</p><p>• Confirmation that no debts exist or all debts have been settled</p><p>• Confirmation that no outstanding settlement expenses, employee wages, social insurance contributions, or statutory compensation remain</p><p>• Signatures (seals) of all investors</p><p>• Commitment to bear corresponding legal consequences and responsibilities</p>' }
        ]},
        { id: 'cs3', step: 'STEP 03', title: 'Public Notice Period (20 Days)', desc: '20-day statutory objection window — proceed only after expiration without objections.', flow: [
            { title: 'Public Notice Period Notes', content: '<p>During the 20-day public notice period:</p><p>• The National Enterprise Credit Information Publicity System will automatically display the notice</p><p>• Interested parties may raise objections during this period</p><p>• The company should monitor for any objection information</p><p>• Upon expiration without objections, the system status updates automatically</p>' },
            { title: 'Objection Handling', content: '<p>If objections are received during the public notice period:</p><p>• The objection matters must be resolved first</p><p>• After resolution, a new simplified deregistration application must be submitted</p><p>• A new 20-day public notice period is calculated</p><p>• If objections cannot be resolved, conversion to standard deregistration is required</p>' }
        ]},
        { id: 'cs4', step: 'STEP 04', title: 'Submit Deregistration Application', desc: 'Formally submit the deregistration application; legal entity status terminates upon approval.', flowTypes: ['Company', 'Partnership', 'Sole Proprietorship'], flows: {
            'Company': [
                { title: 'Submit Application Online', content: '<p>Submit via "Shanghai Enterprise Registration Online" platform:</p><p>1. Enterprise Deregistration Application Form (Simplified Procedure)</p><p>2. "Simplified Deregistration All Investors Commitment Letter" signed by all investors, publicly announced for no less than 20 days on the National Enterprise Credit Information Publicity System</p><p>3. Copy of the agent\'s identity certificate</p><p>4. Non-listed joint-stock companies must also submit the shareholder register</p><p>Processing time: approximately 3-5 business days</p>' },
                { title: 'Collect Deregistration Certificate', content: '<p>After approval:</p><p>• Collect the "Deregistration Approval Notice"</p><p>• Original and duplicate business licenses are collected by the registration authority</p><p>• Company legal entity status terminates</p><p>• Use the deregistration certificate to handle subsequent matters such as bank account closure</p><p><strong>Note:</strong> Paper business licenses already issued must be returned.</p>' }
            ],
            'Partnership': [
                { title: 'Submit Application Online', content: '<p>Submit via "Shanghai Enterprise Registration Online" platform:</p><p>1. Partnership Enterprise Deregistration Application Form (Simplified Procedure)</p><p>2. "Simplified Deregistration All Investors Commitment Letter" signed by all investors, publicly announced for no less than 20 days</p><p>3. Copy of the agent\'s identity certificate</p><p>Processing time: approximately 3-5 business days</p>' },
                { title: 'Collect Deregistration Certificate', content: '<p>After approval:</p><p>• Collect the "Deregistration Approval Notice"</p><p>• Business license copies are collected by the registration authority</p><p>• Partnership enterprise status terminates</p><p>• Use the certificate for subsequent bank account closure, etc.</p>' }
            ],
            'Sole Proprietorship': [
                { title: 'Submit Application Online', content: '<p>Submit via "Shanghai Enterprise Registration Online" platform:</p><p>1. Sole Proprietorship Enterprise Deregistration Application Form (Simplified Procedure)</p><p>2. "Simplified Deregistration All Investors Commitment Letter" signed by the investor, publicly announced for no less than 20 days</p><p>3. Copy of the agent\'s identity certificate</p><p>Processing time: approximately 3-5 business days</p>' },
                { title: 'Collect Deregistration Certificate', content: '<p>After approval:</p><p>• Collect the "Deregistration Approval Notice"</p><p>• Business license copies are collected by the registration authority</p><p>• Sole proprietorship status terminates</p><p>• Use the certificate for subsequent bank account closure, etc.</p>' }
            ]
        }}
    ]},
    'cancel_normal': { title: 'Standard Deregistration Guide', modules: [
        { id: 'cn1', step: 'STEP 01', title: 'Establish Liquidation Committee', desc: 'Form a liquidation committee within the statutory period to conduct company liquidation.', flow: [
            { title: 'Dissolution Trigger Events', content: '<p>The company shall establish a liquidation committee within 15 days of the following dissolution events:</p><p>• Expiration of the business term specified in the articles of association</p><p>• Resolution by the shareholders\' meeting to dissolve</p><p>• Company merger or division requiring dissolution</p><p>• Business license revoked, ordered to close, or company dissolved</p><p>• Court-ordered dissolution due to management deadlock</p>' },
            { title: 'Liquidation Committee Composition', content: '<p>For limited liability companies: the committee is composed of all shareholders.</p><p>For joint-stock companies: the committee is composed of directors or persons appointed by the shareholders\' meeting.</p><p>The committee exercises powers including: settling creditor claims, handling unfinished business, paying taxes, clearing debts, and distributing remaining assets.</p>' }
        ]},
        { id: 'cn2', step: 'STEP 02', title: 'Tax Deregistration', desc: 'Complete tax deregistration and obtain a tax clearance certificate from the tax authority.', flow: [
            { title: 'Tax Settlement', content: '<p>Log in to the Shanghai Electronic Tax Bureau and complete:</p><p>• Settle all outstanding taxes, fees, and late payment penalties</p><p>• Cancel all unused invoices and tax control equipment</p><p>• Submit the final tax return</p><p>• Apply for tax deregistration</p><p>After review and approval, obtain the Tax Clearance Certificate.</p>' }
        ]},
        { id: 'cn3', step: 'STEP 03', title: 'Public Notice (45 Days)', desc: 'Publish a creditor notice through the public notice system; 45-day statutory period.', flow: [
            { title: 'Public Notice Filing', content: '<p>Log in to the National Enterprise Credit Information Publicity System and file a creditor notice:</p><p>• Select "Standard Deregistration — Creditor Notice"</p><p>• Fill in liquidation group information and notice content</p><p>• The notice period is 45 days from the date of publication</p><p>• Creditors must declare their claims within the notice period</p>' }
        ]},
        { id: 'cn4', step: 'STEP 04', title: 'Submit Deregistration Application', desc: 'Formally submit the deregistration application; legal entity status terminates upon approval.', flow: [
            { title: 'Submit Application', content: '<p>After the notice period expires and all matters are settled:</p><p>1. Enterprise Deregistration Application Form</p><p>2. Liquidation report confirmed by shareholders\' meeting</p><p>3. Tax Clearance Certificate</p><p>4. Creditor notice publication proof</p><p>5. Copies of identity certificates for all liquidation group members</p><p>Processing time: approximately 3-5 business days</p>' },
            { title: 'Collect Deregistration Certificate', content: '<p>After approval:</p><p>• Collect the "Deregistration Approval Notice"</p><p>• Business licenses are collected by the registration authority</p><p>• Company legal entity status terminates</p><p>• Use the certificate for subsequent bank account closure, social insurance deregistration, etc.</p>' }
        ]},
        { id: 'cn5', step: 'STEP 05', title: 'Social Insurance Deregistration', desc: 'Deregister the employer\'s social insurance account after all employee insurance is settled.', flow: [
            { title: 'Processing Documents', content: '<p>Log in to the Shanghai HR and Social Security Self-Service System or process on-site:</p><p>• "Deregistration Approval Notice" (copy)</p><p>• Agent\'s original ID and authorization letter</p><p>• Company seal, legal representative seal</p>' },
            { title: 'Conditions and Process', content: '<p><strong>Prerequisite:</strong> All employee social insurance accounts must be sealed or transferred, and the employer account balance must be zero.</p><p>If any employees have not withdrawn their social insurance, assist them with transfer or withdrawal procedures before deregistering the employer account.</p><p>Processing time: 1-3 business days when all documents are complete.</p>' }
        ]},
        { id: 'cn6', step: 'STEP 06', title: 'Housing Fund Deregistration', desc: 'Deregister the employer\'s housing provident fund account after all employee accounts are settled.', flow: [
            { title: 'Processing Documents', content: '<p>Process at the Shanghai Housing Provident Fund Management Center or through the online system:</p><p>• "Deregistration Approval Notice" (copy)</p><p>• Agent\'s original ID and authorization letter</p><p>• Company seal, legal representative seal</p>' },
            { title: 'Conditions and Process', content: '<p><strong>Prerequisite:</strong> All employee housing fund accounts must be sealed or transferred, and the employer account balance must be zero.</p><p>If employees have not withdrawn their housing fund, assist them with transfer or withdrawal procedures before deregistering the employer account.</p><p>Processing time: 1-3 business days when all documents are complete.</p>' }
        ]},
        { id: 'cn7', step: 'STEP 07', title: 'Bank Account Closure', desc: 'Close corporate bank accounts at the opening bank; general accounts first, then the basic account.', flow: [
            { title: 'Processing Documents', content: '<p>Process at the bank counter. Required documents:</p><p>• Original "Deregistration Approval Notice"</p><p>• Original ID of the legal representative</p><p>• Remaining checks, drafts, and other blank instruments</p><p>• Account opening permit</p><p>• Company seal, financial seal, legal representative seal</p>' },
            { title: 'Processing Order', content: '<p><strong>Processing order:</strong> Close general accounts first, then the basic account.</p><p>Settle the account balance; funds may be transferred to the legal representative\'s personal account.</p><p>Return unused blank checks and drafts.</p><p>Processing time: 1-5 business days.</p>' }
        ]},
        { id: 'cn8', step: 'STEP 08', title: 'Seal Cancellation', desc: 'Surrender all company seals at the public security registered seal engraving facility.', flow: [
            { title: 'Processing Steps', content: '<p>Process at a designated seal engraving facility or the original engraving location. Required documents:</p><p>• Original "Deregistration Approval Notice"</p><p>• Copy of the legal representative\'s ID</p><p>• All seals (company seal, financial seal, legal representative seal, contract seal, invoice seal, etc.)</p><p>Upon completion, obtain a "Seal Cancellation Certificate".</p><p><strong>Tip:</strong> Some areas support online appointment for seal cancellation. Call ahead to confirm.</p>' }
        ]}
    ]}
};


// ---- 九宫格英文数据 ----
const gridDataEN = [
    { id: 'g1', name: 'Company Changes', group: 'Business Registration', icon: '<svg viewBox="0 0 24 24" fill="#2E86AB"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zM6 20V4h5v7h7v9H6z"/><path d="M8 12h8v1.5H8zm0 3h8v1.5H8zm0 3h5v1.5H8z"/></svg>', drawerTypes: ['Company','Branch','Partnership','Sole Proprietorship'], drawersMap: {
        'Company': [
        { category: 'Basic Information Changes', items: [
            { title: 'Q: What documents are needed to change the company name?', content: '<p>A: Submit an application to the registration authority. If the business scope involves pre-approval items and the name changes, a name pre-check is required first. Documents needed:</p><p>1. Company Registration (Filing) Application Form</p><p>2. Amended company articles of association or amendment</p><p>3. Resolution or decision to amend the articles</p><p>4. Copy of the agent\'s identity certificate</p>' },
            { title: 'Q: What documents are needed to change the company address?', content: '<p>A: Required documents:</p><p>1. Company Registration (Filing) Application Form</p><p>2. New address usage documents</p><p>3. Amended company articles of association or amendment</p><p>4. Resolution or decision to amend the articles</p><p><strong>Note:</strong> If changing address across registration jurisdictions, apply for change registration with the destination authority before moving.</p>' },
            { title: 'Q: What are the requirements for changing business scope?', content: '<p>A: Must be registered according to the business classification standards published by SAMR. Required documents:</p><p>1. Company Registration (Filing) Application Form</p><p>2. Amended company articles of association or amendment</p><p>3. Resolution or decision to amend the articles</p><p><strong>Note:</strong> If the business scope includes items requiring pre-approval, submit relevant approval documents or license copies.</p>' },
            { title: 'Q: What documents are needed to change the legal representative?', content: '<p>A: Required documents:</p><p>1. Company Registration (Filing) Application Form (signed by the new legal representative)</p><p>2. Copy of the new legal representative\'s identity certificate</p><p>3. Documents showing the appointment/removal of the legal representative</p><p>4. Amended company articles of association or amendment</p>' }
        ]},
        { category: 'Capital Changes', items: [
            { title: 'Q: How to increase registered capital?', content: '<p>A: <strong>For LLCs:</strong> Submit the shareholder register. Existing shareholders adding capital must clearly specify subscribed amounts, contribution methods, and deadlines in the articles. If shareholders do not subscribe in proportion to paid-in capital, a written consent from all shareholders is required.</p><p><strong>For joint-stock companies:</strong> If increasing capital through public offering, submit approval documents from the securities regulatory authority.</p>' },
            { title: 'Q: Are there restrictions on reducing registered capital?', content: '<p>A: Cannot apply for change registration until 45 days after the public notice date. Required documents:</p><p>1. Company Registration (Filing) Application Form</p><p>2. Shareholder register</p><p>3. Amended articles or amendment</p><p>4. Resolution or decision to reduce capital</p><p>5. Capital reduction notice (no document needed if published via the National Enterprise Credit Information Publicity System)</p><p><strong>Note:</strong> Capital reduction to cover losses is not subject to the 45-day restriction.</p>' }
        ]},
        { category: 'Shareholder Changes', items: [
            { title: 'Q: What documents are needed to change shareholders in an LLC?', content: '<p>A: Required documents:</p><p>1. Company Registration (Filing) Application Form</p><p>2. Updated shareholder register reflecting the change</p><p>3. Qualification documents or identity certificate copies of newly registered shareholders</p><p>4. Amended articles or amendment</p><p><strong>Note:</strong> For shareholder-only changes where only articles regarding shareholders and capital are modified, no shareholder meeting voting materials are needed.</p>' },
            { title: 'Q: How to handle changes from court-ordered share transfers?', content: '<p>A: When a court legally orders share transfers or confirms share ownership, submit the court\'s effective judgment or ruling.</p><p><strong>Note:</strong> Court-ordered enforcement of shareholder changes requires the enforcement officer to visit the registration authority of the relevant company, present work credentials, and deliver copies of effective legal documents.</p>' }
        ]},
        { category: 'Company Type Changes', items: [
            { title: 'Q: Can an LLC convert to a joint-stock company?', content: '<p>A: Yes. Conversion between LLC and joint-stock company must comply with the Company Law requirements and submit relevant documents according to the establishment registration conditions of the new company type.</p>' }
        ]},
        { category: 'Filing Matters', items: [
            { title: 'Q: What documents are needed for articles of association filing?', content: '<p>A: Required documents:</p><p>1. Company Registration (Filing) Application Form</p><p>2. Amended articles or amendment (signed by the legal representative)</p><p>3. Resolution or decision to amend the articles</p>' },
            { title: 'Q: How to file changes to directors, supervisors, or senior management?', content: '<p>A: Submit appointment documents and identity certificate copies for the relevant persons. If appointment information can be verified through real-name registration, appointment documents may be waived. If articles are modified, also submit the amended articles and related resolutions.</p>' }
        ]},
        { category: 'General Requirements', items: [
            { title: 'Q: What are the general requirements for change registration?', content: '<p>A: All change registrations require:</p><p>1. Company Registration (Filing) Application Form</p><p>2. Copy of the agent\'s identity certificate</p><p>3. Approval documents or license copies (where required by law)</p><p><strong>Note:</strong> When multiple items change simultaneously, apply together. Paper business licenses must be returned.</p>' }
        ]}
        ],
        'Branch': [
        { category: 'Basic Information Changes', items: [
            { title: 'Q: What documents are needed to change a branch name?', content: '<p>A: Apply to the registration authority. If changing due to parent company name change, submit a copy of the parent company\'s updated business license.</p>' },
            { title: 'Q: What documents are needed to change the branch business premises?', content: '<p>A: Submit the usage documents for the new business premises.</p>' },
            { title: 'Q: What are the requirements for changing branch business scope?', content: '<p>A: Must follow the standard classification. If pre-approval items are involved, submit relevant approval documents or license copies.</p>' },
            { title: 'Q: What documents are needed to change the branch manager?', content: '<p>A: Submit the appointment/removal information and identity certificate copy of the new manager. The appointment must be confirmed by the parent company\'s legal representative in the application form.</p>' }
        ]},
        { category: 'Filing Matters', items: [
            { title: 'Q: What documents are needed for branch liaison filing?', content: '<p>A: Submit a copy of the registration liaison officer\'s identity certificate.</p>' }
        ]},
        { category: 'General Requirements', items: [
            { title: 'Q: What are the general requirements for branch change registration?', content: '<p>A: All change registrations require:</p><p>1. Branch Registration (Filing) Application Form</p><p>2. Copy of the agent\'s identity certificate</p><p>3. Approval documents or license copies (where required by law)</p><p><strong>Note:</strong> Paper business licenses must be returned.</p>' }
        ]}
        ],
        'Partnership': [
        { category: 'Basic Information Changes', items: [
            { title: 'Q: What documents are needed to change a partnership name?', content: '<p>A: Apply to the registration authority. If the scope involves pre-approval items and requires name change, complete name pre-check first.</p>' },
            { title: 'Q: What documents are needed to change the principal business premises?', content: '<p>A: Submit usage documents for the new principal business premises.</p>' },
            { title: 'Q: What are the requirements for changing business scope?', content: '<p>A: Follow the standard classification. Submit relevant approval documents for any pre-approval items.</p>' },
            { title: 'Q: What documents are needed to change the executive partner?', content: '<p>A: Submit the partnership agreement or all-partner decision, plus the new executive partner\'s qualification documents or identity certificate copy. The application form must be signed by the new executive partner.</p>' }
        ]},
        { category: 'Partner Changes', items: [
            { title: 'Q: What documents are needed for partner name change?', content: '<p>A: Submit name change proof and updated qualification documents or identity certificate copies. Foreign investors\' name change documents must be notarized and authenticated.</p>' },
            { title: 'Q: What documents are needed to change capital contribution?', content: '<p>A: Submit the amended or supplementary partnership agreement (signed by all partners or designated persons) and the All Partners Capital Contribution Table.</p>' },
            { title: 'Q: What documents are needed for partner withdrawal?', content: '<p>A: Submit a change decision stating the withdrawal reason and the All Partners Capital Contribution Table.</p>' }
        ]},
        { category: 'Enterprise Type Changes', items: [
            { title: 'Q: Can a partnership change its enterprise type?', content: '<p>A: Yes. Changing enterprise type requires simultaneous name change. Professional qualification certificates may be needed when converting to a special general partnership.</p>' }
        ]},
        { category: 'Filing Matters', items: [
            { title: 'Q: What documents are needed for partnership agreement filing?', content: '<p>A: Submit the amended or supplementary agreement and a change decision signed by all partners or designated persons.</p>' }
        ]},
        { category: 'General Requirements', items: [
            { title: 'Q: What are the general requirements for partnership change registration?', content: '<p>A: All change registrations require:</p><p>1. Partnership Enterprise Registration (Filing) Application Form</p><p>2. Amended or supplementary partnership agreement and change decision (if applicable)</p><p>3. Copy of the agent\'s identity certificate</p><p>4. Approval documents or license copies (where required by law)</p><p><strong>Note:</strong> Multiple simultaneous changes must be applied for together. Paper licenses must be returned.</p>' }
        ]}
        ],
        'Sole Proprietorship': [
        { category: 'Basic Information Changes', items: [
            { title: 'Q: What documents are needed to change the enterprise name?', content: '<p>A: Apply to the registration authority. If pre-approval items require name change, complete name pre-check first.</p>' },
            { title: 'Q: What documents are needed to change the registered address?', content: '<p>A: Submit usage documents for the new address.</p>' },
            { title: 'Q: What are the requirements for changing business scope?', content: '<p>A: Follow the standard classification. Submit approval documents for pre-approval items.</p>' }
        ]},
        { category: 'Investor Changes', items: [
            { title: 'Q: What documents are needed to change the investor?', content: '<p>A: Submit a transfer agreement and the new investor\'s identity certificate copy.</p>' },
            { title: 'Q: How to handle investor change through inheritance?', content: '<p>A: Submit notarized documents or effective legal documents proving the inheritance or bequest.</p>' }
        ]},
        { category: 'Enterprise Transformation', items: [
            { title: 'Q: Can a sole proprietorship transform into a company?', content: '<p>A: Yes. Submit a tax clearance certificate and commitment letter, plus establishment registration documents for the new enterprise type.</p>' }
        ]},
        { category: 'General Requirements', items: [
            { title: 'Q: What are the general requirements for change registration?', content: '<p>A: All change registrations require:</p><p>1. Sole Proprietorship Enterprise Registration (Filing) Application Form</p><p>2. Copy of the agent\'s identity certificate</p><p>3. Approval documents or license copies (where required by law)</p><p><strong>Note:</strong> Paper licenses must be returned.</p>' }
        ]}
        ]
    }},
    { id: 'g1b', name: 'Branch Management', group: 'Business Registration', icon: '<svg viewBox="0 0 24 24" fill="#5A8A6A"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>', drawers: [
        { category: 'Branch Offices', items: [
            { title: 'Q: What is the difference between a branch and a subsidiary?', content: '<p>A: A branch does not have legal person status — civil liability is borne by the parent company. A subsidiary has independent legal person status and assumes civil liability independently. Branch setup is simpler but cannot independently enjoy tax incentives.</p>' },
            { title: 'Q: What documents are needed to establish a branch?', content: '<p>A: Submit a branch registration application, business premises usage documents, manager appointment information and identity proof, and a copy of the parent company\'s business license.</p>' }
        ]},
        { category: 'Cross-district Operations', items: [
            { title: 'Q: Is registration required for cross-district operations within Shanghai?', content: '<p>A: If operating in other districts within the city with a registered branch, no separate filing is needed. If operating without a branch, a report must be filed with the registration authority at the business premises location.</p>' }
        ]}
    ]},
    { id: 'g1c', name: 'Information Disclosure & Annual Report', group: 'Business Registration', icon: '<svg viewBox="0 0 24 24" fill="#8B1A1A"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/></svg>', drawers: [
        { category: 'Annual Reports', items: [
            { title: 'Q: When must annual reports be filed?', content: '<p>A: Between January 1 and June 30 each year, file the previous year\'s annual report through the National Enterprise Credit Information Publicity System. Late filing results in inclusion in the business exception list.</p>' },
            { title: 'Q: What information is required in the annual report?', content: '<p>A: Includes basic company information, shareholder contributions, asset status, Party-building information, and social insurance data. Listed companies must also disclose equity changes and guarantee information.</p>' }
        ]},
        { category: 'Credit Repair', items: [
            { title: 'Q: What to do if listed in the business exception directory?', content: '<p>A: After filing overdue reports or correcting information, apply to the listing authority for removal. Pudong New Area has a pilot fast-track credit repair program that can complete repair within 5 business days for eligible companies.</p>' }
        ]}
    ]},
    { id: 'g3', name: 'Tax Services', group: 'Finance & Tax', icon: '<svg viewBox="0 0 24 24" fill="#6B5B95"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.11-.09.15-.26.06-.4l-1.92-3.32c-.09-.15-.27-.21-.43-.15l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.17-.18-.3-.36-.3h-3.84c-.18 0-.33.13-.36.3l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.17-.06-.34 0-.43.15L2.74 8.87c-.09.14-.05.31.06.4l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58c-.11.09-.15.26-.06.4l1.92 3.32c.09.15.27.21.43.15l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.04.17.18.3.36.3h3.84c.18 0 .33-.13.36-.3l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.17.06.34 0 .43-.15l1.92-3.32c.09-.15.05-.31-.06-.4l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>', drawers: [
        { category: 'VAT Incentives', items: [
            { title: 'Q: What VAT incentives are available for small-scale taxpayers?', content: '<p>A: Monthly sales below 100,000 RMB are exempt from VAT; taxable income at the 3% rate is reduced to 1% (phased policy).</p>' },
            { title: 'Q: What VAT incentives exist for advanced manufacturing?', content: '<p>A: Eligible advanced manufacturing enterprises can deduct an additional 5% of deductible input tax against their VAT payable.</p>' }
        ]},
        { category: 'Corporate Income Tax Incentives', items: [
            { title: 'Q: What is the corporate income tax rate for high-tech enterprises?', content: '<p>A: National key-supported high-tech enterprises are taxed at a reduced rate of 15% (statutory rate 25%), effectively a 40% tax reduction.</p>' },
            { title: 'Q: How is corporate income tax calculated for small and micro enterprises?', content: '<p>A: Enterprises with annual taxable income ≤ 3 million RMB, employees ≤ 300, and total assets ≤ 50 million RMB enjoy an effective tax rate of only 5%.</p>' }
        ]}
    ]},
    { id: 'g3b', name: 'Finance & Accounting', group: 'Finance & Tax', icon: '<svg viewBox="0 0 24 24" fill="#8B6914"><path d="M4 10h3v7H4zm6.5 0h3v7h-3zM2 19h20v3H2zm15-9h3v7h-3zm-5-9h3v3h-3zM2 5h20v3H2z"/></svg>', drawers: [
        { category: 'Accounting Standards', items: [
            { title: 'Q: Do newly established enterprises need to file accounting standards?', content: '<p>A: Yes. Within 15 days of receiving the business license, submit the financial and accounting systems or procedures to the competent tax authority for filing.</p>' },
            { title: 'Q: Can I hire an outsourced bookkeeping company?', content: '<p>A: Yes. Bookkeeping agencies must hold a bookkeeping license issued by the Finance Bureau. Small-scale enterprises can opt for outsourced bookkeeping at approximately 200-500 RMB/month.</p>' }
        ]},
        { category: 'Financial Statements', items: [
            { title: 'Q: What financial statements must be submitted?', content: '<p>A: Generally, a balance sheet, income statement, and cash flow statement are required. Small enterprises may simplify to a balance sheet and income statement. Annual reports must include notes disclosure.</p>' }
        ]}
    ]},
    { id: 'g9', name: 'Financing Support', group: 'Finance & Tax', icon: '<svg viewBox="0 0 24 24" fill="#6A4C93"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>', drawers: [
        { category: 'Credit Financing', items: [
            { title: 'Q: What is the policy financing guarantee limit for SMEs?', content: '<p>A: Up to 30 million RMB per enterprise, with guarantee fees not exceeding 1% per year. Applicable to registered SMEs in Shanghai.</p>' },
            { title: 'Q: What loan channels exist for tech SMEs?', content: '<p>A: The Science & Technology Performance Loan offers up to 5 million RMB per enterprise, collateral-free, with risk shared by government, banks, and insurance companies.</p>' }
        ]},
        { category: 'IPO Cultivation', items: [
            { title: 'Q: What subsidies are available for enterprise listing?', content: '<p>A: Shanghai provides up to 3 million RMB in subsidies during the IPO guidance period for eligible tech enterprises, plus up to 3 million RMB additional reward upon successful listing.</p>' }
        ]}
    ]},
    { id: 'g3c', name: 'Fiscal Support Policies', group: 'Finance & Tax', icon: '<svg viewBox="0 0 24 24" fill="#C4862C"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09v.58h-1.5v-.62c-1.03-.08-2.01-.46-2.58-.96l.74-1.58c.58.46 1.36.82 2.12.82.87 0 1.39-.43 1.39-1.05 0-.63-.45-1-1.75-1.42-1.84-.59-2.78-1.33-2.78-2.82 0-1.34.96-2.38 2.58-2.63v-.6h1.5v.57c.87.1 1.63.38 2.12.72l-.67 1.52c-.5-.3-1.12-.57-1.83-.57-.82 0-1.22.42-1.22.96 0 .57.42.87 1.87 1.35 1.96.63 2.66 1.45 2.66 2.87 0 1.44-1.02 2.45-2.67 2.69z"/></svg>', drawers: [
        { category: 'Enterprise Certification Subsidies', items: [
            { title: 'Q: What are the benefits of "Specialized, Refined, Distinctive & Innovative" certification?', content: '<p>A: Municipal-level SRDI enterprises receive up to 250,000 RMB, and national-level "Little Giant" enterprises receive up to 1 million RMB. Additional benefits include priority access to financing guarantees and IPO cultivation services.</p>' },
            { title: 'Q: What subsidies are available for high-tech enterprise certification?', content: '<p>A: Pudong New Area provides a one-time 250,000 RMB subsidy for newly certified high-tech enterprises. Standards vary slightly by district.</p>' }
        ]},
        { category: 'Employment Stabilization Subsidies', items: [
            { title: 'Q: What is the one-time job expansion subsidy standard?', content: '<p>A: Municipal standard is 1,500 RMB per person; Huangpu District adds a district-level subsidy of 5,000 RMB per person. Available to enterprises hiring workers meeting specific criteria.</p>' }
        ]}
    ]},
    { id: 'g2', name: 'Social Insurance', group: 'HR Services', icon: '<svg viewBox="0 0 24 24" fill="#5A8A6A"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>', drawers: [
        { category: 'Social Insurance Account', items: [
            { title: 'Q: How to open a social insurance account in Shanghai?', content: '<p>A: Social insurance account opening is integrated into the "One-Stop" enterprise registration process and is completed together with enterprise information filing — no separate process required.</p>' },
            { title: 'Q: What are the 2025 social insurance contribution rates?', content: '<p>A: Pension: employer 16% + employee 8%; Medical: employer 9.5% + employee 2%; Unemployment: employer 0.5% + employee 0.5%; Work Injury: employer 0.16%-1.52%; Maternity insurance has been merged into medical insurance.</p>' }
        ]},
        { category: 'Social Insurance Subsidies', items: [
            { title: 'Q: What social insurance subsidies can enterprises receive?', content: '<p>A: Includes employment stabilization returns (a percentage of previous year\'s unemployment insurance premiums paid), one-time job expansion subsidies (1,500 RMB municipal standard per person), and phased social insurance fee reductions.</p>' }
        ]}
    ]},
    { id: 'g4', name: 'Housing Provident Fund', group: 'HR Services', icon: '<svg viewBox="0 0 24 24" fill="#B8860B"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>', drawers: [
        { category: 'Housing Fund Account', items: [
            { title: 'Q: What documents are needed for enterprise housing fund account opening?', content: '<p>A: Original and copy of business license (with company seal), legal representative ID copy, agent\'s original and copy of ID, Employer Registration Form, company seal and legal representative seal, bank account opening permit. Completed in 1-2 business days.</p>' },
            { title: 'Q: What are the 2025 housing fund contribution rates and base?', content: '<p>A: Basic housing fund: employer 5%-7%, employee 5%-7%. Maximum base: 36,921 RMB, minimum base: 2,690 RMB. Monthly contribution maximum: 5,222 RMB (14%), minimum: 270 RMB (10%).</p>' }
        ]},
        { category: 'Housing Fund Withdrawal', items: [
            { title: 'Q: What purposes allow housing fund withdrawal?', content: '<p>A: Home purchase, mortgage repayment, rent (up to 36,000 RMB/year), home renovation, serious illness, retirement, etc. The 2026 new policy also supports property fee withdrawal.</p>' }
        ]}
    ]},
    { id: 'g5', name: 'Talent Settlement', group: 'HR Services', icon: '<svg viewBox="0 0 24 24" fill="#8B1A1A"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>', drawers: [
        { category: 'Residence-to-Permanent Transfer', items: [
            { title: 'Q: What are the basic requirements for residence-to-permanent transfer?', content: '<p>A: Hold a Shanghai residence permit for 7+ years, social insurance for 7+ years, compliant tax payments, and intermediate professional title or technician qualification. Senior title holders have no year requirement; 2x social insurance base exempts the title requirement.</p>' },
            { title: 'Q: What settlement benefits exist for the Five New Cities?', content: '<p>A: Workers in Jiading, Qingpu, Songjiang, Fengxian, and Nanhui New Cities can shorten the residence-to-permanent transfer period to 5 years, or 3 years for key industry talent.</p>' }
        ]},
        { category: 'Talent Introduction', items: [
            { title: 'Q: What talent categories qualify for talent introduction settlement?', content: '<p>A: Doctoral degree or senior professional title, scarce master\'s/bachelor\'s degree holders in key institutions, senior technicians, startup talent with significant venture capital, etc. Spouses and minor children may settle together.</p>' }
        ]},
        { category: 'Fresh Graduate Settlement', items: [
            { title: 'Q: What is the scoring standard for fresh graduate settlement?', content: '<p>A: A 72-point scoring system considering degree level, university ranking, academic performance, foreign language ability, computer skills, employer bonus points, etc. Master\'s degree holders from "Double First-Class" universities may settle directly without scoring.</p>' }
        ]}
    ]},
    { id: 'g5b', name: 'Labor Relations', group: 'HR Services', icon: '<svg viewBox="0 0 24 24" fill="#4A7B8C"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>', drawers: [
        { category: 'Labor Contracts', items: [
            { title: 'Q: What clauses must a labor contract include?', content: '<p>A: Essential clauses: employer information, employee information, contract duration, work content and location, working hours and leave, compensation, social insurance, labor protection, etc. Maximum probation period is 6 months.</p>' },
            { title: 'Q: What is Shanghai\'s minimum wage?', content: '<p>A: 2025 Shanghai monthly minimum wage is 2,690 RMB; hourly minimum is 24 RMB. Minimum wage excludes overtime pay, night shift allowances, and special working environment allowances.</p>' }
        ]},
        { category: 'Labor Disputes', items: [
            { title: 'Q: How to handle labor disputes?', content: '<p>A: Negotiation → Mediation → Arbitration → Litigation. First apply to the Shanghai Labor and Personnel Dispute Arbitration Commission (free of charge). If unsatisfied with the ruling, file a lawsuit within 15 days.</p>' }
        ]}
    ]},
    { id: 'g7', name: 'Intellectual Property', group: 'Innovation & Trade', icon: '<svg viewBox="0 0 24 24" fill="#2E86AB"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>', drawers: [
        { category: 'Patent Support', items: [
            { title: 'Q: What are the subsidy standards for Shanghai patent pilot/demonstration units?', content: '<p>A: Pilot units: up to 200,000 RMB; Demonstration units: up to 400,000 RMB. Requires 10+ valid invention patents.</p>' },
            { title: 'Q: How much IP protection funding does Pudong offer?', content: '<p>A: Domestic enforcement: up to 500,000 RMB; overseas enforcement: up to 1 million RMB; overseas risk analysis: up to 100,000 RMB. Total per enterprise not exceeding 1 million RMB per year.</p>' }
        ]},
        { category: 'Trademark Protection', items: [
            { title: 'Q: How to apply for the Shanghai Key Trademark Protection List?', content: '<p>A: Trademark owners apply through their district\'s IP management department. Eligibility requires high local recognition and significant infringement exposure.</p>' }
        ]}
    ]},
    { id: 'g8', name: 'Science & Technology', group: 'Innovation & Trade', icon: '<svg viewBox="0 0 24 24" fill="#E85D04"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>', drawers: [
        { category: 'Tech Enterprises', items: [
            { title: 'Q: What are the funding standards for Shanghai S&T Innovation Action Plan?', content: '<p>A: Basic research: up to 5 million RMB; technology breakthrough projects: up to 10 million RMB. Applications accepted March-May each year.</p>' },
            { title: 'Q: How much funding can tech SMEs apply for?', content: '<p>A: Seed stage: up to 200,000 RMB; startup stage: up to 500,000 RMB; growth stage: up to 1 million RMB. Eligible if ≤ 500 employees and annual revenue ≤ 200 million RMB.</p>' }
        ]},
        { category: 'Innovation Platforms', items: [
            { title: 'Q: What support exists for Engineering Technology Research Center certification?', content: '<p>A: Up to 1 million RMB in construction funding upon certification. Requires parent organization annual revenue ≥ 50 million RMB and R&D investment ≥ 3%. Evaluated every 3 years.</p>' }
        ]}
    ]},
    { id: 'g5c', name: 'International Trade', group: 'Innovation & Trade', icon: '<svg viewBox="0 0 24 24" fill="#2E86AB"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>', drawers: [
        { category: 'Import/Export Registration', items: [
            { title: 'Q: How to apply for import/export rights?', content: '<p>A: Apply online through the Ministry of Commerce "Foreign Trade Operator Filing System." Processing takes 3 business days. Business scope must include import/export related content.</p>' },
            { title: 'Q: What can Shanghai International Trade Single Window do?', content: '<p>A: Integrates customs declaration, inspection and quarantine, foreign exchange, and tax services, enabling "one declaration, one inspection, one release." Covers all Shanghai ports.</p>' }
        ]},
        { category: 'FTZ Policies', items: [
            { title: 'Q: What trade facilitation policies exist in Lingang Special Area?', content: '<p>A: Includes "first-line open, second-line efficient management" goods entry/exit system, cross-border capital flow facilitation, and data cross-border security flow pilot programs.</p>' }
        ]}
    ]},
    { id: 'g5d', name: 'Shipping & Logistics', group: 'Innovation & Trade', icon: '<svg viewBox="0 0 24 24" fill="#5A8A9A"><path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.14.52-.05.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z"/></svg>', drawers: [
        { category: 'Shipping Services', items: [
            { title: 'Q: What support exists for North Bund shipping services?', content: '<p>A: Special support for shipping and finance pillar industries, plus incentives for well-known legal service firms. Green/low-carbon, smart testing, and other emerging industries receive segmented track support.</p>' },
            { title: 'Q: What policies exist for ship financing leases?', content: '<p>A: Changning District aviation financing lease projects: up to 100,000 RMB per project. Shipping financing lease projects may enjoy similar support standards.</p>' }
        ]},
        { category: 'Logistics Facilitation', items: [
            { title: 'Q: What advantages do bonded warehouses offer?', content: '<p>A: Goods stored in comprehensive bonded zones are temporarily exempt from import tariffs and VAT. Goods can be released in batches per order with gradual tax payments, effectively reducing enterprise capital occupation.</p>' }
        ]}
    ]},
    { id: 'g5e', name: 'Licenses & Permits', group: 'Compliance', icon: '<svg viewBox="0 0 24 24" fill="#6B5B95"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>', drawers: [
        { category: 'Common Licenses', items: [
            { title: 'Q: How to apply for an ICP Business License?', content: '<p>A: Apply online through the MIIT government service platform. Requirements: registered capital ≥ 1 million RMB, robust network and information security measures. Approval cycle approximately 40-60 business days.</p>' },
            { title: 'Q: What are the requirements for a Food Business License?', content: '<p>A: Apply at the district Market Supervision Bureau. Must have premises, equipment, and management systems suitable for the business type. Pre-packaged food sales operate under a filing system.</p>' }
        ]},
        { category: 'Industry Access', items: [
            { title: 'Q: How to process import/export rights filing?', content: '<p>A: File online through the Ministry of Commerce Foreign Trade Operator Filing System. Processing takes 3 business days. Business scope must include import/export related content.</p>' }
        ]}
    ]},
    { id: 'g5f', name: 'Safety & Environment', group: 'Compliance', icon: '<svg viewBox="0 0 24 24" fill="#C4862C"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>', drawers: [
        { category: 'Work Safety', items: [
            { title: 'Q: Which enterprises need a Work Safety License?', content: '<p>A: Mining enterprises, construction enterprises, and producers of hazardous chemicals, fireworks, and civil explosives must obtain one. Other enterprises follow industry-specific safety filing requirements.</p>' },
            { title: 'Q: What is the difference between fire inspection and filing?', content: '<p>A: Public assembly venues with floor area > 250㎡ require fire inspection; other venues require fire filing. Shanghai has achieved online application with approval time reduced to 7 business days.</p>' }
        ]},
        { category: 'Environmental Approval', items: [
            { title: 'Q: What projects require environmental impact assessment?', content: '<p>A: Construction projects that may impact the environment must prepare EIA reports or assessment forms. Shanghai implements an EIA commitment system for small and micro enterprises, simplifying the approval process.</p>' }
        ]}
    ]},
    { id: 'g5g', name: 'Data Security', group: 'Compliance', icon: '<svg viewBox="0 0 24 24" fill="#4A7B8C"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>', drawers: [
        { category: 'Data Security', items: [
            { title: 'Q: What requirements does the Shanghai Data Regulation impose on enterprises?', content: '<p>A: Shanghai is the first city in China to legislate on data. Enterprises must establish data security management systems, classify and grade important data, and report data security incidents within 24 hours.</p>' },
            { title: 'Q: How to comply with personal information protection?', content: '<p>A: Follow the "minimum necessary" principle for collecting personal information, clearly state collection purposes and methods, and obtain user consent. Enterprises processing 1 million+ individuals\' data must designate a personal information protection officer.</p>' }
        ]},
        { category: 'Classified Protection', items: [
            { title: 'Q: What systems need classified protection filing?', content: '<p>A: Information system classified protection has five levels. Most enterprise systems are Level 2 or 3, requiring filing with public security and regular assessment. Systems involving critical information infrastructure must reach Level 3 or above.</p>' }
        ]}
    ]},
    { id: 'g6', name: 'District Business Policies', group: 'Policies & Regulations', icon: '<svg viewBox="0 0 24 24" fill="#5A8A9A"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>', isRegion: true },
    { id: 'g6b', name: 'Lingang Special Zone Policies', group: 'Policies & Regulations', icon: '<svg viewBox="0 0 24 24" fill="#E85D04"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>', isLingang: true }
];

const gridGroupsEN = [
    { label: 'Business Registration', ids: ['g1','g1b','g1c'] },
    { label: 'Finance & Tax', ids: ['g3','g3b','g9','g3c'] },
    { label: 'HR Services', ids: ['g2','g4','g5','g5b'] },
    { label: 'Innovation & Trade', ids: ['g7','g8','g5c','g5d'] },
    { label: 'Compliance', ids: ['g5e','g5f','g5g'] },
    { label: 'Policies & Regulations', ids: ['g6','g6b'] }
];

const regionGridDataEN = [
    { key: 'huangpu', name: 'Huangpu', color: '#CCB486' },
    { key: 'jingan', name: "Jing'an", color: '#CCB486' },
    { key: 'xuhui', name: 'Xuhui', color: '#CCB486' },
    { key: 'changning', name: 'Changning', color: '#CCB486' },
    { key: 'putuo', name: 'Putuo', color: '#A68E5D' },
    { key: 'hongkou', name: 'Hongkou', color: '#A68E5D' },
    { key: 'yangpu', name: 'Yangpu', color: '#A68E5D' },
    { key: 'pudong', name: 'Pudong New Area', color: '#A68E5D' },
    { key: 'minhang', name: 'Minhang', color: '#A68E5D' },
    { key: 'baoshan', name: 'Baoshan', color: '#D4C4A0' },
    { key: 'jiading', name: 'Jiading', color: '#D4C4A0' },
    { key: 'songjiang', name: 'Songjiang', color: '#D4C4A0' },
    { key: 'jinshan', name: 'Jinshan', color: '#D4C4A0' },
    { key: 'qingpu', name: 'Qingpu', color: '#D4C4A0' },
    { key: 'fengxian', name: 'Fengxian', color: '#8B7355' },
    { key: 'chongming', name: 'Chongming', color: '#8B7355' }
];

const regionPolicyDataEN = {
    pudong: { name: 'Pudong New Area', policies: [
        { q: 'Notice on Pudong New Area S&T Development Fund — Promotion of High-Tech Enterprise & SRDI Development Special Operation Rules', a: '<p>To encourage enterprises to increase R&D investment and enhance S&T innovation, these operation rules were formulated according to the Pudong S&T Development Fund Management Measures.</p><p><strong>Article 1: Funding Targets</strong></p><p>High-tech enterprises, SRDI enterprises, and enterprise R&D institutions registered and tax-registered in Pudong New Area.</p><p><strong>Article 2: Funding Content</strong></p><p><strong>Topic 1 — High-Tech Enterprises:</strong> One-time subsidy of 250,000 RMB for first-time certified or newly attracted high-tech enterprises.</p><p><strong>Topic 2 — SRDI Enterprises:</strong> National "Little Giant" SRDI enterprises: up to 1 million RMB; Municipal SRDI enterprises: up to 250,000 RMB (10% of R&D super deduction).</p><p><strong>Article 3:</strong> Apply online through the Pudong Financial S&T Investment Supervision Platform.</p><p><strong>Article 4:</strong> Effective from November 23, 2021 through December 31, 2025.</p>' },
        { q: 'Pudong New Area IP Protection Funding Policy', a: '<p><strong>Domestic enforcement:</strong> Up to 500,000 RMB</p><p><strong>Overseas enforcement:</strong> Up to 1 million RMB</p><p><strong>Overseas risk analysis:</strong> Up to 100,000 RMB</p><p>Total per enterprise not exceeding 1 million RMB per year.</p>' },
        { q: 'Pudong New Area Postdoctoral Innovation & Development Funding', a: '<p>Eligible postdoctoral researchers receive living subsidies and research funding support to facilitate high-level talent innovation and entrepreneurship in Pudong.</p>' }
    ]},
    huangpu: { name: 'Huangpu District', policies: [
        { q: 'Huangpu District Implementation Measures for High-End Service Industry Development', a: '<p>Newly attracted regional headquarters of multinational corporations receive up to 5 million RMB in startup subsidies.</p><p>Based on the Bund Financial Agglomeration Belt, providing integrated policy support for fintech enterprises.</p>' },
        { q: '"Huangpu Innovation Card" Business Services', a: '<p>Integrates government service information, business policy tools, and cutting-edge fintech resources into one package.</p><p>District-level "auto-eligible" one-time job expansion subsidy: 5,000 RMB/person, stacking with the municipal 1,500 RMB/person subsidy.</p>' }
    ]},
    jingan: { name: "Jing'an District", policies: [
        { q: "Jing'an District Opinions on Promoting Data Intelligence Industry Development", a: '<p>Up to 200,000 RMB subsidy for enterprises passing municipal-level or above data compliance certification.</p><p>Blockchain and emerging enterprise approval-to-disbursement compressed from weeks to half a day.</p>' },
        { q: "Jing'an District Headquarters Economy Support Policy", a: '<p>Comprehensive support for newly attracted headquarters enterprises including startup costs and office rent subsidies. Commercial carriers and consumer brands in Nanjing Road and Jing\'an Temple business districts receive operational support.</p>' }
    ]},
    xuhui: { name: 'Xuhui District', policies: [
        { q: 'Xuhui District "1+10+1" Business Support Policy Package', a: '<p>Comprehensive investment attraction policy package covering industry support, talent introduction, and S&T innovation. Caohejing Development Zone and other S&T carriers focus on AI, life sciences, and health industries.</p>' },
        { q: 'Xuhui District Employment Stabilization & Skills Training Subsidies (2025-2027)', a: '<p>Subsidies for eligible enterprises to support employment stabilization and job expansion.</p>' }
    ]},
    changning: { name: 'Changning District', policies: [
        { q: 'Changning District Key Enterprise Attraction Support Policy', a: '<p><strong>Startup subsidy:</strong> Up to 10 million RMB</p><p><strong>Rent subsidy:</strong> Up to 1.5 million RMB/year for self-use office space (3 consecutive years)</p><p><strong>Purchase subsidy:</strong> Up to 10 million RMB for purchasing self-use office space</p>' },
        { q: 'Changning District Aviation Service Industry Special Support', a: '<p>Aviation financing lease: up to 100,000 RMB per project; Aviation lease subsidiaries: up to 500,000 RMB; Aviation qualification per aircraft type: up to 200,000 RMB/year, max 1.5 million RMB; New route development: up to 1 million RMB/year.</p>' },
        { q: 'Changning District AI & Life Sciences Health Industry Support', a: '<p><strong>AI:</strong> National/municipal project district matching up to 5 million RMB; first-version software contract subsidy up to 2 million RMB</p><p><strong>Life Sciences:</strong> New drug registration up to 1.5 million RMB; medical device registration up to 1 million RMB</p><p><strong>SRDI:</strong> Up to 500,000 RMB support</p>' }
    ]},
    putuo: { name: 'Putuo District', policies: [
        { q: 'Putuo District "China Wushu Digital" S&T Brand Support Policy', a: '<p>Supporting digital transformation and intelligent manufacturing. China-Israel Innovation Park (Taopu) focuses on S&T innovation enterprises.</p>' },
        { q: 'Putuo District Automobile Consumer Subsidy (2025)', a: '<p>May 1 – December 31, 2025: Purchase vehicles in Putuo for subsidies starting at 3,000 RMB/vehicle, up to 10,000 RMB, total budget 50 million RMB.</p>' }
    ]},
    hongkou: { name: 'Hongkou District', policies: [
        { q: 'North Bund International Shipping Center Special Support', a: '<p>Special support for shipping and finance pillar industries. Incentives for well-known legal service firms. Green/low-carbon, smart testing, and biotechnology emerging industry tracks.</p>' },
        { q: 'Hongkou District Business Environment Action Plan (2026)', a: '<p>Creating a cost-reducing, efficiency-enhancing government service environment, building the North Bund international brand with business support policies.</p>' }
    ]},
    yangpu: { name: 'Yangpu District', policies: [
        { q: 'Yangpu District "3310" High-Level Talent Attraction Plan (2026-2030)', a: '<p><strong>Startup guidance fund:</strong> Up to 2 million RMB</p><p><strong>Startup risk compensation:</strong> Failed startups can apply for up to 500,000 RMB</p><p><strong>Office space subsidy:</strong> Up to 3 RMB/sqm/day, max 200 sqm</p><p>Eligible domestic and overseas fresh graduates receive 2 free stays per year, up to 5 days each.</p>' },
        { q: '"Yangfan" Business Support Policy', a: '<p>Supporting enterprise foreign trade development with export credit insurance, overseas market expansion, and other special support.</p>' }
    ]},
    minhang: { name: 'Minhang District', policies: [
        { q: 'Hongqiao International Hub Core Area Special Support', a: '<p>Special support for headquarters economy and international trade enterprises. Greater Zero Bay S&T Innovation Source Zone supports S&T achievements transformation.</p>' },
        { q: 'Shanghai Advanced Energy Industry Cluster (Minhang)', a: '<p>Focus on advanced energy industry development. FTZ linked innovation zone enjoys FTZ innovation linkage policies.</p>' }
    ]},
    baoshan: { name: 'Baoshan District', policies: [
        { q: 'Nanda Smart City & Wusong Innovation City Special Support', a: '<p>Special support policies for two major transformation zones. Supports cruise economy full industry chain. University of Shanghai S&T Park supports university S&T transformation and startup incubation.</p>' },
        { q: 'Baoshan District Green & Low-Carbon Supply Chain Core Zone', a: '<p>Supporting green/low-carbon industry development and building a green/low-carbon supply chain core functional zone.</p>' }
    ]},
    jiading: { name: 'Jiading District', policies: [
        { q: 'Jiading District Intelligent Connected NEV Industry Support', a: '<p>160,000 sqm of industrial space. Promoting L4 autonomous driving commercialization and hydrogen + solid-state battery dual technology breakthroughs. Special support around the "new four modernizations" (electrification, intelligence, connectivity, sharing).</p><p>Goal: Form the world\'s first "vehicle-road-cloud-network" integrated demonstration zone by 2027.</p>' }
    ]},
    songjiang: { name: 'Songjiang District', policies: [
        { q: 'Yangtze River Delta G60 S&T Corridor Business Policies', a: '<p>Cross-regional collaborative innovation brand with 83 business support policies cataloged in the Songjiang Business Development Policy Collection. Jiuke Oasis High-End Equipment Industry Cluster focuses on advanced equipment manufacturing.</p><p>Three service lists: Business Policy List, SRDI Financial Services List, Enterprise Service List.</p>' },
        { q: 'Songjiang District Enterprise Overseas Expansion Facilitation', a: '<p>Cooperation agreement with Hongqiao Border Inspection Station to facilitate enterprise overseas expansion.</p>' }
    ]},
    jinshan: { name: 'Jinshan District', policies: [
        { q: '"Carbon Valley Green Bay" Industrial Park Special Support', a: '<p>Focus on green chemicals and new materials industry transformation. Shanghai Bay S&T Innovation City supports S&T innovation and industrial upgrading.</p><p>"Red Enterprise Express" and "Yingshang Business Lecture" series for precise policy outreach.</p>' }
    ]},
    qingpu: { name: 'Qingpu District', policies: [
        { q: 'Yangtze River Delta Digital Trunk Line Industry Support', a: '<p>Focus on digital industries and digital economy. YRD AI Joint Innovation Center provides AI industry special support. Huawei Lianqiu Lake R&D Center has attracted 30,000+ researchers, driving regional innovation.</p><p>Qingpu Comprehensive Bonded Zone enjoys FTZ linked innovation policies.</p>' }
    ]},
    fengxian: { name: 'Fengxian District', policies: [
        { q: 'Oriental Beauty Valley Beauty & Health Industry Support', a: '<p>Beauty and health industry cluster brand covering cosmetics, biomedicine, etc. Some parks offer tax rebates up to 40%.</p><p>Oriental Beauty Valley and Lingang Fengxian parks provide free virtual address registration.</p><p>"Smart Connected Manufacturing" brand supports intelligent manufacturing and digital transformation.</p>' }
    ]},
    chongming: { name: 'Chongming District', policies: [
        { q: 'Chongming World-Class Ecological Island Special Support', a: '<p>Green/low-carbon and ecological industry special support. Special awards for sports, culture, and eco-agriculture enterprises aligned with the ecological island positioning.</p><p>"One-Stop Online" enterprise portal provides smart policy push and "policy health check" functions.</p>' }
    ]}
};

const lingangPoliciesEN = [
    { q: 'Lingang Special Area Tax Incentive Policy', a: '<p>Eligible enterprises in integrated circuits, AI, biomedicine, aerospace, and other key industries within the Special Area enjoy a reduced corporate income tax rate of 15% for 5 years from establishment (standard rate: 25%).</p><p>Enterprises engaged in R&D of core technologies in IC, AI, and other key fields also receive R&D expense super deduction benefits.</p>' },
    { q: 'Lingang Special Area Talent Settlement Relaxation', a: '<p>The Special Area implements more relaxed talent introduction policies:</p><p>• Core talent of key enterprises: residence-to-permanent transfer shortened to 3 years</p><p>• Eligible scarce technical talent: direct settlement</p><p>• Fresh graduates: extra bonus points in settlement scoring</p><p>• Overseas high-level talent: "one-stop" settlement service</p>' },
    { q: 'Lingang Special Area Cross-border Finance Facilitation', a: '<p>The Special Area enjoys special policies for cross-border capital flows:</p><p>• Cross-border trade settlement facilitation — quality enterprises process directly by instruction</p><p>• Cross-border investment/financing liberalization with simplified approval</p><p>• Offshore trade financial services innovation pilot</p><p>• Unified domestic-foreign currency cross-border cash pool business</p>' },
    { q: 'Lingang Special Area Data Cross-border Flow Pilot', a: '<p>The Special Area is China\'s first region to pilot data cross-border flow:</p><p>• Classified and graded management system for data cross-border flow</p><p>• General data flows freely; important data flows after security assessment</p><p>• Data Cross-border Service Center providing one-stop compliance consulting</p><p>• Covers intelligent connected vehicles, finance, healthcare, and other key fields</p>' },
    { q: 'Lingang Special Area Trade Facilitation Policy', a: '<p>The Special Area implements a "first-line open, second-line efficient management" goods entry/exit system:</p><p>• Simplified declaration for first-line entry/exit goods</p><p>• VAT exemption for goods transfers between enterprises within the zone</p><p>• Bonded processing goods sold domestically taxed by actual status</p><p>• International transit consolidation facilitation</p>' },
    { q: 'Lingang Special Area Industry Support Special Fund', a: '<p>The Special Area has established a dedicated industry support fund covering:</p><p>• Integrated Circuits: EDA tool R&D, chip design — up to 30 million RMB</p><p>• AI: Computing center construction, algorithm innovation — up to 20 million RMB</p><p>• Biomedicine: Innovative drug R&D, clinical trials — up to 100 million RMB</p><p>• Aerospace: Aero-engine, core component R&D — up to 50 million RMB</p><p>• New Energy: Hydrogen, energy storage technology industrialization — up to 10 million RMB</p>' }
];

// ---- 辅助函数：根据语言获取数据 ----
function getAxisData(key) { return currentLang === 'en' ? axisDataEN[key] : axisData[key]; }
function getGridData() { return currentLang === 'en' ? gridDataEN : gridData; }
function getGridGroups() { return currentLang === 'en' ? gridGroupsEN : gridGroups; }
function getRegionGridData() { return currentLang === 'en' ? regionGridDataEN : regionGridData; }
function getRegionPolicyData(key) { return currentLang === 'en' ? regionPolicyDataEN[key] : regionPolicyData[key]; }
function getLingangPolicies() { return currentLang === 'en' ? lingangPoliciesEN : lingangPolicies; }
function getWindowData(key) { return currentLang === 'en' ? windowDataEN[key] : windowData[key]; }
function getWindowDataAll() { return currentLang === 'en' ? windowDataEN : windowData; }
