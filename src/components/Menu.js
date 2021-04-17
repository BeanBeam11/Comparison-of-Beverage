import {Select} from 'antd'
import MenuItem from './MenuItem';
import { Table } from 'antd';
const {Option} =Select;
function handleChange(value) {
  
  }
const columns = [
  { title: '品項', dataIndex: 'name', key: 'name' },
  { title: '價格', dataIndex: 'age', key: 'age' },
  {
    title: '加入比較',
    dataIndex: '',
    key: 'x',
    render: () => <a>Delete</a>,
  },
  ];

  export default function Menu(menu){
    
    return(
      <>
          <Select
            className="comparison-select"
            labelInValue
            defaultValue={{ value: 'milkshop' }}
            style={{ width: 250 }}
            onChange={handleChange}
          >
          <MenuItem to="/kebueke" value="kebuke" className="menu-item" activeClassName="menu-item--active">
            可不可熟成紅茶
          </MenuItem>
          <MenuItem to="/50lan" value="50lan" className="menu-item" activeClassName="menu-item--active">
            五十嵐
          </MenuItem>
            <Option value="macu">麻古茶坊</Option>
            <Option value="milkshop">迷客夏</Option>
            <Option value="Ching-Shin">清心福全</Option>
          </Select>
          <div className="menu-list">
          <Table
            columns={columns}
            expandable={{
              expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
              rowExpandable: record => record.name !== 'Not Expandable',
            }}
            dataSource={menu}
          />,
          </div>
      </>
    );
}
 