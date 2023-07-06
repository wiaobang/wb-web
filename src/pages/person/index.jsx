import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space ,List} from 'antd';

const personContent = () =>
{
return(
    <div>
        {/* <Avatar size={64} icon={<UserOutlined />} /> */}
        <List.Item>
            <List.Item.Meta title='个人简介' description='个人简介描述个人简介描述个人简介描述个人简介描述个人简介描述'/>
        </List.Item>
        <List.Item>
            <List.Item.Meta title='个性签名' description='个性签名个性签名个性签名个性签名个性签名个性签名'/>
        </List.Item>
       
    </div>
)
}

export default personContent;