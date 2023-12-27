"use client";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import QuestionPost from "./components/questionPost";
import Replyed from "./components/replyed";
import styles from "./main.module.css";
import useSWR from "swr";
import NewQuestion from "./components/newQuestion";
import Deleted from "./components/deleted";

export default function Home() {
  const fetcher = (...args) =>
    fetch(...args, { credentials: "include", withCredentials: true }).then(
      (res) => res.json()
    );

  const { data, err } = useSWR(
    `${process.env.API_SERVER}/api/session`,
    fetcher
  );

  if (!data || !data.success) {
    return (
      <>
        <QuestionPost />
        <Replyed />
      </>
    );
  } else {
    return (
      <>
        <QuestionPost />
        <Tabs>
          <TabList className={styles["tab-list"]}>
            <Tab>질문</Tab>
            <Tab>새질문</Tab>
            <Tab>거절질문</Tab>
          </TabList>
          <TabPanel>
            <Replyed />
          </TabPanel>
          <TabPanel>
            <NewQuestion />
          </TabPanel>
          <TabPanel>
            <Deleted />
          </TabPanel>
        </Tabs>
      </>
    );
  }
}
