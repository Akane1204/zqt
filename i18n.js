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
        simpleCancelDesc: '适用于未发生债权债务或已清偿完结的企业（上市股份有限公司除外）。公示期20日，符合条件的可免办清税证明，全程约1-1.5个月。',
        simpleCancelCycle: '周期：1-1.5个月',
        simpleCancelNoLiquidation: '无需清算',
        badgeRecommended: '推荐',
        normalCancel: '普通注销',
        normalCancelDesc: '适用于所有企业类型。董事为清算义务人，需成立清算组并公告清算组信息，债权人公告期45日，税务清算后办理注销登记，全程约2-4个月。',
        normalCancelCycle: '周期：2-4个月',
        normalCancelNeedLiquidation: '需依法清算',
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
        onlineDesc: '复制上海市"一网通办"平台网址',
        onlineCopied: '办理网址已复制，请在浏览器中粘贴打开',
        offlineBtn: '线下办理',
        offlineUnavailable: '该步骤仅支持线上办理',
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
        effectDate: '有效期：长期有效',
        docNo: '政策文号：无',
        noDataMsg: '暂无政策数据',
        serviceLibrary: '服务库',
        policyCompilation: '政策汇编',
        guidBtn: '办理指引 →',
        MonFri: '周一至周五 9:00-11:30, 13:30-16:30',
        // ---- 选择注册类型页 ----
        entityStartupTitle: '选择注册类型',
        entityStartupIntro: '根据经营主体类型选择相应的注册流程。公司注册适用于法人企业，个体工商户注册适用于个人经营。',
        entityCompanyReg: '公司注册',
        entityCompanyRegDesc: '适用于有限责任公司、股份有限公司等法人企业。具备独立法人资格，股东以出资额为限承担有限责任。',
        entityCompanyCycle: '周期：约3-5个工作日',
        entityCompanyFea: '法人资格',
        entityIndivReg: '个体工商户注册',
        entityIndivRegDesc: '适用于自然人从事工商业经营。设立程序简便，无需注册资本，经营者以个人财产承担无限责任。',
        entityIndivCycle: '周期：约1-3个工作日',
        entityIndivFea: '无需注册资本',
        entityBadgeCorp: '法人企业',
        entityBadgeIndiv: '个人经营',
        // ---- 选择注销类型页 ----
        entityCancelTitle: '选择注销类型',
        entityCancelIntro: '根据经营主体类型选择相应的注销流程。公司注销涉及清算程序，个体工商户注销流程相对简便。',
        entityCompanyCancel: '公司注销',
        entityCompanyCancelDesc: '适用于有限责任公司、股份有限公司等法人企业注销。可选择简易注销或普通注销两种方式。',
        entityCompanyCancelCycle: '周期：1.5-4个月',
        entityCompanyCancelFea: '简易/普通可选',
        entityIndivCancel: '个体工商户注销',
        entityIndivCancelDesc: '适用于个体工商户注销。无需公示，流程简便，税务部门10日内无异议可直接办理注销。',
        entityIndivCancelCycle: '周期：约1-2周',
        entityIndivCancelFea: '无需公示',
        // ---- 个体工商户注销方式选择页 ----
        indivCancelTypeTitle: '选择注销方式',
        indivCancelTypeIntro: '根据个体工商户实际情况选择合适的注销方式。未发生债权债务的可优先选择简易注销，无需公示，流程更快捷。',
        indivSimpleCancel: '简易注销',
        indivSimpleCancelDesc: '适用于未发生债权债务或已清偿完结的个体工商户。无需通过公示系统公示，登记机关推送信息至税务部门，10日内无异议即可办理。',
        indivSimpleCancelCycle: '周期：约10个工作日',
        indivSimpleCancelFea: '无需公示',
        indivNormalCancel: '普通注销',
        indivNormalCancelDesc: '适用于所有个体工商户。需先到税务机关办理清税取得清税证明，再向登记机关申请注销登记，缴回营业执照。',
        indivNormalCancelCycle: '周期：约2-4周',
        indivNormalCancelFea: '需清税证明',
        offlineUnavailable: '该环节仅支持线上办理',
        csToast: '演示环境：正式版本将接入在线客服',
        // ---- 搜索 ----
        searchTitle: '搜索',
        searchPlaceholder: '搜索政策、办事流程、服务事项',
        searchHint: '输入关键词，检索流程指引、政策文件与服务事项',
        searchGroupFlow: '流程指引',
        searchGroupPolicy: '政策文件',
        searchGroupService: '服务事项',
        searchNoResult: '未找到相关内容，请更换关键词试试'
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
        simpleCancelDesc: 'Applicable to enterprises with no outstanding debts or with all debts settled (excluding listed joint-stock companies). The notice period is 20 days, and eligible applicants are exempt from a separate tax clearance certificate. Total process approximately 1-1.5 months.',
        simpleCancelCycle: 'Cycle: 1-1.5 months',
        simpleCancelNoLiquidation: 'No Liquidation Required',
        badgeRecommended: 'Recommended',
        normalCancel: 'Standard Deregistration',
        normalCancelDesc: 'Applicable to all enterprise types. Directors act as liquidation obligors: a liquidation committee must be formed and announced, followed by a 45-day creditor notice period and tax liquidation before deregistration. Total process approximately 2-4 months.',
        normalCancelCycle: 'Cycle: 2-4 months',
        normalCancelNeedLiquidation: 'Liquidation Required',
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
        onlineDesc: 'Copy the Shanghai "One-Stop Online" Platform Link',
        onlineCopied: 'Link copied — paste it in your browser to proceed',
        offlineBtn: 'Offline Processing',
        offlineUnavailable: 'This step can only be processed online',
        csToast: 'Demo: live support will be available in the release version',
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
        effectDate: 'Validity: Long-term',
        docNo: 'Doc No.: N/A',
        noDataMsg: 'No policy data available',
        serviceLibrary: ' Service Library',
        policyCompilation: ' Policy Compilation',
        guidBtn: 'Processing Guide →',
        MonFri: 'Mon-Fri 9:00-11:30, 13:30-16:30',
        // ---- Entity Type Selection Pages ----
        entityStartupTitle: 'Select Registration Type',
        entityStartupIntro: 'Choose the appropriate registration process based on your business entity type. Company registration applies to corporate enterprises; individual business registration applies to sole proprietors.',
        entityCompanyReg: 'Company Registration',
        entityCompanyRegDesc: 'Applicable to corporate enterprises such as limited liability companies and joint-stock companies. Enjoy independent legal person status with limited liability based on capital contribution.',
        entityCompanyCycle: 'Cycle: approx. 3-5 business days',
        entityCompanyFea: 'Legal Person Status',
        entityIndivReg: 'Individual Business Registration',
        entityIndivRegDesc: 'Applicable to natural persons engaged in industrial and commercial operations. Simplified establishment process, no registered capital required; operator bears unlimited liability with personal assets.',
        entityIndivCycle: 'Cycle: approx. 1-3 business days',
        entityIndivFea: 'No Registered Capital',
        entityBadgeCorp: 'Corporate',
        entityBadgeIndiv: 'Sole Proprietor',
        // ---- Entity Cancel Type Selection Pages ----
        entityCancelTitle: 'Select Deregistration Type',
        entityCancelIntro: 'Choose the appropriate deregistration process based on your business entity type. Company deregistration involves liquidation procedures; individual business deregistration is relatively straightforward.',
        entityCompanyCancel: 'Company Deregistration',
        entityCompanyCancelDesc: 'Applicable to deregistration of corporate enterprises such as limited liability companies and joint-stock companies. Choose between simplified or standard deregistration.',
        entityCompanyCancelCycle: 'Cycle: 1.5-4 months',
        entityCompanyCancelFea: 'Simple/Standard Options',
        entityIndivCancel: 'Individual Business Deregistration',
        entityIndivCancelDesc: 'Applicable to individual business deregistration. No public notice required; streamlined process. If tax authorities raise no objection within 10 days, deregistration is processed directly.',
        entityIndivCancelCycle: 'Cycle: approx. 1-2 weeks',
        entityIndivCancelFea: 'No Public Notice',
        // ---- Individual Business Cancel Type Selection ----
        indivCancelTypeTitle: 'Select Deregistration Method',
        indivCancelTypeIntro: 'Choose the appropriate deregistration method based on your individual business situation. Businesses with no outstanding debts may opt for simplified deregistration for a faster process.',
        indivSimpleCancel: 'Simplified Deregistration',
        indivSimpleCancelDesc: 'Applicable to individual businesses with no outstanding debts or fully settled obligations. No public notice required; the registration authority forwards information to tax authorities. If no objection within 10 days, deregistration proceeds.',
        indivSimpleCancelCycle: 'Cycle: approx. 10 business days',
        indivSimpleCancelFea: 'No Public Notice',
        indivNormalCancel: 'Standard Deregistration',
        indivNormalCancelDesc: 'Applicable to all individual businesses. Requires tax clearance certificate from the tax authority, followed by deregistration application to the registration authority and surrender of the business license.',
        indivNormalCancelCycle: 'Cycle: approx. 2-4 weeks',
        indivNormalCancelFea: 'Tax Clearance Required',
        // ---- Search ----
        searchTitle: 'Search',
        searchPlaceholder: 'Search policies, processes, services',
        searchHint: 'Enter keywords to search process guides, policies and services',
        searchGroupFlow: 'Process Guides',
        searchGroupPolicy: 'Policies',
        searchGroupService: 'Services',
        searchNoResult: 'No results found. Try different keywords.'
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
    'individual_startup': { online: 'https://yct.sh.gov.cn/portal_yct/', name: 'Shanghai Enterprise Registration Online — Individual Business Registration' },
    'individual_cancel_simple': { online: 'https://zwdt.sh.gov.cn', name: 'Shanghai One-Stop Online — Individual Business Simplified Deregistration' },
    'individual_cancel_normal': { online: 'https://zwdt.sh.gov.cn', name: 'Shanghai One-Stop Online — Individual Business Standard Deregistration' },
    'tax': { online: 'https://zwdt.sh.gov.cn', name: 'Shanghai One-Stop Online — Tax Services' },
    'social': { online: 'https://zwdt.sh.gov.cn', name: 'Shanghai One-Stop Online — Social Insurance' },
    'housing': { online: 'https://zwdt.sh.gov.cn', name: 'Shanghai One-Stop Online — Housing Provident Fund' },
    'talent': { online: 'https://zwdt.sh.gov.cn', name: 'Shanghai One-Stop Online — Talent Services' },
    'yiwangtongban': { online: 'https://zwdt.sh.gov.cn', name: 'Shanghai One-Stop Online Platform' }
};

// Tax-related steps use the Shanghai E-Tax Bureau; registration services use Shanghai Enterprise Registration Online
const TAX_MODULE_IDS_EN = ['s5', 'cn5', 'is3', 'icn1'];

function getOnlineLinkEN(axisKey, moduleId) {
    if (moduleId && TAX_MODULE_IDS_EN.indexOf(moduleId) !== -1) {
        return { url: 'https://etax.shanghai.chinatax.gov.cn', desc: 'Copy the Shanghai E-Tax Bureau link to handle tax matters online' };
    }
    if (axisKey === 'startup') return { url: 'https://yct.sh.gov.cn/portal_yct/', desc: 'Copy the Shanghai Enterprise Registration Online link to register a business' };
    if (axisKey === 'individual_startup') return { url: 'https://yct.sh.gov.cn/portal_yct/', desc: 'Copy the Shanghai Enterprise Registration Online link to register an individual business' };
    if (axisKey === 'cancel_simple' || axisKey === 'cancel_normal') return { url: 'https://yct.sh.gov.cn/portal_yct/', desc: 'Copy the Shanghai Enterprise Registration Online link to deregister a business' };
    if (axisKey === 'individual_cancel_simple' || axisKey === 'individual_cancel_normal') return { url: 'https://yct.sh.gov.cn/portal_yct/', desc: 'Copy the Shanghai Enterprise Registration Online link to deregister an individual business' };
    return { url: 'https://zwdt.sh.gov.cn', desc: 'Copy the Shanghai "One-Stop Online" platform link' };
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
        { id: 's1', step: 'STEP 01', title: 'Name Self-Declaration', onlineOnly: true, desc: 'Declare your company name online under the Company Name Registration rules — instant feedback, no manual approval.', flow: [
            { title: 'Prepare Company Name', content: '<p>Log in to the Shanghai "One-Stop Online" platform (zwdt.sh.gov.cn) or "Shanghai Enterprise Registration Online" (yct.sh.gov.cn) and enter the business establishment section.</p><p>Prepare 3-5 alternative names. Format: Administrative Division (Shanghai) + Trade Name + Industry + Organization Type (e.g., "Shanghai XX Technology Co., Ltd.").</p><p>Under the Implementation Measures for the Administration of Company Name Registration (effective October 1, 2023), names are self-declared by the applicant; the system checks duplicates in real time. Prohibited or restricted words may not be used, and names must not be confusingly similar to existing ones.</p>' },
            { title: 'Get Declaration Result', content: '<p>The system instantly verifies and returns the result — no manual approval required.</p><p>An approved name is reserved; complete the establishment registration within the reservation period. If the business scope involves pre-approval items and a name is required, complete name declaration first.</p><p>If the preferred name is taken or violates rules, the system will indicate the reason; try the alternatives in sequence.</p>' }
        ]},
        { id: 's2', step: 'STEP 02', title: 'Establishment Registration', desc: 'Prepare the establishment documents, submit them at the registration authority window, and collect your business license.', flowTypes: ['Company', 'Branch', 'Partnership', 'Sole Proprietorship'], flows: {
            'Company': [
                { title: 'Prepare Application Information', content: '<p>Determine the following before applying:</p><p>• Shareholder information, subscribed capital amounts, contribution methods and payment deadlines</p><p>• Registered capital (subscription system; no capital verification required)</p><p>• Business scope (select from the SAMR standardized catalogue)</p><p>• Candidates for legal representative, directors, supervisors, senior management and registration liaison</p><p>• Beneficial owner information (filed simultaneously upon establishment)</p><p>The articles of association, shareholders\' resolutions and other documents must be signed by the relevant persons as legally required.</p>' },
                { title: 'New Company Law Highlights', content: '<p>The revised Company Law took effect on July 1, 2024. Key points:</p><p>• <strong>5-year paid-in rule</strong>: all subscribed capital of an LLC must be fully paid within 5 years of establishment</p><p>• <strong>Transition for existing companies</strong>: companies established before June 30, 2024 whose remaining subscription period exceeds 5 years from July 1, 2027 must adjust it by June 30, 2027</p><p>• <strong>Simplified governance</strong>: small companies may have a single director instead of a board, and may opt out of supervisors with unanimous shareholder consent</p><p>• <strong>Legal representative</strong>: must be a director or manager who executes company affairs</p>' },
                { title: 'Submit Documents', content: '<p>Per the Business Entity Registration Document Standards (2026 Edition), submit:</p><p>1. Company Registration (Filing) Application Form</p><p>2. Articles of Association (LLC: signed by all shareholders; joint-stock company: signed by all promoters)</p><p>3. Qualification documents or ID copies of the legal representative, shareholders (promoters), directors, supervisors, senior management, registration liaison and the agent</p><p>4. Appointment documents for the legal representative, directors, supervisors and senior management (exempt where the appointment can be confirmed through real-name registration)</p><p>5. Premises usage documents</p><p>6. For joint-stock companies established by share offering: capital verification certificate; where promoters\' first contribution is non-monetary property, proof of property rights transfer; for public share offerings, a copy of the CSRC approval document</p><p>7. Approval documents or license copies where establishment requires approval by law, administrative regulation or State Council decision, or where the business scope includes pre-approval items</p><p><strong>Window submission requirements:</strong> use A4 white paper and sign with a black or blue ink pen; documents marked "copy" are submitted as copies marked "consistent with the original" and signed for confirmation, other documents in original; for on-site real-name registration confirmation, submit the Real-Name Registration Confirmation Form.</p>' },
                { title: 'Collect Business License', content: '<p>Complete and compliant applications are processed on the spot or within 1 business day:</p><p>• <strong>Paper license</strong>: collect the establishment "gift pack" (paper license, free physical seals, invoices, etc.) at the establishment window of the district administrative service center, or choose free mail delivery</p><p>• <strong>Electronic business license</strong>: generated automatically upon registration, with the same legal effect as a paper license</p><p>• Entities registered in Pudong New Area, the Pilot FTZ and Lingang Special Area enjoy the more convenient registration confirmation system</p>' },
                { title: 'Service Window Inquiry', type: 'window', content: '' }
            ],
            'Branch': [
                { title: 'Prepare Application Information', content: '<p>Determine the following before applying:</p><p>• Branch name</p><p>• Business premises address</p><p>• Business scope (must not exceed that of the parent company)</p><p>• Branch manager candidate</p><p>A branch has no legal person status; its civil liability is borne by the parent company.</p>' },
                { title: 'Submit Documents', content: '<p>Per the Business Entity Registration Document Standards (2026 Edition), submit:</p><p>1. Branch Registration (Filing) Application Form</p><p>2. Business premises usage documents</p><p>3. Branch manager appointment information and ID copy (appointment confirmed by the parent company\'s legal representative in the application form)</p><p>4. Copy of the parent company\'s business license</p><p>5. Copy of the agent\'s ID</p><p>6. Approval documents or license copies where pre-approval is required by law</p><p><strong>Window submission requirements:</strong> use A4 white paper and sign properly; mark copies "consistent with the original" and sign for confirmation.</p>' },
                { title: 'Collect Business License', content: '<p>Complete and compliant applications are processed within 1 business day:</p><p>• <strong>Paper license</strong>: collect at the registration window, or choose free mail delivery</p><p>• <strong>Electronic business license</strong>: generated automatically at the same time, with the same legal effect as a paper license</p>' },
                { title: 'Service Window Inquiry', type: 'window', content: '' }
            ],
            'Partnership': [
                { title: 'Prepare Application Information', content: '<p>Determine the following before applying:</p><p>• Information and capital contributions of all partners</p><p>• Main contents of the partnership agreement (signed by all partners)</p><p>• Principal business premises address</p><p>• Business scope</p><p>• Executive partner and appointed representative candidates</p><p>• Beneficial owner information (filed simultaneously upon establishment)</p><p>Partnerships are classified into general, special general and limited partnerships.</p>' },
                { title: 'Submit Documents', content: '<p>Per the Business Entity Registration Document Standards (2026 Edition), submit:</p><p>1. Partnership Enterprise Registration (Filing) Application Form</p><p>2. Partnership agreement signed by all partners</p><p>3. Qualification documents or ID copies of all partners, the registration liaison and the agent</p><p>4. Principal premises usage documents</p><p>5. Approval documents or license copies where pre-approval is required by law</p><p>6. For special general partnerships, professional qualification documents of partners as required by law and administrative regulation</p><p><strong>Window submission requirements:</strong> use A4 white paper and sign properly; mark copies "consistent with the original" and sign for confirmation.</p>' },
                { title: 'Collect Business License', content: '<p>Complete and compliant applications are processed within 1 business day:</p><p>• <strong>Paper license</strong>: collect at the registration window, or choose free mail delivery</p><p>• <strong>Electronic business license</strong>: generated automatically at the same time, with the same legal effect as a paper license</p>' },
                { title: 'Service Window Inquiry', type: 'window', content: '' }
            ],
            'Sole Proprietorship': [
                { title: 'Prepare Application Information', content: '<p>Determine the following before applying:</p><p>• Investor information</p><p>• Enterprise name</p><p>• Registered address</p><p>• Business scope</p><p>• Capital contribution amount</p><p>A sole proprietorship is invested by a single natural person who bears unlimited liability for its debts with personal property.</p>' },
                { title: 'Submit Documents', content: '<p>Per the Business Entity Registration Document Standards (2026 Edition), submit:</p><p>1. Sole Proprietorship Registration (Filing) Application Form</p><p>2. ID copies of the investor and the agent</p><p>3. Premises usage documents</p><p>4. Approval documents or license copies where pre-approval is required by law</p><p><strong>Window submission requirements:</strong> use A4 white paper and sign properly; mark copies "consistent with the original" and sign for confirmation.</p>' },
                { title: 'Collect Business License', content: '<p>Complete and compliant applications are processed within 1 business day:</p><p>• <strong>Paper license</strong>: collect at the registration window, or choose free mail delivery</p><p>• <strong>Electronic business license</strong>: generated automatically at the same time, with the same legal effect as a paper license</p>' },
                { title: 'Service Window Inquiry', type: 'window', content: '' }
            ]
        }},
        { id: 's3', step: 'STEP 03', title: 'Seal Engraving (Free)', desc: 'Shanghai engraves physical seals free of charge for new enterprises; e-seals are issued with the e-license.', flow: [
            { title: 'Collect Free Physical Seals', content: '<p>Shanghai engraves a free set of four physical seals for each newly established enterprise:</p><p>• Company official seal (statutory name seal)</p><p>• Financial seal</p><p>• Invoice seal</p><p>• Legal representative name seal</p><p>After licensing, the physical seals are collected together with the establishment "gift pack" at the establishment window of the district administrative service center, or delivered by free mail.</p><p>Additional physical seals (e.g., contract seal) can be engraved later at public-security-registered engravers with the business license.</p>' },
            { title: 'Electronic Seals', content: '<p>When the electronic business license is generated upon establishment, four electronic seals (statutory name seal, financial seal, invoice seal and legal representative seal) are issued free of charge at the same time; they have the same legal effect as physical seals and can be used to sign electronic documents.</p>' }
        ]},
        { id: 's6', step: 'STEP 04', title: 'Employment & Social Insurance Registration', desc: 'Employee employment and insurance registration is completed together with establishment, or at a social insurance service window.', flow: [
            { title: 'Employer Insurance Registration', content: '<p>If employment and social insurance registration was completed together with establishment registration, no further action is needed; otherwise, process it at the district social insurance center or the sub-district community affairs service center where the employer participates.</p><p>Social insurance contributions for Shanghai enterprise employees are collected by the tax authority; registration requires no withholding tripartite agreement and no prior bank account.</p><p>Five insurance types: Pension (employer 16% + employee 8%), Medical (employer 9.5% + employee 2%), Unemployment (employer 0.5% + employee 0.5%), Work Injury (employer 0.16%-1.52%), Maternity (merged into medical insurance).</p>' },
            { title: 'Employee Insurance Registration', content: '<p>Register employees within 30 days of employment:</p><p>• Process employment and insurance registration at the district social insurance center or community affairs service center</p><p>• Submit employee basic information and labor contract information</p><p>• Confirm the contribution base (adjusted citywide each July)</p><p>• Declare and pay contributions to the tax authority monthly</p>' }
        ]},
        { id: 's7', step: 'STEP 05', title: 'Housing Fund Registration', desc: 'Process employer contribution registration at a housing fund depository bank outlet; contribute monthly for employees.', flow: [
            { title: 'Employer Registration', content: '<p>Process employer housing provident fund contribution registration at a housing fund depository bank outlet. Bring:</p><p>• Business license</p><p>• Copy of the legal representative\'s ID</p><p>• Agent\'s original ID</p><p>• Company seal and legal representative seal</p><p>No need to repeat if already processed together with establishment registration; completed instantly with complete documents.</p>' },
            { title: 'Contribution Standards & Employee Accounts', content: '<p>Contribution ratio: 5%-7% each for employer and employee (selectable within this range).</p><p>For the 2026 cycle (July 2026 - June 2027): the contribution base floor is RMB 2,740 (aligned with the municipal minimum wage); pending publication, the ceiling temporarily follows the 2025 ceiling of RMB 37,302 and will be updated once announced.</p><p>Set up or transfer individual accounts within 30 days of hiring; the annual base adjustment each July can reuse social insurance salary data with employer authorization.</p>' }
        ]},
        { id: 's5', step: 'STEP 06', title: 'Tax Matters', desc: '"Smart Launch" auto-completes tax registration and tax category assessment — no separate tax registration needed.', flow: [
            { title: 'Smart Launch for New Businesses', content: '<p>Under "multi-certificate integration", registration data is shared automatically with the tax authority — no separate tax registration is required.</p><p>Shanghai operates "Smart Launch" for new businesses: the tax authority senses establishment data automatically, and for low-risk taxpayers it <strong>completes tax registration automatically</strong>, activates the e-tax bureau account, assigns the competent tax office, completes tax (fee) category assessment and digital e-invoice quota approval, then notifies you by SMS — you can issue invoices from day one.</p><p>On your first visit, log in to the Shanghai E-Tax Bureau to complete real-name binding of the finance head and tax handler; report bank account information after opening the account.</p>' },
            { title: 'Invoice Application', content: '<p>Shanghai has fully rolled out fully digitalized e-invoices ("digital e-invoices"):</p><p>• New enterprises are directly granted digital e-invoice quotas — no tax control device or paper invoices needed</p><p>• Issue invoices via the e-tax bureau; first-time application requires real-name verification of the legal representative</p><p>• Small-scale taxpayers with monthly sales of RMB 100,000 or less are VAT-exempt; special VAT invoices can be self-issued or agency-issued</p>' }
        ]},
        { id: 's4', step: 'STEP 07', title: 'Bank Account Opening', desc: 'Open a corporate basic deposit account for daily settlement and tax payment.', flow: [
            { title: 'Schedule Account Opening', content: '<p>The account-opening permit for enterprise bank accounts has been abolished in favor of a filing system — no Account Opening Permit is needed.</p><p>Book a corporate account opening at a bank branch of your choice. Prepare:</p><p>• Business license (original and copy; the e-license is accepted)</p><p>• Original ID of the legal representative</p><p>• Company seal, financial seal and legal representative seal</p><p>• Premises proof and business background materials (bank AML due diligence)</p>' },
            { title: 'On-site Processing', content: '<p>The legal representative must verify intent in person or via bank-approved video, complete the application form and sign the account agreement.</p><p>Once approved, the account is activated and the bank files it with the PBOC.</p><p>The basic account is the enterprise\'s sole principal settlement account, used for payroll and tax payments.</p>' }
        ]},
        { id: 's8', step: 'STEP 08', title: 'Ongoing Compliance', desc: 'Statutory obligations to maintain after establishment and on-demand filings.', flow: [
            { title: 'Beneficial Owner Filing', content: '<p>Under the Beneficial Owner Information Management Measures (effective November 1, 2024):</p><p>• Companies, partnerships and similar entities file beneficial owner information via the registration system upon establishment</p><p>• Any change must be re-filed within 30 days</p><p>• Previously established entities must complete supplementary filing as required</p>' },
            { title: 'Annual Report & Other Items', content: '<p>• <strong>Annual report</strong>: file the previous year\'s report via the National Enterprise Credit Information Publicity System between January 1 and June 30 each year; late filing leads to the business anomaly list</p><p>• <strong>Licensed items</strong>: obtain the relevant license before operating licensed business scope items</p><p>• <strong>Customs filing</strong>: importers/exporters complete consignee-consignor filing for import/export goods</p><p>• <strong>Dormancy filing</strong>: enterprises suspending operations due to difficulty may file for dormancy under the Market Entity Registration Regulation, up to 3 years in total</p>' }
        ]}
    ]},
    'cancel_simple': { title: 'Simplified Deregistration Guide', modules: [
        { id: 'cs1', step: 'STEP 01', title: 'Eligibility Check', desc: 'Verify eligibility under the Enterprise Deregistration Guidelines (2025 Revision).', flow: [
            { title: 'Confirm Eligibility', content: '<p>An enterprise (excluding listed joint-stock companies) may deregister under the simplified procedure if:</p><p>• It has no outstanding debts, or all debts have been fully settled</p><p>• No unpaid liquidation costs, employee wages, social insurance contributions, statutory compensation or taxes (including late fees and fines) remain</p><p>• All investors provide a written commitment accepting legal responsibility for the truthfulness of the above</p><p>Applicable to LLCs, non-corporate legal entities, sole proprietorships, partnerships, etc.</p>' },
            { title: 'Inapplicable Situations', content: '<p>Simplified deregistration is NOT available where:</p><p>• Prior approval is required by law, administrative regulation or State Council decision</p><p>• The license has been revoked, the entity ordered closed or deregistered</p><p>• The entity is on the business anomaly list or the serious violation & dishonesty list</p><p>• Equity (partnership shares) is frozen or pledged, chattel mortgages exist, or it holds investments in other enterprises</p><p>• It still holds equity, stock, debt investments, land use rights, real estate or similar assets</p><p>• Income tax liquidation filing is incomplete or liquidation gains are untaxed</p><p>• Customs duties (incl. late fees) are unpaid</p><p>• It is under investigation, administrative compulsion, litigation or arbitration</p><p>• Administrative penalties such as fines remain unexecuted</p>' },
            { title: 'Resolving Abnormal Status', content: '<p>For three situations — being on the business anomaly list, frozen/pledged equity or chattel mortgages, and un-deregistered branches — there is <strong>no need to withdraw the simplified deregistration notice</strong>; once the abnormal status is resolved, you may re-publish and apply again.</p><p>If the commitment letter is non-standard in wording or form, the registration authority accepts it after correction — <strong>no re-publication required</strong>.</p>' }
        ]},
        { id: 'cs2', step: 'STEP 02', title: 'Publish Simplified Deregistration Notice', onlineOnly: true, desc: 'Announce the deregistration intent and investor commitment via the one-stop deregistration platform or publicity system.', flow: [
            { title: 'Log In and File', content: '<p>Log in to the Enterprise Deregistration "One-Thing" section (the deregistration channel of "Shanghai Enterprise Registration Online", using the electronic business license of the enterprise to be deregistered) or the "Simplified Deregistration Notice" column of the National Enterprise Credit Information Publicity System:</p><p>• Proactively announce the intended simplified deregistration and the all-investor commitment</p><p>• Notice period: 20 days</p><p>• Where all shareholders are mainland natural persons and other conditions are met, the commitment letter can be auto-generated online and e-signed</p>' },
            { title: 'Commitment Letter Requirements', content: '<p>The "Simplified Deregistration All-Investor Commitment Letter" must state that no debts existed or all debts were settled before application, and that no unpaid liquidation costs, employee wages, social insurance, statutory compensation, taxes (late fees, fines) or other unresolved matters remain, and that none of the inapplicable situations exist.</p><p>Signing: LLCs — all shareholders; non-listed joint-stock companies — all shareholders; non-corporate legal entities — all contributors; partnerships — all partners; sole proprietorships — the investor.</p><p>All investors are legally responsible for the truthfulness of the commitment.</p>' },
            { title: 'Tax Clearance Exemption', content: '<p>Enterprises eligible for simplified deregistration are <strong>exempt from obtaining a separate tax clearance certificate</strong> and may apply directly to the market regulation authority if they:</p><p>• Have never handled tax matters and present no risks, or</p><p>• Handled tax matters but never used invoices (incl. agency-issued), have no tax arrears (late fees) or fines and no other outstanding tax matters</p><p>After the notice is pushed to the tax authority, no objection is raised if checks show no tax or social insurance arrears.</p>' }
        ]},
        { id: 'cs3', step: 'STEP 03', title: 'Notice Period (20 Days)', onlineOnly: true, desc: '20-day statutory objection window; apply only after expiry without objections.', flow: [
            { title: 'During the Notice Period', content: '<p>During the 20-day notice period:</p><p>• The notice is automatically displayed in the "Simplified Deregistration Notice" column of the publicity system</p><p>• Interested parties and government departments may raise objections with brief reasons via the "Objection" function, or in writing to the registration authority</p><p>• Objections are no longer accepted after the period expires</p><p>• <strong>After publication, the enterprise must not engage in business activities unrelated to deregistration</strong></p>' },
            { title: 'Objections & Application Deadline', content: '<p>If an objection is raised during the period, resolve the matter first; once resolved you may re-publish and apply, otherwise switch to the standard procedure.</p><p><strong>Deadline:</strong> after expiry without objection, apply for simplified deregistration within 20 days of the expiry date. The registration authority may grant an extension of up to 30 days — i.e., apply no later than 50 days after expiry, or the notice must be published again.</p>' }
        ]},
        { id: 'cs4', step: 'STEP 04', title: 'Submit Deregistration Application', desc: 'Submit the application to the registration authority after the notice period expires without objection; entity status terminates.', flowTypes: ['Company', 'Partnership', 'Sole Proprietorship'], flows: {
            'Company': [
                { title: 'Submit Application at Window', content: '<p>Within 20 days of the notice period expiry, submit at the registration authority window (district market supervision bureau registration window or government service hall):</p><p>1. Enterprise Deregistration Application Form (Simplified Procedure)</p><p>2. "Simplified Deregistration All-Investor Commitment Letter" signed by all investors and published on the National Enterprise Credit Information Publicity System for no less than 20 days</p><p>3. Copy of the agent\'s ID</p><p>4. Non-listed joint-stock companies must also submit the full shareholder register</p><p>Where tax clearance data is shared between the registration and tax authorities, no paper clearance certificate is required.</p><p><strong>Window submission requirements:</strong> use A4 white paper and sign properly; mark copies "consistent with the original" and sign for confirmation.</p>' },
                { title: 'Collect Deregistration Certificate', content: '<p>Complete and compliant applications are generally processed within 1-3 business days:</p><p>• Collect the "Deregistration Approval Notice"</p><p>• Paper business licenses must be surrendered; if not or cannot be returned, the registration authority announces their invalidation on the publicity system</p><p>• Legal person status terminates</p><p>• Use the certificate for bank account closure and other follow-up matters</p>' }
            ],
            'Partnership': [
                { title: 'Submit Application at Window', content: '<p>Within 20 days of the notice period expiry, submit at the registration authority window:</p><p>1. Enterprise Deregistration Application Form (Simplified Procedure)</p><p>2. "Simplified Deregistration All-Investor Commitment Letter" signed by all partners and published on the publicity system for no less than 20 days</p><p>3. Copy of the agent\'s ID</p><p><strong>Window submission requirements:</strong> use A4 white paper and sign properly; mark copies "consistent with the original" and sign for confirmation.</p>' },
                { title: 'Collect Deregistration Certificate', content: '<p>Complete and compliant applications are generally processed within 1-3 business days:</p><p>• Collect the "Deregistration Approval Notice"</p><p>• Surrender paper business licenses</p><p>• Partnership status terminates</p><p>• Use the certificate for bank account closure and other follow-up matters</p>' }
            ],
            'Sole Proprietorship': [
                { title: 'Submit Application at Window', content: '<p>Within 20 days of the notice period expiry, submit at the registration authority window:</p><p>1. Enterprise Deregistration Application Form (Simplified Procedure)</p><p>2. "Simplified Deregistration All-Investor Commitment Letter" signed by the investor and published on the publicity system for no less than 20 days</p><p>3. Copy of the agent\'s ID</p><p><strong>Window submission requirements:</strong> use A4 white paper and sign properly; mark copies "consistent with the original" and sign for confirmation.</p>' },
                { title: 'Collect Deregistration Certificate', content: '<p>Complete and compliant applications are generally processed within 1-3 business days:</p><p>• Collect the "Deregistration Approval Notice"</p><p>• Surrender paper business licenses</p><p>• Sole proprietorship status terminates</p><p>• Use the certificate for bank account closure and other follow-up matters</p>' }
            ]
        }},
        { id: 'cs5', step: 'STEP 05', title: 'Social Insurance Deregistration', desc: 'Deregister social insurance at the social insurance agency within 30 days of enterprise deregistration.', flow: [
            { title: 'Requirements', content: '<p>The enterprise must apply to the original social insurance registration agency (district social insurance center) to deregister its social insurance registration within <strong>30 days</strong> of enterprise deregistration.</p><p>Bring: the "Deregistration Approval Notice", the agent\'s original ID, an authorization letter, etc.</p>' },
            { title: 'Prerequisites', content: '<p>Ensure all employees have been removed (transferred out) and no contributions are owed; any arrears must be paid with late fees first.</p><p>The employer account can be closed once all employees are removed — completed on the spot with complete documents.</p>' }
        ]},
        { id: 'cs6', step: 'STEP 06', title: 'Housing Fund Deregistration', desc: 'Close the employer housing fund account at the depository bank with a zero balance.', flow: [
            { title: 'Required Documents', content: '<p>Process at the housing fund depository bank outlet. Bring:</p><p>• Original and copy of the "Deregistration Approval Notice"</p><p>• Copy of the legal representative\'s ID</p><p>• Agent\'s original ID and authorization letter</p><p>• Company seal and legal representative seal</p>' },
            { title: 'Conditions and Process', content: '<p><strong>Prerequisite:</strong> all employee accounts must be sealed or transferred and the employer balance must be zero.</p><p>If employees have not withdrawn their funds, assist them with transfer or withdrawal before closing the employer account.</p><p>Processing time: 1-3 business days with complete documents.</p>' }
        ]},
        { id: 'cs7', step: 'STEP 07', title: 'Bank Account Closure', desc: 'Close corporate accounts at the bank — general accounts first, then the basic account.', flow: [
            { title: 'Required Documents', content: '<p>Process at the bank counter. Bring:</p><p>• Original "Deregistration Approval Notice"</p><p>• Original ID of the legal representative</p><p>• Remaining blank checks, drafts and other instruments</p><p>• Company seal, financial seal and legal representative seal</p><p>Enterprise bank accounts operate under a filing system — no account-opening permit is needed.</p>' },
            { title: 'Processing Order', content: '<p><strong>Order:</strong> close general accounts first, then the basic account.</p><p>Settle the balance and return unused blank checks and drafts.</p><p>The PBOC simultaneously cancels the enterprise\'s beneficial owner filing based on deregistration data shared by the market regulation authority — no separate action needed.</p><p>Processing time: 1-5 business days.</p>' }
        ]},
        { id: 'cs8', step: 'STEP 08', title: 'Seal Cancellation', desc: 'Surrender physical seals at a registered engraver; the seal engraving filing is cancelled simultaneously.', flow: [
            { title: 'Processing Steps', content: '<p>Surrender physical seals at a public-security-registered engraver. Bring:</p><p>• Original "Deregistration Approval Notice"</p><p>• Copy of the legal representative\'s ID</p><p>• All physical seals (official, financial, legal representative, contract, invoice seals, etc.)</p><p>The seal engraving filing is cancelled simultaneously after the market regulation authority pushes the deregistration data to the public security authority — no separate application needed.</p><p>Obtain the "Seal Cancellation Certificate" upon completion.</p>' }
        ]},
        { id: 'cs9', step: 'STEP 09', title: 'Risks & Legal Liability', onlineOnly: true, desc: 'Simplified deregistration does not waive liquidation duties; false commitments lead to revocation.', flow: [
            { title: 'Consequences of False Commitments', content: '<p>"Simplified" simplifies the procedure only — it does not exempt liquidation duties or debt repayment:</p><p>• Shareholders who falsely commit that "no debts arose or all debts were settled" bear <strong>joint and several liability</strong> for the company\'s pre-deregistration debts</p><p>• Deregistration obtained by false commitments or materials may be revoked, entity status restored, and the entity placed on the serious violation & dishonesty list</p><p>• Applications abusing simplified deregistration to transfer assets, evade debts or dodge penalties will be denied or revoked</p>' },
            { title: 'Compulsory Deregistration Notice', content: '<p>Where a company whose license was revoked, or which was ordered closed or deregistered, <strong>fails to apply for deregistration for 3 years</strong>, the registration authority may compulsorily deregister it under Article 241 of the Company Law and the Compulsory Deregistration Implementation Measures.</p><p>Compulsory deregistration does not affect the liability of former shareholders and liquidation obligors.</p>' }
        ]}
    ]},
    'cancel_normal': { title: 'Standard Deregistration Guide', modules: [
        { id: 'cn1', step: 'STEP 01', title: 'Dissolution Resolution & Publicity', desc: 'Pass a lawful dissolution resolution and publicize the cause within 10 days.', flow: [
            { title: 'Grounds for Dissolution', content: '<p><strong>Voluntary dissolution:</strong> expiry of the business term in the articles of association or other stipulated causes; shareholders\' meeting resolution; dissolution required for merger or division.</p><p><strong>Compulsory dissolution:</strong> license revocation, ordered closure or deregistration by law; or, where serious operational difficulty arises, shareholders holding 10%+ voting rights petition the court for dissolution.</p><p>A dissolution resolution of an LLC requires approval by shareholders representing two-thirds or more of the voting rights.</p>' },
            { title: 'Publicity of Dissolution Cause', content: '<p>Under Article 229 of the new Company Law, a company must publicize the dissolution cause via the National Enterprise Credit Information Publicity System within <strong>10 days</strong> of its occurrence.</p><p>If unable to log in (e.g., no registration liaison on file), first file a liaison with the registration authority, then publicize; revoked enterprises follow the same approach.</p>' }
        ]},
        { id: 'cn2', step: 'STEP 02', title: 'Establish & Announce Liquidation Committee', desc: 'Directors are liquidation obligors; form the committee within 15 days and announce its details.', flow: [
            { title: 'Liquidation Obligors & Composition', content: '<p>Under Article 232 of the new Company Law, <strong>the directors are the liquidation obligors</strong> and must form a liquidation committee within <strong>15 days</strong> of the dissolution cause.</p><p>The committee consists of directors, unless the articles of association provide otherwise or the shareholders\' meeting elects others; internal personnel familiar with the company and professionals with audit/accounting expertise are encouraged.</p><p>If no committee is formed in time or it fails to liquidate, creditors, shareholders, directors or other interested parties may petition the court to appoint one.</p><p>Members who fail to perform liquidation duties in time and cause damage bear compensation liability.</p>' },
            { title: 'Announcement of Committee Information', content: '<p>The liquidation committee must announce its information (members, head, contacts, office address, deregistration reason, etc.) via the National Enterprise Credit Information Publicity System within <strong>10 days</strong> of establishment; the market regulation authority shares this with the tax authority simultaneously.</p><p>Non-corporate legal entities (liquidated by their supervising authority) and sole proprietorships (liquidated by the investor) need not announce committee information.</p>' }
        ]},
        { id: 'cn3', step: 'STEP 03', title: 'Creditor Notification & Notice (45 Days)', desc: 'Notify known creditors and publish a creditor notice with a 45-day claim window.', flow: [
            { title: 'Notice Requirements', content: '<p>• The committee notifies creditors within 10 days of its establishment and publishes a creditor notice free of charge via the publicity system within <strong>60 days</strong> (or lawfully via newspapers)</p><p>• <strong>Notice period: 45 days</strong>; for sole proprietorships unable to notify creditors, 60 days</p><p>• The notice states: entity name, unified social credit code, notice period, claim contact person, phone and address</p><p>• If published only in a newspaper, submit the newspaper page when applying for deregistration</p>' },
            { title: 'Claim Filing', content: '<p>Creditors must file claims within <strong>30 days</strong> of receiving the notice, or within <strong>45 days</strong> of publication if not notified.</p><p>Failure to notify/announce properly, leaving creditors unpaid, exposes committee members to compensation liability, and the registration authority may fine the company RMB 10,000-100,000.</p>' }
        ]},
        { id: 'cn4', step: 'STEP 04', title: 'Liquidation & Distribution of Residual Assets', desc: 'Clear assets and debts, settle claims in statutory order and distribute residual assets.', flow: [
            { title: 'Liquidation Work', content: '<p>The liquidation committee shall:</p><p>• Inventory company assets and prepare the balance sheet and asset list</p><p>• Handle unfinished business related to liquidation</p><p>• Settle employee wages, social insurance and statutory compensation, and pay administrative fines</p><p>• Pay outstanding taxes and taxes arising during liquidation (incl. corporate income tax liquidation, invoice and tax-control device cancellation)</p><p>• Clear creditor claims and debts; deregister branches; dispose of outbound investments and pledged equity</p><p>• Represent the company in civil litigation</p>' },
            { title: 'Distribution & Liquidation Report', content: '<p><strong>Order of payment:</strong> liquidation expenses → employee wages, social insurance and statutory compensation → outstanding taxes → company debts. Residual assets are distributed by capital contribution ratio (LLC) or shareholding (joint-stock company); no distribution to shareholders before lawful settlement.</p><p>The liquidation plan is confirmed by the shareholders\' meeting or the court. After liquidation, a report is prepared — for LLCs it requires confirmation by shareholders representing 2/3+ voting rights; for joint-stock companies, signatures of the meeting chair and attending directors.</p><p>During liquidation the company survives but must not conduct business unrelated to liquidation.</p>' }
        ]},
        { id: 'cn5', step: 'STEP 05', title: 'Tax Deregistration', desc: 'Tax pre-check and settlement; eligible taxpayers get instant clearance.', flow: [
            { title: 'Pre-check & Instant Clearance', content: '<p>Apply for deregistration at the competent tax authority\'s service hall; the tax authority first runs a deregistration pre-check:</p><p>• <strong>Instant tax clearance document</strong> for those who never handled tax matters and show no risk, or those eligible for tolerance-based instant processing (e.g., tax credit rating A/B, not under tax inspection, no arrears or fines, invoices and tax-control devices cancelled) — instant with complete documents, or upon commitment if incomplete</p><p>• Otherwise the tax authority issues a "Tax Matters Notice" listing outstanding items, which must be settled first</p><p>• For court-declared bankruptcy or compulsory liquidation, the administrator receives instant clearance upon presenting the termination ruling</p><p>• The withholding agreement terminates automatically upon tax deregistration — no separate application</p>' },
            { title: 'Common Grounds for Refusal', content: '<p>Settle the following before applying:</p><p>• Holding equity, stock, debt investments, land use rights or real estate without lawful liquidation taxation</p><p>• Partnerships/sole proprietorships that have not paid individual income tax on liquidation gains</p><p>• Exporters with unsettled export tax rebates</p><p>• Taxpayers in abnormal status must first lift it and file back returns</p>' },
            { title: 'Obtain Tax Clearance', content: '<p>Once all tax matters are settled, the tax authority issues the clearance document.</p><p>• Where clearance data is shared with the registration authority, <strong>no paper certificate is required</strong> for deregistration</p><p>• Corporate income tax on liquidation gains must be declared and paid before deregistration</p><p>• Enterprises whose license is revoked must apply for tax deregistration within 15 days of revocation</p>' }
        ]},
        { id: 'cn5b', step: 'STEP 06', title: 'Customs Filing Deregistration (If Applicable)', desc: 'Enterprises with customs declaration business must complete customs formalities before applying for deregistration.', flow: [
            { title: 'Complete Customs Formalities', content: '<p>Enterprises with customs declaration business should confirm all customs formalities are completed before applying for deregistration (including tax repayment where duty-reduced/exempted goods are released from supervision early).</p><p>Enterprises without customs business may skip this step and proceed to the next.</p>' },
            { title: 'Declaration Entity Filing Cancellation', content: '<p>For declaration entities that have completed customs formalities, customs simultaneously cancels the filing based on deregistration data shared by the market regulation authority — no separate application needed; you may also submit a cancellation application in person at the competent customs office.</p>' }
        ]},
        { id: 'cn6', step: 'STEP 07', title: 'Deregistration Application', desc: 'Submit deregistration documents after liquidation; entity status formally terminates.', flowTypes: ['Company', 'Partnership', 'Sole Proprietorship'], flows: {
            'Company': [
                { title: 'Submit Deregistration Documents', content: '<p>Per the Business Entity Registration Document Standards (2026 Edition), submit at the registration authority window (district market supervision bureau registration window or government service hall):</p><p>1. Enterprise Deregistration Application Form (Standard Procedure)</p><p>2. Dissolution documents under Article 229 of the Company Law: for dissolution by shareholders\' resolution or merger/division, the dissolution resolution or decision (LLC: signed by shareholders representing two-thirds or more of voting rights); for expiry of the business term or other causes stipulated in the articles, note it in the application form; for ordered closure, license revocation or cancellation, the relevant documents; for court-ordered dissolution, the court judgment</p><p>3. Confirmed liquidation report (LLC: also the shareholders\' resolution confirming the report; joint-stock company: the shareholders\' meeting minutes; wholly state-owned company: confirmation signed by the authority performing contributor duties)</p><p>4. Creditor notice (45-day period; not required if published via the publicity system; newspaper page sample if published only in a newspaper)</p><p>5. Tax clearance certificate (not required where clearance data is shared)</p><p>6. Copy of the agent\'s ID</p><p>7. Approval document copies where deregistration requires approval by law, administrative regulation or State Council decision</p><p><strong>Note:</strong> branches must be deregistered and outbound equity investments transferred or deregistered before applying; where the court has ruled termination of bankruptcy or compulsory liquidation, apply with the ruling, the application form and the agent\'s ID.</p><p><strong>Window submission requirements:</strong> use A4 white paper and sign properly; mark copies "consistent with the original" and sign for confirmation.</p>' },
                { title: 'Review & Deregistration', content: '<p>The registration authority reviews the documents:</p><p>• Complete and compliant applications are accepted and generally processed within 1-3 business days</p><p>• Upon approval, the "Deregistration Approval Notice" is issued</p><p>• Paper licenses must be surrendered; failure or inability leads to an invalidation announcement on the publicity system</p><p>• Legal person status terminates</p>' }
            ],
            'Partnership': [
                { title: 'Submit Deregistration Documents', content: '<p>Submit at the registration authority window:</p><p>1. Enterprise Deregistration Application Form (Standard Procedure)</p><p>2. Dissolution resolution or decision under the Partnership Enterprise Law, or documents of ordered closure, license revocation or cancellation by the administrative authority</p><p>3. Liquidation report signed by all partners</p><p>4. Creditor notice (45-day period; not required if published via the publicity system; newspaper page sample if published only in a newspaper)</p><p>5. Tax clearance certificate (not required where clearance data is shared)</p><p>6. Copy of the agent\'s ID</p><p>7. Approval document copies where deregistration requires approval by law</p><p><strong>Note:</strong> where the court has ruled termination of bankruptcy or compulsory liquidation, apply with the application form, the agent\'s ID and the court ruling; where a court-appointed liquidator or bankruptcy administrator applies, also submit the court appointment document. Partnership liquidation gains are treated as annual business income, taxed as individual income of the investors.</p>' },
                { title: 'Review & Deregistration', content: '<p>The registration authority reviews the documents:</p><p>• Complete and compliant applications are generally processed within 1-3 business days</p><p>• The "Deregistration Approval Notice" is issued upon approval</p><p>• Surrender paper business licenses</p><p>• Partnership status terminates</p>' }
            ],
            'Sole Proprietorship': [
                { title: 'Submit Deregistration Documents', content: '<p>Submit at the registration authority window:</p><p>1. Enterprise Deregistration Application Form (Standard Procedure)</p><p>2. Liquidation report confirmed by the investor or the people\'s court</p><p>3. Creditor notice (where the investor self-liquidates and creditors cannot be notified, publication is required with a 60-day period; not required if published via the publicity system; newspaper page sample if published only in a newspaper)</p><p>4. Tax clearance certificate (not required where clearance data is shared)</p><p>5. Copy of the agent\'s ID</p><p>6. Approval document copies where deregistration requires approval by law</p><p><strong>Note:</strong> where the court has ruled termination of compulsory liquidation, apply with the application form, the agent\'s ID and the court ruling; where a liquidator applies, also submit the court appointment document. Liquidation gains are treated as annual business income, taxed as individual income of the investor.</p>' },
                { title: 'Review & Deregistration', content: '<p>The registration authority reviews the documents:</p><p>• Complete and compliant applications are generally processed within 1-3 business days</p><p>• The "Deregistration Approval Notice" is issued upon approval</p><p>• Surrender paper business licenses</p><p>• Sole proprietorship status terminates</p>' }
            ]
        }},
        { id: 'cn7', step: 'STEP 08', title: 'Social Insurance Deregistration', desc: 'Deregister social insurance at the social insurance agency within 30 days of enterprise deregistration.', flow: [
            { title: 'Requirements', content: '<p>The enterprise must apply to the original social insurance registration agency (district social insurance center) to deregister its social insurance registration within <strong>30 days</strong> of enterprise deregistration.</p><p>Bring: the "Deregistration Approval Notice", the agent\'s original ID, an authorization letter, etc.</p>' },
            { title: 'Prerequisites', content: '<p>Ensure all employees have been removed (transferred out) and no contributions are owed; arrears must be paid with late fees first.</p><p>The employer account can be closed once all employees are removed — completed on the spot with complete documents.</p>' }
        ]},
        { id: 'cn8', step: 'STEP 09', title: 'Housing Fund Deregistration', desc: 'Close the employer housing fund account at the depository bank with a zero balance.', flow: [
            { title: 'Required Documents', content: '<p>Process at the housing fund depository bank outlet. Bring:</p><p>• Original and copy of the "Deregistration Approval Notice"</p><p>• Copy of the legal representative\'s ID</p><p>• Agent\'s original ID and authorization letter</p><p>• Company seal and legal representative seal</p>' },
            { title: 'Conditions and Process', content: '<p><strong>Prerequisite:</strong> all employee accounts must be sealed or transferred and the employer balance must be zero.</p><p>If employees have not withdrawn their funds, assist them with transfer or withdrawal before closing the employer account.</p><p>Processing time: 1-3 business days with complete documents.</p>' }
        ]},
        { id: 'cn9', step: 'STEP 10', title: 'Bank Account Closure', desc: 'Close corporate accounts at the bank — general accounts first, then the basic account.', flow: [
            { title: 'Required Documents', content: '<p>Process at the bank counter. Bring:</p><p>• Original "Deregistration Approval Notice"</p><p>• Original ID of the legal representative</p><p>• Remaining blank checks, drafts and other instruments</p><p>• Company seal, financial seal and legal representative seal</p><p>Enterprise bank accounts operate under a filing system — no account-opening permit is needed.</p>' },
            { title: 'Processing Order', content: '<p><strong>Order:</strong> close general accounts first, then the basic account.</p><p>Settle the balance and return unused blank checks and drafts.</p><p>The PBOC simultaneously cancels the enterprise\'s beneficial owner filing based on deregistration data shared by the market regulation authority.</p><p>Processing time: 1-5 business days.</p>' }
        ]},
        { id: 'cn10', step: 'STEP 11', title: 'Seal Cancellation', desc: 'Surrender physical seals at a public-security-registered engraver; engraving filing is cancelled simultaneously.', flow: [
            { title: 'Seal Cancellation', content: '<p>Surrender physical seals at a public-security-registered engraver with the original "Deregistration Approval Notice", a copy of the legal representative\'s ID and all physical seals; obtain the "Seal Cancellation Certificate".</p><p>The seal engraving filing is cancelled simultaneously after the market regulation authority pushes the deregistration data to the public security authority — no separate application needed.</p>' }
        ]},
        { id: 'cn11', step: 'STEP 12', title: 'Special Cases & Legal Liability', onlineOnly: true, desc: 'Rules for unreachable shareholders, lost licenses/seals, compulsory deregistration and more.', flow: [
            { title: 'Special Cases', content: '<p>• <strong>Unreachable or uncooperative shareholders</strong>: notify all shareholders in writing and by newspaper announcement, pass a resolution meeting the statutory/articles voting threshold, complete liquidation, then apply</p><p>• <strong>Unable to self-organize liquidation</strong>: shareholders, directors or interested parties may petition the court to appoint a committee; if assets are insufficient, file for bankruptcy; deregistration is available directly upon the court\'s termination ruling</p><p>• <strong>Lost license or seals</strong>: announce a lost license on the publicity system or in a newspaper (no reissue needed); for a lost company seal, shareholders meeting the voting threshold may sign/seal in confirmation, and documents may be submitted without the seal</p><p>• <strong>Deceased/deregistered shareholder (contributor)</strong>: all lawful successors or heirs may handle deregistration on their behalf (subrogated deregistration)</p><p>• <strong>Deceased, missing or uncooperative legal representative</strong>: the new legal representative signs the application based on appointment/removal documents</p>' },
            { title: 'Legal Liability Notes', content: '<p>• Failure to notify/announce creditors: rectification order plus a company fine of RMB 10,000-100,000</p><p>• Concealing assets, false records, or distributing assets before settlement: company fine of 5%-10% of the amount, and RMB 10,000-100,000 for responsible persons</p><p>• Deregistration without lawful liquidation: creditors may hold shareholders, directors, controlling shareholders and actual controllers liable for company debts</p><p>• Deregistration by false materials: revocation and listing on the serious violation & dishonesty list; agents assisting fraud face aggravated penalties</p><p>• <strong>Compulsory deregistration</strong>: companies revoked/closed/cancelled that fail to apply for 3 years may be compulsorily deregistered under Article 241 of the Company Law; liability of former shareholders and liquidation obligors is unaffected</p>' }
        ]}
    ]},
    // ---- Individual Business Registration ----
    'individual_startup': { title: 'Individual Business Registration Guide', modules: [
        { id: 'is1', step: 'STEP 01', title: 'Name Registration', onlineOnly: true, desc: 'Individual businesses can register a name or operate without one.', flow: [
            { title: 'Name Registration (Optional)', content: '<p>Individual businesses are not required to use a business name. If you wish to use one, register via the Shanghai "One-Stop Online" platform:</p><p>• Name format: Shanghai + Trade Name + Industry + Organization Type (e.g., "Shanghai XX Snack Shop")</p><p>• You may also use only a trade name, e.g., "XX Snack Shop"</p><p>• If the business scope involves pre-approval items and a name is required, complete name registration first</p><p>• The system provides automatic name verification with real-time compliance feedback</p>' },
            { title: 'Get Name Verification Result', content: '<p>The system performs automatic name verification with instant results.</p><p>Once verified, the name can be used for establishment registration.</p><p>If you submit a Name Self-Declaration Commitment Letter, the registration authority will file it.</p>' }
        ]},
        { id: 'is2', step: 'STEP 02', title: 'Establishment Registration', desc: 'Formally apply to establish an individual business and obtain a business license.', flow: [
            { title: 'Prepare Documents', content: '<p>Required documents (strictly per the 2026 Business Entity Registration Document Standards):</p><p>1. Individual Business Registration (Filing) Application Form</p><p>2. Copies of identity certificates for the operator and the person submitting the application (agent)</p><p>　• For family-operated businesses: household register (hukou) or marriage certificate, plus copies of participating family members\' identity certificates</p><p>　• Hong Kong/Macau operators: permanent resident ID, SAR passport, or Mainland-issued residence permit/entry permit copies</p><p>　• Taiwan operators: Mainland-issued Taiwan resident residence permit or Taiwan compatriot travel permit copies; Taiwan farmers submit proof of farmer status (e.g., proof of membership in a Taiwan agricultural organization, Taiwan farmer health insurance certificate or Taiwan farmer senior allowance certificate)</p><p>3. Operator\'s residential address documents: household register or identity certificate copy (if current residence differs, provide proof of current residence)</p><p>4. Business premises usage documents</p><p>　• Online-only platform operators must submit a document from the e-commerce platform confirming use of the platform\'s network address as the business premises</p><p>5. Where laws require pre-approval for establishment, submit copies of approval documents or licenses</p>' },
            { title: 'Submit Application', content: '<p>Submit the application documents at the market supervision bureau registration window of the district where the business premises is located:</p><p>• Use A4 white paper for all submitted documents</p><p>• Signatures must be in black or blue ink pen</p><p>• Copies must be marked "consistent with the original" and signed by the applicant, or by the designated representative or jointly entrusted agent</p><p>• For on-site real-name registration, complete the Real-Name Registration Confirmation Form</p>' },
            { title: 'Collect Business License', content: '<p>After approval, you may choose:</p><p>• <strong>Electronic Business License</strong>: Instant download, with the same legal effect as a paper license</p><p>• <strong>Paper License</strong>: Collect at the Market Supervision Bureau window or opt for postal delivery</p><p>Processing time: Typically 1-3 business days with complete documents.</p>' },
            { title: 'Service Window Inquiry', type: 'window', content: '' }
        ]},
        { id: 'is3', step: 'STEP 03', title: 'Tax Registration', desc: 'Complete tax information confirmation, apply for invoices, and establish accounting records.', flow: [
            { title: 'Tax Information Confirmation', content: '<p>After obtaining the business license, visit the local tax authority to:</p><p>• Complete tax information confirmation (automatically linked on first tax filing)</p><p>• Determine taxpayer type (VAT small-scale taxpayer or general taxpayer)</p><p>• Individual businesses are generally classified as small-scale taxpayers by default</p><p>• Monthly sales under 100,000 RMB are exempt from VAT (small-scale taxpayers)</p>' },
            { title: 'Invoice Application & Accounting Setup', content: '<p><strong>Invoice Application:</strong></p><p>• First-time applicants must visit the competent tax authority\'s service hall with the business license and the operator\'s ID</p><p>• Small-scale taxpayers can issue general invoices independently; apply for agency issuance or self-issuance for special VAT invoices</p><p><strong>Accounting Records:</strong></p><p>• Individual businesses must establish accounting records as required</p><p>• Small-scale operations may apply for fixed-amount periodic taxation</p><p>• Bookkeeping agency services available at approximately 200-500 RMB/month</p>' },
            { title: 'Hiring Employees (If Applicable)', content: '<p>Individual businesses that hire employees must complete employment and social insurance registration for each employee within 30 days of hiring, at the district social insurance center or sub-district community affairs service center.</p><p>Those without employees need no employer insurance registration; the operator may participate in employee pension/medical insurance as a flexible worker, or join the urban-rural resident social insurance schemes.</p>' }
        ]}
    ]},
    // ---- Individual Business Simplified Deregistration ----
    'individual_cancel_simple': { title: 'Individual Business Simplified Deregistration Guide', modules: [
        { id: 'ics1', step: 'STEP 01', title: 'Verify Eligibility', desc: 'Confirm eligibility for simplified deregistration: no outstanding debts.', flow: [
            { title: 'Eligibility Criteria', content: '<p><strong>Conditions for simplified deregistration:</strong></p><p>• The individual business has no outstanding debts, or all debts have been settled</p><p>• All liquidation costs, employee wages, social insurance, legal compensation, and taxes (including late fees and fines) have been settled</p><p><strong>Situations where simplified deregistration does NOT apply:</strong></p><p>• Deregistration requires prior government approval</p><p>• Business license has been revoked, ordered closed, or cancelled</p><p>• Listed in the business anomaly directory</p><p>• Falls under Article 48 of the Implementation Rules of the Market Entity Registration Management Regulations</p>' }
        ]},
        { id: 'ics2', step: 'STEP 02', title: 'Prepare & Submit Documents', desc: 'Prepare required documents and submit the simplified deregistration application.', flow: [
            { title: 'Prepare Documents', content: '<p>Required documents for simplified deregistration (strictly per the 2026 Business Entity Registration Document Standards):</p><p>1. Individual Business Registration (Filing) Application Form</p><p>2. Copy of identity certificate of the person submitting the application (agent)</p><p><strong>Note:</strong> If a paper business license was collected, surrender the original license(s).</p>' },
            { title: 'Submit Application', content: '<p><strong>Processing Procedure:</strong></p><p>• Submit the simplified deregistration application at the market supervision bureau registration window of each district</p><p>• No public notice via the National Enterprise Credit Information Publicity System is required</p><p>• The registration authority forwards the deregistration application information to the tax and other relevant departments</p><p>• If no objection is raised within 10 days, the registration authority processes the deregistration directly</p>' }
        ]},
        { id: 'ics3', step: 'STEP 03', title: 'Complete Deregistration', desc: 'Collect deregistration certificate and surrender business license.', flow: [
            { title: 'Collect Deregistration Certificate', content: '<p>After approval:</p><p>• The registration authority issues the "Deregistration Approval Notice"</p><p>• If a paper business license was collected, surrender the original license(s)</p><p>• The individual business entity status is terminated</p><p><strong>Tip:</strong> It is recommended to also close the bank account and cancel any registered seals.</p>' }
        ]}
    ]},
    // ---- Individual Business Standard Deregistration ----
    'individual_cancel_normal': { title: 'Individual Business Standard Deregistration Guide', modules: [
        { id: 'icn1', step: 'STEP 01', title: 'Tax Clearance', desc: 'Complete tax clearance at the tax authority and obtain a tax clearance certificate.', flow: [
            { title: 'Tax Clearance Filing', content: '<p>Process with the local tax authority:</p><p>• Settle all outstanding taxes including VAT and personal income tax</p><p>• Surrender unused invoices and tax control equipment (if applicable)</p><p>• Resolve any unfiled returns and late payment fees</p>' },
            { title: 'Obtain Tax Clearance Certificate', content: '<p>After all tax matters are settled:</p><p>• The tax authority issues a Tax Clearance Certificate</p><p>• This certificate is a required document for business deregistration</p><p>• If the registration authority and tax authority have shared tax clearance information, a paper certificate is not required</p><p>• Processing time: approximately 3-15 business days (depending on complexity)</p>' }
        ]},
        { id: 'icn2', step: 'STEP 02', title: 'Prepare Deregistration Documents', desc: 'Prepare all required deregistration application documents.', flow: [
            { title: 'Prepare Documents', content: '<p>Required documents (strictly per the 2026 Business Entity Registration Document Standards):</p><p>1. Individual Business Registration (Filing) Application Form</p><p>2. Tax clearance certificate (not required if the registration authority and tax authority have shared tax clearance information electronically)</p><p>3. If the operator is deceased and the heir is handling deregistration: notarized documents or effective legal documents (including but not limited to court judgments, rulings, mediation agreements, or people\'s mediation agreements confirmed by the court, and other documents sufficient to prove inheritance) as proof of inheritance</p><p>4. Copy of identity certificate of the person submitting the application (agent)</p><p><strong>Note:</strong> If a paper business license was collected, surrender the original license(s).</p>' }
        ]},
        { id: 'icn3', step: 'STEP 03', title: 'Submit Deregistration Application', desc: 'Submit the deregistration application to the registration authority.', flow: [
            { title: 'Submit Application', content: '<p>Submit the deregistration documents at the market supervision bureau registration window of each district:</p><p>• Use A4 white paper for all submitted documents</p><p>• Signatures must be in black or blue ink pen</p><p>• Copies must be marked "consistent with the original" and signed by the applicant</p><p><strong>Processing time:</strong> Typically 5-10 business days with complete documents.</p>' }
        ]},
        { id: 'icn4', step: 'STEP 04', title: 'Complete Deregistration', desc: 'Collect deregistration certificate, surrender business license, entity status terminated.', flow: [
            { title: 'Collect Deregistration Certificate', content: '<p>After approval:</p><p>• The registration authority issues the "Deregistration Approval Notice"</p><p>• If a paper business license was collected, surrender the original license(s)</p><p>• The individual business entity status is terminated</p><p><strong>Follow-up Items:</strong></p><p>• It is recommended to close the business bank account</p><p>• Cancel any registered seals (if applicable)</p><p>• Deregister social insurance and housing fund accounts (if applicable)</p>' }
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
    { id: 'g1b', name: 'Branch Management', group: 'Business Registration', icon: '<svg viewBox="0 0 24 24" fill="#4A7B8C"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>', drawers: [
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
    { id: 'g2', name: 'Social Insurance', group: 'HR Services', icon: '<svg viewBox="0 0 24 24" fill="#4A7B8C"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>', drawers: [
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
