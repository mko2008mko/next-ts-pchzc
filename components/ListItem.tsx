import * as React from 'react'
import {DataObject} from "./List";

export interface IProps {
    data: DataObject
}

const ListItem: React.FunctionComponent<IProps> = ({ data }) => (
  <React.Fragment>{data.id}:{data.name}</React.Fragment>
);

export default ListItem;