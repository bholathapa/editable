import React from "react";

const TopPage = () => {
  return (
    <div className="top-page">
      <div className="pb-15 d-flex align-items-center">
        <div className="d-flex align-items-center">
          <button id="prev" className="btn btn-white mr-3">
            <svg
              className="cicon undefined"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.39924 9.39909L11.7984 5.99997L13.0001 7.20174L10.2019 9.99997L13.0001 12.7982L11.7984 14L8.39924 10.6009C8.06738 10.269 8.06738 9.73094 8.39924 9.39909Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          <div className="d-flex align-items-center mr-3">
            <div className="position-relative">
              <h4 className="pointer font-20 mb-0 " id="displayDate">
                <svg
                  className="cicon undefined"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.39899 12.8938L5.99988 9.49468L7.20165 8.29291L9.99988 11.0911L12.7981 8.29291L13.9999 9.49468L10.6008 12.8938C10.2689 13.2257 9.73085 13.2257 9.39899 12.8938Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </h4>
            </div>
          </div>
          <button id="next" className="btn btn-white mr-3">
            <svg
              className="cicon undefined"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.5395 10.6009L9.18574 14L8 12.7982L10.7609 10L8 7.20177L9.18574 6L12.5395 9.39912C12.867 9.73097 12.867 10.269 12.5395 10.6009Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          <div className="rdt">
            <div>
              <div>
                <button id="prev" className="btn btn-white mr-3">
                  <svg
                    className="cicon undefined"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6667 2.66666H3.33333C2.59695 2.66666 2 3.26361 2 3.99999V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V3.99999C14 3.26361 13.403 2.66666 12.6667 2.66666Z"
                      stroke="currentColor"
                      stroke-width="1.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M10.6665 1.33334V4.00001"
                      stroke="currentColor"
                      stroke-width="1.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M5.3335 1.33334V4.00001"
                      stroke="currentColor"
                      stroke-width="1.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M2 6.66666H14"
                      stroke="currentColor"
                      stroke-width="1.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-row ">
        <div className="col-xl col-md-3 col-sm-6 col-6 my-2">
          <div className="ncard d-flex flex-column justify-content-between " href="">
            <div className="d-flex align-items-center mb-10 pointer sbox--wrapper">
              <div className="mr-1 sbox sbox--default ">5</div>
              <div className="font-medium">Containers On Vessel</div>
              <div className="ml-auto">
                <svg
                  className="cicon undefined"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.5395 10.6009L9.18574 14L8 12.7982L10.7609 10L8 7.20177L9.18574 6L12.5395 9.39912C12.867 9.73097 12.867 10.269 12.5395 10.6009Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between form-row">
              <div className="col-6">
                <div className="bbox bbox--default pointer ">
                  <div className="bbox__title">On Hold</div>
                  <div className="bbox__number">5</div>
                </div>
              </div>
              <div className="col-6">
                <div className="bbox bbox--default pointer ">
                  <div className="bbox__title">Released</div>
                  <div className="bbox__number">0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl col-md-3 col-sm-6 col-6 my-2">
          <div className="ncard d-flex flex-column justify-content-between " href="">
            <div className="d-flex align-items-center mb-10 pointer sbox--wrapper">
              <div className="mr-1 sbox sbox--default ">113</div>
              <div className="font-medium">Containers At Port</div>
              <div className="ml-auto">
                <svg
                  className="cicon undefined"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.5395 10.6009L9.18574 14L8 12.7982L10.7609 10L8 7.20177L9.18574 6L12.5395 9.39912C12.867 9.73097 12.867 10.269 12.5395 10.6009Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between form-row">
              <div className="col-6">
                <div className="bbox bbox--default pointer ">
                  <div className="bbox__title">Last Free Days</div>
                  <div className="bbox__number">77</div>
                </div>
              </div>
              <div className="col-6">
                <div className="bbox bbox--default pointer ">
                  <div className="bbox__title">Pickup Appts</div>
                  <div className="bbox__number">91</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl col-md-3 col-sm-6 col-6 my-2">
          <div className="ncard d-flex flex-column justify-content-between " href="">
            <div className="d-flex align-items-center mb-10 pointer sbox--wrapper">
              <div className="mr-1 sbox sbox--default ">85</div>
              <div className="font-medium">Deliveries Scheduled</div>
              <div className="ml-auto">
                <svg
                  className="cicon undefined"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.5395 10.6009L9.18574 14L8 12.7982L10.7609 10L8 7.20177L9.18574 6L12.5395 9.39912C12.867 9.73097 12.867 10.269 12.5395 10.6009Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between form-row">
              <div className="col-6">
                <div className="bbox bbox--default pointer  ">
                  <div className="bbox__title">In Port</div>
                  <div className="bbox__number">84</div>
                </div>
              </div>
              <div className="col-6">
                <div className="bbox bbox--default pointer ">
                  <div className="bbox__title">In Yard</div>
                  <div className="bbox__number">1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl col-md-3 col-sm-6 col-6 my-2">
          <div className="ncard d-flex flex-column justify-content-between " href="">
            <div className="d-flex align-items-center mb-10 pointer sbox--wrapper">
              <div className="mr-1 sbox sbox--default ">61</div>
              <div className="font-medium">Containers to Return</div>
              <div className="ml-auto">
                <svg
                  className="cicon undefined"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.5395 10.6009L9.18574 14L8 12.7982L10.7609 10L8 7.20177L9.18574 6L12.5395 9.39912C12.867 9.73097 12.867 10.269 12.5395 10.6009Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between form-row">
              <div className="col-6">
                <div className="bbox bbox--default pointer  ">
                  <div className="bbox__title">Ready to Return</div>
                  <div className="bbox__number">24</div>
                </div>
              </div>
              <div className="col-6">
                <div className="bbox bbox--default pointer ">
                  <div className="bbox__title">Not Ready</div>
                  <div className="bbox__number">37</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl col-md-3 col-sm-6 col-6 my-2">
          <div className="ncard d-flex flex-column justify-content-between " href="">
            <div className="d-flex align-items-center mb-10 pointer sbox--wrapper">
              <div className="mr-1 sbox sbox--default ">75</div>
              <div className="font-medium">Dropped</div>
              <div className="ml-auto">
                <svg
                  className="cicon undefined"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.5395 10.6009L9.18574 14L8 12.7982L10.7609 10L8 7.20177L9.18574 6L12.5395 9.39912C12.867 9.73097 12.867 10.269 12.5395 10.6009Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between form-row">
              <div className="col-6">
                <div className="bbox bbox--default pointer  ">
                  <div className="bbox__title">In Yard</div>
                  <div className="bbox__number">22</div>
                </div>
              </div>
              <div className="col-6">
                <div className="bbox bbox--default pointer  ">
                  <div className="bbox__title">At Customer</div>
                  <div className="bbox__number">45</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl col-md-3 col-sm-6 col-6 my-2">
          <div className="ncard d-flex flex-column justify-content-between  " href="">
            <div className="bbox bbox--default pointer mb-1 d-flex flex-row justify-content-start align-items-center ">
              <div className="bbox__number mr-15">183</div>
              <div className="bbox__title bbox__title--lg">Dispatched</div>
            </div>
            <div className="bbox bbox--default pointer mb-1 d-flex flex-row justify-content-start align-items-center ">
              <div className="bbox__number mr-15">1</div>
              <div className="bbox__title bbox__title--lg">Completed Today</div>
            </div>
          </div>
        </div>
      </div>
      <div className="filter-row d-flex align-items-center">
        <div className="app-search header-search">
          <span className="search-icon"></span>
          <div className="position-relative">
            <input
              type="search"
              className="form-control input-search-left"
              placeholder="Search the Board..."
              value=""
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="form-check form-check--gray pr-30">
            <input className="form-check-input" type="checkbox" id="Available1" />
            <label className="form-check-label" for="Available1">
              Available<span className="badge badge-gray-100 font-12 ml-2 badge-pill">289</span>
            </label>
          </div>
          <div className="form-check form-check--gray pr-30">
            <input className="form-check-input" type="checkbox" id="Pending1" />
            <label className="form-check-label" for="Pending1">
              Pending<span className="badge badge-gray-100 font-12 ml-2 badge-pill">912</span>
            </label>
          </div>
        </div>
        <div className="ml-auto d-flex">
          <button className="btn btn-outline-light mr-2">
            <svg
              className="cicon mr-2"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17 4H3L8.6 10.622V15.2L11.4 16.6V10.622L17 4Z" fill="currentColor"></path>
            </svg>
            Filter
          </button>
          <div className="position-relative">
            <button className="btn btn-outline-light position-relative">
              <svg
                className="cicon undefined"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 3V17M10 3H15.4444C15.857 3 16.2527 3.16389 16.5444 3.45561C16.8361 3.74733 17 4.143 17 4.55556V15.4444C17 15.857 16.8361 16.2527 16.5444 16.5444C16.2527 16.8361 15.857 17 15.4444 17H10V3ZM10 3H4.55556C4.143 3 3.74733 3.16389 3.45561 3.45561C3.16389 3.74733 3 4.143 3 4.55556V15.4444C3 15.857 3.16389 16.2527 3.45561 16.5444C3.74733 16.8361 4.143 17 4.55556 17H10V3Z"
                  stroke="currentColor"
                  stroke-width="1.33"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPage;
