import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { IoCarSportSharp } from "react-icons/io5";
import "react-vertical-timeline-component/style.min.css";
const Timeline = () => {
  return (
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work    "
          contentStyle={{
            background: "#041A1F",
            color: "#fff",
            borderStartStartRadius: "10%",
            marginTop:"250px",
            
            borderBottomLeftRadius: "10%",
            height: "270px",
            padding: "3.5rem",
            hover: {
              background: "gradient-to-r",
              from: "##2D838D",
              to: "##2D838D",
            },
          }}
          contentArrowStyle={{ borderRight: "7px solid  #041A1F" }}
          iconStyle={{ background: "#041A1F", color: "#fff" }}
          icon={<IoCarSportSharp />}
        >
          <h3 className="vertical-timeline-element-title">
            Use KPIs to increase performance
          </h3>
          <p>
            tamigo gives you direct access to financial drivers and KPIs such as
            productivity, wage percentage and labour costs. Turn new insights
            into action.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{
            background: "#041A1F",
            height: "270px",
            borderBottomRightRadius: "10%",
            borderTopRightRadius: "10%",
            padding: "3.5rem",
            color: "#fff",
          }}
          iconStyle={{ background: "#041A1F", color: "#fff" }}
          icon={<IoCarSportSharp />}
        >
          <h3 className="vertical-timeline-element-title">
            International benchmarking
          </h3>

          <p>
            Our solution is international: Use KPIs across the entire company to
            compare performance on a national and/or international level.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{
            background: "#041A1F",
            color: "#fff",
            borderStartStartRadius: "10%",
            borderBottomLeftRadius: "10%",
            height: "270px",
            padding: "3.5rem",
            hover: {
              background: "gradient-to-r",
              from: "##2D838D",
              to: "##2D838D",
            },
          }}
          iconStyle={{ background: "#041A1F", color: "#fff" }}
          icon={<IoCarSportSharp />}
        >
          <h3 className="vertical-timeline-element-title">
            Meet national & international requirements
          </h3>
          <p>
            tamigo is fully customisable when it comes to labour legislations
            and agreements – even across borders. One solution covers all
            locations!
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{
            background: "#041A1F",
            borderBottomRightRadius: "10%",
            borderTopRightRadius: "10%",
            height: "270px",
            padding: "3.5rem",
            color: "#fff",
          }}
          iconStyle={{ background: "#041A1F", color: "#fff" }}
          icon={<IoCarSportSharp />}
        >
          <h3 className="vertical-timeline-element-title">
            Flexible standard solution
          </h3>

          <p>
            tamigo is for everyone: Management, HR, Operations, Controlling,
            Payroll, IT and employees. User rights can be customized depending
            on your management style.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "#041A1F",
            height: "270px",
            borderStartStartRadius: "10%",
            borderBottomLeftRadius: "10%",
            padding: "3.5rem",
            color: "#fff",
          }}
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<IoCarSportSharp />}
        >
          <h3 className="vertical-timeline-element-title">
            Simple and transparent
          </h3>
          <p>
            Work smarter and make clever decisions. tamigo automates manual
            time-consuming processes and shows relevant data to relevant people.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "#041A1F",
            height: "270px",
            borderBottomRightRadius: "10%",
            borderTopRightRadius: "10%",
            padding: "3.5rem",
            color: "#fff",
          }}
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<IoCarSportSharp />}
        >
          <h3 className="vertical-timeline-element-title">
            Easy integration with any other system
          </h3>
          <p>
            To make life easy and effective, we gather all relevant information
            in ONE solution. We do integrations with the likes of HRM, payroll,
            and POS and we support SSO.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "#041A1F",
            height: "270px",
            padding: "3.5rem",
       
            borderStartStartRadius: "10%",
            borderBottomLeftRadius: "10%",
            
            color: "#fff",
          }}
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<IoCarSportSharp />}
        >
          <h3 className="vertical-timeline-element-title">
            International benchmarking
          </h3>

          <p>
            With tamigo, we've gained better payroll with deep dive
            possibilities, live KPI overview, integrations and an API-ready
            software.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<IoCarSportSharp />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
