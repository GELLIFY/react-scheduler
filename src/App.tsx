import { useCallback, useMemo, useState } from "react";
import dayjs from "dayjs";
import { createMockData } from "./mock/appMock";
import { ParsedDatesRange } from "./utils/getDatesRange";
import {ConfigFormValues, SchedulerProjectData} from "./types/global";
import ConfigPanel from "./components/ConfigPanel";
import { Scheduler } from ".";

function App() {
  const [values, setValues] = useState<ConfigFormValues>({
    peopleCount: 15,
    projectsPerYear: 5,
    yearsCovered: 0,
    startDate: undefined,
    maxRecordsPerPage: 50,
    isFullscreen: false,
    isMultipleRow: false,
    isVisibleTooltip: false,
    sectionMinute: undefined,
    viewPreviousButton: false,
    viewNextButton: false,
  });

  const {
    peopleCount,
    projectsPerYear,
    yearsCovered,
    isFullscreen,
    maxRecordsPerPage,
    isMultipleRow,
    isVisibleTooltip,
    sectionMinute,
    viewPreviousButton,
    viewNextButton,
  } = values;

  const mocked = useMemo(
    () => createMockData(+peopleCount, +yearsCovered, +projectsPerYear),
    [peopleCount, projectsPerYear, yearsCovered]
  );

  const [range, setRange] = useState<ParsedDatesRange>({
    startDate: new Date(),
    endDate: new Date()
  });

  const handleRangeChange = useCallback((range: ParsedDatesRange) => {
    setRange(range);
  }, []);

  const filteredData = useMemo(
    () =>
      mocked.map((person) => ({
        ...person,
        data: person.data.filter(
          (project) =>
            dayjs(project.startDate).isBetween(range.startDate, range.endDate) ||
            dayjs(project.endDate).isBetween(range.startDate, range.endDate) ||
            (dayjs(project.startDate).isBefore(range.startDate, "day") &&
              dayjs(project.endDate).isAfter(range.endDate, "day"))
        )
      })),
    [mocked, range.endDate, range.startDate]
  );

  const handleFilterData = () => console.log(`Filters button was clicked.`);

  const handleTileClick = (data: SchedulerProjectData) =>
    console.log(
      `Item ${data.title} - ${data.subtitle} was clicked. \n==============\nStart date: ${data.startDate} \n==============\nEnd date: ${data.endDate}\n==============\nOccupancy: ${data.occupancy}`
    );

  return (
    <>
      <ConfigPanel values={values} onSubmit={setValues} />
      <Scheduler
        startDate={values.startDate ? new Date(values.startDate).toISOString() : undefined}
        onRangeChange={handleRangeChange}
        data={filteredData}
        isLoading={false}
        onTileClick={handleTileClick}
        onFilterData={handleFilterData}
        config={{ zoom: 1, maxRecordsPerPage: maxRecordsPerPage, lang: "it", isHandleScroll: false }}
        onItemClick={(data) => console.log("clicked: ", data)}
        isFullscreen={isFullscreen}
        titleAboveLeft={"Addetti"}
        isMultipleRow={isMultipleRow}
        isVisibleTooltip={isVisibleTooltip}
        sectionMinute={sectionMinute}
        viewPreviousButton={viewPreviousButton}
        viewNextButton={viewNextButton}
      />
    </>
  );
}

export default App;
