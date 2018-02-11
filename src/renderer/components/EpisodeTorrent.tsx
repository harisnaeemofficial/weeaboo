import _ from "lodash";
import * as React from "react";
import { Button, Header, Icon, Image, Modal, Table, Menu } from "semantic-ui-react";
import axios, { AxiosRequestConfig } from "axios";

export class EpisodeTorrent extends React.Component<any, any> {

    public constructor() {
        super({});
        this.state = { torrents: [] };
    }

    public componentDidMount() {
        const config: AxiosRequestConfig = {
            baseURL: "http://localhost:8080",
            method: "GET",
            params: {
                q: this.props.animeTitle + " " + this.props.episodeNumber,
            },
            url: "/search_torrents",
        };
        axios.request(config).then((res: any) => {
            this.setState({torrents: res.data});
        });
    }

    public render() {
        return (
            <Modal open={true}>
                <Modal.Header>
                    {this.props.animeTitle} Episode {this.props.episodeNumber}
                    <div
                        style={{ float: "right", cursor: "pointer" }}
                        onClick={this.props.handleClick}
                    >
                        X
                    </div>
                </Modal.Header>
                <Modal.Content scrolling>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Seeders</Table.HeaderCell>
                                <Table.HeaderCell>Size</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {
                                this.state.torrents.map((torrent: any) => {
                                    return (
                                        <Table.Row>
                                            <Table.Cell>{torrent.title}</Table.Cell>
                                            <Table.Cell>{torrent.seeders}</Table.Cell>
                                            <Table.Cell>{torrent.size}</Table.Cell>
                                        </Table.Row>
                                    );
                                })
                            }
                        </Table.Body>

                        <Table.Footer>
                            <Table.Row>
                                <Table.HeaderCell colSpan="3">
                                    <Menu floated="right" pagination>
                                        <Menu.Item as="a" icon>
                                            prev
                                        </Menu.Item>
                                        <Menu.Item as="a">1</Menu.Item>
                                        <Menu.Item as="a">2</Menu.Item>
                                        <Menu.Item as="a">3</Menu.Item>
                                        <Menu.Item as="a">4</Menu.Item>
                                        <Menu.Item as="a" icon>
                                            next
                                        </Menu.Item>
                                    </Menu>
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Footer>
                    </Table>
                </Modal.Content>
            </Modal>
        );
    }
}
