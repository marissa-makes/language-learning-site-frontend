import { gql } from '@apollo/client';
import { default as cx } from 'classnames';
import React from 'react';

export default function LanguageCard({ attributes }) {
	const { nativeWord, translatedWord, cssClassName } = attributes;

	const classes = cx(['language-card-container', cssClassName]);

	return (
		<div className={classes}>
			<span className="language-card__translated-word">{translatedWord}</span>
			<span className="language-card__native-word">{nativeWord}</span>
		</div>
	);
}

LanguageCard.displayName = 'LanguageLearningLanguageCard';

LanguageCard.fragments = {
	key: `LanguageCardFragment`,
	entry: gql`
		fragment LanguageCardFragment on LanguageLearningLanguageCard {
			attributes {
				nativeWord,
				translatedWord,
				className
			}
		}
  `,
};
