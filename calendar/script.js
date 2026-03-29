// 当前显示的月份和年份
let currentDate = new Date();

// 月份名称
const monthNames = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];

// DOM 元素
const currentMonthYear = document.getElementById('current-month-year');
const daysGrid = document.getElementById('days-grid');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');

// 初始化日历
function initCalendar() {
    renderCalendar(currentDate.getFullYear(), currentDate.getMonth());
    
    // 添加事件监听器
    prevMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate.getFullYear(), currentDate.getMonth());
    });
    
    nextMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate.getFullYear(), currentDate.getMonth());
    });
}

// 渲染日历
function renderCalendar(year, month) {
    // 更新月份和年份显示
    currentMonthYear.textContent = `${year}年 ${monthNames[month]}`;
    
    // 清空日期网格
    daysGrid.innerHTML = '';
    
    // 获取当月第一天
    const firstDay = new Date(year, month, 1);
    // 获取当月最后一天
    const lastDay = new Date(year, month + 1, 0);
    // 获取当月第一天是星期几（0-6，0 是星期日）
    const startDay = firstDay.getDay();
    // 获取当月的天数
    const daysInMonth = lastDay.getDate();
    
    // 获取前一个月的最后几天
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    
    // 渲染前一个月的日期
    for (let i = startDay - 1; i >= 0; i--) {
        const dayElement = document.createElement('div');
        dayElement.className = 'day other-month';
        dayElement.textContent = prevMonthLastDay - i;
        daysGrid.appendChild(dayElement);
    }
    
    // 获取今天的日期
    const today = new Date();
    const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;
    
    // 渲染当月的日期
    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'day';
        dayElement.textContent = i;
        
        // 标记今天
        if (isCurrentMonth && today.getDate() === i) {
            dayElement.classList.add('today');
        }
        
        daysGrid.appendChild(dayElement);
    }
    
    // 计算需要显示的下一个月的日期数量
    const remainingDays = 42 - (startDay + daysInMonth); // 42 是 6 行 × 7 列
    
    // 渲染下一个月的日期
    for (let i = 1; i <= remainingDays; i++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'day other-month';
        dayElement.textContent = i;
        daysGrid.appendChild(dayElement);
    }
}

// 启动应用
initCalendar();