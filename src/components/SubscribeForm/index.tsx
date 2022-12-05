const SubscribeForm = () => {
    let onSubscribeButtonClick = (): void => {

    }
    
    return (
        <div className='subscribe-form'>
            <div className='subscribe-form-text'>
                <h2 className='subscribe-form-title'>Subscribe to newsletter</h2>
                <div className='subscribe-form-description'>Be the first to know about new IT books, upcoming releases, exclusive offers and more.</div>
                <div className='subscribe-form-control'>
                    <input type='text' className='input subscribe-form-input' placeholder='Your email' />
                    <button onClick={onSubscribeButtonClick} className='subscribe-form-button'>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    )
}

export default SubscribeForm;