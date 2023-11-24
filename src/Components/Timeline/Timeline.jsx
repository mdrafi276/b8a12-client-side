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
          className="vertical-timeline-element--work  "
          contentStyle={{
            background: "#041A1F",
            color: "#fff",
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
            Solutions for 1-9{" "}
          </h3>
          <h4 className="vertical-timeline-element-subtitle"> employees</h4>
          <p>Making life easier for our all employees</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ background: "#041A1F", color: "#fff" }}
          iconStyle={{ background: "#041A1F", color: "#fff" }}
          icon={<IoCarSportSharp />}
        >
          <h3 className="vertical-timeline-element-title">
            Solutions for 10-19
          </h3>
          <h4 className="vertical-timeline-element-subtitle">employees</h4>

          <p>
            Cut Through the red Tape with Payonline Solutions for Small Business
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{
            background: "#041A1F",
            color: "#fff",
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
            Solutions for 20-49
          </h3>
          <h4 className="vertical-timeline-element-subtitle">employees</h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{ background: "#041A1F", color: "#fff" }}
          iconStyle={{ background: "#041A1F", color: "#fff" }}
          icon={<IoCarSportSharp />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#041A1F", color: "#fff" }}
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<IoCarSportSharp />}
        >
          <h3 className="vertical-timeline-element-title">
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#041A1F", color: "#fff" }}
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<IoCarSportSharp />}
        >
          <h3 className="vertical-timeline-element-title">
            Agile Development Scrum Master
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#041A1F", color: "#fff" }}
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<IoCarSportSharp />}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science in Interactive Digital Media Visual Imaging
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4>
          <p>Creative Direction, Visual Design</p>
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
