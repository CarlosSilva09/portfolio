import React, { JSXElementConstructor, PropsWithChildren, useEffect, useState } from "react";

interface Props {
  delay?: number;
  transitionDuration?: number;
  wrapperTag?: keyof JSX.IntrinsicElements | JSXElementConstructor<any>;
  childTag?: keyof JSX.IntrinsicElements | JSXElementConstructor<any>;
  className?: string;
  childClassName?: string;
  visible?: boolean;
  onComplete?: () => any;
}

export default function FadeIn(props: PropsWithChildren<Props>) {
  // Desestruturação das props para melhor legibilidade
  const {
    delay = 50,
    transitionDuration = 400,
    wrapperTag: WrapperTag = "div",
    childTag: ChildTag = "div",
    className,
    childClassName,
    visible = true,
    onComplete,
    children
  } = props;

  const [maxIsVisible, setMaxIsVisible] = useState(0);

  useEffect(() => {
    let count = React.Children.count(children); // Contagem de filhos
    if (!visible) {
      count = 0; // Se não estiver visível, zera a contagem
    }

    // Se a contagem for igual ao máximo, finalize a animação
    if (count === maxIsVisible) {
      const timeout = setTimeout(() => {
        if (onComplete) onComplete();
      }, transitionDuration);
      return () => clearTimeout(timeout);
    }

    // Incrementa ou decrementa o valor de maxIsVisible
    const increment = count > maxIsVisible ? 1 : -1;
    const timeout = setTimeout(() => {
      setMaxIsVisible(maxIsVisible + increment);
    }, delay);
    return () => clearTimeout(timeout);
  }, [children, delay, maxIsVisible, visible, transitionDuration, onComplete]); // Dependências corrigidas

  console.log("Rendering FadeIn:", maxIsVisible);

  return (
    <WrapperTag className={className}>
      {React.Children.map(children, (child, i) => (
        <ChildTag
          className={childClassName}
          style={{
            transition: `opacity ${transitionDuration}ms, transform ${transitionDuration}ms`,
            transform: maxIsVisible > i ? "none" : "translateY(20px)",
            opacity: maxIsVisible > i ? 1 : 0,
          }}
        >
          {child}
        </ChildTag>
      ))}
    </WrapperTag>
  );
}
