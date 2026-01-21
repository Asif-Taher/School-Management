"use client";
import React, { use, useState } from 'react'
import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from '@/lib/data'
import "react-big-calendar/lib/css/react-big-calendar.css";
const localizer = momentLocalizer(moment)

const BigCalander = () => {
    const [view, setView] = useState<View>(Views.WORK_WEEK);
     const handleViewChange = (newView: View) => {
       setView(newView);
     }
  return (
      <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week","day"]}
      view={view}
      onView={handleViewChange}
      style={{ height: 800 }}
    />
  )
}

export default BigCalander
