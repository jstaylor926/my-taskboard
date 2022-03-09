import * as React from 'react';
import Link from 'next/link';
import { LinkCardType } from './ui-types';
import { LinkCardContainer, LinkHeader, LinkTitle, LinkDescription, LinkPath, LinkPathContainer } from './styles';


const LinkCard = ({ title, link, linkPath, description }: LinkCardType) => {
    return (
        <LinkCardContainer>
            <LinkHeader>
                <span>
                    <LinkTitle>{title}</LinkTitle>
                </span>
            </LinkHeader>
            <div className='linkContent'>
                <div className='description'>
                    {description}
                </div>
                <div className='link'>
                    <button>
                        <Link href={link}>
                            <a className='linkText'>
                                {linkPath}
                            </a>
                        </Link>
                    </button>
                </div>
            </div>
        </LinkCardContainer>
    )
}

export default LinkCard;