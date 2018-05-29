export default function () {
    return function (Wrapped) {
        return class HOC extends Component {
            render() {
                if (Wrapped.props) {

                }
                return (
                    <div>
                        <Wrapped></Wrapped>
                    </div>
                )
            }
        }
    }
}