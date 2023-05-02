export const Contact = () => {
    const formInitialDetails ={
        Nome: '',
        email: '',
        telefone: '',
        messagem: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) =>{
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch ("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type" : "Application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200){
            setStatus({success:true, message: 'Message sent successfully!'});
        } else{
            setStatus({success: false, message:'Something went wrong, please try again later.'});
        }
    };

    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-itens-center">
                    <Col size={12} md ={6}>
                <TrackVisibility>
                {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
                }
                </TrackVisibility>
                    </Col>
                    <Col size={12} md ={6}>
                <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <h2>Contact</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="text" value={formDetails.nome} placeholder="Nome" onChange={(e) => onFormUpdate('Nome', e.target.value)}/>
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="E-mail" onChange={(e) => onFormUpdate('email', e.target.value)}/>
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="tel" value={formDetails.telephone} placeholder="Telefone" onChange={(e) => onFormUpdate('telefone', e.target.value)}/>
                                </Col>
                                <Col size={12} className="px-1">
                                <textarea row="6" value={formDetails.messagem} placeholder="Messagem" onChange={(e) => onFormUpdate('messagem', e.target.value)}></textarea>
                                <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </div>}
                </TrackVisibility>
            </Col>
        </Row>
    </Container>
</section>
)
}