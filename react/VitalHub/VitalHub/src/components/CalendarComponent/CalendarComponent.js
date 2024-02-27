import { useEffect, useState } from "react";

import { Calendar, LocaleConfig } from "react-native-calendars";

const CalendarComponent = () => {
    
  const [selected, setSelected] = useState("");

  const currentDate = new Date();
  const startingDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

  LocaleConfig.locales["pt-br"] = {
    monthNames: [
      "Janeiro", "Fevereiro", "Março", "Abril",
      "Maio", "Junho", "Julho", "Agosto",
      "Setembro", "Outubro", "Novembro", "Dezembro",
    ],
    monthNamesShort: [
      "Jan", "Fev", "Mar", "Abr", "Mai",
      "Jun", "Jul", "Ago", "Set", "Out",
      "Nov", "Dez",
    ],
    dayNames: [
      "Domingo", "Segunda", "Terça", "Quarta",
      "Quinta", "Sexta", "Sábado",
    ],
    dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
  };
  LocaleConfig.defaultLocale = "pt-br";

  return (
    <Calendar
      style={{
        width : 360,
        alignSelf : 'center',
        backgroundColor : '#FAFAFA',
        marginBottom: 20
      }}
    
      onDayPress={(day) => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {
          disableTouchEvent: true,
          selected: true,
        },
      }}

      minDate={startingDate}

      theme={{
        
        textDisabledColor : '#C6C5CE',     
        selectedDayBackgroundColor: '#60BFC5',
        todayTextColor : '#5F5C6B',   
        selectedDayTextColor: '#FAFAFA',
        calendarBackground : '#FAFAFA',
        arrowColor : '#49B3BA',

        textDayFontSize : 16,
        textDayHeaderFontSize : 12,
        textMonthFontSize : 20,
        textDayStyle : { "color" : '#5F5C6B'},

        textDayFontFamily: "Quicksand_600SemiBold",
        textMonthFontFamily: "MontserratAlternates_600SemiBold",
        textDayHeaderFontFamily: "Quicksand_600SemiBold",
      }}
    />
  );
};

export default CalendarComponent;