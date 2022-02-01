import React from "react";
import { Accordion, useAccordionButton, Card } from "react-bootstrap";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      className="questions_button"
      type="button"
      style={{ backgroundColor: "#fd7f20" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function Questions() {
  return (
    <div>
      <section id="questions" className="questions_section">
        <div className="container">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <div className="container">
            <Accordion defaultActiveKey="0" className="accordion_section">
              <Card className="accordion_card">
                <Card.Header className="accordion_header">
                  <CustomToggle eventKey="0">Question #1</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="accordion_body">
                    <p className="accordion_text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nam optio, officia maxime, quisquam et eos quidem
                      explicabo nesciunt incidunt impedit laudantium asperiores,
                      hic modi porro eius doloribus magnam possimus voluptatibus
                      expedita cumque placeat corrupti. Ipsa nisi saepe
                      molestiae veniam at aliquid eaque reiciendis cumque velit,
                      eos amet. Minus alias similique sed, beatae ipsum
                      assumenda consequatur rerum distinctio nostrum officiis
                      dolores velit voluptates explicabo recusandae, ullam eius?
                      Porro culpa reprehenderit, enim explicabo similique
                      molestiae optio officiis commodi unde quos doloribus atque
                      ratione distinctio fugit, cumque deleniti praesentium
                      debitis? Repellat dolorem delectus amet dolor quisquam
                      accusantium odit nam? Fuga corporis tempore libero?
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="accordion_card">
                <Card.Header className="accordion_header">
                  <CustomToggle eventKey="1">Question #2</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body className="accordion_body">
                    <p className="accordion_text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nam optio, officia maxime, quisquam et eos quidem
                      explicabo nesciunt incidunt impedit laudantium asperiores,
                      hic modi porro eius doloribus magnam possimus voluptatibus
                      expedita cumque placeat corrupti. Ipsa nisi saepe
                      molestiae veniam at aliquid eaque reiciendis cumque velit,
                      eos amet. Minus alias similique sed, beatae ipsum
                      assumenda consequatur rerum distinctio nostrum officiis
                      dolores velit voluptates explicabo recusandae, ullam eius?
                      Porro culpa reprehenderit, enim explicabo similique
                      molestiae optio officiis commodi unde quos doloribus atque
                      ratione distinctio fugit, cumque deleniti praesentium
                      debitis? Repellat dolorem delectus amet dolor quisquam
                      accusantium odit nam? Fuga corporis tempore libero?
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="accordion_card">
                <Card.Header className="accordion_header">
                  <CustomToggle eventKey="2">Question #3</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body className="accordion_body">
                    <p className="accordion_text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nam optio, officia maxime, quisquam et eos quidem
                      explicabo nesciunt incidunt impedit laudantium asperiores,
                      hic modi porro eius doloribus magnam possimus voluptatibus
                      expedita cumque placeat corrupti. Ipsa nisi saepe
                      molestiae veniam at aliquid eaque reiciendis cumque velit,
                      eos amet. Minus alias similique sed, beatae ipsum
                      assumenda consequatur rerum distinctio nostrum officiis
                      dolores velit voluptates explicabo recusandae, ullam eius?
                      Porro culpa reprehenderit, enim explicabo similique
                      molestiae optio officiis commodi unde quos doloribus atque
                      ratione distinctio fugit, cumque deleniti praesentium
                      debitis? Repellat dolorem delectus amet dolor quisquam
                      accusantium odit nam? Fuga corporis tempore libero?
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Questions;
