//Calendar.js
function Calendar() {
    const DATE = new Date();
    const YEAR = DATE.getFullYear();
    const MONTH = DATE.getMonth() + 1;
  
    const [month, setMonth] = useState(MONTH);
    const [year, setYear] = useState(YEAR);
  
   const moveToNextMonth = (month) => {
      if (month === 12) {
        setYear((previousYear) => previousYear + 1);
        setMonth(1);
      } else {
        setMonth((previousMonth) => previousMonth + 1);
      }
    };
  
    const moveToPreviousMonth = (month) => {
      if (month === 1) {
        setYear((previousYear) => previousYear - 1);
        setMonth(12);
      } else {
        setMonth((previousMonth) => previousMonth - 1);
      }
    };
  
    return (
      <View style={S.calendarContainer}>
        <Header
          month={month}
          year={year}
          moveToNextMonth={moveToNextMonth}
          moveToPreviousMonth={moveToPreviousMonth}
        />
        <Body
          month={month}
          year={year}
          moveToNextMonth={moveToNextMonth}
          moveToPreviousMonth={moveToPreviousMonth}
        />
      </View>
    );
  }
  export default Calendar;