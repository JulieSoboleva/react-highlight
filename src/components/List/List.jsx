import Video from '../Video/Video'
import Article from '../Article/Article'
import { withWrapper } from '../HOC/withWrapper'

const WithWrapperVideo = withWrapper(Video);
const WithWrapperArticle = withWrapper(Article);

export default function List(props) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <WithWrapperVideo key={item.id} {...item} />
                );

            case 'article':
                return (
                    <WithWrapperArticle key={item.id} {...item} />
                );
        }
    });
};