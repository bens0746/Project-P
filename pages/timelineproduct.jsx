import useAxios from "axios-hooks";
import React from "react";

export default function TimeLineProductPages() {

  const [{ data: howToOrderData }, getProducts] = useAxios({
    url: "/api/howToOrder",
  });

  return (
    <>
    <div id="TimeLineProductPages"></div>
      <div className="px-8 lg:px-44 font-fontTh">

        <section>
          <div className="container py-5">
            <div className="row">
              <div className="col-md-12">
                <div className="main-timeline">

                  {howToOrderData?.map((howToOrder, index) => 
                    index % 2 === 0 ?(
                      <div className="timeline" key={index}>
                          <div className="timeline-content">
                            <div className="circle">
                              <span className="homebox">
                                <img
                                  src={howToOrder.image}
                                  alt="..."
                                  width={"150px"}
                                  className=" img "
                                />
                              </span>
                            </div>
                            <div className="content">
                              <span className="year">{howToOrder.title}</span>
                              <div className="description" dangerouslySetInnerHTML={{ __html: howToOrder?.detail}}/>
                              
                              <div className="icon">
                                <span></span>
                              </div>
                            </div>
                          </div>
                        </div>
                    ):(
                      <div className="timeline" key={index}>
                      <div className="timeline-content">
                        <div className="circle">
                          <span className="homebox">
                            <img
                              src={howToOrder.image}
                              alt="..."
                              className=" img "
                            />
                          </span>
                        </div>
                        <div className="content">
                          <span className="year">{howToOrder.title}</span>
                          <div className="description" dangerouslySetInnerHTML={{ __html: howToOrder?.detail}}/>
                          <div className="icon">
                            <span></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    )

                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
