const timeline3 = `<div className="timeline-3">
<div className="main-timeline">
  <div className="timeline">
    <div className="timeline-content">
      <span className="timeline-year">2018</span>
      <div className="timeline-icon">
        <i className="fa fa-rocket" aria-hidden="true"></i>
      </div>
      <div className="content">
        <h3 className="title">Web Development</h3>
        <p className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
      </div>
    </div>
  </div>
  
  <div className="timeline">
    <div className="timeline-content">
      <span className="timeline-year">2017</span>
      <div className="timeline-icon">
        <i className="fa fa-edit" aria-hidden="true"></i>
      </div>
      <div className="content">
        <h3 className="title">Creapure</h3>
        <p className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
      </div>
    </div>
  </div>

</div>
</div>`;

const css = `/* Timeline sample 3*/
.timeline-3 {padding: 40px 0;}
.timeline-3 .main-timeline {
  font-family: tahoma;padding: 20px 0;position: relative;
}

.timeline-3 .main-timeline::before,
.timeline-3 .main-timeline::after {
  content: "";
  height: 40px;
  width: 40px;
  background-color: #e7e7e7;
  border-radius: 50%;
  border: 10px solid #303334;
  transform: translatex(-50%);
  position: absolute;
  left: 50%;
  top: -15px;
  z-index: 2;
}

.timeline-3 .main-timeline::after {
  top: auto;
  bottom: 15px;
}

.timeline-3 .main-timeline .timeline {
  padding: 35px 0;
  margin-top: -30px;
  position: relative;
  z-index: 1;
}

.timeline-3 .main-timeline .timeline::before,
.timeline-3 .main-timeline .timeline::after {
  content: "";
  height: 100%;
  width: 50%;
  border-radius: 110px 0 0 110px;
  border: 15px solid #46b2bc;
  border-right: none;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}

.timeline-3 .main-timeline .timeline::after {
  height: calc(100% - 30px);
  width: calc(50% - 12px);
  border-color: #65c7d0;
  left: 12px;
  top: 15px;
}

.timeline-3 .main-timeline .timeline-content {
  display: inline-block;
}

.timeline-3 .main-timeline .timeline-content:hover {
  text-decoration: none;
}

.timeline-3 .main-timeline .timeline-year {
  color: #65c7d0;
  font-size: 50px;
  font-weight: 600;
  display: inline-block;
  transform: translatey(-50%);
  position: absolute;
  top: 50%;
  left: 10%;
}

.timeline-3 .main-timeline .timeline-icon {
    color: #65c7d0;
    font-size: 70px;
    display: inline-block;
    transform: translateY(-50%);
    position: absolute;
    left: 34%;
    top: 50%;
}

.timeline-3 .main-timeline .content {
  color: #909090;
  width: 50%;
  padding: 20px;
  display: inline-block;
  float: right;
}

.timeline-3 .main-timeline .title {
  color: #65c7d0;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0 0 5px 0;
}

.timeline-3 .main-timeline .description {
  font-size: 16px;
  margin: 0;
}

.timeline-3 .main-timeline .timeline:nth-child(even)::before {
  left: auto;
  right: 0;
  border-radius: 0 110px 110px 0;
  border: 15px solid red;
  border-left: none;
}

.timeline-3 .main-timeline .timeline:nth-child(even)::after {
  left: auto;
  right: 12px;
  border-radius: 0 100px 100px 0;
  border: 15px solid green;
  border-left: none;
}

.timeline-3 .main-timeline .timeline:nth-child(even) .content {
  float: left;
}

.timeline-3 .main-timeline .timeline:nth-child(even) .timeline-year {
    left: auto;
    right: 10%;
}

.timeline-3 .main-timeline .timeline:nth-child(even) .timeline-icon {
  left: auto;
  right: 32%;
}

.timeline-3 .main-timeline .timeline:nth-child(5n+1)::before {
  border-color: #46b2bc;
}

.timeline-3 .main-timeline .timeline:nth-child(5n+1)::after {
  border-color: #65c7d0;
}

.timeline-3 .main-timeline .timeline:nth-child(5n+1) .timeline-icon {
  color: #65c7d0;
}

.timeline-3 .main-timeline .timeline:nth-child(5n+1) .timeline-year {
  color: #65c7d0;
}

.timeline-3 .main-timeline .timeline:nth-child(5n+1) .title {
  color: #65c7d0;
}

.timeline-3 .main-timeline .timeline:nth-child(5n+2)::before {
  border-color: #ea3c14;
}

.timeline-3 .main-timeline .timeline:nth-child(5n+2)::after {
  border-color: #EF5720;
}

.timeline-3 .main-timeline .timeline:nth-child(5n+2) .timeline-icon {
  color: #EA3C14;
}

.timeline-3 .main-timeline .timeline:nth-child(5n+2) .timeline-year {
  color: #EA3C14;
}

.timeline-3 .main-timeline .timeline:nth-child(5n+2) .title {
  color: #EA3C14;
}

.timeline-3 .main-timeline .timeline:nth-child(5n+3)::before {
  border-color: #8CC63E;
}

.timeline-3 .main-timeline .timeline:nth-child(5n+3)::after {
  border-color: #6CAF29;
}

.timeline-3 .main-timeline .timeline:nth-child(5n+3) .timeline-icon
{
  color: #8CC63E;
}

.timeline-3 .main-timeline .timeline:nth-child(5n+3) .timeline-year {
  color: #8CC63E;
}

.timeline-3 .main-timeline .timeline:nth-child(5n+3) .title {
  color: #8CC63E;
}

.timeline-3 .main-timeline .timeline:nth-child(5n+4)::before {
  border-color: #F99324;
}

.timeline-3 .main-timeline .timeline:nth-child(5n+4)::after {
  border-color: #FBB03B;
}

.timeline-3 .main-timeline .timeline:nth-child(5n+4) .timeline-icon {
  color: #F99324;
}

.timeline-3 .main-timeline .timeline:nth-child(5n+4) .timeline-year {
  color: #F99324;
}

.timeline-3 .main-timeline .timeline:nth-child(5n+4) .title {
  color: #F99324;
}

.timeline-3 .main-timeline .timeline:nth-child(5n+5)::before {
  border-color: #0071BD;
}

.timeline-3 .main-timeline .timeline:nth-child(5n+5)::after {
  border-color: #0050A3;
}

.timeline-3 .main-timeline .timeline:nth-child(5n+5) .timeline-icon {
  color: #0071BD;
}

.timeline-3 .main-timeline .timeline:nth-child(5n+5) .timeline-year {
  color: #0071BD;
}

.timeline-3 .main-timeline .timeline:nth-child(5n+5) .title {
  color: #0071BD;
}


@media screen and (max-width:1200px){
    .timeline-3 .main-timeline .timeline:after{ border-radius: 88px 0 0 88px; }
    .timeline-3 .main-timeline .timeline:nth-child(even):after{ border-radius: 0 88px 88px 0; }
}
@media screen and (max-width:767px){
    .timeline-3 .main-timeline .timeline{ margin-top: -19px; }
    .timeline-3 .main-timeline .timeline:before {
        border-radius: 50px 0 0 50px;
        border-width: 10px;
    }
    .timeline-3 .main-timeline .timeline:after {
        height: calc(100% - 18px);
        width: calc(50% - 9px);
        border-radius: 43px 0 0 43px;
        border-width:10px;
        top: 9px;
        left: 9px;
    }
    .timeline-3 .main-timeline .timeline:nth-child(even):before {
        border-radius: 0 50px 50px 0;
        border-width: 10px;
    }
    .timeline-3 .main-timeline .timeline:nth-child(even):after {
        height: calc(100% - 18px);
        width: calc(50% - 9px);
        border-radius: 0 43px 43px 0;
        border-width: 10px;
        top: 9px;
        right: 9px;
    }
    .timeline-3 .main-timeline .timeline-icon{ font-size: 60px; }
    .timeline-3 .main-timeline .timeline-year{ font-size: 40px; }

}
@media screen and (max-width:479px){
    .timeline-3 .main-timeline .timeline-icon{
        font-size: 50px;
        transform:translateY(0);
        top: 25%;
        left: 10%;
    }
    .timeline-3 .main-timeline .timeline-year{
        font-size: 25px;
        transform:translateY(0);
        top: 65%;
        left: 9%;
    }
    .timeline-3 .main-timeline .content{
        width: 68%;
        padding: 10px;
    }
    .timeline-3 .main-timeline .title{ font-size: 18px; }
    .timeline-3 .main-timeline .timeline:nth-child(even) .timeline-icon{
        right: 10%;
    }
    .timeline-3 .main-timeline .timeline:nth-child(even) .timeline-year{
        right: 9%;
    }
}
`;