import React, { Component } from 'react';
import { Row, Button, Modal, Form } from 'react-bootstrap';

class IndexComponent extends Component {
	constructor(props) {
		super(props);
		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleChangeOD = this.handleChangeOD.bind(this);
		this.handleChangeVC = this.handleChangeVC.bind(this);
		this.state = {
			show: false,
			checkboxCheckedOD: false,
			checkboxCheckedVC: false,
			modalData: {}
		};
	}
	handleClose() {
		this.setState({ show: false });
	}
	handleShow(index) {
		this.setState({
			show: true,
			modalData: {
				roomNo: this.props.rawData[index].roomNo,
				roomService: this.props.rawData[index].roomService
			}
		});
	}
	handleChangeOD(evt) {
    this.setState({
			checkboxCheckedOD: evt.target.checked,
		});
	}
	handleChangeVC(evt) {
    this.setState({
			checkboxCheckedVC: evt.target.checked,
		});
	}

	render() {

		return (
			<div className="container">
				{/* <Row style={{justifyContent: "center"}}>
					<Form.Check
						label="OD"
						value="OD"
						type="checkbox"
						checked={this.state.checkboxCheckedOD}
						onChange={this.handleChangeOD}
						id="checkbox-1" />
					<Form.Check
						label="VC"
						value="VC"
						type="checkbox"
						checked={this.state.checkboxCheckedVC}
						onChange={this.handleChangeVC}
						id="checkbox-2" />
				</Row> */}
				<Row>
					{this.props.rawData.map((v, index) => {
				return	<div
								key={index}
								className="col-md-2">
								<div>
									<p>No. {v.roomNo}</p>
									<div className="content-button">
										<Button
											type="button"
											className={(v.roomService === 'OD' ? 'btn-success' : 'btn-secondary')}
											style={{width: "50px", height: "40px", border: "1px solid #0000"}}
											onClick={() => this.handleShow(index)}>
										</Button>
									</div>
								</div>
							</div>
					})}
				</Row>
				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Room {this.state.modalData.roomNo}</Modal.Title>
					</Modal.Header>
					<Modal.Body>Detail Room Status</Modal.Body>
					<Modal.Body>{this.state.modalData.roomService}</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.handleClose}>
							Close
            </Button>
					</Modal.Footer>
				</Modal>
		</div>
		)
	}
}

export default IndexComponent