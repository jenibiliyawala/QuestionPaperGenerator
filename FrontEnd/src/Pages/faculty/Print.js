import React, {Component} from 'react';
import Cookies from 'js-cookie';
import service_print from "../../services/faculty/print_service";

class Print extends Component{
    constructor(props)
    {
        super(props);
        this.state=
        {
            courseid:Cookies.get('courseid'),
            level:Cookies.get('level'),
            questions:[],
            count:"0",
            cnt:"1",
        };
    }

    componentDidMount(){
        if(sessionStorage.getItem("email")!=null){
            let count=0;
            while(Cookies.get("Mark"+count)!=null){
                const data={
                    courseid:this.state.courseid,
                    level:this.state.level,
                    mark:Cookies.get("Mark"+count),
                    questions:Cookies.get("NoOfQuestions"+count),
                }    
                service_print
                    .getQuestions(data)
                    .then((res) => {
                        this.setState({
                            questions:[...this.state.questions,res.data]
                        });
                    })
                count++;
            }
        } 
    }

    render(){
        var count=1;
        var cnt=1;
        return(
            <div>                
                <section className="invoice" id="QuestionPaper">
                    <div className="row">
                        <div className="col-9">
                            <h4>
                                Name:
                            </h4>
                        </div>
                        <div className="col-3">
                            <h4>
                                ID:
                            </h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 offset-5">
                            <h1 className="page-header">
                                DA-IICT
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <h3>{Cookies.get('duration')==""||Cookies.get('duration')==null?"":"Time : "}{Cookies.get('duration') }<br/>{Cookies.get('date')==""||Cookies.get('date')==null?"":"Date : "}{Cookies.get('date') }</h3>
                        </div>
                        <div className="col-6">
                            <h3 style={{textAlign:"right"}}>{Cookies.get('total')==null?"":"Total marks : "}{Cookies.get('total') }</h3>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-12">
                            <h3> {Cookies.get('otherinstruction')==""||Cookies.get('otherinstruction')==null?"":"Instructions : "}{Cookies.get('otherinstruction') } </h3>
                        </div>
                    </div>
                    {Cookies.get('otherinstruction')==""||Cookies.get('otherinstruction')==null?"":<hr/>}
                    {
                        this.state.questions.map(q => {
                            cnt=1;
                            return (
                                <div>
                                    <div className="row">
                                        <div className="col-11">
                                            <h4>Q.{count++} Answer the following questions. ({Cookies.get("Mark"+(count-2))} marks each)</h4>
                                        </div>
                                        <div className="col-1">
                                            <h4>({Cookies.get("Mark"+(count-2))*Cookies.get("NoOfQuestions"+(count-2))})</h4>
                                        </div>
                                        <div className="col-12">
                                        {
                                            q.map(el => {
                                                return (
                                                    <h5>{cnt++}. {el.Question}</h5>
                                                )
                                            })
                                        }
                                        </div>
                                    </div><br/>
                                </div>
                            ) 
                            count++;
                        })
                    }
                </section>
                <iframe id="ifmcontentstoprint" style={{height: "0px", width:"0px", position:"absolute"}}></iframe>
                <button id="btnPrint" onClick={() => window.print()} style={{display:"none"}}>PRINT</button>
            </div>
        )
    }
}

export default Print;