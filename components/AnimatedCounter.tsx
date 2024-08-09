'use client';

import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full text-center">
      <CountUp
      duration={1.5}
      decimals={2}
      prefix="$"
      end={amount} />
    </div>
  );
};

export default AnimatedCounter;
