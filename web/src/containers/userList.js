import React from 'react'
import { connect } from 'react-redux'
import Table from '../components/Table';
import Button from '../components/Button';
import Modal from '../components/Modal';
import Container from '../components/Container';
import './styles.css';

const mapStateToProps = dispatch => ({
    getAllUserList: dispatch[0],
});


class UserList extends React.PureComponent {

    state = { open: false }

    show = dimmer => () => this.setState({ dimmer, open: true })

    close = () => this.setState({ open: false })

    render() {
        const { open, size, dimmer } = this.state;
        const tableCells = this.props.getAllUserList.map((item, i) => {
            return (
                <Table.Row>
                    <Table.Cell>{item.first}</Table.Cell>
                    <Table.Cell>{item.last}</Table.Cell>
                    <Table.Cell>
                        <Button onClick={this.show('blurring')}>Show More</Button>
                    </Table.Cell>
                </Table.Row>
            );
        })
        return (
            <Container>
                <Table singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>First Name</Table.HeaderCell>
                            <Table.HeaderCell>Last Name</Table.HeaderCell>
                            <Table.HeaderCell>Details</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {tableCells}
                    </Table.Body>
                    <Modal dimmer={dimmer} size={size} open={open} onClose={this.close}>
                        <Modal.Header>User Details</Modal.Header>
                        <Modal.Content>
                            <Table singleLine>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>First Name</Table.HeaderCell>
                                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                                        <Table.HeaderCell>Age</Table.HeaderCell>
                                        <Table.HeaderCell>Location</Table.HeaderCell>
                                        <Table.HeaderCell>Desc</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Cell>sides</Table.Cell>
                                    <Table.Cell>sdsd</Table.Cell>
                                    <Table.Cell>xcxc</Table.Cell>
                                    <Table.Cell>sds</Table.Cell>
                                    <Table.Cell>sdsd</Table.Cell>
                                </Table.Body>
                            </Table>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button color='blue' onClick={this.close}>
                                close
                            </Button>
                        </Modal.Actions>
                    </Modal>
                </Table>
            </Container>
        );
    }
}

export default connect(mapStateToProps)(UserList);
