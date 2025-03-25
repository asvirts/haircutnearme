"use client"

import { useEffect, useState } from "react"

interface BusinessHour {
  day: string
  hours: string
}

interface BusinessHoursProps {
  businessHours: BusinessHour[]
  fallbackHours: string
}

export function BusinessHours({
  businessHours,
  fallbackHours
}: BusinessHoursProps) {
  const [currentDay, setCurrentDay] = useState<string>("")

  useEffect(() => {
    // Get current day name on client-side
    const today = new Date()
    const dayName = today.toLocaleDateString("en-US", { weekday: "long" })
    setCurrentDay(dayName)
  }, [])

  if (businessHours.length === 0) {
    return (
      <div className="flex flex-col">
        <span className="font-medium text-sm mb-1">Business Hours</span>
        <span>{fallbackHours}</span>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      <span className="font-medium text-sm mb-1">Business Hours</span>
      <div className="space-y-1 text-sm">
        {businessHours.map(({ day, hours }) => {
          const isCurrentDay = day === currentDay

          return (
            <div
              key={day}
              className={`flex ${
                isCurrentDay ? "bg-blue-50 rounded px-2 py-1 -mx-2" : ""
              }`}
            >
              <span
                className={`font-medium min-w-24 ${
                  isCurrentDay ? "text-blue-700" : ""
                }`}
              >
                {day}:
              </span>
              <span className={isCurrentDay ? "text-blue-700" : ""}>
                {hours}
              </span>
              {isCurrentDay && (
                <span className="ml-2 text-xs text-blue-600 font-medium bg-blue-100 px-1.5 py-0.5 rounded-full">
                  Today
                </span>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
