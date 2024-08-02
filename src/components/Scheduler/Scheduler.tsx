import { ThemeProvider } from "styled-components";
import { useEffect, useMemo, useRef, useState } from "react";
import dayjs from "dayjs";
import { Calendar } from "@/components";
import CalendarProvider from "@/context/CalendarProvider";
import LocaleProvider from "@/context/LocaleProvider";
import { GlobalStyle, theme, StyledSchedulerFrame } from "@/styles";
import { Config } from "@/types/global";
import { outsideWrapperId } from "@/constants";
import { SchedulerProps } from "./types";

import { StyledInnerWrapper, StyledOutsideWrapper } from "./styles";

const Scheduler = ({
  data,
  config,
  startDate,
  onRangeChange,
  onTileClick,
  onFilterData,
  onClearFilterData,
  onItemClick,
  isLoading,
  isFullscreen,
  titleAboveLeft,
  isMultipleRow,
  isVisibleTooltip,
  sectionMinute,
  viewPreviusButton,
  viewNextButton,
}: SchedulerProps) => {
  const appConfig: Config = useMemo(
    () => ({
      zoom: 0,
      filterButtonState: 1,
      includeTakenHoursOnWeekendsInDayView: false,
      ...config
    }),
    [config]
  );
  const outsideWrapperRef = useRef<HTMLDivElement>(null);
  const [topBarWidth, setTopBarWidth] = useState(outsideWrapperRef.current?.clientWidth);
  const defaultStartDate = useMemo(() => dayjs(startDate), [startDate]);

  useEffect(() => {
    const handleResize = () => {
      if (outsideWrapperRef.current) {
        setTopBarWidth(outsideWrapperRef.current.clientWidth);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!outsideWrapperRef.current) null;
  return isFullscreen ? (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <LocaleProvider lang={appConfig.lang}>
          <CalendarProvider
            data={data}
            isLoading={!!isLoading}
            config={appConfig}
            onRangeChange={onRangeChange}
            defaultStartDate={defaultStartDate}
            onFilterData={onFilterData}
            onClearFilterData={onClearFilterData}>
            <StyledOutsideWrapper
              showScroll={true}
              id={outsideWrapperId}
              ref={outsideWrapperRef}>
              <StyledInnerWrapper>
                <Calendar
                  isMultipleRow={isMultipleRow}
                  data={data}
                  isVisibleTooltip={isVisibleTooltip}
                  titleAboveLeft={titleAboveLeft}
                  onTileClick={onTileClick}
                  sectionMinute={sectionMinute}
                  topBarWidth={topBarWidth ?? 0}
                  onItemClick={onItemClick}
                  viewPreviusButton={viewPreviusButton}
                  viewNextButton={viewNextButton}
                />
              </StyledInnerWrapper>
            </StyledOutsideWrapper>
          </CalendarProvider>
        </LocaleProvider>
      </ThemeProvider>
    </>
  ) : (
    // <StyledSchedulerFrame>
    <div style={{ flex: "auto", margin: "10rem 10rem", position: "relative", width: "80vw", height: "80vh" }}>
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <LocaleProvider lang={appConfig.lang}>
            <CalendarProvider
              data={data}
              isLoading={!!isLoading}
              config={appConfig}
              onRangeChange={onRangeChange}
              defaultStartDate={defaultStartDate}
              onFilterData={onFilterData}
              onClearFilterData={onClearFilterData}>
              <StyledOutsideWrapper
                showScroll={!!data.length}
                id={outsideWrapperId}
                ref={outsideWrapperRef}>
                <StyledInnerWrapper>
                  <Calendar
                    isMultipleRow={isMultipleRow}
                    data={data}
                    isVisibleTooltip={isVisibleTooltip}
                    titleAboveLeft={titleAboveLeft}
                    onTileClick={onTileClick}
                    topBarWidth={topBarWidth ?? 0}
                    sectionMinute={sectionMinute}
                    onItemClick={onItemClick}
                    viewPreviusButton={viewPreviusButton}
                    viewNextButton={viewNextButton}
                  />
                </StyledInnerWrapper>
              </StyledOutsideWrapper>
            </CalendarProvider>
          </LocaleProvider>
        </ThemeProvider>
      </>
    </div>
  );
};

export default Scheduler;
