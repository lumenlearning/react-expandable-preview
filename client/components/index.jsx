import React            from 'react';

import {Expandable, Item, Preview}       from '../../lib/Index.js';


export default class Index extends React.Component{
    constructor(props, state){
        super(props, state);

        this.state = {};
    }

    render(){

        return(
            <div style={{width:"100%"}} >
                <Expandable colWidth={4}>
                    <Item
                        previewComponent={
                            <Preview title="The Role of Business">

                                    <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius itaque minima perferendis ratione. Aut beatae ea recusandae similique tempore vero voluptates? Assumenda autem dolore nesciunt quas similique ut voluptatem voluptatum?</span><span>A amet asperiores debitis dolorem harum hic id illo inventore labore minus, molestiae neque nulla, praesentium qui quo recusandae suscipit. Ad deleniti ducimus ipsum odit officiis placeat porro quam ut.</span><span>A adipisci, architecto blanditiis consequatur consequuntur deserunt doloremque eos et hic illum impedit incidunt ipsum itaque laborum minus nihil quae ratione recusandae reprehenderit rerum tenetur ullam unde, velit veniam voluptates.</span><span>A accusantium aspernatur aut cum, ea eius ex facilis laborum maiores quae recusandae repellendus, tenetur? Atque beatae iure ullam? Autem illo inventore ipsum minus obcaecati quae quasi quidem reiciendis ut.</span><span>Architecto autem laudantium velit. Autem dolorem doloremque eligendi est eum illum impedit incidunt ipsam magni placeat provident quas quos reiciendis sapiente vero voluptas, voluptate! Architecto dolor magnam molestias mollitia quas!</span><span>Asperiores consequuntur dolor error eum ipsa nam non perferendis, rerum. Aperiam assumenda consequuntur cumque eaque earum eligendi facere hic iste libero natus nesciunt obcaecati placeat possimus, sequi sunt voluptas voluptatem.</span><span>Commodi facere perspiciatis sequi? Aliquam amet commodi dolor est explicabo fugiat impedit ipsam laudantium nulla, omnis porro possimus quia recusandae saepe soluta totam ullam, velit. Asperiores maxime molestias nemo voluptatum?</span><span>Accusamus adipisci, aliquam aliquid animi cumque dicta dolor dolores, doloribus id ipsam magni placeat quaerat quam quas reiciendis totam ullam ut? Cumque eius fuga fugiat modi non placeat tempora ullam!</span><span>Accusamus ad aliquid beatae blanditiis corporis cum debitis distinctio doloribus eum explicabo, inventore magni modi, molestias nam nesciunt nisi perspiciatis possimus quaerat quibusdam quo quod repudiandae ullam unde vel vero.</span><span>Amet dolorem ducimus eius enim eos, esse, ex expedita fugit ipsam libero modi molestias nemo neque numquam omnis perferendis quam quas quo reiciendis sequi similique sint soluta, totam vero voluptate!</span><span>Error, modi, nostrum! Aperiam architecto ea esse illo neque odit omnis reprehenderit voluptas. Animi architecto delectus dicta fugiat iste optio quaerat reiciendis repellendus unde voluptates? Aliquam ducimus mollitia repellat unde.</span><span>A at fugit necessitatibus optio placeat quae quia saepe sit voluptas voluptatem? Accusantium atque corporis cum cupiditate deserunt esse, facere incidunt laboriosam, non numquam optio provident sequi temporibus vitae, voluptas!</span><span>Ab autem commodi cupiditate delectus ea eligendi error est eum in ipsam, maiores molestiae nihil obcaecati odit, placeat porro possimus quidem sapiente sed tempore tenetur ullam ut veritatis voluptates voluptatibus?</span><span>At deleniti porro quis. Aliquid, esse, ullam? Ab aliquam aperiam beatae commodi cum cumque error eum, excepturi incidunt libero neque nisi, officiis omnis praesentium quaerat quis repellendus veritatis vitae voluptate!</span><span>Corporis earum molestiae quas voluptates! Ab architecto blanditiis consectetur delectus dolor earum ipsa, maiores optio quidem rem repellendus, reprehenderit, saepe unde voluptates voluptatum? Accusantium aliquid consequuntur nihil quod veritatis, voluptas.</span><span>Ab accusantium animi aperiam assumenda atque beatae consectetur, consequatur cumque cupiditate deserunt dignissimos dolorum ducimus exercitationem facilis magnam maiores minima pariatur placeat quas qui quia quibusdam quos rem veniam veritatis!</span><span>Minima quas, quos? Laborum necessitatibus nisi, obcaecati officia omnis repudiandae voluptatum? A adipisci assumenda aut delectus ex fugiat illum, in iste itaque laborum minima officiis possimus quas quos repudiandae, tenetur?</span><span>Alias aliquid, beatae blanditiis dolor eaque error exercitationem expedita ipsa iure labore maxime, mollitia nihil nisi quis quo quod, sapiente totam voluptatum! Aliquid deleniti dolorem ipsa magni officiis recusandae repudiandae.</span><span>Aperiam magni natus sequi. Adipisci amet cum dolorem dolores excepturi explicabo facilis ipsum magnam molestiae perspiciatis quas quibusdam quisquam, reiciendis rerum, saepe sapiente temporibus totam ullam unde voluptas. A, aut.</span><span>A accusamus accusantium aliquam asperiores consequuntur deserunt dolorum, ducimus eos, ex ipsa laboriosam minima modi mollitia nemo optio praesentium quae quia quis rem voluptate. Facilis ipsa ipsam saepe sapiente similique!</span><span>Amet dignissimos enim eos ipsa. Accusantium at impedit nesciunt nobis porro ratione sequi veritatis? Cum cumque ea illum molestiae nobis nostrum placeat quibusdam? Asperiores deserunt dolore hic odio! Repellendus, totam.</span><span>Ab adipisci dignissimos dolor eaque eligendi et fugit, harum hic in ipsam, nobis nostrum numquam quibusdam quis recusandae sequi, vero voluptatum. Accusantium debitis distinctio dolorum impedit, incidunt praesentium quia vitae.</span><span>Atque deleniti fugiat nostrum sapiente ullam? Accusamus adipisci, aliquam animi consequuntur dolorum, ducimus enim nemo neque nesciunt, porro temporibus ut veniam voluptas? Animi consequuntur fuga, perferendis placeat quos sapiente voluptatem?</span><span>Accusantium dignissimos eaque, facere ipsam iure recusandae veritatis? At, modi, placeat. Aliquid architecto assumenda consectetur debitis dicta dolor eaque est, eveniet excepturi expedita harum laboriosam quo, quos, temporibus tenetur ullam?</span><span>Dolor dolores ea eum illo impedit inventore iusto, laborum laudantium nostrum praesentium provident quaerat quasi quibusdam quo rem tempora vero. Expedita nesciunt odio possimus quis vel. Aut mollitia reprehenderit repudiandae.</span><span>Accusantium aperiam dolorem earum eius harum hic itaque molestiae, nisi officia porro provident quisquam quo ratione sit sunt tempora tempore temporibus velit? Assumenda consectetur esse facere laboriosam laborum nesciunt ratione!</span><span>Accusamus, aliquam aliquid, animi aut deleniti dicta distinctio dolor ducimus esse et eveniet harum incidunt ipsum iusto optio perspiciatis provident quae, quam qui quibusdam quod quos recusandae. Facere, sed velit.</span><span>Consequuntur doloribus esse facere ipsa labore libero modi officia quibusdam quod recusandae reiciendis, sed similique sint! Assumenda beatae cumque cupiditate esse nemo perspiciatis quibusdam quos rem, sunt tenetur veritatis voluptatibus.</span><span>Cumque itaque labore quasi tempore vero? A, beatae deserunt doloremque eveniet facilis id illum in iure laborum magnam, maiores maxime nemo placeat sapiente tenetur? Ab asperiores delectus incidunt magnam qui.</span><span>Aspernatur, corporis fugit illum ipsam numquam soluta? A ab architecto eum fugiat nam, numquam officia ullam voluptate voluptatibus? Blanditiis deleniti dignissimos distinctio eligendi error fugiat illo nihil, quo sit voluptate!</span></p>
                            </Preview>
                        }
                    >
                        <img src="https://placekitten.com/300/201" alt=""/>
                    </Item>

                    <Item
                        previewComponent={
                            <Preview title="Why is Business content so boring?">
                                <div className="small-6 columns">
                                    <img src="https://placekitten.com/300/201" alt=""/>
                                </div>
                                <div className="small-6 columns">
                                    <p>MORE Placeholder Text Goes here to describe some arbitrary image or content or what ever we want.</p>
                                </div>
                            </Preview>
                        }
                        >
                        <img src="https://placekitten.com/300/201" alt=""/>
                    </Item>

                    <Item
                        previewComponent={
                            <Preview title="Component of the night">
                                <div className="small-6 columns">
                                    <img src="https://placekitten.com/300/201" alt=""/>
                                </div>
                                <div className="small-6 columns">
                                    <p>Whats going on here!? Where am I? Am I expanded or not!? Everything is so dark I can't tell.... aww thats a cute kitten</p>
                                </div>
                            </Preview>
                        }
                        >
                        <img src="https://placekitten.com/300/201" alt=""/>
                    </Item>

                    <Item
                        previewComponent={
                            <Preview title="Business Ethics: Good or Bad?">
                                <div className="small-6 columns">
                                    <img src="https://placekitten.com/300/201" alt=""/>
                                </div>
                                <div className="small-6 columns">
                                    <p>Placeholder Text Goes here to describe some arbitrary image or content or what ever we want.</p>
                                </div>
                            </Preview>
                        }
                        >
                        <img src="https://placekitten.com/300/201" alt=""/>
                    </Item>

                    <Item
                        previewComponent={
                            <Preview title="Business Analytics: BI or BS?">
                                <div className="small-6 columns">
                                    <img src="https://placekitten.com/300/201" alt=""/>
                                </div>
                                <div className="small-6 columns">
                                    <p>MORE Placeholder Text Goes here to describe some arbitrary image or content or what ever we want.</p>
                                </div>
                            </Preview>
                        }
                        >
                        <img src="https://placekitten.com/300/201" alt=""/>
                    </Item>

                    <Item
                        previewComponent={
                            <Preview title="Component of the twilight">
                                <div className="small-6 columns">
                                    <img src="https://placekitten.com/300/201" alt=""/>
                                </div>
                                <div className="small-6 columns">
                                    <p>Whats going on here!? Where am I? Am I expanded or not!? Everything is so dark I can't tell.... aww thats a cute kitten</p>
                                </div>
                            </Preview>
                        }
                        >
                        <img src="https://placekitten.com/300/201" alt=""/>
                    </Item>

                    <Item
                        previewComponent={
                            <Preview title="90's music: Great or Greatest">
                                <div className="small-6 columns">
                                    <img src="https://placekitten.com/300/201" alt=""/>
                                </div>
                                <div className="small-6 columns">
                                    <p>Placeholder Text Goes here to describe some arbitrary image or content or what ever we want.</p>
                                </div>
                            </Preview>
                        }
                        >
                        <img src="https://placekitten.com/300/201" alt=""/>
                    </Item>

                    <Item
                        previewComponent={
                            <Preview title="I'm just a poor Dillon">
                                <div className="small-6 columns">
                                    <img src="https://placekitten.com/300/201" alt=""/>
                                </div>
                                <div className="small-6 columns">
                                    <p>From a poor Dillony. He's just a poor bryan, from a poor bryanily.</p>
                                </div>
                            </Preview>
                        }
                        >
                        <img src="https://placekitten.com/300/201" alt=""/>
                    </Item>

                </Expandable>
            </div>
        )
    }
}