import React, { Component } from 'react';

class Sort extends Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown"><button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Sắp Xếp <span className="fa fa-caret-square-o-down ml-5"></span></button>
                    <ul className="dropdown-menu"
                        aria-labelledby="dropdownMenu1">
                        <li><a href="#name-asc" role="button" className=""><span className="fa fa-sort-alpha-asc pr-5">Tên A-Z</span></a></li>
                        <li><a href="#name-desc" role="button" className="sort_selected"><span className="fa fa-sort-alpha-desc pr-5">Tên Z-A</span></a></li>
                        <li role="separator" className="divider"></li>
                        <li><a href="#status-on" role="button" className="sort_selected"><span className="fa fa-long-arrow-down"></span> Hoạt động</a></li>
                        <li><a href="#status-off" role="button" className="sort_selected"><span className="fa fa-long-arrow-down"></span>Hoàn thành</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sort;